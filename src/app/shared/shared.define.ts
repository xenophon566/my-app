// 共用元件
import { InputDataComponent, TextComponent, LinkComponent, HtmlComponent } from './components';

// 共用管道
import { SeparatorPipe } from './pipes/separator.pipe';

// 共用指令
import { DebounceClickDirective } from './directives/debounce-click.directive';
import { PublicityLoaderDirective } from './directives/publicity-loader.directive';

export const COMPONENTS = [
    InputDataComponent,
    TextComponent,
    LinkComponent,
    HtmlComponent,
    DebounceClickDirective,
    PublicityLoaderDirective,
    SeparatorPipe,
];
