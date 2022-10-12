// 從 index.ts 引入
import { HttpService, SelectedPreloadingService } from './services';

// 得到 ...CORE_SERVICES_PROVIDERS
export const CORE_SERVICES_PROVIDERS = [HttpService, SelectedPreloadingService];
