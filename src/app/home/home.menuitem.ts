export const NbMenuItems = [
    {
        key: 'ABOUT.TITLE', // 對應 i18n [json檔] 的 key
        title: '公司簡介', // 頁面標題
        icon: { icon: 'at-outline', pack: 'eva' }, // 菜單圖示
        link: '/home/about', // 路由連結
    },
    {
        key: 'TENANT.TITLE', // 對應 i18n [json檔] 的 key
        title: '租戶管理', // 頁面標題
        icon: { icon: 'briefcase-outline', pack: 'eva' }, // 菜單圖示
        link: '/home/tenant', // 路由連結
    },
    {
        key: 'LAND.TITLE', // 對應 i18n [json檔] 的 key
        title: '土地管理', // 頁面標題
        icon: { icon: 'bar-chart-2-outline', pack: 'eva' }, // 菜單圖示
        link: '/home/land', // 路由連結
    },
    {
        key: 'PUBLICITY.TITLE', // 對應 i18n [json檔] 的 key
        title: '廣告宣傳', // 頁面標題
        icon: { icon: 'radio-outline', pack: 'eva' }, // 菜單圖示
        link: '/home/publicity', // 路由連結
    },
    {
        key: 'FEATURE.TITLE', // 對應 i18n [json檔] 的 key
        hidden: false,
        title: '功能模組頁面', // 頁面標題
        icon: { icon: 'award-outline', pack: 'eva' },
        expanded: true, // 預設展開
        children: [
            {
                key: 'FEATURE.HELLO', // 對應 i18n [json檔] 的 key
                hidden: false,
                title: '哈囉', // 頁面標題
                icon: { icon: 'award-outline', pack: 'eva' },
                link: '/home/feature/hello', // 路由連結
            },
            {
                key: 'FEATURE.WORLD', // 對應 i18n [json檔] 的 key
                hidden: false,
                title: '世界', // 頁面標題
                icon: { icon: 'award-outline', pack: 'eva' },
                link: '/home/feature/world', // 路由連結
            },
        ],
    },
];
