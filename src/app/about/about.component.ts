import { Component, OnInit } from '@angular/core';

// 使用公用服務 HttpService
import { HttpService } from '@core/services/http.service';
@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    constructor(private httpService: HttpService) {}

    host = 'http://localhost:3000';

    lineOptions: any;

    barOptions: any;

    /**
     * ### 讀取假資料 `myapp-tenant-chart`
     *
     * @memberof AboutComponent
     */
    async getRawDataThenDraw() {
        // 假資料物件
        const resp = await this.httpService.httpGET(this.host + '/myapp-tenant-chart');

        // 房屋市場成長趨勢 - 折線圖
        this.drawLineChart(resp);

        // 房屋市場成長趨勢 - 柱狀圖
        this.drawBarChart(resp);
    }

    /**
     * ### 房屋市場成長趨勢 - [折線圖](https://echarts.apache.org/examples/zh/index.html#chart-type-line)
     *
     * @param {*} [rawDataObj={}]
     * @memberof AboutComponent
     */
    drawLineChart(rawDataObj: any = {}) {
        const xAxisData = [];
        const data1 = [];
        const data2 = [];

        for (let i = 0; i < 100; i++) {
            xAxisData.push('category' + i);
            data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
            data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
        }

        // 基本配置請參考 Apache ECharts 官網教學範例
        this.lineOptions = {
            title: {
                text: '房屋市場成長趨勢',
            },
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                data: ['豪宅市場', '出租需求', '買房需求', '賣房需求', '租屋需求'],
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            toolbox: {
                feature: {
                    saveAsImage: {},
                },
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    name: '豪宅市場',
                    type: 'line',
                    stack: 'Total',
                    data: rawDataObj?.mansion || [],
                },
                {
                    name: '出租需求',
                    type: 'line',
                    stack: 'Total',
                    data: rawDataObj?.release || [],
                },
                {
                    name: '買房需求',
                    type: 'line',
                    stack: 'Total',
                    data: rawDataObj?.buy || [],
                },
                {
                    name: '賣房需求',
                    type: 'line',
                    stack: 'Total',
                    data: rawDataObj?.sell || [],
                },
                {
                    name: '租屋需求',
                    type: 'line',
                    stack: 'Total',
                    data: rawDataObj?.rent || [],
                },
            ],
        };
    }

    /**
     * ### 房屋市場成長趨勢 - [柱狀圖](https://echarts.apache.org/examples/zh/index.html#chart-type-bar)
     *
     * @param {*} [rawDataObj={}]
     * @memberof AboutComponent
     */
    drawBarChart(rawDataObj: any = {}) {
        this.barOptions = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    // Use axis to trigger tooltip
                    type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
                },
            },
            legend: {},
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            xAxis: {
                type: 'value',
            },
            yAxis: {
                type: 'category',
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            series: [
                {
                    name: '豪宅市場',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true,
                    },
                    emphasis: {
                        focus: 'series',
                    },
                    data: rawDataObj?.mansion || [],
                },
                {
                    name: '出租需求',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true,
                    },
                    emphasis: {
                        focus: 'series',
                    },
                    data: rawDataObj?.release || [],
                },
                {
                    name: '買房需求',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true,
                    },
                    emphasis: {
                        focus: 'series',
                    },
                    data: rawDataObj?.buy || [],
                },
                {
                    name: '賣房需求',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true,
                    },
                    emphasis: {
                        focus: 'series',
                    },
                    data: rawDataObj?.sell || [],
                },
                {
                    name: '租屋需求',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true,
                    },
                    emphasis: {
                        focus: 'series',
                    },
                    data: rawDataObj?.rent || [],
                },
            ],
        };
    }

    ngOnInit(): void {
        this.getRawDataThenDraw();
    }
}
