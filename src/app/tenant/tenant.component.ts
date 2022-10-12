import { Component, OnInit, TemplateRef } from '@angular/core';

import { NbDialogService } from '@nebular/theme';

// 使用公用服務 HttpService
import { HttpService } from '@core/services/http.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-tenant',
    templateUrl: './tenant.component.html',
    styleUrls: ['./tenant.component.scss'],
})
export class TenantComponent implements OnInit {
    constructor(private httpService: HttpService, private nbDialogService: NbDialogService, private fb: FormBuilder) {}

    host = 'http://localhost:3000';

    query = '';

    tenantList = [];

    queryTenantList: any[] = [];

    helloForm: any = null;

    addTenant = {
        fname: '',
        lname: '',
        phone: '',
        address: '',
    };

    clearDialog() {
        // 清空對話框資料
        this.addTenant.fname = '';
        this.addTenant.lname = '';
        this.addTenant.phone = '';
        this.addTenant.address = '';
    }

    async addItem(dialog: TemplateRef<any>) {
        this.clearDialog();

        this.nbDialogService
            .open(dialog, {
                context: {
                    type: 'add',
                    title: '新增租戶',
                },
            })
            .onClose.subscribe(async (dialogResp) => {
                if (dialogResp === 'ok') {
                    const result: any = {
                        first_name: this.addTenant.fname,
                        last_name: this.addTenant.lname,
                        phone: this.addTenant.phone,
                        address: this.addTenant.address,
                    };

                    // 調用新增租戶 API
                    await this.httpService.httpPOST(this.host + '/myapp-tenant-list', result);
                    this.queryTenantList.push(result);

                    this.clearDialog();
                }
            });
    }

    editItem(dialog: TemplateRef<any>, idx: number) {
        const url = this.host + '/myapp-tenant-list/' + (idx + 1);
        const targetObj = this.queryTenantList[idx];

        // 被選擇項目資料寫入對話框
        this.addTenant.fname = targetObj.first_name;
        this.addTenant.lname = targetObj.last_name;
        this.addTenant.phone = targetObj.phone;
        this.addTenant.address = targetObj.address;

        this.nbDialogService
            .open(dialog, {
                context: {
                    type: 'edit',
                    title: '編輯租戶',
                },
            })
            .onClose.subscribe(async (dialogResp) => {
                if (dialogResp === 'ok') {
                    const result: any = {
                        id: idx,
                        first_name: this.addTenant.fname,
                        last_name: this.addTenant.lname,
                        phone: this.addTenant.phone,
                        address: this.addTenant.address,
                    };

                    // 調用修改租戶 API
                    await this.httpService.httpPUT(url, result);
                    this.queryTenantList[idx] = result;
                } else if (dialogResp === 'delete') {
                    // 調用刪除租戶 API
                    await this.httpService.httpDelete(url);
                    this.queryTenantList.splice(idx, 1);
                }
            });
    }

    filterItem() {
        let result = [];
        if (!!this.query) {
            const tempList = this.tenantList;
            result = tempList.filter((item) => {
                const name = item['first_name'] + ' ' + item['last_name'];
                return !!~name.toLowerCase().indexOf(this.query.toLowerCase());
            });
        } else result = this.tenantList;

        this.queryTenantList = result;
    }

    async ngOnInit(): Promise<void> {
        const resp: any = await this.httpService.httpGET(this.host + '/myapp-tenant-list');
        const data: [] = resp;

        this.tenantList = data;
        this.queryTenantList = data;

        this.helloForm = new FormGroup({
            lname: new FormControl(this.addTenant.lname, [Validators.required, Validators.minLength(3)]),
        });
    }

    get lname() {
        return this.helloForm.get('lname');
    }
}
