/* script.js - MyPDFTool 邏輯與渲染 */

document.addEventListener('DOMContentLoaded', () => {
    // 定義工具列表數據
    const tools = [
        {
            id: 'merge',
            title: '合併 PDF',
            desc: '將多個 PDF 文件合併成一個文件，順序由你決定。',
            icon: 'fa-object-group' // 使用 FontAwesome 類名
        },
        {
            id: 'split',
            title: '分割 PDF',
            desc: '選取頁面範圍，將 PDF 分割成多個文件。',
            icon: 'fa-scissors'
        },
        {
            id: 'compress',
            title: '壓縮 PDF',
            desc: '減小 PDF 文件大小，同時保持最佳品質。',
            icon: 'fa-compress-arrows-alt'
        },
        {
            id: 'pdf-to-image',
            title: '轉換為圖片',
            desc: '將 PDF 頁面轉換為 JPG 或 PNG 圖片。',
            icon: 'fa-image'
        },
        {
            id: 'rotate',
            title: '旋轉頁面',
            desc: '旋轉 PDF 頁面，將其調整為正確的方向。',
            icon: 'fa-sync-alt'
        },
        {
            id: 'delete',
            title: '刪除頁面',
            desc: '從 PDF 中移除不需要的頁面。',
            icon: 'fa-trash-alt'
        },
        {
            id: 'reorder',
            title: '重新排列頁面',
            desc: '拖放頁面縮圖以重新排列順序。',
            icon: 'fa-sort-numeric-down'
        },
        {
            id: 'watermark',
            title: '添加浮水印',
            desc: '在 PDF 頁面上添加文字或圖片浮水印。',
            icon: 'fa-stamp'
        }
    ];

    // 獲取或創建主容器
    let container = document.querySelector('.tools-grid');
    
    // 如果 index.html 中沒有 .tools-grid，我們動態創建結構
    if (!container) {
        const main = document.createElement('main');
        main.className = 'main-container';
        
        main.innerHTML = `
            <div class="hero-text">
                <h1>線上 PDF 工具</h1>
                <p>簡單、好用、免費的 PDF 處理工具集合</p>
            </div>
            <div class="tools-grid"></div>
        `;
        
        document.body.appendChild(main);
        container = main.querySelector('.tools-grid');
    }

    // 渲染工具卡片
    tools.forEach(tool => {
        const card = document.createElement('a');
        card.className = 'tool-card';
        // 這裡設定連結，假設你的後端路由是 /tool/功能名稱
        // 如果還沒有後端，可以暫時設為 #，並添加點擊事件
        card.href = `#${tool.id}`; 
        card.onclick = (e) => handleToolClick(e, tool.id, tool.title);

        card.innerHTML = `
            <div class="tool-icon">
                <i class="fas ${tool.icon}"></i>
            </div>
            <h3 class="tool-title">${tool.title}</h3>
            <p class="tool-desc">${tool.desc}</p>
        `;

        container.appendChild(card);
    });
});

// 處理點擊事件（暫時的模擬功能）
function handleToolClick(e, toolId, toolTitle) {
    // 如果你有真實的後端頁面（例如 merge.html），請移除這行 preventDefault
    // e.preventDefault(); 
    
    console.log(`用戶點擊了: ${toolTitle}`);
    
    // 這裡是用來測試的，你可以根據需要修改跳轉邏輯
    // alert(`即將開啟工具: ${toolTitle}\n(請確保後端已實作 ${toolId} 的路由)`);
}
