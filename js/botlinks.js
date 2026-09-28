import { esc } from './constants.js';

// Telegram / Discord links, in one place so the Overview card and the footer
// credit can never drift apart.
//
// ponytail: Discord is an oauth2 authorize URL, not a discord.gg invite — an
// invite code needs guild-level auth, which a bot token cannot provide. Swap
// in the real invite once the bot is in a public guild listing.

const ICON = {
    telegram: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.44.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>`,
    discord: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M19.3 5.3A16.9 16.9 0 0015.4 4l-.2.4a12.7 12.7 0 013.5 1.7 15.6 15.6 0 00-13.4 0A12.7 12.7 0 018.8 4.4L8.6 4a16.9 16.9 0 00-3.9 1.3C2.3 9.2 1.5 13 1.9 16.8a17 17 0 005.1 2.6l1-1.7c-.6-.2-1.1-.5-1.6-.8l.4-.3a12 12 0 0010.4 0l.4.3c-.5.3-1 .6-1.6.8l1 1.7a17 17 0 005.1-2.6c.5-4.4-.7-8.2-2.8-11.5zM8.3 14.6c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2zm7.4 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2z"/></svg>`,
};

export const BOT_LINKS = [
    {
        id: 'telegram',
        label: 'Telegram',
        handle: '@cocstatbot',
        href: 'https://t.me/cocstatbot',
        title: 'Ask the CoC bot on Telegram',
        blurb: 'War status, player stats, clan info — tap to start a chat.',
        icon: ICON.telegram,
    },
    {
        id: 'discord',
        label: 'Discord',
        handle: 'CocStatBot',
        href: 'https://discord.com/oauth2/authorize?client_id=1554008513913561119&scope=bot%20applications.commands',
        title: 'Invite the CoC bot to your Discord server',
        blurb: 'Add the bot to your server for war alerts and clan lookups.',
        icon: ICON.discord,
    },
];

export const SOURCE_URL = 'https://github.com/COCSTAT/pasukanjogja2';

// Two equal buttons side by side, directly under the KPI strip. This is the
// only place the bots are advertised: a sidebar pill row read as too quiet to
// notice, and a visitor who never spots it never follows it.
export function renderBotCard() {
    return `<div class="bot-card" role="region" aria-label="Join the clan community">
        <p class="bot-card-head">Clan Community</p>
        <div class="bot-card-row">
            ${BOT_LINKS.map(l => `
                <a class="bot-card-link" href="${esc(l.href)}" target="_blank" rel="noopener noreferrer" title="${esc(l.title)}">
                    <span class="bot-card-ico">${l.icon}</span>
                    <span class="bot-card-txt">
                        <b>${esc(l.label)}</b>
                        <em>${esc(l.handle)}</em>
                        <span>${esc(l.blurb)}</span>
                    </span>
                </a>`).join('')}
        </div>
    </div>`;
}
