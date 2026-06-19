// public/site-helper.js
// 页面提示卡片、关键词徽章和访问说明

(function () {
  'use strict';

  const CONFIG = {
    siteUrl: 'https://cnwebs-zgjcw.com',
    keyword: '中国竞彩网',
    containerId: 'site-helper-root',
    cardTitle: '站点提示',
    badgeLabel: '关键词'
  };

  function createStyleSheet() {
    const style = document.createElement('style');
    style.textContent = `
      #${CONFIG.containerId} {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        max-width: 420px;
        margin: 16px auto;
        border-radius: 12px;
        background: #f0f7ff;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        padding: 20px 24px;
        color: #1a1a2e;
        border-left: 6px solid #2b7be4;
      }
      #${CONFIG.containerId} .helper-title {
        font-size: 1.1rem;
        font-weight: 700;
        margin: 0 0 10px 0;
        letter-spacing: 0.3px;
      }
      #${CONFIG.containerId} .helper-card {
        background: white;
        border-radius: 8px;
        padding: 14px 16px;
        margin-bottom: 12px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.06);
      }
      #${CONFIG.containerId} .helper-card p {
        margin: 4px 0;
        line-height: 1.5;
        font-size: 0.95rem;
      }
      #${CONFIG.containerId} .helper-card a {
        color: #2b7be4;
        text-decoration: none;
        font-weight: 500;
      }
      #${CONFIG.containerId} .helper-card a:hover {
        text-decoration: underline;
      }
      #${CONFIG.containerId} .keyword-badge {
        display: inline-block;
        background: #eef3fc;
        border: 1px solid #cbd5e1;
        border-radius: 20px;
        padding: 4px 14px;
        font-size: 0.85rem;
        font-weight: 600;
        color: #1e3a5f;
        margin: 4px 6px 4px 0;
        letter-spacing: 0.2px;
      }
      #${CONFIG.containerId} .badge-group {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 8px 0 0 0;
      }
      #${CONFIG.containerId} .badge-label {
        font-size: 0.8rem;
        color: #475569;
        margin-right: 6px;
        font-weight: 600;
        text-transform: uppercase;
      }
      #${CONFIG.containerId} .access-note {
        background: #fef9e7;
        border-left: 4px solid #f5a623;
        padding: 10px 12px;
        border-radius: 6px;
        font-size: 0.9rem;
        color: #5f4b1a;
        margin-top: 8px;
      }
    `;
    document.head.appendChild(style);
  }

  function buildCard() {
    const container = document.createElement('div');
    container.id = CONFIG.containerId;

    // 标题
    const title = document.createElement('div');
    title.className = 'helper-title';
    title.textContent = CONFIG.cardTitle;
    container.appendChild(title);

    // 卡片：提示信息
    const card = document.createElement('div');
    card.className = 'helper-card';
    const intro = document.createElement('p');
    intro.innerHTML = `欢迎访问 <a href="${CONFIG.siteUrl}" target="_blank" rel="noopener noreferrer">${CONFIG.siteUrl}</a>，本站提供专业资讯服务。`;
    card.appendChild(intro);
    const tip = document.createElement('p');
    tip.textContent = '请使用现代浏览器访问，确保页面功能完整。推荐 Chrome 或 Firefox 最新版本。';
    card.appendChild(tip);
    container.appendChild(card);

    // 关键词徽章组
    const badgeGroup = document.createElement('div');
    badgeGroup.className = 'badge-group';
    const labelSpan = document.createElement('span');
    labelSpan.className = 'badge-label';
    labelSpan.textContent = CONFIG.badgeLabel + ':';
    badgeGroup.appendChild(labelSpan);

    // 生成多个关键词徽章（使用核心关键词变体）
    const keywords = [
      CONFIG.keyword,
      '竞彩足球',
      '竞彩篮球',
      '赛事分析',
      '赔率参考'
    ];
    keywords.forEach(function (kw) {
      const badge = document.createElement('span');
      badge.className = 'keyword-badge';
      badge.textContent = kw;
      badgeGroup.appendChild(badge);
    });
    container.appendChild(badgeGroup);

    // 访问说明
    const note = document.createElement('div');
    note.className = 'access-note';
    note.innerHTML = '💡 提示：本站内容仅供个人参考，不构成任何投资建议。请理性对待，合规访问。';
    container.appendChild(note);

    return container;
  }

  function init() {
    // 避免重复注入
    if (document.getElementById(CONFIG.containerId)) return;

    createStyleSheet();

    const root = document.getElementById('app') ||
                 document.querySelector('main') ||
                 document.querySelector('.content') ||
                 document.body;

    if (root) {
      const card = buildCard();
      if (root === document.body) {
        // 直接插入到body末尾前
        document.body.insertBefore(card, document.body.lastChild);
      } else {
        root.appendChild(card);
      }
    }
  }

  // 等待DOM就绪
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();