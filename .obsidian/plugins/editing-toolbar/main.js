'use strict';
var e = require('obsidian');
function t(e, t, o, n) {
  return new (o || (o = Promise))(function (i, r) {
    function a(e) {
      try {
        s(n.next(e));
      } catch (e) {
        r(e);
      }
    }
    function l(e) {
      try {
        s(n.throw(e));
      } catch (e) {
        r(e);
      }
    }
    function s(e) {
      var t;
      e.done
        ? i(e.value)
        : ((t = e.value),
          t instanceof o
            ? t
            : new o(function (e) {
                e(t);
              })).then(a, l);
    }
    s((n = n.apply(e, t || [])).next());
  });
}
function o(e) {
  return t(this, void 0, void 0, function* () {
    return new Promise((t) => setTimeout(t, e));
  });
}
function n(e) {
  let t = Date.now().toString(36);
  return (t += Math.random().toString(36).substr(3, e)), t;
}
function i(e, t, o) {
  let n,
    i = { index: -1, subindex: -1 },
    r = e.settings.menuCommands;
  return (
    o
      ? r.forEach((e, o) => {
          if (
            'SubmenuCommands' in e &&
            ((n = e.SubmenuCommands.findIndex((e) => e.id == t.id)), n >= 0)
          )
            return (i = { index: o, subindex: n }), i;
        })
      : ((n = r.findIndex((e) => e.id == t.id)), (i = { index: n, subindex: -1 })),
    i
  );
}
const r = [
  'Custom',
  'cMenuToolbar',
  'cMenuToolbarSub',
  'cMenuToolbarAdd',
  'cMenuToolbarDelete',
  'cMenuToolbarReload',
  'codeblock-glyph',
  'underline-glyph',
  'superscript-glyph',
  'subscript-glyph',
  'bot-glyph',
  'header-1',
  'header-2',
  'header-3',
  'header-4',
  'header-5',
  'header-6',
  'header-n',
  'obsidian',
  'accessibility',
  'activity',
  'air-vent',
  'airplay',
  'alarm-check',
  'alarm-clock-off',
  'alarm-clock',
  'alarm-minus',
  'alarm-plus',
  'album',
  'alert-circle',
  'alert-octagon',
  'alert-triangle',
  'align-center-horizontal',
  'align-center-vertical',
  'align-center',
  'align-end-horizontal',
  'align-end-vertical',
  'align-horizontal-distribute-center',
  'align-horizontal-distribute-end',
  'align-horizontal-distribute-start',
  'align-horizontal-justify-center',
  'align-horizontal-justify-end',
  'align-horizontal-justify-start',
  'align-horizontal-space-around',
  'align-horizontal-space-between',
  'align-justify',
  'align-left',
  'align-right',
  'align-start-horizontal',
  'align-start-vertical',
  'align-vertical-distribute-center',
  'align-vertical-distribute-end',
  'align-vertical-distribute-start',
  'align-vertical-justify-center',
  'align-vertical-justify-end',
  'align-vertical-justify-start',
  'align-vertical-space-around',
  'align-vertical-space-between',
  'anchor',
  'angry',
  'annoyed',
  'aperture',
  'apple',
  'archive-restore',
  'archive',
  'armchair',
  'arrow-big-down',
  'arrow-big-left',
  'arrow-big-right',
  'arrow-big-up',
  'arrow-down-circle',
  'arrow-down-left',
  'arrow-down-right',
  'arrow-down',
  'arrow-left-circle',
  'arrow-left-right',
  'arrow-left',
  'arrow-right-circle',
  'arrow-right',
  'arrow-up-circle',
  'arrow-up-left',
  'arrow-up-right',
  'arrow-up',
  'asterisk',
  'at-sign',
  'award',
  'axe',
  'axis-3d',
  'baby',
  'backpack',
  'baggage-claim',
  'banana',
  'banknote',
  'bar-chart-2',
  'bar-chart-3',
  'bar-chart-4',
  'bar-chart-horizontal',
  'bar-chart',
  'baseline',
  'bath',
  'battery-charging',
  'battery-full',
  'battery-low',
  'battery-medium',
  'battery',
  'beaker',
  'bed-double',
  'bed-single',
  'bed',
  'beer',
  'bell-minus',
  'bell-off',
  'bell-plus',
  'bell-ring',
  'bell',
  'bike',
  'binary',
  'bitcoin',
  'bluetooth-connected',
  'bluetooth-off',
  'bluetooth-searching',
  'bluetooth',
  'bold',
  'bomb',
  'bone',
  'book-open',
  'book',
  'bookmark-minus',
  'bookmark-plus',
  'bookmark',
  'bot',
  'box-select',
  'box',
  'boxes',
  'briefcase',
  'brush',
  'bug',
  'building-2',
  'building',
  'bus',
  'cake',
  'calculator',
  'calendar-check-2',
  'calendar-check',
  'calendar-clock',
  'calendar-days',
  'calendar-heart',
  'calendar-minus',
  'calendar-off',
  'calendar-plus',
  'calendar-range',
  'calendar-search',
  'calendar-x2',
  'calendar-x',
  'calendar',
  'camera-off',
  'camera',
  'car',
  'carrot',
  'cast',
  'check-circle-2',
  'check-circle',
  'check-square',
  'check',
  'chef-hat',
  'cherry',
  'chevron-down',
  'chevron-first',
  'chevron-last',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'chevrons-down-up',
  'chevrons-down',
  'chevrons-left-right',
  'chevrons-left',
  'chevrons-right-left',
  'chevrons-right',
  'chevrons-up-down',
  'chevrons-up',
  'chrome',
  'cigarette-off',
  'cigarette',
  'circle-dot',
  'circle-ellipsis',
  'circle-slashed',
  'circle',
  'citrus',
  'clapperboard',
  'clipboard-check',
  'clipboard-copy',
  'clipboard-edit',
  'clipboard-list',
  'clipboard-signature',
  'clipboard-type',
  'clipboard-x',
  'clipboard',
  'clock-1',
  'clock-10',
  'clock-11',
  'clock-12',
  'clock-2',
  'clock-3',
  'clock-4',
  'clock-5',
  'clock-6',
  'clock-7',
  'clock-8',
  'clock-9',
  'clock',
  'cloud-cog',
  'cloud-drizzle',
  'cloud-fog',
  'cloud-hail',
  'cloud-lightning',
  'cloud-moon-rain',
  'cloud-moon',
  'cloud-off',
  'cloud-rain-wind',
  'cloud-rain',
  'cloud-snow',
  'cloud-sun-rain',
  'cloud-sun',
  'cloud',
  'cloudy',
  'clover',
  'code-2',
  'code',
  'codepen',
  'codesandbox',
  'coffee',
  'cog',
  'coins',
  'columns',
  'command',
  'compass',
  'component',
  'contact',
  'contrast',
  'cookie',
  'copy',
  'copyleft',
  'copyright',
  'corner-down-left',
  'corner-down-right',
  'corner-left-down',
  'corner-left-up',
  'corner-right-down',
  'corner-right-up',
  'corner-up-left',
  'corner-up-right',
  'cpu',
  'credit-card',
  'croissant',
  'crop',
  'cross',
  'crosshair',
  'crown',
  'cup-soda',
  'curly-braces',
  'currency',
  'database',
  'delete',
  'diamond',
  'dice-1',
  'dice-2',
  'dice-3',
  'dice-4',
  'dice-5',
  'dice-6',
  'dices',
  'diff',
  'disc',
  'divide-circle',
  'divide-square',
  'divide',
  'dollar-sign',
  'download-cloud',
  'download',
  'dribbble',
  'droplet',
  'droplets',
  'drumstick',
  'edit-2',
  'edit-3',
  'edit',
  'egg-fried',
  'egg',
  'equal-not',
  'equal',
  'eraser',
  'euro',
  'expand',
  'external-link',
  'eye-off',
  'eye',
  'facebook',
  'factory',
  'fast-forward',
  'feather',
  'figma',
  'file-archive',
  'file-audio-2',
  'file-audio',
  'file-axis-3d',
  'file-badge-2',
  'file-badge',
  'file-bar-chart-2',
  'file-bar-chart',
  'file-box',
  'file-check-2',
  'file-check',
  'file-clock',
  'file-code',
  'file-cog-2',
  'file-cog',
  'file-diff',
  'file-digit',
  'file-down',
  'file-edit',
  'file-heart',
  'file-image',
  'file-input',
  'file-json-2',
  'file-json',
  'file-key-2',
  'file-key',
  'file-line-chart',
  'file-lock-2',
  'file-lock',
  'file-minus-2',
  'file-minus',
  'file-output',
  'file-pie-chart',
  'file-plus-2',
  'file-plus',
  'file-question',
  'file-scan',
  'file-search-2',
  'file-search',
  'file-signature',
  'file-spreadsheet',
  'file-symlink',
  'file-terminal',
  'file-text',
  'file-type-2',
  'file-type',
  'file-up',
  'file-video-2',
  'file-video',
  'file-volume-2',
  'file-volume',
  'file-warning',
  'file-x2',
  'file-x',
  'file',
  'files',
  'film',
  'filter',
  'fingerprint',
  'flag-off',
  'flag-triangle-left',
  'flag-triangle-right',
  'flag',
  'flame',
  'flashlight-off',
  'flashlight',
  'flask-conical',
  'flask-round',
  'flip-horizontal-2',
  'flip-horizontal',
  'flip-vertical-2',
  'flip-vertical',
  'flower-2',
  'flower',
  'focus',
  'folder-archive',
  'folder-check',
  'folder-clock',
  'folder-closed',
  'folder-cog-2',
  'folder-cog',
  'folder-down',
  'folder-edit',
  'folder-heart',
  'folder-input',
  'folder-key',
  'folder-lock',
  'folder-minus',
  'folder-open',
  'folder-output',
  'folder-plus',
  'folder-search-2',
  'folder-search',
  'folder-symlink',
  'folder-tree',
  'folder-up',
  'folder-x',
  'folder',
  'folders',
  'form-input',
  'forward',
  'frame',
  'framer',
  'frown',
  'fuel',
  'function-square',
  'gamepad-2',
  'gamepad',
  'gauge',
  'gavel',
  'gem',
  'ghost',
  'gift',
  'git-branch-plus',
  'git-branch',
  'git-commit',
  'git-compare',
  'git-fork',
  'git-merge',
  'git-pull-request-closed',
  'git-pull-request-draft',
  'git-pull-request',
  'github',
  'gitlab',
  'glass-water',
  'glasses',
  'globe-2',
  'globe',
  'grab',
  'graduation-cap',
  'grape',
  'grid',
  'grip-horizontal',
  'grip-vertical',
  'hammer',
  'hand-metal',
  'hand',
  'hard-drive',
  'hard-hat',
  'hash',
  'haze',
  'headphones',
  'heart-crack',
  'heart-handshake',
  'heart-off',
  'heart-pulse',
  'heart',
  'help-circle',
  'hexagon',
  'highlighter',
  'history',
  'home',
  'hourglass',
  'ice-cream',
  'image-minus',
  'image-off',
  'image-plus',
  'image',
  'import',
  'inbox',
  'indent',
  'indian-rupee',
  'infinity',
  'info',
  'inspect',
  'instagram',
  'italic',
  'japanese-yen',
  'joystick',
  'key',
  'keyboard',
  'lamp-ceiling',
  'lamp-desk',
  'lamp-floor',
  'lamp-wall-down',
  'lamp-wall-up',
  'lamp',
  'landmark',
  'languages',
  'laptop-2',
  'laptop',
  'lasso-select',
  'lasso',
  'laugh',
  'layers',
  'layout-dashboard',
  'layout-grid',
  'layout-list',
  'layout-template',
  'layout',
  'leaf',
  'library',
  'life-buoy',
  'lightbulb-off',
  'lightbulb',
  'line-chart',
  'link-2off',
  'link-2',
  'link',
  'linkedin',
  'list-checks',
  'list-end',
  'list-minus',
  'list-music',
  'list-ordered',
  'list-plus',
  'list-start',
  'list-video',
  'list-x',
  'list',
  'loader-2',
  'loader',
  'locate-fixed',
  'locate-off',
  'locate',
  'lock',
  'log-in',
  'log-out',
  'luggage',
  'magnet',
  'mail-check',
  'mail-minus',
  'mail-open',
  'mail-plus',
  'mail-question',
  'mail-search',
  'mail-warning',
  'mail-x',
  'mail',
  'mails',
  'map-pin-off',
  'map-pin',
  'map',
  'martini',
  'maximize-2',
  'maximize',
  'medal',
  'megaphone-off',
  'megaphone',
  'meh',
  'menu',
  'message-circle',
  'message-square',
  'mic-2',
  'mic-off',
  'mic',
  'microscope',
  'milestone',
  'minimize-2',
  'minimize',
  'minus-circle',
  'minus-square',
  'minus',
  'monitor-off',
  'monitor-speaker',
  'monitor',
  'moon',
  'more-horizontal',
  'more-vertical',
  'mountain-snow',
  'mountain',
  'mouse-pointer-2',
  'mouse-pointer-click',
  'mouse-pointer',
  'mouse',
  'move-3d',
  'move-diagonal-2',
  'move-diagonal',
  'move-horizontal',
  'move-vertical',
  'move',
  'music-2',
  'music-3',
  'music-4',
  'music',
  'navigation-2off',
  'navigation-2',
  'navigation-off',
  'navigation',
  'network',
  'newspaper',
  'octagon',
  'option',
  'outdent',
  'package-2',
  'package-check',
  'package-minus',
  'package-open',
  'package-plus',
  'package-search',
  'package-x',
  'package',
  'paint-bucket',
  'paintbrush-2',
  'paintbrush',
  'palette',
  'palmtree',
  'paperclip',
  'party-popper',
  'pause-circle',
  'pause-octagon',
  'pause',
  'pen-tool',
  'pencil',
  'percent',
  'person-standing',
  'phone-call',
  'phone-forwarded',
  'phone-incoming',
  'phone-missed',
  'phone-off',
  'phone-outgoing',
  'phone',
  'pie-chart',
  'piggy-bank',
  'pin-off',
  'pin',
  'pipette',
  'pizza',
  'plane',
  'play-circle',
  'play',
  'plug-zap',
  'plus-circle',
  'plus-square',
  'plus',
  'pocket',
  'podcast',
  'pointer',
  'pound-sterling',
  'power-off',
  'power',
  'printer',
  'puzzle',
  'qr-code',
  'quote',
  'radio-receiver',
  'radio',
  'recycle',
  'redo-2',
  'redo',
  'refresh-ccw',
  'refresh-cw',
  'regex',
  'repeat-1',
  'repeat',
  'reply-all',
  'reply',
  'rewind',
  'rocket',
  'rocking-chair',
  'rotate-3d',
  'rotate-ccw',
  'rotate-cw',
  'rss',
  'ruler',
  'russian-ruble',
  'save',
  'scale-3d',
  'scale',
  'scaling',
  'scan-face',
  'scan-line',
  'scan',
  'scissors',
  'screen-share-off',
  'screen-share',
  'scroll',
  'search',
  'send',
  'separator-horizontal',
  'separator-vertical',
  'server-cog',
  'server-crash',
  'server-off',
  'server',
  'settings-2',
  'settings',
  'share-2',
  'share',
  'sheet',
  'shield-alert',
  'shield-check',
  'shield-close',
  'shield-off',
  'shield',
  'shirt',
  'shopping-bag',
  'shopping-cart',
  'shovel',
  'shrink',
  'shrub',
  'shuffle',
  'sidebar-close',
  'sidebar-open',
  'sidebar',
  'sigma',
  'signal-high',
  'signal-low',
  'signal-medium',
  'signal-zero',
  'signal',
  'siren',
  'skip-back',
  'skip-forward',
  'skull',
  'slack',
  'slash',
  'slice',
  'sliders-horizontal',
  'sliders',
  'smartphone-charging',
  'smartphone',
  'smile-plus',
  'smile',
  'snowflake',
  'sofa',
  'sort-asc',
  'sort-desc',
  'speaker',
  'sprout',
  'square',
  'star-half',
  'star-off',
  'star',
  'stethoscope',
  'sticker',
  'sticky-note',
  'stop-circle',
  'stretch-horizontal',
  'stretch-vertical',
  'strikethrough',
  'subscript',
  'sun-dim',
  'sun-medium',
  'sun-moon',
  'sun-snow',
  'sun',
  'sunrise',
  'sunset',
  'superscript',
  'swiss-franc',
  'switch-camera',
  'sword',
  'swords',
  'syringe',
  'table-2',
  'table',
  'tablet',
  'tag',
  'tags',
  'target',
  'tent',
  'terminal-square',
  'terminal',
  'text-cursor-input',
  'text-cursor',
  'thermometer-snowflake',
  'thermometer-sun',
  'thermometer',
  'thumbs-down',
  'thumbs-up',
  'ticket',
  'timer-off',
  'timer-reset',
  'timer',
  'toggle-left',
  'toggle-right',
  'tornado',
  'toy-brick',
  'train',
  'trash-2',
  'trash',
  'tree-deciduous',
  'tree-pine',
  'trees',
  'trello',
  'trending-down',
  'trending-up',
  'triangle',
  'trophy',
  'truck',
  'tv-2',
  'tv',
  'twitch',
  'twitter',
  'type',
  'umbrella',
  'underline',
  'undo-2',
  'undo',
  'unlink-2',
  'unlink',
  'unlock',
  'upload-cloud',
  'upload',
  'usb',
  'user-check',
  'user-cog',
  'user-minus',
  'user-plus',
  'user-x',
  'user',
  'users',
  'utensils-crossed',
  'utensils',
  'venetian-mask',
  'verified',
  'vibrate-off',
  'vibrate',
  'video-off',
  'video',
  'view',
  'voicemail',
  'volume-1',
  'volume-2',
  'volume-x',
  'volume',
  'wallet',
  'wand-2',
  'wand',
  'watch',
  'waves',
  'webcam',
  'webhook',
  'wifi-off',
  'wifi',
  'wind',
  'wine',
  'wrap-text',
  'wrench',
  'x-circle',
  'x-octagon',
  'x-square',
  'x',
  'youtube',
  'zap-off',
  'zap',
  'zoom-in',
  'zoom-out',
  'create-new',
  'trash',
  'search',
  'right-triangle',
  'document',
  'folder',
  'pencil',
  'left-arrow',
  'right-arrow',
  'three-horizontal-bars',
  'dot-network',
  'audio-file',
  'image-file',
  'pdf-file',
  'gear',
  'documents',
  'blocks',
  'go-to-file',
  'presentation',
  'cross-in-box',
  'microphone',
  'microphone-filled',
  'two-columns',
  'link',
  'popup-open',
  'checkmark',
  'hashtag',
  'left-arrow-with-tail',
  'right-arrow-with-tail',
  'up-arrow-with-tail',
  'down-arrow-with-tail',
  'lines-of-text',
  'vertical-three-dots',
  'pin',
  'magnifying-glass',
  'info',
  'horizontal-split',
  'vertical-split',
  'calendar-with-checkmark',
  'folder-minus',
  'sheets-in-box',
  'up-and-down-arrows',
  'broken-link',
  'cross',
  'any-key',
  'reset',
  'star',
  'crossed-star',
  'dice',
  'filled-pin',
  'enter',
  'help',
  'vault',
  'open-vault',
  'paper-plane',
  'bullet-list',
  'uppercase-lowercase-a',
  'star-list',
  'expand-vertically',
  'languages',
  'switch',
  'pane-layout',
  'install',
  'sync',
  'check-in-circle',
  'sync-small',
  'check-small',
  'paused',
  'forward-arrow',
  'stacked-levels',
  'bracket-glyph',
  'note-glyph',
  'tag-glyph',
  'price-tag-glyph',
  'heading-glyph',
  'bold-glyph',
  'italic-glyph',
  'strikethrough-glyph',
  'highlight-glyph',
  'code-glyph',
  'quote-glyph',
  'link-glyph',
  'bullet-list-glyph',
  'number-list-glyph',
  'checkbox-glyph',
  'undo-glyph',
  'redo-glyph',
  'up-chevron-glyph',
  'down-chevron-glyph',
  'left-chevron-glyph',
  'right-chevron-glyph',
  'percent-sign-glyph',
  'keyboard-glyph',
  'double-up-arrow-glyph',
  'double-down-arrow-glyph',
  'image-glyph',
  'wrench-screwdriver-glyph',
  'clock',
  'plus-with-circle',
  'minus-with-circle',
  'indent-glyph',
  'unindent-glyph',
  'fullscreen',
  'exit-fullscreen',
  'cloud',
  'run-command',
  'compress-glyph',
  'enlarge-glyph',
  'scissors-glyph',
  'up-curly-arrow-glyph',
  'down-curly-arrow-glyph',
  'plus-minus-glyph',
  'links-going-out',
  'links-coming-in',
  'add-note-glyph',
  'duplicate-glyph',
  'clock-glyph',
  'calendar-glyph',
  'command-glyph',
  'dice-glyph',
  'file-explorer-glyph',
  'graph-glyph',
  'import-glyph',
  'navigate-glyph',
  'open-elsewhere-glyph',
  'presentation-glyph',
  'paper-plane-glyph',
  'question-mark-glyph',
  'restore-file-glyph',
  'search-glyph',
  'star-glyph',
  'play-audio-glyph',
  'stop-audio-glyph',
  'tomorrow-glyph',
  'wand-glyph',
  'workspace-glyph',
  'yesterday-glyph',
  'box-glyph',
  'merge-files-glyph',
  'merge-files',
  'two-blank-pages',
  'scissors',
  'paste',
  'paste-text',
  'split',
  'select-all-text',
  'wand',
  'github-glyph',
  'reading-glasses',
  'user-manual-filled',
  'discord-filled',
  'chat-bubbles-filled',
  'experiment-filled',
  'bracket-glyph',
  'box-glyph',
  'check-small',
  'dice-glyph',
  'dice',
  'discord',
  'right-triangle',
  'heading-glyph',
  'help',
  'keyboard-toggle',
  'broken-link',
  'experiment',
  'left-arrow',
  'link',
  'link-glyph',
  'links-coming-in',
  'links-going-out',
  'open-vault',
  'paused',
  'question-mark-glyph',
  'right-arrow',
  'sidebar-left',
  'sidebar-right',
  'sheets-in-box',
  'star-list',
  'sync-small',
  'tabs',
  'uppercase-lowercase-a',
  'vault',
  'stack-horizontal',
  'stack-vertical',
  'stretch-horizontal',
  'stretch-vertical',
  'distribute-space-horizontal',
  'distribute-space-vertical',
];
let a;
const l = (t) => {
    a = e.requireApiVersion('0.15.0') ? activeWindow.document : window.document;
    let o = a.getElementById('cMenuToolbarModalBar');
    o && (o.style.visibility = 0 == t ? 'hidden' : 'visible');
  },
  s = (t) => {
    a = e.requireApiVersion('0.15.0') ? activeWindow.document : window.document;
    let o = a.getElementById('cMenuToolbarModalBar');
    o &&
      ('following' != t.positionStyle || (o.style.visibility = 'hidden'),
      'fixed' == t.positionStyle &&
        o.setAttribute(
          'style',
          `left: calc(50% - calc(${o.offsetWidth}px / 2)); bottom: ${
            t.cMenuBottomValue
          }em; grid-template-columns: ${'1fr '.repeat(t.cMenuNumRows)}`,
        ));
  };
var c = {
  'Editing Toolbar append method': 'Editing Toolbar append method',
  'Choose where Editing Toolbar will append upon regeneration. To see the change, hit the refresh button below, or in the status bar menu.':
    'Choose where Editing Toolbar will append upon regeneration. To see the change, hit the refresh button below, or in the status bar menu.',
  'Editing Toolbar aesthetic': 'Editing Toolbar aesthetic',
  'Choose between a glass morphism ,tiny and default style for Editing Toolbar. To see the change, hit the refresh button below, or in the status bar menu.':
    'Choose between a glass morphism ,tiny and default style for Editing Toolbar. To see the change, hit the refresh button below, or in the status bar menu.',
  'Editing Toolbar position': 'Editing Toolbar position',
  'Choose between fixed position or cursor following mode.':
    'Choose between fixed position , cursor following  or Top mode .',
  'Editing Toolbar columns': 'Editing Toolbar columns',
  'Choose the number of columns per row to display on Editing Toolbar. To see the change, hit the refresh button below, or in the status bar menu.':
    'Choose the number of columns per row to display on Editing Toolbar. To see the change, hit the refresh button below, or in the status bar menu.',
  'Editing Toolbar refresh': 'Editing Toolbar refresh',
  'Editing Toolbar commands': 'Editing Toolbar commands',
  "Add a command onto Editing Toolbar from Obsidian's commands library. To reorder the commands, drag and drop the command items. To delete them, use the delete buttom to the right of the command item. Editing Toolbar will not automaticaly refresh after reordering commands. Use the refresh button above.":
    "Add a command onto Editing Toolbar from Obsidian's commands library. To reorder the commands, drag and drop the command items. To delete them, use the delete buttom to the right of the command item. Editing Toolbar will not automaticaly refresh after reordering commands. Use the refresh button above.",
  'Format Brush Off!': 'Format Brush Off!',
  'Hide & Show': 'Hide & Show',
  'Editing Toolbar will only refresh automatically after you have either added or deleted a command from it. To see UI changes to cMenuToolbar (above settings changes) use the refresh button. If you forget to refresh in settings, no worries. There is also a refresh button in the cMenuToolbar status bar menu.':
    'Editing Toolbar will only refresh automatically after you have either added or deleted a command from it. To see UI changes to cMenuToolbar (above settings changes) use the refresh button. If you forget to refresh in settings, no worries. There is also a refresh button in the cMenuToolbar status bar menu.',
  'Font-Color formatting brush ON!': 'Font-Color formatting brush ON!',
  More: 'More',
  'Font Colors': 'Font Colors',
  'Format Brush': 'Format Brush',
  'Background color': 'Background color',
  Refresh: 'Refresh',
  Add: 'Add',
  Delete: 'Delete',
  'Change Command name': 'Change Command name',
  'Add submenu': 'Add submenu',
  'add hr': 'add hr',
  'Enter the icon code, it looks like <svg>.... </svg> format':
    'Enter the icon code, it looks like <svg>.... </svg> format',
  'Please enter a new name：': 'Please enter a new name：',
  'Drag the slider to move the position': 'Drag the slider to move the position',
  'Plugin Settings': 'Plugin Settings',
  'Background-color formatting brush ON!':
    'Background-color formatting brush ON!\nClick the  mouse middle or right key to close the formatting-brush',
  'Clear formatting brush ON!': 'Clear formatting brush ON!',
  'Clear formatting brush ON!\nClick the  mouse middle or right key to close the formatting-brush':
    'Clear formatting brush ON!\nClick the  mouse middle or right key to close the formatting-brush',
  'The toolbar is displayed when the mouse moves over it, otherwise it is automatically hidden':
    'The toolbar is displayed when the mouse moves over it, otherwise it is automatically hidden',
  'Editing Toolbar Auto-hide': 'Editing Toolbar Auto-hide',
  'Custom Backgroud Color': 'Custom Backgroud Color',
  'Custom Font Color': 'Custom Font Color',
  '🎨 Set custom background': '🎨 Set custom background',
  '🖌️ Set custom font color': '🖌️ Set custom font color',
  'Click on the picker to adjust the colour': 'Click on the picker to adjust the colour',
};
const d = {
  ar: {},
  cs: {},
  da: {},
  de: {},
  en: c,
  'en-gb': {},
  es: {},
  fr: {},
  hi: {},
  id: {},
  it: {},
  ja: {},
  ko: {},
  nl: {},
  nn: {},
  pl: {},
  pt: {},
  'pt-br': {},
  ro: {},
  ru: {},
  tr: {},
  'zh-cn': {
    'Editing Toolbar append method': '工具栏的附加方法。',
    'Choose where Editing Toolbar will append upon regeneration. To see the change, hit the refresh button below, or in the status bar menu.':
      '工具栏在Obsidian中的追加的位置，只对固定和跟随模式有效。如果你遇到工具栏显示问题，可以选择body试试。请点击下面或者状态栏菜单中的刷新按钮生效。',
    'Editing Toolbar aesthetic': '工具栏样式',
    'Choose between a glass morphism ,tiny and default style for Editing Toolbar. To see the change, hit the refresh button below, or in the status bar menu.':
      '样式有毛玻璃,简约和默认风格选择。请点击下面或者状态栏菜单中的刷新按钮生效。',
    'Editing Toolbar position': '工具栏位置',
    'Choose between fixed position or cursor following mode.':
      '在固定位置,光标跟随模式或者置顶模式之间进行选择。',
    'Editing Toolbar columns': '工具栏栏目数',
    'Choose the number of columns per row to display on Editing Toolbar. To see the change, hit the refresh button below, or in the status bar menu.':
      '选择在Editing Toolbar上显示的每行的列数。',
    'Editing Toolbar refresh': '刷新工具栏',
    'Editing Toolbar commands': '在工具栏中添加命令',
    "Add a command onto Editing Toolbar from Obsidian's commands library. To reorder the commands, drag and drop the command items. To delete them, use the delete buttom to the right of the command item. Editing Toolbar will not automaticaly refresh after reordering commands. Use the refresh button above.":
      '从Obsidian的命令库中添加一个命令到工具栏。要重新排列命令，可以拖放命令项。要删除它们，请使用命令项右边的删除按钮。图标选择Custom可以自定义图标',
    'Format Brush Off!': '关闭格式刷！',
    'Hide & Show': '隐藏 & 显示',
    'Editing Toolbar will only refresh automatically after you have either added or deleted a command from it. To see UI changes to cMenuToolbar (above settings changes) use the refresh button. If you forget to refresh in settings, no worries. There is also a refresh button in the cMenuToolbar status bar menu.':
      '对外观的更改生效需要使用刷新按钮。如果你忘记在设置中刷新，在状态栏菜单中也有一个刷新按钮。',
    'Font-Color formatting brush ON!': '字体颜色格式刷开启\n点击鼠标中键或者右键关闭格式刷',
    More: '更多',
    'Font Colors': '字体颜色',
    'Format Brush': '格式刷',
    'Background color': '背景颜色',
    Refresh: '刷新',
    Add: '添加',
    Delete: '删除',
    'Change Command name': '更改命令名称',
    'Add submenu': '添加子菜单',
    'add hr': '添加分割线',
    'Enter the icon code, it looks like <svg>.... </svg> format':
      '输入图标代码，类似<svg>.... </svg>格式',
    'Please enter a new name：': '请输入新名称：',
    'Drag the slider to move the position': '拖动滑块来移动位置',
    'Plugin Settings': '插件设置',
    'Background-color formatting brush ON!': '开启背景色格式刷',
    'Clear formatting brush ON!': '清除格式刷已开启',
    'Clear formatting brush ON!\nClick the  mouse middle or right key to close the formatting-brush':
      '清除格式刷已开启\n点击鼠标中键或者右键关闭格式刷',
    'The toolbar is displayed when the mouse moves over it, otherwise it is automatically hidden':
      '当鼠标移到工具栏上方时，工具栏显示，否则自动隐藏',
    'Editing Toolbar Auto-hide': '工具栏是否自动隐藏',
    'Custom Backgroud Color': '设置自定义背景色',
    'Custom Font Color': '设置自定义字体颜色',
    '🎨 Set custom background': '🎨 设置自定义背景',
    '🖌️ Set custom font color': '🖌️ 设置自定义字体颜色',
    'Click on the picker to adjust the colour': '点击选取器来调整颜色',
  },
  'zh-tw': {},
}[e.moment.locale()];
function u(e) {
  return (d && d[e]) || c[e];
}
class h extends e.FuzzySuggestModal {
  constructor(e, t, o = !1) {
    super(e.app),
      (this.plugin = e),
      (this.command = t),
      (this.issub = o),
      this.setPlaceholder('Choose an icon');
  }
  capitalJoin(e) {
    return e
      .split(' ')
      .map((e) => e[0].toUpperCase() + e.substring(1))
      .join(' ');
  }
  getItems() {
    return r;
  }
  getItemText(e) {
    return this.capitalJoin(
      e
        .replace('feather-', '')
        .replace('remix-', '')
        .replace('bx-', '')
        .replace(/([A-Z])/g, ' $1')
        .trim()
        .replace(/-/gi, ' '),
    );
  }
  renderSuggestion(t, o) {
    const n = createSpan({ cls: 'cMenuToolbarIconPick' });
    o.appendChild(n), e.setIcon(n, t.item), super.renderSuggestion(t, o);
  }
  onChooseItem(e) {
    return t(this, void 0, void 0, function* () {
      if ('Custom' === e) new g(this.app, this.plugin, this.command, this.issub).open();
      else {
        if (this.command.icon) {
          let t = i(this.plugin, this.command, this.issub);
          this.issub
            ? (this.plugin.settings.menuCommands[t.index].SubmenuCommands[t.subindex].icon = e)
            : (this.plugin.settings.menuCommands[t.index].icon = e);
        } else (this.command.icon = e), this.plugin.settings.menuCommands.push(this.command);
        yield this.plugin.saveSettings(),
          setTimeout(() => {
            dispatchEvent(new Event('cMenuToolbar-NewCommand'));
          }, 100),
          console.log(
            `%cCommand '${this.command.name}' was added to cMenuToolbar`,
            'color: Violet',
          );
      }
    });
  }
}
class p extends e.FuzzySuggestModal {
  constructor(e) {
    super(e.app), (this.plugin = e), this.app, this.setPlaceholder('Choose a command');
  }
  getItems() {
    return app.commands.listCommands();
  }
  getItemText(e) {
    return e.name;
  }
  onChooseItem(o) {
    return t(this, void 0, void 0, function* () {
      this.plugin.settings.menuCommands.findIndex((e) => e.id == o.id) > -1
        ? new e.Notice('The command' + o.name + 'already exists', 3e3)
        : o.icon
        ? (this.plugin.settings.menuCommands.push(o),
          yield this.plugin.saveSettings(),
          setTimeout(() => {
            dispatchEvent(new Event('cMenuToolbar-NewCommand'));
          }, 100),
          console.log(`%cCommand '${o.name}' was added to cMenuToolbar`, 'color: Violet'))
        : new h(this.plugin, o, !1).open();
    });
  }
}
class g extends e.Modal {
  constructor(e, t, o, n) {
    super(t.app),
      (this.plugin = t),
      (this.item = o),
      (this.issub = n),
      this.containerEl.addClass('cMenuToolbar-Modal'),
      this.containerEl.addClass('customicon');
  }
  onOpen() {
    var o;
    const { contentEl: n } = this;
    n.createEl('b', { text: u('Enter the icon code, it looks like <svg>.... </svg> format') });
    const r = new e.TextAreaComponent(n);
    r.inputEl.classList.add('wideInputPromptInputEl'),
      r
        .setPlaceholder('')
        .setValue(null !== (o = this.item.icon) && void 0 !== o ? o : '')
        .onChange(
          e.debounce(
            (e) =>
              t(this, void 0, void 0, function* () {
                this.item.icon = e;
                let t = i(this.plugin, this.item, this.issub);
                if (this.issub) {
                  let o = t.subindex;
                  -1 === o
                    ? this.plugin.settings.menuCommands[t.index].SubmenuCommands.push(this.item)
                    : (this.plugin.settings.menuCommands[t.index].SubmenuCommands[o].icon = e);
                } else {
                  let e = t.index;
                  -1 === e
                    ? this.plugin.settings.menuCommands.push(this.item)
                    : (this.plugin.settings.menuCommands[e].icon = this.item.icon);
                }
                yield this.plugin.saveSettings();
              }),
            100,
            !0,
          ),
        )
        .inputEl.addEventListener('keydown', this.submitEnterCallback);
  }
  onClose() {
    const { contentEl: e } = this;
    e.empty(),
      setTimeout(() => {
        dispatchEvent(new Event('cMenuToolbar-NewCommand'));
      }, 100);
  }
}
class m extends e.Modal {
  constructor(e, t, o, n) {
    super(t.app),
      (this.plugin = t),
      (this.item = o),
      (this.issub = n),
      this.containerEl.addClass('cMenuToolbar-Modal'),
      this.containerEl.addClass('changename');
  }
  onOpen() {
    var o;
    const { contentEl: n } = this;
    n.createEl('b', { text: u('Please enter a new name：') });
    const r = new e.TextComponent(n);
    r.inputEl.classList.add('InputPromptInputEl'),
      r
        .setPlaceholder('')
        .setValue(null !== (o = this.item.name) && void 0 !== o ? o : '')
        .onChange(
          e.debounce(
            (e) =>
              t(this, void 0, void 0, function* () {
                let t = i(this.plugin, this.item, this.issub);
                if (((this.item.name = e), this.issub)) {
                  let o = t.subindex;
                  -1 === o
                    ? this.plugin.settings.menuCommands[t.index].SubmenuCommands.push(this.item)
                    : (this.plugin.settings.menuCommands[t.index].SubmenuCommands[o].name = e);
                } else {
                  let e = t.index;
                  -1 === e
                    ? this.plugin.settings.menuCommands.push(this.item)
                    : (this.plugin.settings.menuCommands[e].name = this.item.name);
                }
                yield this.plugin.saveSettings();
              }),
            100,
            !0,
          ),
        )
        .inputEl.addEventListener('keydown', this.submitEnterCallback);
  }
  onClose() {
    const { contentEl: e } = this;
    e.empty(),
      setTimeout(() => {
        dispatchEvent(new Event('cMenuToolbar-NewCommand'));
      }, 100);
  }
}
class f extends e.Modal {
  constructor(e, t) {
    super(t.app), (this.plugin = t), this.containerEl.addClass('cMenuToolbar-Modal');
  }
  onOpen() {
    const { contentEl: o } = this;
    if (
      (o.createEl('p', { text: u('Drag the slider to move the position') }),
      'top' == this.plugin.settings.positionStyle)
    ) {
      let n = 5 * (this.plugin.settings.cMenuBottomValue - 4.25);
      new e.SliderComponent(o)
        .setLimits(0, 80, 0.5)
        .setValue(n)
        .onChange(
          e.debounce(
            (e) =>
              t(this, void 0, void 0, function* () {
                console.log(`%c${e}px`, 'color: Violet'),
                  (this.plugin.settings.cMenuBottomValue = e / 5 + 4.25),
                  s(this.plugin.settings),
                  yield this.plugin.saveSettings(),
                  setTimeout(() => {
                    dispatchEvent(new Event('cMenuToolbar-NewCommand'));
                  }, 100);
              }),
            100,
            !0,
          ),
        )
        .setDynamicTooltip();
    } else
      new e.SliderComponent(o)
        .setLimits(2, 18, 0.25)
        .setValue(this.plugin.settings.cMenuBottomValue)
        .onChange(
          e.debounce(
            (e) =>
              t(this, void 0, void 0, function* () {
                console.log(`%c${e}em`, 'color: Violet'),
                  (this.plugin.settings.cMenuBottomValue = e),
                  s(this.plugin.settings),
                  yield this.plugin.saveSettings(),
                  setTimeout(() => {
                    dispatchEvent(new Event('cMenuToolbar-NewCommand'));
                  }, 100);
              }),
            100,
            !0,
          ),
        )
        .setDynamicTooltip();
  }
  onClose() {
    const { contentEl: e } = this;
    e.empty();
  }
}
const b = ['body', 'workspace'],
  v = ['glass', 'default', 'tiny'],
  y = ['fixed', 'following', 'top'],
  w = {
    aestheticStyle: 'default',
    positionStyle: 'top',
    menuCommands: [
      { id: 'editing-toolbar:editor-undo', name: 'undo editor', icon: 'undo-glyph' },
      { id: 'editing-toolbar:editor-redo', name: 'redo editor', icon: 'redo-glyph' },
      {
        id: 'editing-toolbar:format-eraser',
        name: 'Clear text formatting',
        icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M889 512 l-211 211 q-26 27 -61 36 q-35 9 -70 0 q-35 -9 -61 -36 l-351 -350 q-26 -27 -35.5 -62 q-9.5 -35 0 -70 q9.5 -35 35.5 -61 l170 -170 q12 -12 29 -12 l215 0 q17 0 29 12 l311 310 q26 26 35.5 61 q9.5 35 0 70 q-9.5 35 -35.5 61 ZM831 453 q15 -15 15.5 -36.5 q0.5 -21.5 -14.5 -37.5 l-300 -298 l-181 0 l-158 158 q-15 15 -15 37 q0 22 15 38 l351 351 q16 16 38 16 q22 0 37 -16 l212 -212 ZM686 217 l-59 -59 l-317 315 l58 59 l318 -315 ZM883 81 q18 0 30.5 -12 q12.5 -12 12.5 -29 q0 -17 -12.5 -29 q-12.5 -12 -29.5 -13 l-456 0 q-17 0 -29.5 12 q-12.5 12 -12.5 29 q0 17 12 29 q12 12 29 13 l456 0 Z"></path></g></svg>',
      },
      { id: 'editing-toolbar:header2-text', name: 'Header 2', icon: 'header-2' },
      { id: 'editing-toolbar:header3-text', name: 'Header 3', icon: 'header-3' },
      {
        id: 'SubmenuCommands-header',
        name: 'submenu',
        icon: 'header-n',
        SubmenuCommands: [
          { id: 'editing-toolbar:header1-text', name: 'Header 1', icon: 'header-1' },
          { id: 'editing-toolbar:header4-text', name: 'Header 4', icon: 'header-4' },
          { id: 'editing-toolbar:header5-text', name: 'Header 5', icon: 'header-5' },
          { id: 'editing-toolbar:header6-text', name: 'Header 6', icon: 'header-6' },
        ],
      },
      { id: 'editing-toolbar:editor:toggle-bold', name: 'Toggle bold', icon: 'bold-glyph' },
      { id: 'editing-toolbar:editor:toggle-italics', name: 'Toggle italics', icon: 'italic-glyph' },
      {
        id: 'editing-toolbar:editor:toggle-strikethrough',
        name: 'Toggle strikethrough',
        icon: 'strikethrough-glyph',
      },
      { id: 'editing-toolbar:underline', name: 'Toggle underline', icon: 'underline-glyph' },
      { id: 'editor:toggle-highlight', name: '==Toggle highlight ==', icon: 'highlight-glyph' },
      {
        id: 'editing-toolbar:editor:toggle-blockquote',
        name: 'Toggle blockquote',
        icon: 'quote-glyph',
      },
      {
        id: 'SubmenuCommands-mdcmder',
        name: 'submenu',
        icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M464 608 l0 -568 q0 -3 -2.5 -5.5 q-2.5 -2.5 -5.5 -2.5 l-80 0 q-3 0 -5.5 2.5 q-2.5 2.5 -2.5 5.5 l0 568 l-232 0 q-3 0 -5.5 2.5 q-2.5 2.5 -2.5 5.5 l0 80 q0 3 2.5 5.5 q2.5 2.5 5.5 2.5 l560 0 q3 0 5.5 -2.5 q2.5 -2.5 2.5 -5.5 l0 -80 q0 -3 -2.5 -5.5 q-2.5 -2.5 -5.5 -2.5 l-232 0 ZM864 696 q17 0 28.5 11.5 q11.5 11.5 11.5 28.5 q0 17 -11.5 28.5 q-11.5 11.5 -28.5 11.5 q-17 0 -28.5 -11.5 q-11.5 -11.5 -11.5 -28.5 q0 -17 11.5 -28.5 q11.5 -11.5 28.5 -11.5 ZM864 640 q-40 0 -68 28 q-28 28 -28 68 q0 40 28 68 q28 28 68 28 q40 0 68 -28 q28 -28 28 -68 q0 -40 -28 -68 q-28 -28 -68 -28 ZM576 322 l0 -63 q0 -3 2 -5 l89 -70 l-89 -70 q-2 -2 -2 -5 l0 -63 q0 -4 3.5 -5.5 q3.5 -1.5 6.5 0.5 l170 133 q4 3 4.5 8.5 q0.5 5.5 -2.5 9.5 l-2 2 l-170 133 q-3 2 -6.5 0.5 q-3.5 -1.5 -3.5 -5.5 ZM256 322 l0 -63 q0 -3 -2 -5 l-89 -70 l89 -70 q2 -2 2 -5 l0 -63 q0 -4 -3.5 -5.5 q-3.5 -1.5 -6.5 0.5 l-170 133 q-4 3 -4.5 8.5 q-0.5 5.5 2.5 9.5 l2 2 l170 133 q3 2 6.5 0.5 q3.5 -1.5 3.5 -5.5 Z"></path></g></svg>',
        SubmenuCommands: [
          {
            id: 'editing-toolbar:superscript',
            name: 'Toggle superscript',
            icon: 'superscript-glyph',
          },
          { id: 'editing-toolbar:subscript', name: 'Toggle subscript', icon: 'subscript-glyph' },
          { id: 'editing-toolbar:editor:toggle-code', name: 'inline code', icon: 'code-glyph' },
          { id: 'editing-toolbar:codeblock', name: 'Toggle codeblock', icon: 'codeblock-glyph' },
          {
            id: 'editing-toolbar:editor:insert-wikilink',
            name: 'insert wikilink [[]]',
            icon: '<svg width="15" height="15" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M306 134 l91 0 q1 0 1 -8 l0 -80 q0 -8 -1 -8 l-91 0 q-1 0 -1 7 q0 -8 -5 -8 l-45 0 q-5 0 -5 8 l0 784 q0 8 5 8 l45 0 q5 0 5 -8 q0 8 1 8 l91 0 q1 0 1 -8 l0 -80 q0 -8 -1 -8 l-91 0 q-1 0 -1 8 l0 -623 q0 8 1 8 ZM139 134 l91 0 q1 0 1 -8 l0 -80 q0 -8 -1 -8 l-91 0 q-1 0 -1 7 q0 -8 -5 -8 l-45 0 q-5 0 -5 8 l0 784 q0 8 5 8 l45 0 q5 0 5 -8 q0 8 1 8 l91 0 q1 0 1 -8 l0 -80 q0 -8 -1 -8 l-91 0 q-1 0 -1 8 l0 -623 q0 8 1 8 ZM711 134 q1 0 1 -8 l0 623 q0 -8 -1 -8 l-91 0 q-1 0 -1 8 l0 80 q0 8 1 8 l91 0 q1 0 1 -8 q0 8 4 8 l46 0 q4 0 4 -8 l0 -784 q0 -8 -4 -8 l-46 0 q-4 0 -4 8 q0 -7 -1 -7 l-91 0 q-1 0 -1 8 l0 80 q0 8 1 8 l91 0 ZM878 134 q1 0 1 -8 l0 623 q0 -8 -1 -8 l-91 0 q-1 0 -1 8 l0 80 q0 8 1 8 l91 0 q1 0 1 -8 q0 8 5 8 l45 0 q4 0 4 -8 l0 -784 q0 -8 -4 -8 l-45 0 q-5 0 -5 8 q0 -7 -1 -7 l-91 0 q-1 0 -1 8 l0 80 q0 8 1 8 l91 0 Z"></path></g></svg>',
          },
          {
            id: 'editing-toolbar:editor:insert-link',
            name: 'insert link []()',
            icon: 'link-glyph',
          },
          {
            id: 'editing-toolbar:editor:insert-embed',
            name: 'insert embed ![[]]',
            icon: 'note-glyph',
          },
          {
            id: 'editing-toolbar:hrline',
            name: 'Horizontal divider',
            icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M912 424 l0 -80 q0 -3 -2.5 -5.5 q-2.5 -2.5 -5.5 -2.5 l-784 0 q-3 0 -5.5 2.5 q-2.5 2.5 -2.5 5.5 l0 80 q0 3 2.5 5.5 q2.5 2.5 5.5 2.5 l784 0 q3 0 5.5 -2.5 q2.5 -2.5 2.5 -5.5 Z"></path></g></svg>',
          },
        ],
      },
      {
        id: 'SubmenuCommands-list',
        name: 'submenu-list',
        icon: 'bullet-list-glyph',
        SubmenuCommands: [
          {
            id: 'editor:toggle-numbered-list',
            name: 'numbered list',
            icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M860 424 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-457 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l457 0 ZM860 756 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-457 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l457 0 ZM860 92 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-457 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l457 0 ZM264 136 l-3 -3 l-51 -57 l56 0 q14 0 24.5 -10 q10.5 -10 11.5 -25 l0 -1 q0 -15 -10.5 -25.5 q-10.5 -10.5 -24.5 -10.5 l-137 0 q-15 0 -25 10 q-10 10 -11 24.5 q-1 14.5 9 25.5 l63 70 l49 54 q7 7 7 16.5 q0 9.5 -7.5 16.5 q-7.5 7 -18.5 7 q-11 0 -18.5 -6.5 q-7.5 -6.5 -8.5 -16.5 l0 0 q0 -15 -10.5 -25.5 q-10.5 -10.5 -25.5 -10.5 q-15 0 -25.5 10.5 q-10.5 10.5 -10.5 25.5 q0 26 13.5 47.5 q13.5 21.5 36 34.5 q22.5 13 49 13 q26.5 0 49.5 -13 q23 -13 36 -34.5 q13 -21.5 13 -47.5 q0 -20 -7.5 -37.5 q-7.5 -17.5 -21.5 -30.5 l-1 -1 ZM173 794 q11 11 25 10.5 q14 -0.5 24.5 -10.5 q10.5 -10 10.5 -25 l0 -293 q0 -15 -10 -25.5 q-10 -10.5 -25 -10.5 q-15 0 -25.5 10 q-10.5 10 -11.5 25 l0 211 q-10 -8 -23.5 -7 q-13.5 1 -22.5 11 l-1 0 q-10 11 -9.5 25.5 q0.5 14.5 10.5 24.5 l58 54 Z"></path></g></svg>',
          },
          {
            id: 'editor:toggle-bullet-list',
            name: 'bullet list',
            icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M860 424 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-477 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l477 0 ZM860 756 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-477 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l477 0 ZM860 92 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-477 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l477 0 ZM176 716 l0 0 ZM112 716 q0 -27 18.5 -45.5 q18.5 -18.5 45.5 -18.5 q27 0 45.5 18.5 q18.5 18.5 18.5 45.5 q0 27 -18.5 45.5 q-18.5 18.5 -45.5 18.5 q-27 0 -45.5 -18.5 q-18.5 -18.5 -18.5 -45.5 ZM176 384 l0 0 ZM112 384 q0 -27 18.5 -45.5 q18.5 -18.5 45.5 -18.5 q27 0 45.5 18.5 q18.5 18.5 18.5 45.5 q0 27 -18.5 45.5 q-18.5 18.5 -45.5 18.5 q-27 0 -45.5 -18.5 q-18.5 -18.5 -18.5 -45.5 ZM176 52 l0 0 ZM112 52 q0 -27 18.5 -45.5 q18.5 -18.5 45.5 -18.5 q27 0 45.5 18.5 q18.5 18.5 18.5 45.5 q0 27 -18.5 45.5 q-18.5 18.5 -45.5 18.5 q-27 0 -45.5 -18.5 q-18.5 -18.5 -18.5 -45.5 Z"></path></g></svg>',
          },
          {
            id: 'editing-toolbar:undent-list',
            name: 'unindent-list',
            icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M872 302 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-429 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l429 0 ZM872 542 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-429 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l429 0 ZM872 784 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 ZM872 62 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 ZM244 534 l-123 -122 q-8 -7 -8 -18 q0 -11 8 -18 l123 -122 q8 -7 19 -7 q11 0 18.5 7.5 q7.5 7.5 7.5 18.5 l0 242 q0 11 -7.5 18.5 q-7.5 7.5 -18.5 7.5 q-11 0 -19 -7 Z"></path></g></svg>',
          },
          {
            id: 'editing-toolbar:indent-list',
            name: 'indent list',
            icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M872 302 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-429 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l429 0 ZM872 542 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-429 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l429 0 ZM872 784 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 ZM872 62 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 ZM158 534 l124 -122 q7 -7 7 -18 q0 -11 -7 -18 l-124 -122 q-7 -7 -18 -7 q-11 0 -19 7.5 q-8 7.5 -8 18.5 l0 242 q0 11 8 18.5 q8 7.5 19 7.5 q11 0 18 -7 Z"></path></g></svg>',
          },
        ],
      },
      {
        id: 'SubmenuCommands-aligin',
        name: 'submenu-aligin',
        icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M724 304 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-421 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l421 0 ZM872 540 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 ZM724 776 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-421 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l421 0 ZM872 68 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 Z"></path></g></svg>',
        SubmenuCommands: [
          {
            id: 'editing-toolbar:justify',
            name: '<p aligin="justify"></p>',
            icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M112 736 l0 0 ZM120 736 l784 0 q8 0 8 -8 l0 -80 q0 -8 -8 -8 l-784 0 q-8 0 -8 8 l0 80 q0 8 8 8 ZM112 331 l0 0 ZM120 331 l784 0 q8 0 8 -8 l0 -80 q0 -8 -8 -8 l-784 0 q-8 0 -8 8 l0 80 q0 8 8 8 ZM112 128 l0 0 ZM120 128 l784 0 q8 0 8 -8 l0 -80 q0 -8 -8 -8 l-784 0 q-8 0 -8 8 l0 80 q0 8 8 8 ZM112 533 l0 0 ZM120 533 l784 0 q8 0 8 -8 l0 -80 q0 -8 -8 -8 l-784 0 q-8 0 -8 8 l0 80 q0 8 8 8 Z"></path></g></svg>',
          },
          {
            id: 'editing-toolbar:left',
            name: '<p aligin="left"></p>',
            icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M572 304 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-421 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l421 0 ZM872 540 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 ZM572 776 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-421 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l421 0 ZM872 68 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 Z"></path></g></svg>',
          },
          {
            id: 'editing-toolbar:center',
            name: '<center>',
            icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M724 304 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-421 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l421 0 ZM872 540 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 ZM724 776 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-421 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l421 0 ZM872 68 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 Z"></path></g></svg>',
          },
          {
            id: 'editing-toolbar:right',
            name: '<p aligin="right"></p>',
            icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M872 304 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-421 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l421 0 ZM872 540 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 ZM872 776 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-421 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l421 0 ZM872 68 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 Z"></path></g></svg>',
          },
        ],
      },
      {
        id: 'editing-toolbar:change-font-color',
        name: 'Change font color[html]',
        icon: '<svg width="24" height="24" focusable="false" fill="currentColor"><g fill-rule="evenodd"><path id="change-font-color-icon" d="M3 18h18v3H3z" style="fill:#2DC26B"></path><path d="M8.7 16h-.8a.5.5 0 01-.5-.6l2.7-9c.1-.3.3-.4.5-.4h2.8c.2 0 .4.1.5.4l2.7 9a.5.5 0 01-.5.6h-.8a.5.5 0 01-.4-.4l-.7-2.2c0-.3-.3-.4-.5-.4h-3.4c-.2 0-.4.1-.5.4l-.7 2.2c0 .3-.2.4-.4.4zm2.6-7.6l-.6 2a.5.5 0 00.5.6h1.6a.5.5 0 00.5-.6l-.6-2c0-.3-.3-.4-.5-.4h-.4c-.2 0-.4.1-.5.4z"></path></g></svg>',
      },
      {
        id: 'editing-toolbar:change-background-color',
        name: 'Change Backgroundcolor[html]',
        icon: '<svg width="18" height="24" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg"><g   stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd"><g  ><g fill="currentColor"><g transform="translate(119.502295, 137.878331) rotate(-135.000000) translate(-119.502295, -137.878331) translate(48.002295, 31.757731)" ><path d="M100.946943,60.8084699 L43.7469427,60.8084699 C37.2852111,60.8084699 32.0469427,66.0467383 32.0469427,72.5084699 L32.0469427,118.70847 C32.0469427,125.170201 37.2852111,130.40847 43.7469427,130.40847 L100.946943,130.40847 C107.408674,130.40847 112.646943,125.170201 112.646943,118.70847 L112.646943,72.5084699 C112.646943,66.0467383 107.408674,60.8084699 100.946943,60.8084699 Z M93.646,79.808 L93.646,111.408 L51.046,111.408 L51.046,79.808 L93.646,79.808 Z" fill-rule="nonzero"></path><path d="M87.9366521,16.90916 L87.9194966,68.2000001 C87.9183543,69.4147389 86.9334998,70.399264 85.7187607,70.4 L56.9423078,70.4 C55.7272813,70.4 54.7423078,69.4150264 54.7423078,68.2 L54.7423078,39.4621057 C54.7423078,37.2523513 55.5736632,35.1234748 57.0711706,33.4985176 L76.4832996,12.4342613 C78.9534987,9.75382857 83.1289108,9.5834005 85.8093436,12.0535996 C87.1658473,13.303709 87.9372691,15.0644715 87.9366521,16.90916 Z" fill-rule="evenodd"></path><path d="M131.3,111.241199 L11.7,111.241199 C5.23826843,111.241199 0,116.479467 0,122.941199 L0,200.541199 C0,207.002931 5.23826843,212.241199 11.7,212.241199 L131.3,212.241199 C137.761732,212.241199 143,207.002931 143,200.541199 L143,122.941199 C143,116.479467 137.761732,111.241199 131.3,111.241199 Z M124,130.241 L124,193.241 L19,193.241 L19,130.241 L124,130.241 Z" fill-rule="nonzero"></path></g></g><path d="M51,218 L205,218 C211.075132,218 216,222.924868 216,229 C216,235.075132 211.075132,240 205,240 L51,240 C44.9248678,240 40,235.075132 40,229 C40,222.924868 44.9248678,218 51,218 Z" id="change-background-color-icon" style="fill:#FA541C"></path></g></g></svg>',
      },
      { id: 'editing-toolbar:fullscreen-focus', name: 'Fullscreen focus mode', icon: 'fullscreen' },
      {
        id: 'editing-toolbar:workplace-fullscreen-focus',
        name: 'workplace-Fullscreen ',
        icon: 'exit-fullscreen',
      },
    ],
    appendMethod: 'workspace',
    shouldShowMenuOnSelect: !1,
    cMenuVisibility: !0,
    cMenuBottomValue: 4.25,
    cMenuNumRows: 12,
    cMenuWidth: 300,
    cMenuFontColor: '#2DC26B',
    cMenuBackgroundColor: '#d3f8b6',
    autohide: !1,
    custom_bg1: '#FFB78B8C',
    custom_bg2: '#CDF4698C',
    custom_bg3: '#A0CCF68C',
    custom_bg4: '#F0A7D88C',
    custom_bg5: '#ADEFEF8C',
    custom_fc1: '#D83931',
    custom_fc2: '#DE7802',
    custom_fc3: '#245BDB',
    custom_fc4: '#6425D0',
    custom_fc5: '#646A73',
  };
let C;
function k() {
  const t = (function () {
    const t = [];
    t.push(app.workspace.rootSplit);
    const o = app.workspace.floatingSplit;
    return (
      null == o ||
        o.children.forEach((o) => {
          o instanceof e.WorkspaceWindow && t.push(o);
        }),
      t
    );
  })();
  t &&
    t.forEach((e) => {
      (null == e ? void 0 : e.containerEl) &&
        ((e) => {
          let t = e.querySelectorAll('#cMenuToolbarModalBar'),
            o = e.querySelectorAll('#cMenuToolbarPopoverBar');
          t.forEach((e) => {
            e && (e.firstChild && e.removeChild(e.firstChild), e.remove());
          }),
            o.forEach((e) => {
              e && (e.firstChild && e.removeChild(e.firstChild), e.remove());
            });
        })(null == e ? void 0 : e.containerEl);
    });
}
function q(t, o) {
  var n;
  const i = o.positionStyle;
  let r;
  return (
    (C = e.requireApiVersion('0.15.0') ? activeWindow.document : window.document),
    (r =
      'top' == i
        ? null === (n = t.workspace.activeLeaf.view.containerEl) || void 0 === n
          ? void 0
          : n.querySelector('#cMenuToolbarModalBar')
        : C.getElementById('cMenuToolbarModalBar')),
    r || null
  );
}
const T = (e, t) => t.reduce((e, t) => (e && 'undefined' !== e[t] ? e[t] : void 0), e);
function M(e, t) {
  return e && void 0 !== e[1][0] ? t + e.flat(2).join('+').replace('Mod', 'Ctrl') + t : t + '–' + t;
}
function E(e, t, o = !0) {
  let n = e.commands.findCommand(t),
    i = o ? '*' : '';
  if (n) {
    let t = n.hotkeys ? [[T(n.hotkeys, [0, 'modifiers'])], [T(n.hotkeys, [0, 'key'])]] : void 0,
      o = e.hotkeyManager.customKeys[n.id];
    var r = o ? [[T(o, [0, 'modifiers'])], [T(o, [0, 'key'])]] : void 0;
    return r ? M(r, i) : M(t, '');
  }
  return '–';
}
function _(t) {
  const o = t.workspace.getActiveViewOfType(e.MarkdownView);
  if (o) {
    let e = null == o ? void 0 : o.getMode();
    return 'preview' != e && 'source' == e;
  }
}
function S(e) {
  return /<[^>]+>/g.test(e);
}
function x(t, o, n) {
  C = e.requireApiVersion('0.15.0') ? activeWindow.document : window.document;
  let i = q(t, o.settings),
    r = null == i ? void 0 : i.querySelector('#' + n);
  if (r) {
    let e = r.rows,
      i = e.length;
    for (let r = 1; r < i; r++) {
      let i = e[r].cells;
      for (let e = 0; e < i.length; e++)
        i[e].onclick = function () {
          let e = this.style.backgroundColor;
          if ('' != e) {
            if (((e = D(e)), 'x-color-picker-table' == n)) {
              (o.settings.cMenuFontColor = e),
                A(t, o, e),
                C.querySelectorAll('#change-font-color-icon').forEach((t) => {
                  t.style.fill = e;
                });
            } else if ('x-backgroundcolor-picker-table' == n) {
              (o.settings.cMenuBackgroundColor = e),
                B(t, o, e),
                C.querySelectorAll('#change-background-color-icon').forEach((t) => {
                  t.style.fill = e;
                });
            }
            o.saveSettings();
          }
        };
    }
  }
}
function A(t, o, n) {
  const i = t.workspace.getActiveViewOfType(e.MarkdownView);
  if (i) {
    const e = i.editor;
    let o = e.getSelection(),
      r = /\<font color=[0-9a-zA-Z#]+[^\<\>]*\>[^\<\>]+\<\/font\>/g,
      a = /^\<font color=[0-9a-zA-Z#]+[^\<\>]*\>([^\<\>]+)\<\/font\>$/,
      l = '<font color="' + n + '">$1</font>';
    if (/\<font color=[^\<]*$|^[^\>]*font\>/g.test(o)) return;
    (o = r.test(o)
      ? a.test(o)
        ? o.replace(a, l)
        : o.replace(/\<font color=[0-9a-zA-Z#]+[^\<\>]*?\>|\<\/font\>/g, '')
      : o.replace(/^(.+)$/gm, l)),
      e.replaceSelection(o),
      e.exec('goRight'),
      t.commands.executeCommandById('editor:focus');
  }
}
function B(t, o, n) {
  const i = t.workspace.getActiveViewOfType(e.MarkdownView);
  if (i) {
    const e = i.editor;
    let o = e.getSelection(),
      r = /\<span style=[\"'][^\<\>]+:[0-9a-zA-Z#]+[\"'][^\<\>]*\>[^\<\>]+\<\/span\>/g,
      a = /^\<span style=[\"'][^\<\>]+:[0-9a-zA-Z#]+[\"'][^\<\>]*\>([^\<\>]+)\<\/span\>$/,
      l = '<span style="background:' + n + '">$1</span>';
    if (/\<span style=[^\<]*$|^[^\>]*span\>/g.test(o)) return;
    (o = r.test(o)
      ? a.test(o)
        ? o.replace(a, l)
        : o.replace(/\<span style=[\"'][^\<\>]+:[0-9a-zA-Z#]+[\"'][^\<\>]*\>|\<\/span\>/g, '')
      : o.replace(/^(.+)$/gm, l)),
      e.replaceSelection(o),
      e.exec('goRight'),
      t.commands.executeCommandById('editor:focus');
  }
}
const D = function (e) {
  let t = e;
  if (/^(rgb|RGB)/.test(t)) {
    let e = t.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(','),
      o = '#';
    for (let t = 0; t < e.length; t++) {
      let n = Number(e[t]).toString(16);
      '0' === n && (n += n), 1 == n.length && (n = '0' + n), (o += n);
    }
    return 7 !== o.length && (o = t), o;
  }
  if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)) return t;
  {
    let e = t.replace(/#/, '').split('');
    if (6 === e.length) return t;
    if (3 === e.length) {
      let t = '#';
      for (let o = 0; o < e.length; o += 1) t += e[o] + e[o];
      return t;
    }
  }
};
function N(e) {
  e.Temp_Notice && e.Temp_Notice.hide(),
    e.setEN_BG_Format_Brush(!1),
    e.setEN_FontColor_Format_Brush(!1),
    e.setEN_Text_Format_Brush(!1);
}
function O(t) {
  const o = app.workspace.getActiveViewOfType(e.MarkdownView);
  if (o) {
    const e = o.editor;
    let n,
      i = e.getLine(e.getCursor().line),
      r = '';
    const a = /^(\>*(\[[!\w]+\])?\s*)#+\s/;
    let l;
    const s = i.match(a);
    s && (l = s[0].trim()),
      t == l || '' == t
        ? (n = i.replace(a, '$1'))
        : ((n = i.replace(/^\s*(#*|\>|\-|\d+\.)\s*/m, '')), (n = t + ' ' + n)),
      (r =
        '' != n
          ? e.getRange(e.getCursor(), { line: e.getCursor().line, ch: i.length })
          : e.getRange(e.getCursor(), { line: e.getCursor().line, ch: 0 })),
      e.setLine(e.getCursor().line, n),
      e.setCursor({ line: e.getCursor().line, ch: Number(n.length - r.length) });
  }
}
function L(t, o) {
  const n = t.workspace.getActiveViewOfType(e.MarkdownView);
  if (n) {
    const i = n.editor;
    i.getRange({ line: i.getCursor().line, ch: 0 }, i.getCursor());
    let r = i.getLine(i.getCursor().line);
    '' != r
      ? i.getRange(i.getCursor(), { line: i.getCursor().line, ch: r.length })
      : i.getRange(i.getCursor(), { line: i.getCursor().line, ch: 0 });
    let a = i.getSelection();
    if (null == a || '' == a)
      N(o),
        o.setEN_Text_Format_Brush(!0),
        o.Temp_Notice
          ? o.Temp_Notice.noticeEl.innerText !=
              u(
                'Clear formatting brush ON!\nClick the  mouse middle or right key to close the formatting-brush',
              ) &&
            (o.Temp_Notice = new e.Notice(
              u(
                'Clear formatting brush ON!\nClick the  mouse middle or right key to close the formatting-brush',
              ),
              0,
            ))
          : (o.Temp_Notice = new e.Notice(
              u(
                'Clear formatting brush ON!\nClick the  mouse middle or right key to close the formatting-brush',
              ),
              0,
            ));
    else {
      let e =
        /(^#+\s|(?<=^|\s*)#|^\>|^\- \[( |x)\]|^\+ |\<[^\<\>]+?\>|^1\. |^\s*\- |^\-+$|^\*+$)/gm;
      (a = a.replace(e, '')),
        (a = a.replace(/^[ ]+|[ ]+$/gm, '')),
        (a = a.replace(/\!?\[\[([^\[\]\|]*\|)*([^\(\)\[\]]+)\]\]/g, '$2')),
        (a = a.replace(/\!?\[+([^\[\]\(\)]+)\]+\(([^\(\)]+)\)/g, '$1')),
        (a = a.replace(/`([^`]+)`/g, '$1')),
        (a = a.replace(/_([^_]+)_/g, '$1')),
        (a = a.replace(/==([^=]+)==/g, '$1')),
        (a = a.replace(/\*\*\*([^\*]+)\*\*\*/g, '$1')),
        (a = a.replace(/\*\*?([^\*]+)\*\*?/g, '$1')),
        (a = a.replace(/~~([^~]+)~~/g, '$1')),
        i.replaceSelection(a),
        t.commands.executeCommandById('editor:focus');
    }
  }
}
function I(t, o) {
  let n = o.settings;
  (C = e.requireApiVersion('0.15.0') ? activeWindow.document : window.document),
    (function () {
      const i = () => {
          var i, r;
          let a = 0,
            l = createEl('div');
          if (l)
            if ('top' == n.positionStyle) {
              let e = 5 * (n.cMenuBottomValue - 4.25);
              l.setAttribute(
                'style',
                `position: relative; grid-template-columns: repeat(auto-fit, minmax(28px, 1fr));top: ${e}px;`,
              ),
                (l.className += ' top'),
                n.autohide && (l.className += ' autohide');
            } else
              l.setAttribute(
                'style',
                `left: calc(50% - calc(${l.offsetWidth}px / 2)); bottom: ${
                  n.cMenuBottomValue
                }em; grid-template-columns: ${'1fr '.repeat(n.cMenuNumRows)}`,
              );
          l.setAttribute('id', 'cMenuToolbarModalBar');
          let s = createEl('div');
          s.addClass('cMenuToolbarpopover'),
            s.addClass('cMenuToolbarTinyAesthetic'),
            s.setAttribute('id', 'cMenuToolbarPopoverBar'),
            (s.style.visibility = 'hidden'),
            (s.style.height = '0'),
            'default' == n.aestheticStyle
              ? (l.addClass('cMenuToolbarDefaultAesthetic'),
                l.removeClass('cMenuToolbarTinyAesthetic'),
                l.removeClass('cMenuToolbarGlassAesthetic'))
              : 'tiny' == n.aestheticStyle
              ? (l.addClass('cMenuToolbarTinyAesthetic'),
                l.removeClass('cMenuToolbarDefaultAesthetic'),
                l.removeClass('cMenuToolbarGlassAesthetic'))
              : (l.addClass('cMenuToolbarGlassAesthetic'),
                l.removeClass('cMenuToolbarTinyAesthetic'),
                l.removeClass('cMenuToolbarDefaultAesthetic'));
          let c = 99999;
          if ('top' == n.positionStyle) {
            let e = t.workspace.activeLeaf.view.containerEl;
            (null == e ? void 0 : e.querySelector('#cMenuToolbarPopoverBar')) ||
              null == e ||
              e.querySelector('.markdown-source-view').insertAdjacentElement('afterbegin', s),
              null == e ||
                e.querySelector('.markdown-source-view').insertAdjacentElement('afterbegin', l),
              (c = null == e ? void 0 : e.querySelector('.markdown-source-view').offsetWidth);
          } else
            'body' == n.appendMethod
              ? C.body.appendChild(l)
              : 'workspace' == n.appendMethod &&
                (null === (i = C.body) ||
                  void 0 === i ||
                  i.querySelector('.mod-vertical.mod-root').insertAdjacentElement('afterbegin', l));
          let d =
            null === (r = t.workspace.activeLeaf.view.containerEl) || void 0 === r
              ? void 0
              : r.querySelector('#cMenuToolbarPopoverBar');
          n.menuCommands.forEach((i, r) => {
            let s;
            if ('SubmenuCommands' in i) {
              let u;
              a >= c - 104 && c > 100
                ? (o.setIS_MORE_Button(!0), (u = new e.ButtonComponent(d)))
                : (u = new e.ButtonComponent(l)),
                u.setClass('cMenuToolbarCommandsubItem' + r),
                r >= n.cMenuNumRows
                  ? u.setClass('cMenuToolbarSecond')
                  : 'top' != n.positionStyle &&
                    u.buttonEl.setAttribute('aria-label-position', 'top'),
                S(i.icon) ? (u.buttonEl.innerHTML = i.icon) : u.setIcon(i.icon),
                (a += 28);
              let h = (function (e) {
                let t = createEl('div');
                return t.addClass(e), t;
              })('subitem');
              h &&
                i.SubmenuCommands.forEach((o) => {
                  let i = E(t, o.id);
                  s = '–' == i ? o.name : o.name + '(' + i + ')';
                  let a = new e.ButtonComponent(h)
                    .setTooltip(s)
                    .setClass('menu-item')
                    .onClick(() => {
                      t.commands.executeCommandById(o.id),
                        0 == n.cMenuVisibility || 'following' == n.positionStyle
                          ? (l.style.visibility = 'hidden')
                          : (l.style.visibility = 'visible');
                    });
                  r < n.cMenuNumRows &&
                    'top' != n.positionStyle &&
                    a.buttonEl.setAttribute('aria-label-position', 'top'),
                    S(o.icon) ? (a.buttonEl.innerHTML = o.icon) : a.setIcon(o.icon),
                    u.buttonEl.insertAdjacentElement('afterbegin', h);
                });
            } else if ('editing-toolbar:change-font-color' == i.id) {
              let r = new e.ButtonComponent(l);
              r
                .setClass('cMenuToolbarCommandsubItem-font-color')
                .setTooltip(u('Font Colors'))
                .onClick(() => {
                  t.commands.executeCommandById(i.id),
                    0 == n.cMenuVisibility || 'following' == n.positionStyle
                      ? (l.style.visibility = 'hidden')
                      : (l.style.visibility = 'visible');
                }),
                S(i.icon) ? (r.buttonEl.innerHTML = i.icon) : r.setIcon(i.icon),
                (a += 26);
              let s = createEl('div');
              if ((s.addClass('subitem'), s)) {
                (s.innerHTML = (function (e) {
                  return `<div class='x-color-picker-wrapper'>\n<div class='x-color-picker' >\n  <table class="x-color-picker-table" id='x-color-picker-table'>\n    <tbody>\n      <tr>\n        <th colspan="10" class="ui-widget-content">Theme Colors</th>\n      </tr>\n      <tr>\n        <td style="background-color:#ffffff"><span></span></td>\n        <td style="background-color:#000000"><span></span></td>\n        <td style="background-color:#eeece1"><span></span></td>\n        <td style="background-color:#1f497d"><span></span></td>\n        <td style="background-color:#4f81bd"><span></span></td>\n        <td style="background-color:#c0504d"><span></span></td>\n        <td style="background-color:#9bbb59"><span></span></td>\n        <td style="background-color:#8064a2"><span></span></td>\n        <td style="background-color:#4bacc6"><span></span></td>\n        <td style="background-color:#f79646"><span></span></td>\n      </tr>\n      <tr>\n        <th colspan="10"></th>\n      </tr>\n      <tr class="top">\n        <td style="background-color:#f2f2f2"><span></span></td>\n        <td style="background-color:#7f7f7f"><span></span></td>\n        <td style="background-color:#ddd9c3"><span></span></td>\n        <td style="background-color:#c6d9f0"><span></span></td>\n        <td style="background-color:#dbe5f1"><span></span></td>\n        <td style="background-color:#f2dcdb"><span></span></td>\n        <td style="background-color:#ebf1dd"><span></span></td>\n        <td style="background-color:#e5e0ec"><span></span></td>\n        <td style="background-color:#dbeef3"><span></span></td>\n        <td style="background-color:#fdeada"><span></span></td>\n      </tr>\n      <tr class="in">\n        <td style="background-color:#d8d8d8"><span></span></td>\n        <td style="background-color:#595959"><span></span></td>\n        <td style="background-color:#c4bd97"><span></span></td>\n        <td style="background-color:#8db3e2"><span></span></td>\n        <td style="background-color:#b8cce4"><span></span></td>\n        <td style="background-color:#e5b9b7"><span></span></td>\n        <td style="background-color:#d7e3bc"><span></span></td>\n        <td style="background-color:#ccc1d9"><span></span></td>\n        <td style="background-color:#b7dde8"><span></span></td>\n        <td style="background-color:#fbd5b5"><span></span></td>\n      </tr>\n      <tr class="in">\n        <td style="background-color:#bfbfbf"><span></span></td>\n        <td style="background-color:#3f3f3f"><span></span></td>\n        <td style="background-color:#938953"><span></span></td>\n        <td style="background-color:#548dd4"><span></span></td>\n        <td style="background-color:#95b3d7"><span></span></td>\n        <td style="background-color:#d99694"><span></span></td>\n        <td style="background-color:#c3d69b"><span></span></td>\n        <td style="background-color:#b2a2c7"><span></span></td>\n        <td style="background-color:#92cddc"><span></span></td>\n        <td style="background-color:#fac08f"><span></span></td>\n      </tr>\n      <tr class="in">\n        <td style="background-color:#a5a5a5"><span></span></td>\n        <td style="background-color:#262626"><span></span></td>\n        <td style="background-color:#494429"><span></span></td>\n        <td style="background-color:#17365d"><span></span></td>\n        <td style="background-color:#366092"><span></span></td>\n        <td style="background-color:#953734"><span></span></td>\n        <td style="background-color:#76923c"><span></span></td>\n        <td style="background-color:#5f497a"><span></span></td>\n        <td style="background-color:#31859b"><span></span></td>\n        <td style="background-color:#e36c09"><span></span></td>\n      </tr>\n      <tr class="bottom">\n        <td style="background-color:#7f7f7f"><span></span></td>\n        <td style="background-color:#0c0c0c"><span></span></td>\n        <td style="background-color:#1d1b10"><span></span></td>\n        <td style="background-color:#0f243e"><span></span></td>\n        <td style="background-color:#244061"><span></span></td>\n        <td style="background-color:#632423"><span></span></td>\n        <td style="background-color:#4f6128"><span></span></td>\n        <td style="background-color:#3f3151"><span></span></td>\n        <td style="background-color:#205867"><span></span></td>\n        <td style="background-color:#974806"><span></span></td>\n      </tr>\n       <tr>\n        <th colspan="10"></th>\n      </tr>\n      <tr>\n        <th colspan="10" class="ui-widget-content">Standard Colors</th>\n      </tr>\n      <tr>\n        <td style="background-color:#c00000"><span></span></td>\n        <td style="background-color:#ff0000"><span></span></td>\n        <td style="background-color:#ffc000"><span></span></td>\n        <td style="background-color:#ffff00"><span></span></td>\n        <td style="background-color:#92d050"><span></span></td>\n        <td style="background-color:#00b050"><span></span></td>\n        <td style="background-color:#00b0f0"><span></span></td>\n        <td style="background-color:#0070c0"><span></span></td>\n        <td style="background-color:#002060"><span></span></td>\n        <td style="background-color:#7030a0"><span></span></td>\n      </tr>\n      <tr>\n      <th colspan="10" class="ui-widget-content">Custom Font Colors</th>\n    </tr>\n    <tr>\n      <td style="background-color:${e.settings.custom_fc1}"><span></span></td>\n      <td style="background-color:${e.settings.custom_fc2}"><span></span></td>\n      <td style="background-color:${e.settings.custom_fc3}"><span></span></td>\n      <td style="background-color:${e.settings.custom_fc4}"><span></span></td>\n      <td style="background-color:${e.settings.custom_fc5}"><span></span></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n</div>`;
                })(o)),
                  r.buttonEl.insertAdjacentElement('afterbegin', s),
                  x(t, o, 'x-color-picker-table');
                let n = s.querySelector('.x-color-picker-wrapper');
                new e.ButtonComponent(n)
                  .setIcon('paintbrush')
                  .setTooltip(u('Format Brush'))
                  .onClick(() => {
                    N(o),
                      o.setEN_FontColor_Format_Brush(!0),
                      (o.Temp_Notice = new e.Notice(u('Font-Color formatting brush ON!'), 0));
                  }),
                  new e.ButtonComponent(n)
                    .setIcon('palette')
                    .setTooltip(u('Custom Font Color'))
                    .onClick(() => {
                      t.setting.open(),
                        t.setting.openTabById('editing-toolbar'),
                        setTimeout(() => {
                          var e;
                          let o = t.setting.activeTab.containerEl.querySelector('.custom_font');
                          o &&
                            (null === (e = o.addClass) || void 0 === e || e.call(o, 'toolbar-cta'));
                        }, 200);
                    });
              }
            } else if ('editing-toolbar:change-background-color' == i.id) {
              let r = new e.ButtonComponent(l);
              r
                .setClass('cMenuToolbarCommandsubItem-font-color')
                .setTooltip(u('Background color'))
                .onClick(() => {
                  t.commands.executeCommandById(i.id),
                    0 == n.cMenuVisibility || 'following' == n.positionStyle
                      ? (l.style.visibility = 'hidden')
                      : (l.style.visibility = 'visible');
                }),
                S(i.icon) ? (r.buttonEl.innerHTML = i.icon) : r.setIcon(i.icon),
                (a += 26);
              let s = createEl('div');
              if ((s.addClass('subitem'), s)) {
                (s.innerHTML = (function (e) {
                  return `<div class='x-color-picker-wrapper'>\n<div class='x-color-picker' >\n  <table class="x-color-picker-table" id='x-backgroundcolor-picker-table'>\n    <tbody>\n      <tr>\n        <th colspan="5" class="ui-widget-content">Translucent Colors</th>\n      </tr>\n      <tr class="top">\n        <td style="background-color:rgba(140, 140, 140, 0.12)"><span></span></td>\n        <td style="background-color:rgba(92, 92, 92, 0.2)"><span></span></td>\n        <td style="background-color:rgba(163, 67, 31, 0.2)"><span></span></td>\n        <td style="background-color:rgba(240, 107, 5, 0.2)"><span></span></td>\n        <td style="background-color:rgba(240, 200, 0, 0.2)"><span></span></td>\n        </tr>\n        <tr class="bottom">\n        <td style="background-color:rgba(3, 135, 102, 0.2)"><span></span></td>\n        <td style="background-color:rgba(3, 135, 102, 0.2)"><span></span></td>\n        <td style="background-color:rgba(5, 117, 197, 0.2)"><span></span></td>\n        <td style="background-color:rgba(74, 82, 199, 0.2)"><span></span></td>\n        <td style="background-color:rgba(136, 49, 204, 0.2)"><span></span></td>\n      </tr>\n\n      <tr>\n      <th colspan="5" class="ui-widget-content">Highlighter Colors</th>\n    </tr>\n    \n    <tr class="top">\n      <td style="background-color:rgb(255, 248, 143)"><span></span></td>\n      <td style="background-color:rgb(211, 248, 182)"><span></span></td>\n      <td style="background-color:rgb(175, 250, 209)"><span></span></td>\n      <td style="background-color:rgb(177, 255, 255)"><span></span></td>\n      <td style="background-color:rgb(253, 191, 255)"><span></span></td>\n      </tr>\n      <tr class="bottom">\n      <td style="background-color:rgb(210, 203, 255);"><span></span></td>\n      <td style="background-color:rgb(64, 169, 255);"><span></span></td>\n      <td style="background-color:rgb(255, 77, 79);"><span></span></td>\n      <td style="background-color:rgb(212, 177, 6);"><span></span></td>\n      <td style="background-color:rgb(146, 84, 222);"><span></span></td>\n    </tr>\n    <tr>\n    <th colspan="5" class="ui-widget-content">Custom Colors</th>\n  </tr>\n    <tr class="bottom">\n    <td style="background-color: ${e.settings.custom_bg1};"><span></span></td>\n    <td style="background-color:${e.settings.custom_bg2};"><span></span></td>\n    <td style="background-color:${e.settings.custom_bg3};"><span></span></td>\n    <td style="background-color:${e.settings.custom_bg4};"><span></span></td>\n    <td style="background-color:${e.settings.custom_bg5};"><span></span></td>\n  </tr>\n    </tbody>\n  </table>\n</div>\n</div>`;
                })(o)),
                  r.buttonEl.insertAdjacentElement('afterbegin', s),
                  x(t, o, 'x-backgroundcolor-picker-table');
                let n = s.querySelector('.x-color-picker-wrapper');
                new e.ButtonComponent(n)
                  .setIcon('paintbrush')
                  .setTooltip(u('Format Brush'))
                  .onClick(() => {
                    N(o),
                      o.setEN_BG_Format_Brush(!0),
                      (o.Temp_Notice = new e.Notice(u('Font-Color formatting brush ON!'), 0));
                  }),
                  new e.ButtonComponent(n)
                    .setIcon('palette')
                    .setTooltip(u('Custom Backgroud Color'))
                    .onClick(() => {
                      t.setting.open(),
                        t.setting.openTabById('editing-toolbar'),
                        setTimeout(() => {
                          var e;
                          let o = t.setting.activeTab.containerEl.querySelector('.custom_bg');
                          o &&
                            (null === (e = o.addClass) || void 0 === e || e.call(o, 'toolbar-cta'));
                        }, 200);
                    });
              }
            } else {
              let u;
              a >= c - 104 && c > 100
                ? (o.setIS_MORE_Button(!0), (u = new e.ButtonComponent(d)))
                : (u = new e.ButtonComponent(l));
              let h = E(t, i.id);
              (s = '–' == h ? i.name : i.name + '(' + h + ')'),
                u.setTooltip(s).onClick(() => {
                  t.commands.executeCommandById(i.id),
                    0 == n.cMenuVisibility || 'following' == n.positionStyle
                      ? (l.style.visibility = 'hidden')
                      : (l.style.visibility = 'visible');
                }),
                u.setClass('cMenuToolbarCommandItem'),
                r >= n.cMenuNumRows
                  ? u.setClass('cMenuToolbarSecond')
                  : 'top' != n.positionStyle &&
                    u.buttonEl.setAttribute('aria-label-position', 'top'),
                'cMenuToolbar-Divider-Line' == i.id && u.setClass('cMenuToolbar-Divider-Line'),
                S(i.icon) ? (u.buttonEl.innerHTML = i.icon) : u.setIcon(i.icon),
                (a += 26);
            }
          }),
            (function (t, o, n) {
              let i = t.workspace.getActiveViewOfType(e.MarkdownView);
              if (i) {
                let t = i.containerEl.querySelector('#cMenuToolbarPopoverBar');
                if (!o.IS_MORE_Button) return;
                let r = n.createEl('span');
                r.addClass('more-menu');
                let a = new e.ButtonComponent(r);
                a
                  .setClass('cMenuToolbarCommandItem')
                  .setTooltip(u('More'))
                  .onClick(() => {
                    'hidden' == t.style.visibility
                      ? ((t.style.visibility = 'visible'), (t.style.height = '32px'))
                      : ((t.style.visibility = 'hidden'), (t.style.height = '0'));
                  }),
                  (a.buttonEl.innerHTML =
                    '<svg  width="14" height="14"  version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve"><path fill="#666" d="M510.29 14.13 q17.09 -15.07 40.2 -14.07 q23.12 1 39.2 18.08 l334.66 385.92 q25.12 30.15 34.16 66.83 q9.04 36.68 0.5 73.87 q-8.54 37.19 -32.66 67.34 l-335.67 390.94 q-15.07 18.09 -38.69 20.1 q-23.62 2.01 -41.71 -13.07 q-18.08 -15.08 -20.09 -38.19 q-2.01 -23.12 13.06 -41.21 l334.66 -390.94 q11.06 -13.06 11.56 -29.65 q0.5 -16.58 -10.55 -29.64 l-334.67 -386.92 q-15.07 -17.09 -13.56 -40.7 q1.51 -23.62 19.59 -38.7 ZM81.17 14.13 q17.08 -15.07 40.19 -14.07 q23.11 1 39.2 18.08 l334.66 385.92 q25.12 30.15 34.16 66.83 q9.04 36.68 0.5 73.87 q-8.54 37.19 -32.66 67.34 l-335.67 390.94 q-15.07 18.09 -38.69 20.6 q-23.61 2.51 -41.7 -12.57 q-18.09 -15.08 -20.1 -38.69 q-2.01 -23.62 13.06 -41.71 l334.66 -390.94 q11.06 -13.06 11.56 -29.65 q0.5 -16.58 -10.55 -29.64 l-334.66 -386.92 q-15.08 -17.09 -13.57 -40.7 q1.51 -23.62 19.6 -38.7 Z"/></svg>'),
                  o.setIS_MORE_Button(!1);
              }
            })(t, o, l),
            Math.abs(o.settings.cMenuWidth - Number(a)) > 30 &&
              ((o.settings.cMenuWidth = Number(a)),
              setTimeout(() => {
                o.saveSettings();
              }, 100));
        },
        r = t.workspace.getActiveViewOfType(e.ItemView);
      ('markdown' !== (null == r ? void 0 : r.getViewType()) &&
        'canvas' !== (null == r ? void 0 : r.getViewType())) ||
        q(t, o.settings) ||
        (i(),
        s(n),
        (function (t, o) {
          C = e.requireApiVersion('0.15.0') ? activeWindow.document : window.document;
          let n = C.querySelectorAll('#change-font-color-icon');
          n &&
            n.forEach((e) => {
              e.style.fill = t;
            });
          let i = C.querySelectorAll('#change-background-color-icon');
          i &&
            i.forEach((e) => {
              e.style.fill = o;
            });
        })(
          /**!
           * Sortable 1.15.0
           * @author	RubaXa   <trash@rubaxa.org>
           * @author	owenm    <owen23355@gmail.com>
           * @license MIT
           */ n.cMenuFontColor,
          n.cMenuBackgroundColor,
        ));
    })();
}
function F(e, t) {
  var o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      o.push.apply(o, n);
  }
  return o;
}
function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? F(Object(o), !0).forEach(function (t) {
          z(e, t, o[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
      : F(Object(o)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
        });
  }
  return e;
}
function $(e) {
  return (
    ($ =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    $(e)
  );
}
function z(e, t, o) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = o),
    e
  );
}
function P() {
  return (
    (P =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = arguments[t];
          for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
        }
        return e;
      }),
    P.apply(this, arguments)
  );
}
function H(e, t) {
  if (null == e) return {};
  var o,
    n,
    i = (function (e, t) {
      if (null == e) return {};
      var o,
        n,
        i = {},
        r = Object.keys(e);
      for (n = 0; n < r.length; n++) (o = r[n]), t.indexOf(o) >= 0 || (i[o] = e[o]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (n = 0; n < r.length; n++)
      (o = r[n]),
        t.indexOf(o) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, o) && (i[o] = e[o]));
  }
  return i;
}
function R(e) {
  if ('undefined' != typeof window && window.navigator) return !!navigator.userAgent.match(e);
}
var Z = R(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
  j = R(/Edge/i),
  X = R(/firefox/i),
  W = R(/safari/i) && !R(/chrome/i) && !R(/android/i),
  Y = R(/iP(ad|od|hone)/i),
  G = R(/chrome/i) && R(/android/i),
  U = { capture: !1, passive: !1 };
function K(e, t, o) {
  e.addEventListener(t, o, !Z && U);
}
function J(e, t, o) {
  e.removeEventListener(t, o, !Z && U);
}
function Q(e, t) {
  if (t) {
    if (('>' === t[0] && (t = t.substring(1)), e))
      try {
        if (e.matches) return e.matches(t);
        if (e.msMatchesSelector) return e.msMatchesSelector(t);
        if (e.webkitMatchesSelector) return e.webkitMatchesSelector(t);
      } catch (e) {
        return !1;
      }
    return !1;
  }
}
function ee(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function te(e, t, o, n) {
  if (e) {
    o = o || document;
    do {
      if ((null != t && ('>' === t[0] ? e.parentNode === o && Q(e, t) : Q(e, t))) || (n && e === o))
        return e;
      if (e === o) break;
    } while ((e = ee(e)));
  }
  return null;
}
var oe,
  ne = /\s+/g;
function ie(e, t, o) {
  if (e && t)
    if (e.classList) e.classList[o ? 'add' : 'remove'](t);
    else {
      var n = (' ' + e.className + ' ').replace(ne, ' ').replace(' ' + t + ' ', ' ');
      e.className = (n + (o ? ' ' + t : '')).replace(ne, ' ');
    }
}
function re(e, t, o) {
  var n = e && e.style;
  if (n) {
    if (void 0 === o)
      return (
        document.defaultView && document.defaultView.getComputedStyle
          ? (o = document.defaultView.getComputedStyle(e, ''))
          : e.currentStyle && (o = e.currentStyle),
        void 0 === t ? o : o[t]
      );
    t in n || -1 !== t.indexOf('webkit') || (t = '-webkit-' + t),
      (n[t] = o + ('string' == typeof o ? '' : 'px'));
  }
}
function ae(e, t) {
  var o = '';
  if ('string' == typeof e) o = e;
  else
    do {
      var n = re(e, 'transform');
      n && 'none' !== n && (o = n + ' ' + o);
    } while (!t && (e = e.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(o);
}
function le(e, t, o) {
  if (e) {
    var n = e.getElementsByTagName(t),
      i = 0,
      r = n.length;
    if (o) for (; i < r; i++) o(n[i], i);
    return n;
  }
  return [];
}
function se() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function ce(e, t, o, n, i) {
  if (e.getBoundingClientRect || e === window) {
    var r, a, l, s, c, d, u;
    if (
      (e !== window && e.parentNode && e !== se()
        ? ((a = (r = e.getBoundingClientRect()).top),
          (l = r.left),
          (s = r.bottom),
          (c = r.right),
          (d = r.height),
          (u = r.width))
        : ((a = 0),
          (l = 0),
          (s = window.innerHeight),
          (c = window.innerWidth),
          (d = window.innerHeight),
          (u = window.innerWidth)),
      (t || o) && e !== window && ((i = i || e.parentNode), !Z))
    )
      do {
        if (
          i &&
          i.getBoundingClientRect &&
          ('none' !== re(i, 'transform') || (o && 'static' !== re(i, 'position')))
        ) {
          var h = i.getBoundingClientRect();
          (a -= h.top + parseInt(re(i, 'border-top-width'))),
            (l -= h.left + parseInt(re(i, 'border-left-width'))),
            (s = a + r.height),
            (c = l + r.width);
          break;
        }
      } while ((i = i.parentNode));
    if (n && e !== window) {
      var p = ae(i || e),
        g = p && p.a,
        m = p && p.d;
      p && ((s = (a /= m) + (d /= m)), (c = (l /= g) + (u /= g)));
    }
    return { top: a, left: l, bottom: s, right: c, width: u, height: d };
  }
}
function de(e, t, o) {
  for (var n = me(e, !0), i = ce(e)[t]; n; ) {
    var r = ce(n)[o];
    if (!('top' === o || 'left' === o ? i >= r : i <= r)) return n;
    if (n === se()) break;
    n = me(n, !1);
  }
  return !1;
}
function ue(e, t, o, n) {
  for (var i = 0, r = 0, a = e.children; r < a.length; ) {
    if (
      'none' !== a[r].style.display &&
      a[r] !== vt.ghost &&
      (n || a[r] !== vt.dragged) &&
      te(a[r], o.draggable, e, !1)
    ) {
      if (i === t) return a[r];
      i++;
    }
    r++;
  }
  return null;
}
function he(e, t) {
  for (
    var o = e.lastElementChild;
    o && (o === vt.ghost || 'none' === re(o, 'display') || (t && !Q(o, t)));

  )
    o = o.previousElementSibling;
  return o || null;
}
function pe(e, t) {
  var o = 0;
  if (!e || !e.parentNode) return -1;
  for (; (e = e.previousElementSibling); )
    'TEMPLATE' === e.nodeName.toUpperCase() || e === vt.clone || (t && !Q(e, t)) || o++;
  return o;
}
function ge(e) {
  var t = 0,
    o = 0,
    n = se();
  if (e)
    do {
      var i = ae(e),
        r = i.a,
        a = i.d;
      (t += e.scrollLeft * r), (o += e.scrollTop * a);
    } while (e !== n && (e = e.parentNode));
  return [t, o];
}
function me(e, t) {
  if (!e || !e.getBoundingClientRect) return se();
  var o = e,
    n = !1;
  do {
    if (o.clientWidth < o.scrollWidth || o.clientHeight < o.scrollHeight) {
      var i = re(o);
      if (
        (o.clientWidth < o.scrollWidth && ('auto' == i.overflowX || 'scroll' == i.overflowX)) ||
        (o.clientHeight < o.scrollHeight && ('auto' == i.overflowY || 'scroll' == i.overflowY))
      ) {
        if (!o.getBoundingClientRect || o === document.body) return se();
        if (n || t) return o;
        n = !0;
      }
    }
  } while ((o = o.parentNode));
  return se();
}
function fe(e, t) {
  return (
    Math.round(e.top) === Math.round(t.top) &&
    Math.round(e.left) === Math.round(t.left) &&
    Math.round(e.height) === Math.round(t.height) &&
    Math.round(e.width) === Math.round(t.width)
  );
}
function be(e, t) {
  return function () {
    if (!oe) {
      var o = arguments,
        n = this;
      1 === o.length ? e.call(n, o[0]) : e.apply(n, o),
        (oe = setTimeout(function () {
          oe = void 0;
        }, t));
    }
  };
}
function ve(e, t, o) {
  (e.scrollLeft += t), (e.scrollTop += o);
}
function ye(e) {
  var t = window.Polymer,
    o = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : o ? o(e).clone(!0)[0] : e.cloneNode(!0);
}
var we = 'Sortable' + new Date().getTime();
function Ce() {
  var e,
    t = [];
  return {
    captureAnimationState: function () {
      ((t = []), this.options.animation) &&
        [].slice.call(this.el.children).forEach(function (e) {
          if ('none' !== re(e, 'display') && e !== vt.ghost) {
            t.push({ target: e, rect: ce(e) });
            var o = V({}, t[t.length - 1].rect);
            if (e.thisAnimationDuration) {
              var n = ae(e, !0);
              n && ((o.top -= n.f), (o.left -= n.e));
            }
            e.fromRect = o;
          }
        });
    },
    addAnimationState: function (e) {
      t.push(e);
    },
    removeAnimationState: function (e) {
      t.splice(
        (function (e, t) {
          for (var o in e)
            if (e.hasOwnProperty(o))
              for (var n in t) if (t.hasOwnProperty(n) && t[n] === e[o][n]) return Number(o);
          return -1;
        })(t, { target: e }),
        1,
      );
    },
    animateAll: function (o) {
      var n = this;
      if (!this.options.animation) return clearTimeout(e), void ('function' == typeof o && o());
      var i = !1,
        r = 0;
      t.forEach(function (e) {
        var t = 0,
          o = e.target,
          a = o.fromRect,
          l = ce(o),
          s = o.prevFromRect,
          c = o.prevToRect,
          d = e.rect,
          u = ae(o, !0);
        u && ((l.top -= u.f), (l.left -= u.e)),
          (o.toRect = l),
          o.thisAnimationDuration &&
            fe(s, l) &&
            !fe(a, l) &&
            (d.top - l.top) / (d.left - l.left) == (a.top - l.top) / (a.left - l.left) &&
            (t = (function (e, t, o, n) {
              return (
                (Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) /
                  Math.sqrt(Math.pow(t.top - o.top, 2) + Math.pow(t.left - o.left, 2))) *
                n.animation
              );
            })(d, s, c, n.options)),
          fe(l, a) ||
            ((o.prevFromRect = a),
            (o.prevToRect = l),
            t || (t = n.options.animation),
            n.animate(o, d, l, t)),
          t &&
            ((i = !0),
            (r = Math.max(r, t)),
            clearTimeout(o.animationResetTimer),
            (o.animationResetTimer = setTimeout(function () {
              (o.animationTime = 0),
                (o.prevFromRect = null),
                (o.fromRect = null),
                (o.prevToRect = null),
                (o.thisAnimationDuration = null);
            }, t)),
            (o.thisAnimationDuration = t));
      }),
        clearTimeout(e),
        i
          ? (e = setTimeout(function () {
              'function' == typeof o && o();
            }, r))
          : 'function' == typeof o && o(),
        (t = []);
    },
    animate: function (e, t, o, n) {
      if (n) {
        re(e, 'transition', ''), re(e, 'transform', '');
        var i = ae(this.el),
          r = i && i.a,
          a = i && i.d,
          l = (t.left - o.left) / (r || 1),
          s = (t.top - o.top) / (a || 1);
        (e.animatingX = !!l),
          (e.animatingY = !!s),
          re(e, 'transform', 'translate3d(' + l + 'px,' + s + 'px,0)'),
          (this.forRepaintDummy = (function (e) {
            return e.offsetWidth;
          })(e)),
          re(
            e,
            'transition',
            'transform ' + n + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''),
          ),
          re(e, 'transform', 'translate3d(0,0,0)'),
          'number' == typeof e.animated && clearTimeout(e.animated),
          (e.animated = setTimeout(function () {
            re(e, 'transition', ''),
              re(e, 'transform', ''),
              (e.animated = !1),
              (e.animatingX = !1),
              (e.animatingY = !1);
          }, n));
      }
    },
  };
}
var ke = [],
  qe = { initializeByDefault: !0 },
  Te = {
    mount: function (e) {
      for (var t in qe) qe.hasOwnProperty(t) && !(t in e) && (e[t] = qe[t]);
      ke.forEach(function (t) {
        if (t.pluginName === e.pluginName)
          throw 'Sortable: Cannot mount plugin '.concat(e.pluginName, ' more than once');
      }),
        ke.push(e);
    },
    pluginEvent: function (e, t, o) {
      var n = this;
      (this.eventCanceled = !1),
        (o.cancel = function () {
          n.eventCanceled = !0;
        });
      var i = e + 'Global';
      ke.forEach(function (n) {
        t[n.pluginName] &&
          (t[n.pluginName][i] && t[n.pluginName][i](V({ sortable: t }, o)),
          t.options[n.pluginName] &&
            t[n.pluginName][e] &&
            t[n.pluginName][e](V({ sortable: t }, o)));
      });
    },
    initializePlugins: function (e, t, o, n) {
      for (var i in (ke.forEach(function (n) {
        var i = n.pluginName;
        if (e.options[i] || n.initializeByDefault) {
          var r = new n(e, t, e.options);
          (r.sortable = e), (r.options = e.options), (e[i] = r), P(o, r.defaults);
        }
      }),
      e.options))
        if (e.options.hasOwnProperty(i)) {
          var r = this.modifyOption(e, i, e.options[i]);
          void 0 !== r && (e.options[i] = r);
        }
    },
    getEventProperties: function (e, t) {
      var o = {};
      return (
        ke.forEach(function (n) {
          'function' == typeof n.eventProperties &&
            P(o, n.eventProperties.call(t[n.pluginName], e));
        }),
        o
      );
    },
    modifyOption: function (e, t, o) {
      var n;
      return (
        ke.forEach(function (i) {
          e[i.pluginName] &&
            i.optionListeners &&
            'function' == typeof i.optionListeners[t] &&
            (n = i.optionListeners[t].call(e[i.pluginName], o));
        }),
        n
      );
    },
  };
var Me = ['evt'],
  Ee = function (e, t) {
    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      n = o.evt,
      i = H(o, Me);
    Te.pluginEvent.bind(vt)(
      e,
      t,
      V(
        {
          dragEl: Se,
          parentEl: xe,
          ghostEl: Ae,
          rootEl: Be,
          nextEl: De,
          lastDownEl: Ne,
          cloneEl: Oe,
          cloneHidden: Le,
          dragStarted: Ye,
          putSortable: Pe,
          activeSortable: vt.active,
          originalEvent: n,
          oldIndex: Ie,
          oldDraggableIndex: Ve,
          newIndex: Fe,
          newDraggableIndex: $e,
          hideGhostForTarget: gt,
          unhideGhostForTarget: mt,
          cloneNowHidden: function () {
            Le = !0;
          },
          cloneNowShown: function () {
            Le = !1;
          },
          dispatchSortableEvent: function (e) {
            _e({ sortable: t, name: e, originalEvent: n });
          },
        },
        i,
      ),
    );
  };
function _e(e) {
  !(function (e) {
    var t = e.sortable,
      o = e.rootEl,
      n = e.name,
      i = e.targetEl,
      r = e.cloneEl,
      a = e.toEl,
      l = e.fromEl,
      s = e.oldIndex,
      c = e.newIndex,
      d = e.oldDraggableIndex,
      u = e.newDraggableIndex,
      h = e.originalEvent,
      p = e.putSortable,
      g = e.extraEventProperties;
    if ((t = t || (o && o[we]))) {
      var m,
        f = t.options,
        b = 'on' + n.charAt(0).toUpperCase() + n.substr(1);
      !window.CustomEvent || Z || j
        ? (m = document.createEvent('Event')).initEvent(n, !0, !0)
        : (m = new CustomEvent(n, { bubbles: !0, cancelable: !0 })),
        (m.to = a || o),
        (m.from = l || o),
        (m.item = i || o),
        (m.clone = r),
        (m.oldIndex = s),
        (m.newIndex = c),
        (m.oldDraggableIndex = d),
        (m.newDraggableIndex = u),
        (m.originalEvent = h),
        (m.pullMode = p ? p.lastPutMode : void 0);
      var v = V(V({}, g), Te.getEventProperties(n, t));
      for (var y in v) m[y] = v[y];
      o && o.dispatchEvent(m), f[b] && f[b].call(t, m);
    }
  })(
    V(
      {
        putSortable: Pe,
        cloneEl: Oe,
        targetEl: Se,
        rootEl: Be,
        oldIndex: Ie,
        oldDraggableIndex: Ve,
        newIndex: Fe,
        newDraggableIndex: $e,
      },
      e,
    ),
  );
}
var Se,
  xe,
  Ae,
  Be,
  De,
  Ne,
  Oe,
  Le,
  Ie,
  Fe,
  Ve,
  $e,
  ze,
  Pe,
  He,
  Re,
  Ze,
  je,
  Xe,
  We,
  Ye,
  Ge,
  Ue,
  Ke,
  Je,
  Qe = !1,
  et = !1,
  tt = [],
  ot = !1,
  nt = !1,
  it = [],
  rt = !1,
  at = [],
  lt = 'undefined' != typeof document,
  st = Y,
  ct = j || Z ? 'cssFloat' : 'float',
  dt = lt && !G && !Y && 'draggable' in document.createElement('div'),
  ut = (function () {
    if (lt) {
      if (Z) return !1;
      var e = document.createElement('x');
      return (e.style.cssText = 'pointer-events:auto'), 'auto' === e.style.pointerEvents;
    }
  })(),
  ht = function (e, t) {
    var o = re(e),
      n =
        parseInt(o.width) -
        parseInt(o.paddingLeft) -
        parseInt(o.paddingRight) -
        parseInt(o.borderLeftWidth) -
        parseInt(o.borderRightWidth),
      i = ue(e, 0, t),
      r = ue(e, 1, t),
      a = i && re(i),
      l = r && re(r),
      s = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + ce(i).width,
      c = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + ce(r).width;
    if ('flex' === o.display)
      return 'column' === o.flexDirection || 'column-reverse' === o.flexDirection
        ? 'vertical'
        : 'horizontal';
    if ('grid' === o.display)
      return o.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
    if (i && a.float && 'none' !== a.float) {
      var d = 'left' === a.float ? 'left' : 'right';
      return !r || ('both' !== l.clear && l.clear !== d) ? 'horizontal' : 'vertical';
    }
    return i &&
      ('block' === a.display ||
        'flex' === a.display ||
        'table' === a.display ||
        'grid' === a.display ||
        (s >= n && 'none' === o[ct]) ||
        (r && 'none' === o[ct] && s + c > n))
      ? 'vertical'
      : 'horizontal';
  },
  pt = function (e) {
    function t(e, o) {
      return function (n, i, r, a) {
        var l =
          n.options.group.name &&
          i.options.group.name &&
          n.options.group.name === i.options.group.name;
        if (null == e && (o || l)) return !0;
        if (null == e || !1 === e) return !1;
        if (o && 'clone' === e) return e;
        if ('function' == typeof e) return t(e(n, i, r, a), o)(n, i, r, a);
        var s = (o ? n : i).options.group.name;
        return !0 === e || ('string' == typeof e && e === s) || (e.join && e.indexOf(s) > -1);
      };
    }
    var o = {},
      n = e.group;
    (n && 'object' == $(n)) || (n = { name: n }),
      (o.name = n.name),
      (o.checkPull = t(n.pull, !0)),
      (o.checkPut = t(n.put)),
      (o.revertClone = n.revertClone),
      (e.group = o);
  },
  gt = function () {
    !ut && Ae && re(Ae, 'display', 'none');
  },
  mt = function () {
    !ut && Ae && re(Ae, 'display', '');
  };
lt &&
  !G &&
  document.addEventListener(
    'click',
    function (e) {
      if (et)
        return (
          e.preventDefault(),
          e.stopPropagation && e.stopPropagation(),
          e.stopImmediatePropagation && e.stopImmediatePropagation(),
          (et = !1),
          !1
        );
    },
    !0,
  );
var ft = function (e) {
    if (Se) {
      e = e.touches ? e.touches[0] : e;
      var t =
        ((i = e.clientX),
        (r = e.clientY),
        tt.some(function (e) {
          var t = e[we].options.emptyInsertThreshold;
          if (t && !he(e)) {
            var o = ce(e),
              n = i >= o.left - t && i <= o.right + t,
              l = r >= o.top - t && r <= o.bottom + t;
            return n && l ? (a = e) : void 0;
          }
        }),
        a);
      if (t) {
        var o = {};
        for (var n in e) e.hasOwnProperty(n) && (o[n] = e[n]);
        (o.target = o.rootEl = t),
          (o.preventDefault = void 0),
          (o.stopPropagation = void 0),
          t[we]._onDragOver(o);
      }
    }
    var i, r, a;
  },
  bt = function (e) {
    Se && Se.parentNode[we]._isOutsideThisEl(e.target);
  };
function vt(e, t) {
  if (!e || !e.nodeType || 1 !== e.nodeType)
    throw 'Sortable: `el` must be an HTMLElement, not '.concat({}.toString.call(e));
  (this.el = e), (this.options = t = P({}, t)), (e[we] = this);
  var o = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function () {
      return ht(e, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function (e, t) {
      e.setData('Text', t.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold:
      (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: { x: 0, y: 0 },
    supportPointer: !1 !== vt.supportPointer && 'PointerEvent' in window && !W,
    emptyInsertThreshold: 5,
  };
  for (var n in (Te.initializePlugins(this, e, o), o)) !(n in t) && (t[n] = o[n]);
  for (var i in (pt(t), this))
    '_' === i.charAt(0) && 'function' == typeof this[i] && (this[i] = this[i].bind(this));
  (this.nativeDraggable = !t.forceFallback && dt),
    this.nativeDraggable && (this.options.touchStartThreshold = 1),
    t.supportPointer
      ? K(e, 'pointerdown', this._onTapStart)
      : (K(e, 'mousedown', this._onTapStart), K(e, 'touchstart', this._onTapStart)),
    this.nativeDraggable && (K(e, 'dragover', this), K(e, 'dragenter', this)),
    tt.push(this.el),
    t.store && t.store.get && this.sort(t.store.get(this) || []),
    P(this, Ce());
}
function yt(e, t, o, n, i, r, a, l) {
  var s,
    c,
    d = e[we],
    u = d.options.onMove;
  return (
    !window.CustomEvent || Z || j
      ? (s = document.createEvent('Event')).initEvent('move', !0, !0)
      : (s = new CustomEvent('move', { bubbles: !0, cancelable: !0 })),
    (s.to = t),
    (s.from = e),
    (s.dragged = o),
    (s.draggedRect = n),
    (s.related = i || t),
    (s.relatedRect = r || ce(t)),
    (s.willInsertAfter = l),
    (s.originalEvent = a),
    e.dispatchEvent(s),
    u && (c = u.call(d, s, a)),
    c
  );
}
function wt(e) {
  e.draggable = !1;
}
function Ct() {
  rt = !1;
}
function kt(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, o = t.length, n = 0; o--; )
    n += t.charCodeAt(o);
  return n.toString(36);
}
function qt(e) {
  return setTimeout(e, 0);
}
function Tt(e) {
  return clearTimeout(e);
}
(vt.prototype = {
  constructor: vt,
  _isOutsideThisEl: function (e) {
    this.el.contains(e) || e === this.el || (Ge = null);
  },
  _getDirection: function (e, t) {
    return 'function' == typeof this.options.direction
      ? this.options.direction.call(this, e, t, Se)
      : this.options.direction;
  },
  _onTapStart: function (e) {
    if (e.cancelable) {
      var t = this,
        o = this.el,
        n = this.options,
        i = n.preventOnFilter,
        r = e.type,
        a = (e.touches && e.touches[0]) || (e.pointerType && 'touch' === e.pointerType && e),
        l = (a || e).target,
        s =
          (e.target.shadowRoot &&
            ((e.path && e.path[0]) || (e.composedPath && e.composedPath()[0]))) ||
          l,
        c = n.filter;
      if (
        ((function (e) {
          at.length = 0;
          var t = e.getElementsByTagName('input'),
            o = t.length;
          for (; o--; ) {
            var n = t[o];
            n.checked && at.push(n);
          }
        })(o),
        !Se &&
          !((/mousedown|pointerdown/.test(r) && 0 !== e.button) || n.disabled) &&
          !s.isContentEditable &&
          (this.nativeDraggable || !W || !l || 'SELECT' !== l.tagName.toUpperCase()) &&
          !(((l = te(l, n.draggable, o, !1)) && l.animated) || Ne === l))
      ) {
        if (((Ie = pe(l)), (Ve = pe(l, n.draggable)), 'function' == typeof c)) {
          if (c.call(this, e, l, this))
            return (
              _e({ sortable: t, rootEl: s, name: 'filter', targetEl: l, toEl: o, fromEl: o }),
              Ee('filter', t, { evt: e }),
              void (i && e.cancelable && e.preventDefault())
            );
        } else if (
          c &&
          (c = c.split(',').some(function (n) {
            if ((n = te(s, n.trim(), o, !1)))
              return (
                _e({ sortable: t, rootEl: n, name: 'filter', targetEl: l, fromEl: o, toEl: o }),
                Ee('filter', t, { evt: e }),
                !0
              );
          }))
        )
          return void (i && e.cancelable && e.preventDefault());
        (n.handle && !te(s, n.handle, o, !1)) || this._prepareDragStart(e, a, l);
      }
    }
  },
  _prepareDragStart: function (e, t, o) {
    var n,
      i = this,
      r = i.el,
      a = i.options,
      l = r.ownerDocument;
    if (o && !Se && o.parentNode === r) {
      var s = ce(o);
      if (
        ((Be = r),
        (xe = (Se = o).parentNode),
        (De = Se.nextSibling),
        (Ne = o),
        (ze = a.group),
        (vt.dragged = Se),
        (He = { target: Se, clientX: (t || e).clientX, clientY: (t || e).clientY }),
        (Xe = He.clientX - s.left),
        (We = He.clientY - s.top),
        (this._lastX = (t || e).clientX),
        (this._lastY = (t || e).clientY),
        (Se.style['will-change'] = 'all'),
        (n = function () {
          Ee('delayEnded', i, { evt: e }),
            vt.eventCanceled
              ? i._onDrop()
              : (i._disableDelayedDragEvents(),
                !X && i.nativeDraggable && (Se.draggable = !0),
                i._triggerDragStart(e, t),
                _e({ sortable: i, name: 'choose', originalEvent: e }),
                ie(Se, a.chosenClass, !0));
        }),
        a.ignore.split(',').forEach(function (e) {
          le(Se, e.trim(), wt);
        }),
        K(l, 'dragover', ft),
        K(l, 'mousemove', ft),
        K(l, 'touchmove', ft),
        K(l, 'mouseup', i._onDrop),
        K(l, 'touchend', i._onDrop),
        K(l, 'touchcancel', i._onDrop),
        X && this.nativeDraggable && ((this.options.touchStartThreshold = 4), (Se.draggable = !0)),
        Ee('delayStart', this, { evt: e }),
        !a.delay || (a.delayOnTouchOnly && !t) || (this.nativeDraggable && (j || Z)))
      )
        n();
      else {
        if (vt.eventCanceled) return void this._onDrop();
        K(l, 'mouseup', i._disableDelayedDrag),
          K(l, 'touchend', i._disableDelayedDrag),
          K(l, 'touchcancel', i._disableDelayedDrag),
          K(l, 'mousemove', i._delayedDragTouchMoveHandler),
          K(l, 'touchmove', i._delayedDragTouchMoveHandler),
          a.supportPointer && K(l, 'pointermove', i._delayedDragTouchMoveHandler),
          (i._dragStartTimer = setTimeout(n, a.delay));
      }
    }
  },
  _delayedDragTouchMoveHandler: function (e) {
    var t = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >=
      Math.floor(
        this.options.touchStartThreshold / ((this.nativeDraggable && window.devicePixelRatio) || 1),
      ) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function () {
    Se && wt(Se), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function () {
    var e = this.el.ownerDocument;
    J(e, 'mouseup', this._disableDelayedDrag),
      J(e, 'touchend', this._disableDelayedDrag),
      J(e, 'touchcancel', this._disableDelayedDrag),
      J(e, 'mousemove', this._delayedDragTouchMoveHandler),
      J(e, 'touchmove', this._delayedDragTouchMoveHandler),
      J(e, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function (e, t) {
    (t = t || ('touch' == e.pointerType && e)),
      !this.nativeDraggable || t
        ? this.options.supportPointer
          ? K(document, 'pointermove', this._onTouchMove)
          : K(document, t ? 'touchmove' : 'mousemove', this._onTouchMove)
        : (K(Se, 'dragend', this), K(Be, 'dragstart', this._onDragStart));
    try {
      document.selection
        ? qt(function () {
            document.selection.empty();
          })
        : window.getSelection().removeAllRanges();
    } catch (e) {}
  },
  _dragStarted: function (e, t) {
    if (((Qe = !1), Be && Se)) {
      Ee('dragStarted', this, { evt: t }), this.nativeDraggable && K(document, 'dragover', bt);
      var o = this.options;
      !e && ie(Se, o.dragClass, !1),
        ie(Se, o.ghostClass, !0),
        (vt.active = this),
        e && this._appendGhost(),
        _e({ sortable: this, name: 'start', originalEvent: t });
    } else this._nulling();
  },
  _emulateDragOver: function () {
    if (Re) {
      (this._lastX = Re.clientX), (this._lastY = Re.clientY), gt();
      for (
        var e = document.elementFromPoint(Re.clientX, Re.clientY), t = e;
        e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Re.clientX, Re.clientY)) !== t;

      )
        t = e;
      if ((Se.parentNode[we]._isOutsideThisEl(e), t))
        do {
          if (t[we]) {
            if (
              t[we]._onDragOver({
                clientX: Re.clientX,
                clientY: Re.clientY,
                target: e,
                rootEl: t,
              }) &&
              !this.options.dragoverBubble
            )
              break;
          }
          e = t;
        } while ((t = t.parentNode));
      mt();
    }
  },
  _onTouchMove: function (e) {
    if (He) {
      var t = this.options,
        o = t.fallbackTolerance,
        n = t.fallbackOffset,
        i = e.touches ? e.touches[0] : e,
        r = Ae && ae(Ae, !0),
        a = Ae && r && r.a,
        l = Ae && r && r.d,
        s = st && Je && ge(Je),
        c = (i.clientX - He.clientX + n.x) / (a || 1) + (s ? s[0] - it[0] : 0) / (a || 1),
        d = (i.clientY - He.clientY + n.y) / (l || 1) + (s ? s[1] - it[1] : 0) / (l || 1);
      if (!vt.active && !Qe) {
        if (o && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < o)
          return;
        this._onDragStart(e, !0);
      }
      if (Ae) {
        r
          ? ((r.e += c - (Ze || 0)), (r.f += d - (je || 0)))
          : (r = { a: 1, b: 0, c: 0, d: 1, e: c, f: d });
        var u = 'matrix('
          .concat(r.a, ',')
          .concat(r.b, ',')
          .concat(r.c, ',')
          .concat(r.d, ',')
          .concat(r.e, ',')
          .concat(r.f, ')');
        re(Ae, 'webkitTransform', u),
          re(Ae, 'mozTransform', u),
          re(Ae, 'msTransform', u),
          re(Ae, 'transform', u),
          (Ze = c),
          (je = d),
          (Re = i);
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function () {
    if (!Ae) {
      var e = this.options.fallbackOnBody ? document.body : Be,
        t = ce(Se, !0, st, !0, e),
        o = this.options;
      if (st) {
        for (
          Je = e;
          'static' === re(Je, 'position') && 'none' === re(Je, 'transform') && Je !== document;

        )
          Je = Je.parentNode;
        Je !== document.body && Je !== document.documentElement
          ? (Je === document && (Je = se()), (t.top += Je.scrollTop), (t.left += Je.scrollLeft))
          : (Je = se()),
          (it = ge(Je));
      }
      ie((Ae = Se.cloneNode(!0)), o.ghostClass, !1),
        ie(Ae, o.fallbackClass, !0),
        ie(Ae, o.dragClass, !0),
        re(Ae, 'transition', ''),
        re(Ae, 'transform', ''),
        re(Ae, 'box-sizing', 'border-box'),
        re(Ae, 'margin', 0),
        re(Ae, 'top', t.top),
        re(Ae, 'left', t.left),
        re(Ae, 'width', t.width),
        re(Ae, 'height', t.height),
        re(Ae, 'opacity', '0.8'),
        re(Ae, 'position', st ? 'absolute' : 'fixed'),
        re(Ae, 'zIndex', '100000'),
        re(Ae, 'pointerEvents', 'none'),
        (vt.ghost = Ae),
        e.appendChild(Ae),
        re(
          Ae,
          'transform-origin',
          (Xe / parseInt(Ae.style.width)) * 100 +
            '% ' +
            (We / parseInt(Ae.style.height)) * 100 +
            '%',
        );
    }
  },
  _onDragStart: function (e, t) {
    var o = this,
      n = e.dataTransfer,
      i = o.options;
    Ee('dragStart', this, { evt: e }),
      vt.eventCanceled
        ? this._onDrop()
        : (Ee('setupClone', this),
          vt.eventCanceled ||
            ((Oe = ye(Se)).removeAttribute('id'),
            (Oe.draggable = !1),
            (Oe.style['will-change'] = ''),
            this._hideClone(),
            ie(Oe, this.options.chosenClass, !1),
            (vt.clone = Oe)),
          (o.cloneId = qt(function () {
            Ee('clone', o),
              vt.eventCanceled ||
                (o.options.removeCloneOnHide || Be.insertBefore(Oe, Se),
                o._hideClone(),
                _e({ sortable: o, name: 'clone' }));
          })),
          !t && ie(Se, i.dragClass, !0),
          t
            ? ((et = !0), (o._loopId = setInterval(o._emulateDragOver, 50)))
            : (J(document, 'mouseup', o._onDrop),
              J(document, 'touchend', o._onDrop),
              J(document, 'touchcancel', o._onDrop),
              n && ((n.effectAllowed = 'move'), i.setData && i.setData.call(o, n, Se)),
              K(document, 'drop', o),
              re(Se, 'transform', 'translateZ(0)')),
          (Qe = !0),
          (o._dragStartId = qt(o._dragStarted.bind(o, t, e))),
          K(document, 'selectstart', o),
          (Ye = !0),
          W && re(document.body, 'user-select', 'none'));
  },
  _onDragOver: function (e) {
    var t,
      o,
      n,
      i,
      r = this.el,
      a = e.target,
      l = this.options,
      s = l.group,
      c = vt.active,
      d = ze === s,
      u = l.sort,
      h = Pe || c,
      p = this,
      g = !1;
    if (!rt) {
      if (
        (void 0 !== e.preventDefault && e.cancelable && e.preventDefault(),
        (a = te(a, l.draggable, r, !0)),
        x('dragOver'),
        vt.eventCanceled)
      )
        return g;
      if (
        Se.contains(e.target) ||
        (a.animated && a.animatingX && a.animatingY) ||
        p._ignoreWhileAnimating === a
      )
        return B(!1);
      if (
        ((et = !1),
        c &&
          !l.disabled &&
          (d
            ? u || (n = xe !== Be)
            : Pe === this ||
              ((this.lastPutMode = ze.checkPull(this, c, Se, e)) && s.checkPut(this, c, Se, e))))
      ) {
        if (
          ((i = 'vertical' === this._getDirection(e, a)),
          (t = ce(Se)),
          x('dragOverValid'),
          vt.eventCanceled)
        )
          return g;
        if (n)
          return (
            (xe = Be),
            A(),
            this._hideClone(),
            x('revert'),
            vt.eventCanceled || (De ? Be.insertBefore(Se, De) : Be.appendChild(Se)),
            B(!0)
          );
        var m = he(r, l.draggable);
        if (
          !m ||
          ((function (e, t, o) {
            var n = ce(he(o.el, o.options.draggable)),
              i = 10;
            return t
              ? e.clientX > n.right + i ||
                  (e.clientX <= n.right && e.clientY > n.bottom && e.clientX >= n.left)
              : (e.clientX > n.right && e.clientY > n.top) ||
                  (e.clientX <= n.right && e.clientY > n.bottom + i);
          })(e, i, this) &&
            !m.animated)
        ) {
          if (m === Se) return B(!1);
          if (
            (m && r === e.target && (a = m),
            a && (o = ce(a)),
            !1 !== yt(Be, r, Se, t, a, o, e, !!a))
          )
            return (
              A(),
              m && m.nextSibling ? r.insertBefore(Se, m.nextSibling) : r.appendChild(Se),
              (xe = r),
              D(),
              B(!0)
            );
        } else if (
          m &&
          (function (e, t, o) {
            var n = ce(ue(o.el, 0, o.options, !0)),
              i = 10;
            return t
              ? e.clientX < n.left - i || (e.clientY < n.top && e.clientX < n.right)
              : e.clientY < n.top - i || (e.clientY < n.bottom && e.clientX < n.left);
          })(e, i, this)
        ) {
          var f = ue(r, 0, l, !0);
          if (f === Se) return B(!1);
          if (((o = ce((a = f))), !1 !== yt(Be, r, Se, t, a, o, e, !1)))
            return A(), r.insertBefore(Se, f), (xe = r), D(), B(!0);
        } else if (a.parentNode === r) {
          o = ce(a);
          var b,
            v,
            y,
            w = Se.parentNode !== r,
            C = !(function (e, t, o) {
              var n = o ? e.left : e.top,
                i = o ? e.right : e.bottom,
                r = o ? e.width : e.height,
                a = o ? t.left : t.top,
                l = o ? t.right : t.bottom,
                s = o ? t.width : t.height;
              return n === a || i === l || n + r / 2 === a + s / 2;
            })((Se.animated && Se.toRect) || t, (a.animated && a.toRect) || o, i),
            k = i ? 'top' : 'left',
            q = de(a, 'top', 'top') || de(Se, 'top', 'top'),
            T = q ? q.scrollTop : void 0;
          if (
            (Ge !== a && ((v = o[k]), (ot = !1), (nt = (!C && l.invertSwap) || w)),
            (b = (function (e, t, o, n, i, r, a, l) {
              var s = n ? e.clientY : e.clientX,
                c = n ? o.height : o.width,
                d = n ? o.top : o.left,
                u = n ? o.bottom : o.right,
                h = !1;
              if (!a)
                if (l && Ke < c * i) {
                  if (
                    (!ot && (1 === Ue ? s > d + (c * r) / 2 : s < u - (c * r) / 2) && (ot = !0), ot)
                  )
                    h = !0;
                  else if (1 === Ue ? s < d + Ke : s > u - Ke) return -Ue;
                } else if (s > d + (c * (1 - i)) / 2 && s < u - (c * (1 - i)) / 2)
                  return (function (e) {
                    return pe(Se) < pe(e) ? 1 : -1;
                  })(t);
              if ((h = h || a) && (s < d + (c * r) / 2 || s > u - (c * r) / 2))
                return s > d + c / 2 ? 1 : -1;
              return 0;
            })(
              e,
              a,
              o,
              i,
              C ? 1 : l.swapThreshold,
              null == l.invertedSwapThreshold ? l.swapThreshold : l.invertedSwapThreshold,
              nt,
              Ge === a,
            )),
            0 !== b)
          ) {
            var M = pe(Se);
            do {
              (M -= b), (y = xe.children[M]);
            } while (y && ('none' === re(y, 'display') || y === Ae));
          }
          if (0 === b || y === a) return B(!1);
          (Ge = a), (Ue = b);
          var E = a.nextElementSibling,
            _ = !1,
            S = yt(Be, r, Se, t, a, o, e, (_ = 1 === b));
          if (!1 !== S)
            return (
              (1 !== S && -1 !== S) || (_ = 1 === S),
              (rt = !0),
              setTimeout(Ct, 30),
              A(),
              _ && !E ? r.appendChild(Se) : a.parentNode.insertBefore(Se, _ ? E : a),
              q && ve(q, 0, T - q.scrollTop),
              (xe = Se.parentNode),
              void 0 === v || nt || (Ke = Math.abs(v - ce(a)[k])),
              D(),
              B(!0)
            );
        }
        if (r.contains(Se)) return B(!1);
      }
      return !1;
    }
    function x(l, s) {
      Ee(
        l,
        p,
        V(
          {
            evt: e,
            isOwner: d,
            axis: i ? 'vertical' : 'horizontal',
            revert: n,
            dragRect: t,
            targetRect: o,
            canSort: u,
            fromSortable: h,
            target: a,
            completed: B,
            onMove: function (o, n) {
              return yt(Be, r, Se, t, o, ce(o), e, n);
            },
            changed: D,
          },
          s,
        ),
      );
    }
    function A() {
      x('dragOverAnimationCapture'),
        p.captureAnimationState(),
        p !== h && h.captureAnimationState();
    }
    function B(t) {
      return (
        x('dragOverCompleted', { insertion: t }),
        t &&
          (d ? c._hideClone() : c._showClone(p),
          p !== h &&
            (ie(Se, Pe ? Pe.options.ghostClass : c.options.ghostClass, !1),
            ie(Se, l.ghostClass, !0)),
          Pe !== p && p !== vt.active ? (Pe = p) : p === vt.active && Pe && (Pe = null),
          h === p && (p._ignoreWhileAnimating = a),
          p.animateAll(function () {
            x('dragOverAnimationComplete'), (p._ignoreWhileAnimating = null);
          }),
          p !== h && (h.animateAll(), (h._ignoreWhileAnimating = null))),
        ((a === Se && !Se.animated) || (a === r && !a.animated)) && (Ge = null),
        l.dragoverBubble ||
          e.rootEl ||
          a === document ||
          (Se.parentNode[we]._isOutsideThisEl(e.target), !t && ft(e)),
        !l.dragoverBubble && e.stopPropagation && e.stopPropagation(),
        (g = !0)
      );
    }
    function D() {
      (Fe = pe(Se)),
        ($e = pe(Se, l.draggable)),
        _e({
          sortable: p,
          name: 'change',
          toEl: r,
          newIndex: Fe,
          newDraggableIndex: $e,
          originalEvent: e,
        });
    }
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function () {
    J(document, 'mousemove', this._onTouchMove),
      J(document, 'touchmove', this._onTouchMove),
      J(document, 'pointermove', this._onTouchMove),
      J(document, 'dragover', ft),
      J(document, 'mousemove', ft),
      J(document, 'touchmove', ft);
  },
  _offUpEvents: function () {
    var e = this.el.ownerDocument;
    J(e, 'mouseup', this._onDrop),
      J(e, 'touchend', this._onDrop),
      J(e, 'pointerup', this._onDrop),
      J(e, 'touchcancel', this._onDrop),
      J(document, 'selectstart', this);
  },
  _onDrop: function (e) {
    var t = this.el,
      o = this.options;
    (Fe = pe(Se)),
      ($e = pe(Se, o.draggable)),
      Ee('drop', this, { evt: e }),
      (xe = Se && Se.parentNode),
      (Fe = pe(Se)),
      ($e = pe(Se, o.draggable)),
      vt.eventCanceled ||
        ((Qe = !1),
        (nt = !1),
        (ot = !1),
        clearInterval(this._loopId),
        clearTimeout(this._dragStartTimer),
        Tt(this.cloneId),
        Tt(this._dragStartId),
        this.nativeDraggable && (J(document, 'drop', this), J(t, 'dragstart', this._onDragStart)),
        this._offMoveEvents(),
        this._offUpEvents(),
        W && re(document.body, 'user-select', ''),
        re(Se, 'transform', ''),
        e &&
          (Ye && (e.cancelable && e.preventDefault(), !o.dropBubble && e.stopPropagation()),
          Ae && Ae.parentNode && Ae.parentNode.removeChild(Ae),
          (Be === xe || (Pe && 'clone' !== Pe.lastPutMode)) &&
            Oe &&
            Oe.parentNode &&
            Oe.parentNode.removeChild(Oe),
          Se &&
            (this.nativeDraggable && J(Se, 'dragend', this),
            wt(Se),
            (Se.style['will-change'] = ''),
            Ye && !Qe && ie(Se, Pe ? Pe.options.ghostClass : this.options.ghostClass, !1),
            ie(Se, this.options.chosenClass, !1),
            _e({
              sortable: this,
              name: 'unchoose',
              toEl: xe,
              newIndex: null,
              newDraggableIndex: null,
              originalEvent: e,
            }),
            Be !== xe
              ? (Fe >= 0 &&
                  (_e({ rootEl: xe, name: 'add', toEl: xe, fromEl: Be, originalEvent: e }),
                  _e({ sortable: this, name: 'remove', toEl: xe, originalEvent: e }),
                  _e({ rootEl: xe, name: 'sort', toEl: xe, fromEl: Be, originalEvent: e }),
                  _e({ sortable: this, name: 'sort', toEl: xe, originalEvent: e })),
                Pe && Pe.save())
              : Fe !== Ie &&
                Fe >= 0 &&
                (_e({ sortable: this, name: 'update', toEl: xe, originalEvent: e }),
                _e({ sortable: this, name: 'sort', toEl: xe, originalEvent: e })),
            vt.active &&
              ((null != Fe && -1 !== Fe) || ((Fe = Ie), ($e = Ve)),
              _e({ sortable: this, name: 'end', toEl: xe, originalEvent: e }),
              this.save())))),
      this._nulling();
  },
  _nulling: function () {
    Ee('nulling', this),
      (Be =
        Se =
        xe =
        Ae =
        De =
        Oe =
        Ne =
        Le =
        He =
        Re =
        Ye =
        Fe =
        $e =
        Ie =
        Ve =
        Ge =
        Ue =
        Pe =
        ze =
        vt.dragged =
        vt.ghost =
        vt.clone =
        vt.active =
          null),
      at.forEach(function (e) {
        e.checked = !0;
      }),
      (at.length = Ze = je = 0);
  },
  handleEvent: function (e) {
    switch (e.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(e);
        break;
      case 'dragenter':
      case 'dragover':
        Se &&
          (this._onDragOver(e),
          (function (e) {
            e.dataTransfer && (e.dataTransfer.dropEffect = 'move');
            e.cancelable && e.preventDefault();
          })(e));
        break;
      case 'selectstart':
        e.preventDefault();
    }
  },
  toArray: function () {
    for (var e, t = [], o = this.el.children, n = 0, i = o.length, r = this.options; n < i; n++)
      te((e = o[n]), r.draggable, this.el, !1) && t.push(e.getAttribute(r.dataIdAttr) || kt(e));
    return t;
  },
  sort: function (e, t) {
    var o = {},
      n = this.el;
    this.toArray().forEach(function (e, t) {
      var i = n.children[t];
      te(i, this.options.draggable, n, !1) && (o[e] = i);
    }, this),
      t && this.captureAnimationState(),
      e.forEach(function (e) {
        o[e] && (n.removeChild(o[e]), n.appendChild(o[e]));
      }),
      t && this.animateAll();
  },
  save: function () {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  closest: function (e, t) {
    return te(e, t || this.options.draggable, this.el, !1);
  },
  option: function (e, t) {
    var o = this.options;
    if (void 0 === t) return o[e];
    var n = Te.modifyOption(this, e, t);
    (o[e] = void 0 !== n ? n : t), 'group' === e && pt(o);
  },
  destroy: function () {
    Ee('destroy', this);
    var e = this.el;
    (e[we] = null),
      J(e, 'mousedown', this._onTapStart),
      J(e, 'touchstart', this._onTapStart),
      J(e, 'pointerdown', this._onTapStart),
      this.nativeDraggable && (J(e, 'dragover', this), J(e, 'dragenter', this)),
      Array.prototype.forEach.call(e.querySelectorAll('[draggable]'), function (e) {
        e.removeAttribute('draggable');
      }),
      this._onDrop(),
      this._disableDelayedDragEvents(),
      tt.splice(tt.indexOf(this.el), 1),
      (this.el = e = null);
  },
  _hideClone: function () {
    if (!Le) {
      if ((Ee('hideClone', this), vt.eventCanceled)) return;
      re(Oe, 'display', 'none'),
        this.options.removeCloneOnHide && Oe.parentNode && Oe.parentNode.removeChild(Oe),
        (Le = !0);
    }
  },
  _showClone: function (e) {
    if ('clone' === e.lastPutMode) {
      if (Le) {
        if ((Ee('showClone', this), vt.eventCanceled)) return;
        Se.parentNode != Be || this.options.group.revertClone
          ? De
            ? Be.insertBefore(Oe, De)
            : Be.appendChild(Oe)
          : Be.insertBefore(Oe, Se),
          this.options.group.revertClone && this.animate(Se, Oe),
          re(Oe, 'display', ''),
          (Le = !1);
      }
    } else this._hideClone();
  },
}),
  lt &&
    K(document, 'touchmove', function (e) {
      (vt.active || Qe) && e.cancelable && e.preventDefault();
    }),
  (vt.utils = {
    on: K,
    off: J,
    css: re,
    find: le,
    is: function (e, t) {
      return !!te(e, t, e, !1);
    },
    extend: function (e, t) {
      if (e && t) for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
      return e;
    },
    throttle: be,
    closest: te,
    toggleClass: ie,
    clone: ye,
    index: pe,
    nextTick: qt,
    cancelNextTick: Tt,
    detectDirection: ht,
    getChild: ue,
  }),
  (vt.get = function (e) {
    return e[we];
  }),
  (vt.mount = function () {
    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
    t[0].constructor === Array && (t = t[0]),
      t.forEach(function (e) {
        if (!e.prototype || !e.prototype.constructor)
          throw 'Sortable: Mounted plugin must be a constructor function, not '.concat(
            {}.toString.call(e),
          );
        e.utils && (vt.utils = V(V({}, vt.utils), e.utils)), Te.mount(e);
      });
  }),
  (vt.create = function (e, t) {
    return new vt(e, t);
  }),
  (vt.version = '1.15.0');
var Mt,
  Et,
  _t,
  St,
  xt,
  At,
  Bt = [],
  Dt = !1;
function Nt() {
  Bt.forEach(function (e) {
    clearInterval(e.pid);
  }),
    (Bt = []);
}
function Ot() {
  clearInterval(At);
}
var Lt = be(function (e, t, o, n) {
    if (t.scroll) {
      var i,
        r = (e.touches ? e.touches[0] : e).clientX,
        a = (e.touches ? e.touches[0] : e).clientY,
        l = t.scrollSensitivity,
        s = t.scrollSpeed,
        c = se(),
        d = !1;
      Et !== o &&
        ((Et = o), Nt(), (Mt = t.scroll), (i = t.scrollFn), !0 === Mt && (Mt = me(o, !0)));
      var u = 0,
        h = Mt;
      do {
        var p = h,
          g = ce(p),
          m = g.top,
          f = g.bottom,
          b = g.left,
          v = g.right,
          y = g.width,
          w = g.height,
          C = void 0,
          k = void 0,
          q = p.scrollWidth,
          T = p.scrollHeight,
          M = re(p),
          E = p.scrollLeft,
          _ = p.scrollTop;
        p === c
          ? ((C =
              y < q &&
              ('auto' === M.overflowX || 'scroll' === M.overflowX || 'visible' === M.overflowX)),
            (k =
              w < T &&
              ('auto' === M.overflowY || 'scroll' === M.overflowY || 'visible' === M.overflowY)))
          : ((C = y < q && ('auto' === M.overflowX || 'scroll' === M.overflowX)),
            (k = w < T && ('auto' === M.overflowY || 'scroll' === M.overflowY)));
        var S = C && (Math.abs(v - r) <= l && E + y < q) - (Math.abs(b - r) <= l && !!E),
          x = k && (Math.abs(f - a) <= l && _ + w < T) - (Math.abs(m - a) <= l && !!_);
        if (!Bt[u]) for (var A = 0; A <= u; A++) Bt[A] || (Bt[A] = {});
        (Bt[u].vx == S && Bt[u].vy == x && Bt[u].el === p) ||
          ((Bt[u].el = p),
          (Bt[u].vx = S),
          (Bt[u].vy = x),
          clearInterval(Bt[u].pid),
          (0 == S && 0 == x) ||
            ((d = !0),
            (Bt[u].pid = setInterval(
              function () {
                n && 0 === this.layer && vt.active._onTouchMove(xt);
                var t = Bt[this.layer].vy ? Bt[this.layer].vy * s : 0,
                  o = Bt[this.layer].vx ? Bt[this.layer].vx * s : 0;
                ('function' == typeof i &&
                  'continue' !==
                    i.call(vt.dragged.parentNode[we], o, t, e, xt, Bt[this.layer].el)) ||
                  ve(Bt[this.layer].el, o, t);
              }.bind({ layer: u }),
              24,
            )))),
          u++;
      } while (t.bubbleScroll && h !== c && (h = me(h, !1)));
      Dt = d;
    }
  }, 30),
  It = function (e) {
    var t = e.originalEvent,
      o = e.putSortable,
      n = e.dragEl,
      i = e.activeSortable,
      r = e.dispatchSortableEvent,
      a = e.hideGhostForTarget,
      l = e.unhideGhostForTarget;
    if (t) {
      var s = o || i;
      a();
      var c = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t,
        d = document.elementFromPoint(c.clientX, c.clientY);
      l(), s && !s.el.contains(d) && (r('spill'), this.onSpill({ dragEl: n, putSortable: o }));
    }
  };
function Ft() {}
function Vt() {}
function $t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
(Ft.prototype = {
  startIndex: null,
  dragStart: function (e) {
    var t = e.oldDraggableIndex;
    this.startIndex = t;
  },
  onSpill: function (e) {
    var t = e.dragEl,
      o = e.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var n = ue(this.sortable.el, this.startIndex, this.options);
    n ? this.sortable.el.insertBefore(t, n) : this.sortable.el.appendChild(t),
      this.sortable.animateAll(),
      o && o.animateAll();
  },
  drop: It,
}),
  P(Ft, { pluginName: 'revertOnSpill' }),
  (Vt.prototype = {
    onSpill: function (e) {
      var t = e.dragEl,
        o = e.putSortable || this.sortable;
      o.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), o.animateAll();
    },
    drop: It,
  }),
  P(Vt, { pluginName: 'removeOnSpill' }),
  vt.mount(
    new (function () {
      function e() {
        for (var e in ((this.defaults = {
          scroll: !0,
          forceAutoScrollFallback: !1,
          scrollSensitivity: 30,
          scrollSpeed: 10,
          bubbleScroll: !0,
        }),
        this))
          '_' === e.charAt(0) && 'function' == typeof this[e] && (this[e] = this[e].bind(this));
      }
      return (
        (e.prototype = {
          dragStarted: function (e) {
            var t = e.originalEvent;
            this.sortable.nativeDraggable
              ? K(document, 'dragover', this._handleAutoScroll)
              : this.options.supportPointer
              ? K(document, 'pointermove', this._handleFallbackAutoScroll)
              : t.touches
              ? K(document, 'touchmove', this._handleFallbackAutoScroll)
              : K(document, 'mousemove', this._handleFallbackAutoScroll);
          },
          dragOverCompleted: function (e) {
            var t = e.originalEvent;
            this.options.dragOverBubble || t.rootEl || this._handleAutoScroll(t);
          },
          drop: function () {
            this.sortable.nativeDraggable
              ? J(document, 'dragover', this._handleAutoScroll)
              : (J(document, 'pointermove', this._handleFallbackAutoScroll),
                J(document, 'touchmove', this._handleFallbackAutoScroll),
                J(document, 'mousemove', this._handleFallbackAutoScroll)),
              Ot(),
              Nt(),
              clearTimeout(oe),
              (oe = void 0);
          },
          nulling: function () {
            (xt = Et = Mt = Dt = At = _t = St = null), (Bt.length = 0);
          },
          _handleFallbackAutoScroll: function (e) {
            this._handleAutoScroll(e, !0);
          },
          _handleAutoScroll: function (e, t) {
            var o = this,
              n = (e.touches ? e.touches[0] : e).clientX,
              i = (e.touches ? e.touches[0] : e).clientY,
              r = document.elementFromPoint(n, i);
            if (((xt = e), t || this.options.forceAutoScrollFallback || j || Z || W)) {
              Lt(e, this.options, r, t);
              var a = me(r, !0);
              !Dt ||
                (At && n === _t && i === St) ||
                (At && Ot(),
                (At = setInterval(function () {
                  var r = me(document.elementFromPoint(n, i), !0);
                  r !== a && ((a = r), Nt()), Lt(e, o.options, r, t);
                }, 10)),
                (_t = n),
                (St = i));
            } else {
              if (!this.options.bubbleScroll || me(r, !0) === se()) return void Nt();
              Lt(e, this.options, me(r, !1), !1);
            }
          },
        }),
        P(e, { pluginName: 'scroll', initializeByDefault: !0 })
      );
    })(),
  ),
  vt.mount(Vt, Ft);
/*! Pickr 1.8.2 MIT | https://github.com/Simonwep/pickr */
var zt = (function (e) {
    var t = { exports: {} };
    return e(t, t.exports), t.exports;
  })(function (e, t) {
    self,
      (e.exports = (() => {
        var e = {
            d: (t, o) => {
              for (var n in o)
                e.o(o, n) &&
                  !e.o(t, n) &&
                  Object.defineProperty(t, n, { enumerable: !0, get: o[n] });
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: (e) => {
              'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
            },
          },
          t = {};
        e.d(t, { default: () => x });
        var o = {};
        function n(e, t, o, n, i = {}) {
          t instanceof HTMLCollection || t instanceof NodeList
            ? (t = Array.from(t))
            : Array.isArray(t) || (t = [t]),
            Array.isArray(o) || (o = [o]);
          for (const r of t) for (const t of o) r[e](t, n, { capture: !1, ...i });
          return Array.prototype.slice.call(arguments, 1);
        }
        e.r(o),
          e.d(o, {
            adjustableInputNumbers: () => d,
            createElementFromString: () => a,
            createFromTemplate: () => l,
            eventPath: () => s,
            off: () => r,
            on: () => i,
            resolveElement: () => c,
          });
        const i = n.bind(null, 'addEventListener'),
          r = n.bind(null, 'removeEventListener');
        function a(e) {
          const t = document.createElement('div');
          return (t.innerHTML = e.trim()), t.firstElementChild;
        }
        function l(e) {
          const t = (e, t) => {
              const o = e.getAttribute(t);
              return e.removeAttribute(t), o;
            },
            o = (e, n = {}) => {
              const i = t(e, ':obj'),
                r = t(e, ':ref'),
                a = i ? (n[i] = {}) : n;
              r && (n[r] = e);
              for (const n of Array.from(e.children)) {
                const e = t(n, ':arr'),
                  i = o(n, e ? {} : a);
                e && (a[e] || (a[e] = [])).push(Object.keys(i).length ? i : n);
              }
              return n;
            };
          return o(a(e));
        }
        function s(e) {
          let t = e.path || (e.composedPath && e.composedPath());
          if (t) return t;
          let o = e.target.parentElement;
          for (t = [e.target, o]; (o = o.parentElement); ) t.push(o);
          return t.push(document, window), t;
        }
        function c(e) {
          return e instanceof Element
            ? e
            : 'string' == typeof e
            ? e
                .split(/>>/g)
                .reduce(
                  (e, t, o, n) => ((e = e.querySelector(t)), o < n.length - 1 ? e.shadowRoot : e),
                  document,
                )
            : null;
        }
        function d(e, t = (e) => e) {
          function o(o) {
            const n =
              [0.001, 0.01, 0.1][Number(o.shiftKey || 2 * o.ctrlKey)] * (o.deltaY < 0 ? 1 : -1);
            let i = 0,
              r = e.selectionStart;
            (e.value = e.value.replace(/[\d.]+/g, (e, o) =>
              o <= r && o + e.length >= r ? ((r = o), t(Number(e), n, i)) : (i++, e),
            )),
              e.focus(),
              e.setSelectionRange(r, r),
              o.preventDefault(),
              e.dispatchEvent(new Event('input'));
          }
          i(e, 'focus', () => i(window, 'wheel', o, { passive: !1 })),
            i(e, 'blur', () => r(window, 'wheel', o));
        }
        const { min: u, max: h, floor: p, round: g } = Math;
        function m(e, t, o) {
          (t /= 100), (o /= 100);
          const n = p((e = (e / 360) * 6)),
            i = e - n,
            r = o * (1 - t),
            a = o * (1 - i * t),
            l = o * (1 - (1 - i) * t),
            s = n % 6;
          return [
            255 * [o, a, r, r, l, o][s],
            255 * [l, o, o, a, r, r][s],
            255 * [r, r, l, o, o, a][s],
          ];
        }
        function f(e, t, o) {
          const n = ((2 - (t /= 100)) * (o /= 100)) / 2;
          return (
            0 !== n && (t = 1 === n ? 0 : n < 0.5 ? (t * o) / (2 * n) : (t * o) / (2 - 2 * n)),
            [e, 100 * t, 100 * n]
          );
        }
        function b(e, t, o) {
          const n = u((e /= 255), (t /= 255), (o /= 255)),
            i = h(e, t, o),
            r = i - n;
          let a, l;
          if (0 === r) a = l = 0;
          else {
            l = r / i;
            const n = ((i - e) / 6 + r / 2) / r,
              s = ((i - t) / 6 + r / 2) / r,
              c = ((i - o) / 6 + r / 2) / r;
            e === i ? (a = c - s) : t === i ? (a = 1 / 3 + n - c) : o === i && (a = 2 / 3 + s - n),
              a < 0 ? (a += 1) : a > 1 && (a -= 1);
          }
          return [360 * a, 100 * l, 100 * i];
        }
        function v(e, t, o, n) {
          return (
            (t /= 100),
            (o /= 100),
            [
              ...b(
                255 * (1 - u(1, (e /= 100) * (1 - (n /= 100)) + n)),
                255 * (1 - u(1, t * (1 - n) + n)),
                255 * (1 - u(1, o * (1 - n) + n)),
              ),
            ]
          );
        }
        function y(e, t, o) {
          t /= 100;
          const n = ((2 * (t *= (o /= 100) < 0.5 ? o : 1 - o)) / (o + t)) * 100,
            i = 100 * (o + t);
          return [e, isNaN(n) ? 0 : n, i];
        }
        function w(e) {
          return b(...e.match(/.{2}/g).map((e) => parseInt(e, 16)));
        }
        function C(e) {
          e = e.match(/^[a-zA-Z]+$/)
            ? (function (e) {
                if ('black' === e.toLowerCase()) return '#000';
                const t = document.createElement('canvas').getContext('2d');
                return (t.fillStyle = e), '#000' === t.fillStyle ? null : t.fillStyle;
              })(e)
            : e;
          const t = {
              cmyk: /^cmyk[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)/i,
              rgba: /^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,
              hsla: /^((hsla)|hsl)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,
              hsva: /^((hsva)|hsv)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,
              hexa: /^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i,
            },
            o = (e) => e.map((e) => (/^(|\d+)\.\d+|\d+$/.test(e) ? Number(e) : void 0));
          let n;
          e: for (const i in t) {
            if (!(n = t[i].exec(e))) continue;
            const r = (e) => !!n[2] == ('number' == typeof e);
            switch (i) {
              case 'cmyk': {
                const [, e, t, r, a] = o(n);
                if (e > 100 || t > 100 || r > 100 || a > 100) break e;
                return { values: v(e, t, r, a), type: i };
              }
              case 'rgba': {
                const [, , , e, t, a, l] = o(n);
                if (e > 255 || t > 255 || a > 255 || l < 0 || l > 1 || !r(l)) break e;
                return { values: [...b(e, t, a), l], a: l, type: i };
              }
              case 'hexa': {
                let [, e] = n;
                (4 !== e.length && 3 !== e.length) ||
                  (e = e
                    .split('')
                    .map((e) => e + e)
                    .join(''));
                const t = e.substring(0, 6);
                let o = e.substring(6);
                return (
                  (o = o ? parseInt(o, 16) / 255 : void 0), { values: [...w(t), o], a: o, type: i }
                );
              }
              case 'hsla': {
                const [, , , e, t, a, l] = o(n);
                if (e > 360 || t > 100 || a > 100 || l < 0 || l > 1 || !r(l)) break e;
                return { values: [...y(e, t, a), l], a: l, type: i };
              }
              case 'hsva': {
                const [, , , e, t, a, l] = o(n);
                if (e > 360 || t > 100 || a > 100 || l < 0 || l > 1 || !r(l)) break e;
                return { values: [e, t, a, l], a: l, type: i };
              }
            }
          }
          return { values: null, type: null };
        }
        function k(e = 0, t = 0, o = 0, n = 1) {
          const i =
              (e, t) =>
              (o = -1) =>
                t(~o ? e.map((e) => Number(e.toFixed(o))) : e),
            r = {
              h: e,
              s: t,
              v: o,
              a: n,
              toHSVA() {
                const e = [r.h, r.s, r.v, r.a];
                return (e.toString = i(e, (e) => `hsva(${e[0]}, ${e[1]}%, ${e[2]}%, ${r.a})`)), e;
              },
              toHSLA() {
                const e = [...f(r.h, r.s, r.v), r.a];
                return (e.toString = i(e, (e) => `hsla(${e[0]}, ${e[1]}%, ${e[2]}%, ${r.a})`)), e;
              },
              toRGBA() {
                const e = [...m(r.h, r.s, r.v), r.a];
                return (e.toString = i(e, (e) => `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${r.a})`)), e;
              },
              toCMYK() {
                const e = (function (e, t, o) {
                  const n = m(e, t, o),
                    i = n[0] / 255,
                    r = n[1] / 255,
                    a = n[2] / 255,
                    l = u(1 - i, 1 - r, 1 - a);
                  return [
                    100 * (1 === l ? 0 : (1 - i - l) / (1 - l)),
                    100 * (1 === l ? 0 : (1 - r - l) / (1 - l)),
                    100 * (1 === l ? 0 : (1 - a - l) / (1 - l)),
                    100 * l,
                  ];
                })(r.h, r.s, r.v);
                return (
                  (e.toString = i(e, (e) => `cmyk(${e[0]}%, ${e[1]}%, ${e[2]}%, ${e[3]}%)`)), e
                );
              },
              toHEXA() {
                const e = (function (e, t, o) {
                    return m(e, t, o).map((e) => g(e).toString(16).padStart(2, '0'));
                  })(r.h, r.s, r.v),
                  t =
                    r.a >= 1
                      ? ''
                      : Number((255 * r.a).toFixed(0))
                          .toString(16)
                          .toUpperCase()
                          .padStart(2, '0');
                return t && e.push(t), (e.toString = () => `#${e.join('').toUpperCase()}`), e;
              },
              clone: () => k(r.h, r.s, r.v, r.a),
            };
          return r;
        }
        const q = (e) => Math.max(Math.min(e, 1), 0);
        function T(e) {
          const t = {
              options: Object.assign({ lock: null, onchange: () => 0, onstop: () => 0 }, e),
              _keyboard(e) {
                const { options: o } = t,
                  { type: n, key: i } = e;
                if (document.activeElement === o.wrapper) {
                  const { lock: o } = t.options,
                    r = 'ArrowUp' === i,
                    a = 'ArrowRight' === i,
                    l = 'ArrowDown' === i,
                    s = 'ArrowLeft' === i;
                  if ('keydown' === n && (r || a || l || s)) {
                    let n = 0,
                      i = 0;
                    'v' === o
                      ? (n = r || a ? 1 : -1)
                      : 'h' === o
                      ? (n = r || a ? -1 : 1)
                      : ((i = r ? -1 : l ? 1 : 0), (n = s ? -1 : a ? 1 : 0)),
                      t.update(q(t.cache.x + 0.01 * n), q(t.cache.y + 0.01 * i)),
                      e.preventDefault();
                  } else i.startsWith('Arrow') && (t.options.onstop(), e.preventDefault());
                }
              },
              _tapstart(e) {
                i(document, ['mouseup', 'touchend', 'touchcancel'], t._tapstop),
                  i(document, ['mousemove', 'touchmove'], t._tapmove),
                  e.cancelable && e.preventDefault(),
                  t._tapmove(e);
              },
              _tapmove(e) {
                const { options: o, cache: n } = t,
                  { lock: i, element: r, wrapper: a } = o,
                  l = a.getBoundingClientRect();
                let s = 0,
                  c = 0;
                if (e) {
                  const t = e && e.touches && e.touches[0];
                  (s = e ? (t || e).clientX : 0),
                    (c = e ? (t || e).clientY : 0),
                    s < l.left ? (s = l.left) : s > l.left + l.width && (s = l.left + l.width),
                    c < l.top ? (c = l.top) : c > l.top + l.height && (c = l.top + l.height),
                    (s -= l.left),
                    (c -= l.top);
                } else n && ((s = n.x * l.width), (c = n.y * l.height));
                'h' !== i &&
                  (r.style.left = `calc(${(s / l.width) * 100}% - ${r.offsetWidth / 2}px)`),
                  'v' !== i &&
                    (r.style.top = `calc(${(c / l.height) * 100}% - ${r.offsetHeight / 2}px)`),
                  (t.cache = { x: s / l.width, y: c / l.height });
                const d = q(s / l.width),
                  u = q(c / l.height);
                switch (i) {
                  case 'v':
                    return o.onchange(d);
                  case 'h':
                    return o.onchange(u);
                  default:
                    return o.onchange(d, u);
                }
              },
              _tapstop() {
                t.options.onstop(),
                  r(document, ['mouseup', 'touchend', 'touchcancel'], t._tapstop),
                  r(document, ['mousemove', 'touchmove'], t._tapmove);
              },
              trigger() {
                t._tapmove();
              },
              update(e = 0, o = 0) {
                const {
                  left: n,
                  top: i,
                  width: r,
                  height: a,
                } = t.options.wrapper.getBoundingClientRect();
                'h' === t.options.lock && (o = e),
                  t._tapmove({ clientX: n + r * e, clientY: i + a * o });
              },
              destroy() {
                const { options: e, _tapstart: o, _keyboard: n } = t;
                r(document, ['keydown', 'keyup'], n),
                  r([e.wrapper, e.element], 'mousedown', o),
                  r([e.wrapper, e.element], 'touchstart', o, { passive: !1 });
              },
            },
            { options: o, _tapstart: n, _keyboard: a } = t;
          return (
            i([o.wrapper, o.element], 'mousedown', n),
            i([o.wrapper, o.element], 'touchstart', n, { passive: !1 }),
            i(document, ['keydown', 'keyup'], a),
            t
          );
        }
        function M(e = {}) {
          e = Object.assign({ onchange: () => 0, className: '', elements: [] }, e);
          const t = i(e.elements, 'click', (t) => {
            e.elements.forEach((o) => o.classList[t.target === o ? 'add' : 'remove'](e.className)),
              e.onchange(t),
              t.stopPropagation();
          });
          return { destroy: () => r(...t) };
        }
        const E = {
            variantFlipOrder: { start: 'sme', middle: 'mse', end: 'ems' },
            positionFlipOrder: { top: 'tbrl', right: 'rltb', bottom: 'btrl', left: 'lrbt' },
            position: 'bottom',
            margin: 8,
          },
          _ = (e, t, o) => {
            const {
                container: n,
                margin: i,
                position: r,
                variantFlipOrder: a,
                positionFlipOrder: l,
              } = { container: document.documentElement.getBoundingClientRect(), ...E, ...o },
              { left: s, top: c } = t.style;
            (t.style.left = '0'), (t.style.top = '0');
            const d = e.getBoundingClientRect(),
              u = t.getBoundingClientRect(),
              h = {
                t: d.top - u.height - i,
                b: d.bottom + i,
                r: d.right + i,
                l: d.left - u.width - i,
              },
              p = {
                vs: d.left,
                vm: d.left + d.width / 2 + -u.width / 2,
                ve: d.left + d.width - u.width,
                hs: d.top,
                hm: d.bottom - d.height / 2 - u.height / 2,
                he: d.bottom - u.height,
              },
              [g, m = 'middle'] = r.split('-'),
              f = l[g],
              b = a[m],
              { top: v, left: y, bottom: w, right: C } = n;
            for (const e of f) {
              const o = 't' === e || 'b' === e,
                n = h[e],
                [i, r] = o ? ['top', 'left'] : ['left', 'top'],
                [a, l] = o ? [u.height, u.width] : [u.width, u.height],
                [s, c] = o ? [w, C] : [C, w],
                [d, g] = o ? [v, y] : [y, v];
              if (!(n < d || n + a > s))
                for (const a of b) {
                  const s = p[(o ? 'v' : 'h') + a];
                  if (!(s < g || s + l > c))
                    return (t.style[r] = s - u[r] + 'px'), (t.style[i] = n - u[i] + 'px'), e + a;
                }
            }
            return (t.style.left = s), (t.style.top = c), null;
          };
        function S(e, t, o) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = o),
            e
          );
        }
        class x {
          constructor(e) {
            S(this, '_initializingActive', !0),
              S(this, '_recalc', !0),
              S(this, '_nanopop', null),
              S(this, '_root', null),
              S(this, '_color', k()),
              S(this, '_lastColor', k()),
              S(this, '_swatchColors', []),
              S(this, '_setupAnimationFrame', null),
              S(this, '_eventListener', {
                init: [],
                save: [],
                hide: [],
                show: [],
                clear: [],
                change: [],
                changestop: [],
                cancel: [],
                swatchselect: [],
              }),
              (this.options = e = Object.assign({ ...x.DEFAULT_OPTIONS }, e));
            const {
              swatches: t,
              components: o,
              theme: n,
              sliders: i,
              lockOpacity: r,
              padding: a,
            } = e;
            ['nano', 'monolith'].includes(n) && !i && (e.sliders = 'h'),
              o.interaction || (o.interaction = {});
            const { preview: l, opacity: s, hue: c, palette: d } = o;
            (o.opacity = !r && s),
              (o.palette = d || l || s || c),
              this._preBuild(),
              this._buildComponents(),
              this._bindEvents(),
              this._finalBuild(),
              t && t.length && t.forEach((e) => this.addSwatch(e));
            const { button: u, app: h } = this._root;
            (this._nanopop = ((e, t, o) => {
              const n =
                'object' != typeof e || e instanceof HTMLElement
                  ? { reference: e, popper: t, ...o }
                  : e;
              return {
                update(e = n) {
                  const { reference: t, popper: o } = Object.assign(n, e);
                  if (!o || !t) throw new Error('Popper- or reference-element missing.');
                  return _(t, o, n);
                },
              };
            })(u, h, { margin: a })),
              u.setAttribute('role', 'button'),
              u.setAttribute('aria-label', this._t('btn:toggle'));
            const p = this;
            this._setupAnimationFrame = requestAnimationFrame(function t() {
              if (!h.offsetWidth) return requestAnimationFrame(t);
              p.setColor(e.default),
                p._rePositioningPicker(),
                e.defaultRepresentation &&
                  ((p._representation = e.defaultRepresentation),
                  p.setColorRepresentation(p._representation)),
                e.showAlways && p.show(),
                (p._initializingActive = !1),
                p._emit('init');
            });
          }
          _preBuild() {
            const { options: e } = this;
            for (const t of ['el', 'container']) e[t] = c(e[t]);
            (this._root = ((e) => {
              const {
                  components: t,
                  useAsButton: o,
                  inline: n,
                  appClass: i,
                  theme: r,
                  lockOpacity: a,
                } = e.options,
                s = (e) => (e ? '' : 'style="display:none" hidden'),
                c = (t) => e._t(t),
                d = l(
                  `\n      <div :ref="root" class="pickr">\n\n        ${
                    o ? '' : '<button type="button" :ref="button" class="pcr-button"></button>'
                  }\n\n        <div :ref="app" class="pcr-app ${i || ''}" data-theme="${r}" ${
                    n ? 'style="position: unset"' : ''
                  } aria-label="${c(
                    'ui:dialog',
                  )}" role="window">\n          <div class="pcr-selection" ${s(
                    t.palette,
                  )}>\n            <div :obj="preview" class="pcr-color-preview" ${s(
                    t.preview,
                  )}>\n              <button type="button" :ref="lastColor" class="pcr-last-color" aria-label="${c(
                    'btn:last-color',
                  )}"></button>\n              <div :ref="currentColor" class="pcr-current-color"></div>\n            </div>\n\n            <div :obj="palette" class="pcr-color-palette">\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="palette" class="pcr-palette" tabindex="0" aria-label="${c(
                    'aria:palette',
                  )}" role="listbox"></div>\n            </div>\n\n            <div :obj="hue" class="pcr-color-chooser" ${s(
                    t.hue,
                  )}>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-hue pcr-slider" tabindex="0" aria-label="${c(
                    'aria:hue',
                  )}" role="slider"></div>\n            </div>\n\n            <div :obj="opacity" class="pcr-color-opacity" ${s(
                    t.opacity,
                  )}>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-opacity pcr-slider" tabindex="0" aria-label="${c(
                    'aria:opacity',
                  )}" role="slider"></div>\n            </div>\n          </div>\n\n          <div class="pcr-swatches ${
                    t.palette ? '' : 'pcr-last'
                  }" :ref="swatches"></div>\n\n          <div :obj="interaction" class="pcr-interaction" ${s(
                    Object.keys(t.interaction).length,
                  )}>\n            <input :ref="result" class="pcr-result" type="text" spellcheck="false" ${s(
                    t.interaction.input,
                  )} aria-label="${c(
                    'aria:input',
                  )}">\n\n            <input :arr="options" class="pcr-type" data-type="HEXA" value="${
                    a ? 'HEX' : 'HEXA'
                  }" type="button" ${s(
                    t.interaction.hex,
                  )}>\n            <input :arr="options" class="pcr-type" data-type="RGBA" value="${
                    a ? 'RGB' : 'RGBA'
                  }" type="button" ${s(
                    t.interaction.rgba,
                  )}>\n            <input :arr="options" class="pcr-type" data-type="HSLA" value="${
                    a ? 'HSL' : 'HSLA'
                  }" type="button" ${s(
                    t.interaction.hsla,
                  )}>\n            <input :arr="options" class="pcr-type" data-type="HSVA" value="${
                    a ? 'HSV' : 'HSVA'
                  }" type="button" ${s(
                    t.interaction.hsva,
                  )}>\n            <input :arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" ${s(
                    t.interaction.cmyk,
                  )}>\n\n            <input :ref="save" class="pcr-save" value="${c(
                    'btn:save',
                  )}" type="button" ${s(t.interaction.save)} aria-label="${c(
                    'aria:btn:save',
                  )}">\n            <input :ref="cancel" class="pcr-cancel" value="${c(
                    'btn:cancel',
                  )}" type="button" ${s(t.interaction.cancel)} aria-label="${c(
                    'aria:btn:cancel',
                  )}">\n            <input :ref="clear" class="pcr-clear" value="${c(
                    'btn:clear',
                  )}" type="button" ${s(t.interaction.clear)} aria-label="${c(
                    'aria:btn:clear',
                  )}">\n          </div>\n        </div>\n      </div>\n    `,
                ),
                u = d.interaction;
              return (
                u.options.find((e) => !e.hidden && !e.classList.add('active')),
                (u.type = () => u.options.find((e) => e.classList.contains('active'))),
                d
              );
            })(this)),
              e.useAsButton && (this._root.button = e.el),
              e.container.appendChild(this._root.root);
          }
          _finalBuild() {
            const e = this.options,
              t = this._root;
            if ((e.container.removeChild(t.root), e.inline)) {
              const o = e.el.parentElement;
              e.el.nextSibling ? o.insertBefore(t.app, e.el.nextSibling) : o.appendChild(t.app);
            } else e.container.appendChild(t.app);
            e.useAsButton ? e.inline && e.el.remove() : e.el.parentNode.replaceChild(t.root, e.el),
              e.disabled && this.disable(),
              e.comparison ||
                ((t.button.style.transition = 'none'),
                e.useAsButton || (t.preview.lastColor.style.transition = 'none')),
              this.hide();
          }
          _buildComponents() {
            const e = this,
              t = this.options.components,
              o = (e.options.sliders || 'v').repeat(2),
              [n, i] = o.match(/^[vh]+$/g) ? o : [],
              r = () => this._color || (this._color = this._lastColor.clone()),
              a = {
                palette: T({
                  element: e._root.palette.picker,
                  wrapper: e._root.palette.palette,
                  onstop: () => e._emit('changestop', 'slider', e),
                  onchange(o, n) {
                    if (!t.palette) return;
                    const i = r(),
                      { _root: a, options: l } = e,
                      { lastColor: s, currentColor: c } = a.preview;
                    e._recalc &&
                      ((i.s = 100 * o),
                      (i.v = 100 - 100 * n),
                      i.v < 0 && (i.v = 0),
                      e._updateOutput('slider'));
                    const d = i.toRGBA().toString(0);
                    (this.element.style.background = d),
                      (this.wrapper.style.background = `\n                        linear-gradient(to top, rgba(0, 0, 0, ${i.a}), transparent),\n                        linear-gradient(to left, hsla(${i.h}, 100%, 50%, ${i.a}), rgba(255, 255, 255, ${i.a}))\n                    `),
                      l.comparison
                        ? l.useAsButton || e._lastColor || s.style.setProperty('--pcr-color', d)
                        : (a.button.style.setProperty('--pcr-color', d),
                          a.button.classList.remove('clear'));
                    const u = i.toHEXA().toString();
                    for (const { el: t, color: o } of e._swatchColors)
                      t.classList[u === o.toHEXA().toString() ? 'add' : 'remove']('pcr-active');
                    c.style.setProperty('--pcr-color', d);
                  },
                }),
                hue: T({
                  lock: 'v' === i ? 'h' : 'v',
                  element: e._root.hue.picker,
                  wrapper: e._root.hue.slider,
                  onstop: () => e._emit('changestop', 'slider', e),
                  onchange(o) {
                    if (!t.hue || !t.palette) return;
                    const n = r();
                    e._recalc && (n.h = 360 * o),
                      (this.element.style.backgroundColor = `hsl(${n.h}, 100%, 50%)`),
                      a.palette.trigger();
                  },
                }),
                opacity: T({
                  lock: 'v' === n ? 'h' : 'v',
                  element: e._root.opacity.picker,
                  wrapper: e._root.opacity.slider,
                  onstop: () => e._emit('changestop', 'slider', e),
                  onchange(o) {
                    if (!t.opacity || !t.palette) return;
                    const n = r();
                    e._recalc && (n.a = Math.round(100 * o) / 100),
                      (this.element.style.background = `rgba(0, 0, 0, ${n.a})`),
                      a.palette.trigger();
                  },
                }),
                selectable: M({
                  elements: e._root.interaction.options,
                  className: 'active',
                  onchange(t) {
                    (e._representation = t.target.getAttribute('data-type').toUpperCase()),
                      e._recalc && e._updateOutput('swatch');
                  },
                }),
              };
            this._components = a;
          }
          _bindEvents() {
            const { _root: e, options: t } = this,
              o = [
                i(e.interaction.clear, 'click', () => this._clearColor()),
                i([e.interaction.cancel, e.preview.lastColor], 'click', () => {
                  this.setHSVA(...(this._lastColor || this._color).toHSVA(), !0),
                    this._emit('cancel');
                }),
                i(e.interaction.save, 'click', () => {
                  !this.applyColor() && !t.showAlways && this.hide();
                }),
                i(e.interaction.result, ['keyup', 'input'], (e) => {
                  this.setColor(e.target.value, !0) &&
                    !this._initializingActive &&
                    (this._emit('change', this._color, 'input', this),
                    this._emit('changestop', 'input', this)),
                    e.stopImmediatePropagation();
                }),
                i(e.interaction.result, ['focus', 'blur'], (e) => {
                  (this._recalc = 'blur' === e.type), this._recalc && this._updateOutput(null);
                }),
                i(
                  [
                    e.palette.palette,
                    e.palette.picker,
                    e.hue.slider,
                    e.hue.picker,
                    e.opacity.slider,
                    e.opacity.picker,
                  ],
                  ['mousedown', 'touchstart'],
                  () => (this._recalc = !0),
                  { passive: !0 },
                ),
              ];
            if (!t.showAlways) {
              const n = t.closeWithKey;
              o.push(
                i(e.button, 'click', () => (this.isOpen() ? this.hide() : this.show())),
                i(
                  document,
                  'keyup',
                  (e) => this.isOpen() && (e.key === n || e.code === n) && this.hide(),
                ),
                i(
                  document,
                  ['touchstart', 'mousedown'],
                  (t) => {
                    this.isOpen() &&
                      !s(t).some((t) => t === e.app || t === e.button) &&
                      this.hide();
                  },
                  { capture: !0 },
                ),
              );
            }
            if (t.adjustableNumbers) {
              const t = {
                rgba: [255, 255, 255, 1],
                hsva: [360, 100, 100, 1],
                hsla: [360, 100, 100, 1],
                cmyk: [100, 100, 100, 100],
              };
              d(e.interaction.result, (e, o, n) => {
                const i = t[this.getColorRepresentation().toLowerCase()];
                if (i) {
                  const t = i[n],
                    r = e + (t >= 100 ? 1e3 * o : o);
                  return r <= 0 ? 0 : Number((r < t ? r : t).toPrecision(3));
                }
                return e;
              });
            }
            if (t.autoReposition && !t.inline) {
              let e = null;
              const n = this;
              o.push(
                i(
                  window,
                  ['scroll', 'resize'],
                  () => {
                    n.isOpen() &&
                      (t.closeOnScroll && n.hide(),
                      null === e
                        ? ((e = setTimeout(() => (e = null), 100)),
                          requestAnimationFrame(function t() {
                            n._rePositioningPicker(), null !== e && requestAnimationFrame(t);
                          }))
                        : (clearTimeout(e), (e = setTimeout(() => (e = null), 100))));
                  },
                  { capture: !0 },
                ),
              );
            }
            this._eventBindings = o;
          }
          _rePositioningPicker() {
            const { options: e } = this;
            if (
              !e.inline &&
              !this._nanopop.update({
                container: document.body.getBoundingClientRect(),
                position: e.position,
              })
            ) {
              const e = this._root.app,
                t = e.getBoundingClientRect();
              (e.style.top = (window.innerHeight - t.height) / 2 + 'px'),
                (e.style.left = (window.innerWidth - t.width) / 2 + 'px');
            }
          }
          _updateOutput(e) {
            const { _root: t, _color: o, options: n } = this;
            if (t.interaction.type()) {
              const e = `to${t.interaction.type().getAttribute('data-type')}`;
              t.interaction.result.value =
                'function' == typeof o[e] ? o[e]().toString(n.outputPrecision) : '';
            }
            !this._initializingActive && this._recalc && this._emit('change', o, e, this);
          }
          _clearColor(e = !1) {
            const { _root: t, options: o } = this;
            o.useAsButton || t.button.style.setProperty('--pcr-color', 'rgba(0, 0, 0, 0.15)'),
              t.button.classList.add('clear'),
              o.showAlways || this.hide(),
              (this._lastColor = null),
              this._initializingActive || e || (this._emit('save', null), this._emit('clear'));
          }
          _parseLocalColor(e) {
            const { values: t, type: o, a: n } = C(e),
              { lockOpacity: i } = this.options,
              r = void 0 !== n && 1 !== n;
            return (
              t && 3 === t.length && (t[3] = void 0), { values: !t || (i && r) ? null : t, type: o }
            );
          }
          _t(e) {
            return this.options.i18n[e] || x.I18N_DEFAULTS[e];
          }
          _emit(e, ...t) {
            this._eventListener[e].forEach((e) => e(...t, this));
          }
          on(e, t) {
            return this._eventListener[e].push(t), this;
          }
          off(e, t) {
            const o = this._eventListener[e] || [],
              n = o.indexOf(t);
            return ~n && o.splice(n, 1), this;
          }
          addSwatch(e) {
            const { values: t } = this._parseLocalColor(e);
            if (t) {
              const { _swatchColors: e, _root: o } = this,
                n = k(...t),
                r = a(
                  `<button type="button" style="--pcr-color: ${n
                    .toRGBA()
                    .toString(0)}" aria-label="${this._t('btn:swatch')}"/>`,
                );
              return (
                o.swatches.appendChild(r),
                e.push({ el: r, color: n }),
                this._eventBindings.push(
                  i(r, 'click', () => {
                    this.setHSVA(...n.toHSVA(), !0),
                      this._emit('swatchselect', n),
                      this._emit('change', n, 'swatch', this);
                  }),
                ),
                !0
              );
            }
            return !1;
          }
          removeSwatch(e) {
            const t = this._swatchColors[e];
            if (t) {
              const { el: o } = t;
              return this._root.swatches.removeChild(o), this._swatchColors.splice(e, 1), !0;
            }
            return !1;
          }
          applyColor(e = !1) {
            const { preview: t, button: o } = this._root,
              n = this._color.toRGBA().toString(0);
            return (
              t.lastColor.style.setProperty('--pcr-color', n),
              this.options.useAsButton || o.style.setProperty('--pcr-color', n),
              o.classList.remove('clear'),
              (this._lastColor = this._color.clone()),
              this._initializingActive || e || this._emit('save', this._color),
              this
            );
          }
          destroy() {
            cancelAnimationFrame(this._setupAnimationFrame),
              this._eventBindings.forEach((e) => r(...e)),
              Object.keys(this._components).forEach((e) => this._components[e].destroy());
          }
          destroyAndRemove() {
            this.destroy();
            const { root: e, app: t } = this._root;
            e.parentElement && e.parentElement.removeChild(e),
              t.parentElement.removeChild(t),
              Object.keys(this).forEach((e) => (this[e] = null));
          }
          hide() {
            return (
              !!this.isOpen() &&
              (this._root.app.classList.remove('visible'), this._emit('hide'), !0)
            );
          }
          show() {
            return (
              !this.options.disabled &&
              !this.isOpen() &&
              (this._root.app.classList.add('visible'),
              this._rePositioningPicker(),
              this._emit('show', this._color),
              this)
            );
          }
          isOpen() {
            return this._root.app.classList.contains('visible');
          }
          setHSVA(e = 360, t = 0, o = 0, n = 1, i = !1) {
            const r = this._recalc;
            if (
              ((this._recalc = !1),
              e < 0 || e > 360 || t < 0 || t > 100 || o < 0 || o > 100 || n < 0 || n > 1)
            )
              return !1;
            this._color = k(e, t, o, n);
            const { hue: a, opacity: l, palette: s } = this._components;
            return (
              a.update(e / 360),
              l.update(n),
              s.update(t / 100, 1 - o / 100),
              i || this.applyColor(),
              r && this._updateOutput(),
              (this._recalc = r),
              !0
            );
          }
          setColor(e, t = !1) {
            if (null === e) return this._clearColor(t), !0;
            const { values: o, type: n } = this._parseLocalColor(e);
            if (o) {
              const e = n.toUpperCase(),
                { options: i } = this._root.interaction,
                r = i.find((t) => t.getAttribute('data-type') === e);
              if (r && !r.hidden)
                for (const e of i) e.classList[e === r ? 'add' : 'remove']('active');
              return !!this.setHSVA(...o, t) && this.setColorRepresentation(e);
            }
            return !1;
          }
          setColorRepresentation(e) {
            return (
              (e = e.toUpperCase()),
              !!this._root.interaction.options.find(
                (t) => t.getAttribute('data-type').startsWith(e) && !t.click(),
              )
            );
          }
          getColorRepresentation() {
            return this._representation;
          }
          getColor() {
            return this._color;
          }
          getSelectedColor() {
            return this._lastColor;
          }
          getRoot() {
            return this._root;
          }
          disable() {
            return (
              this.hide(),
              (this.options.disabled = !0),
              this._root.button.classList.add('disabled'),
              this
            );
          }
          enable() {
            return (
              (this.options.disabled = !1), this._root.button.classList.remove('disabled'), this
            );
          }
        }
        return (
          S(x, 'utils', o),
          S(x, 'version', '1.8.2'),
          S(x, 'I18N_DEFAULTS', {
            'ui:dialog': 'color picker dialog',
            'btn:toggle': 'toggle color picker dialog',
            'btn:swatch': 'color swatch',
            'btn:last-color': 'use previous color',
            'btn:save': 'Save',
            'btn:cancel': 'Cancel',
            'btn:clear': 'Clear',
            'aria:btn:save': 'save and close',
            'aria:btn:cancel': 'cancel and close',
            'aria:btn:clear': 'clear and close',
            'aria:input': 'color input field',
            'aria:palette': 'color selection area',
            'aria:hue': 'hue selection slider',
            'aria:opacity': 'selection slider',
          }),
          S(x, 'DEFAULT_OPTIONS', {
            appClass: null,
            theme: 'classic',
            useAsButton: !1,
            padding: 8,
            disabled: !1,
            comparison: !0,
            closeOnScroll: !1,
            outputPrecision: 0,
            lockOpacity: !1,
            autoReposition: !0,
            container: 'body',
            components: { interaction: {} },
            i18n: {},
            swatches: null,
            inline: !1,
            sliders: null,
            default: '#42445a',
            defaultRepresentation: null,
            position: 'bottom-middle',
            adjustableNumbers: !0,
            showAlways: !1,
            closeWithKey: 'Escape',
          }),
          S(x, 'create', (e) => new x(e)),
          t.default
        );
      })());
  }),
  Pt = $t(zt);
function Ht(e) {
  const { el: t, isView: o, containerEl: n, swatches: i, opacity: r, defaultColor: a } = e;
  return {
    el: t,
    container: o ? document.body : n,
    theme: 'nano',
    swatches: i,
    lockOpacity: !r,
    default: a,
    position: 'left-middle',
    components: {
      preview: !0,
      hue: !0,
      opacity: !!r,
      interaction: { hex: !0, rgba: !0, hsla: !0, input: !0, cancel: !0, save: !0 },
    },
  };
}
function Rt(e) {
  e.hide();
}
function Zt(e, t) {
  let o;
  return (
    t.forEach((t, n) => {
      t.id === e && (o = n);
    }),
    o
  );
}
class jt extends e.PluginSettingTab {
  constructor(e, t) {
    super(e, t),
      (this.plugin = t),
      addEventListener('cMenuToolbar-NewCommand', () => {
        k(), I(e, this.plugin), this.display();
      });
  }
  display() {
    const { containerEl: o } = this;
    let i;
    o.empty(),
      o.createEl('h1', { text: 'Obsidian Editing Toolbar' }),
      o
        .createEl('span', { text: ' 原创： ' })
        .createEl('a', { text: 'Chetachi 👩🏽‍💻', href: 'https://github.com/chetachiezikeuzor' }),
      o
        .createEl('span', { text: '     修改者： ' })
        .createEl('a', { text: 'Cuman ✨', href: 'https://github.com/cumany' }),
      o.createEl('h2', { text: u('Plugin Settings') }),
      new e.Setting(o)
        .setName(u('Editing Toolbar append method'))
        .setDesc(
          u(
            'Choose where Editing Toolbar will append upon regeneration. To see the change, hit the refresh button below, or in the status bar menu.',
          ),
        )
        .addDropdown((e) => {
          let t = {};
          b.map((e) => (t[e] = e)),
            e.addOptions(t),
            e.setValue(this.plugin.settings.appendMethod).onChange((e) => {
              (this.plugin.settings.appendMethod = e), this.plugin.saveSettings();
            });
        }),
      new e.Setting(o)
        .setName(u('Editing Toolbar aesthetic'))
        .setDesc(
          u(
            'Choose between a glass morphism ,tiny and default style for Editing Toolbar. To see the change, hit the refresh button below, or in the status bar menu.',
          ),
        )
        .addDropdown((e) => {
          let t = {};
          v.map((e) => (t[e] = e)),
            e.addOptions(t),
            e.setValue(this.plugin.settings.aestheticStyle).onChange((e) => {
              (this.plugin.settings.aestheticStyle = e),
                this.plugin.saveSettings(),
                setTimeout(() => {
                  dispatchEvent(new Event('cMenuToolbar-NewCommand'));
                }, 100);
            });
        }),
      new e.Setting(o)
        .setName(u('Editing Toolbar position'))
        .setDesc(u('Choose between fixed position or cursor following mode.'))
        .addDropdown((e) => {
          let t = {};
          y.map((e) => (t[e] = e)),
            e.addOptions(t),
            e.setValue(this.plugin.settings.positionStyle).onChange((e) => {
              (this.plugin.settings.positionStyle = e),
                this.plugin.saveSettings(),
                dispatchEvent(new Event('cMenuToolbar-NewCommand'));
            });
        }),
      'top' == this.plugin.settings.positionStyle &&
        new e.Setting(o)
          .setName(u('Editing Toolbar Auto-hide'))
          .setDesc(
            u(
              'The toolbar is displayed when the mouse moves over it, otherwise it is automatically hidden',
            ),
          )
          .addToggle((e) => {
            var t;
            return e
              .setValue(null === (t = this.plugin.settings) || void 0 === t ? void 0 : t.autohide)
              .onChange((e) => {
                (this.plugin.settings.autohide = e),
                  this.plugin.saveSettings(),
                  setTimeout(() => {
                    this.display(), dispatchEvent(new Event('cMenuToolbar-NewCommand'));
                  }, 100);
              });
          }),
      'fixed' == this.plugin.settings.positionStyle &&
        new e.Setting(o)
          .setName(u('Editing Toolbar columns'))
          .setDesc(
            u(
              'Choose the number of columns per row to display on Editing Toolbar. To see the change, hit the refresh button below, or in the status bar menu.',
            ),
          )
          .addSlider((o) => {
            o.setLimits(1, 32, 1)
              .setValue(this.plugin.settings.cMenuNumRows)
              .onChange(
                e.debounce(
                  (e) =>
                    t(this, void 0, void 0, function* () {
                      (this.plugin.settings.cMenuNumRows = e), yield this.plugin.saveSettings();
                    }),
                  100,
                  !0,
                ),
              )
              .setDynamicTooltip();
          }),
      new e.Setting(o)
        .setName(u('Editing Toolbar refresh'))
        .setDesc(
          u(
            'Editing Toolbar will only refresh automatically after you have either added or deleted a command from it. To see UI changes to cMenuToolbar (above settings changes) use the refresh button. If you forget to refresh in settings, no worries. There is also a refresh button in the cMenuToolbar status bar menu.',
          ),
        )
        .addButton((e) => {
          e.setIcon('cMenuToolbarReload')
            .setClass('cMenuToolbarSettingsButton')
            .setClass('cMenuToolbarSettingsButtonRefresh')
            .setTooltip(u('Refresh'))
            .onClick(() => {
              setTimeout(() => {
                dispatchEvent(new Event('cMenuToolbar-NewCommand'));
              }, 100),
                console.log('%ccMenuToolbar refreshed', 'color: Violet');
            });
        }),
      new e.Setting(o)
        .setName(u('🎨 Set custom background'))
        .setDesc(u('Click on the picker to adjust the colour'))
        .setClass('custom_bg')
        .then((e) => {
          for (let n = 0; n < 5; n++)
            this.pickr = Pt.create(
              Ht({
                isView: i,
                el: e.controlEl.createDiv({ cls: 'picker' }),
                containerEl: o,
                swatches: null,
                opacity: !0,
                defaultColor: this.plugin.settings[`custom_bg${n + 1}`],
              }),
            )
              .on('save', (e, o) =>
                t(this, void 0, void 0, function* () {
                  e &&
                    ((this.plugin.settings[`custom_bg${n + 1}`] = e.toHEXA().toString()),
                    yield this.plugin.saveSettings(),
                    o.hide(),
                    o.addSwatch(e.toHEXA().toString()));
                }),
              )
              .on('show', () => {
                const { result: e } = this.pickr.getRoot().interaction;
                requestAnimationFrame(() => requestAnimationFrame(() => e.select()));
              })
              .on('cancel', Rt);
        }),
      new e.Setting(o)
        .setName(u('🖌️ Set custom font color'))
        .setDesc(u('Click on the picker to adjust the colour'))
        .setClass('custom_font')
        .then((e) => {
          for (let n = 0; n < 5; n++)
            this.pickr = Pt.create(
              Ht({
                isView: i,
                el: e.controlEl.createDiv({ cls: 'picker' }),
                containerEl: o,
                swatches: null,
                opacity: !0,
                defaultColor: this.plugin.settings[`custom_fc${n + 1}`],
              }),
            )
              .on('save', (e, o) =>
                t(this, void 0, void 0, function* () {
                  e &&
                    ((this.plugin.settings[`custom_fc${n + 1}`] = e.toHEXA().toString()),
                    yield this.plugin.saveSettings(),
                    o.hide(),
                    o.addSwatch(e.toHEXA().toString()));
                }),
              )
              .on('show', () => {
                const { result: e } = this.pickr.getRoot().interaction;
                requestAnimationFrame(() => requestAnimationFrame(() => e.select()));
              })
              .on('cancel', Rt);
        }),
      new e.Setting(o)
        .setName(u('Editing Toolbar commands'))
        .setDesc(
          u(
            "Add a command onto Editing Toolbar from Obsidian's commands library. To reorder the commands, drag and drop the command items. To delete them, use the delete buttom to the right of the command item. Editing Toolbar will not automaticaly refresh after reordering commands. Use the refresh button above.",
          ),
        )
        .addButton((e) => {
          e.setIcon('cMenuToolbarAdd')
            .setTooltip(u('Add'))
            .setClass('cMenuToolbarSettingsButton')
            .setClass('cMenuToolbarSettingsButtonAdd')
            .onClick(() => {
              new p(this.plugin).open(),
                setTimeout(() => {
                  dispatchEvent(new Event('cMenuToolbar-NewCommand'));
                }, 100);
            });
        });
    const r = o.createEl('div', { cls: 'cMenuToolbarSettingsTabsContainer' });
    let a = '';
    vt.create(r, {
      group: 'item',
      animation: 500,
      draggable: '.setting-item',
      ghostClass: 'sortable-ghost',
      chosenClass: 'sortable-chosen',
      dragClass: 'sortable-drag',
      dragoverBubble: !1,
      forceFallback: !0,
      fallbackOnBody: !0,
      swapThreshold: 0.7,
      fallbackClass: 'sortable-fallback',
      easing: 'cubic-bezier(1, 0, 0, 1)',
      onSort: (e) => {
        if (e.from.className === e.to.className) {
          const t = this.plugin.settings.menuCommands,
            [o] = t.splice(e.oldIndex, 1);
          t.splice(e.newIndex, 0, o), this.plugin.saveSettings();
        }
        setTimeout(() => {
          dispatchEvent(new Event('cMenuToolbar-NewCommand'));
        }, 300);
      },
      onStart: function (e) {
        a = e.item.className;
      },
    }),
      this.plugin.settings.menuCommands.forEach((o, i) => {
        const l = new e.Setting(r);
        if ('SubmenuCommands' in o) {
          if (
            (l.settingEl.setAttribute('data-id', o.id),
            l
              .setClass('cMenuToolbarCommandItem')
              .setClass('cMenuToolbarCommandsubItem')
              .setName(o.name)
              .addButton((e) => {
                e.setClass('cMenuToolbarSettingsIcon').onClick(() =>
                  t(this, void 0, void 0, function* () {
                    new h(this.plugin, o, !1).open();
                  }),
                ),
                  S(o.icon) ? (e.buttonEl.innerHTML = o.icon) : e.setIcon(o.icon);
              })
              .addButton((e) => {
                e.setIcon('cMenuToolbarDelete')
                  .setTooltip(u('Delete'))
                  .setClass('cMenuToolbarSettingsButton')
                  .setClass('cMenuToolbarSettingsButtonDelete')
                  .onClick(() =>
                    t(this, void 0, void 0, function* () {
                      this.plugin.settings.menuCommands.remove(o),
                        yield this.plugin.saveSettings(),
                        this.display(),
                        setTimeout(() => {
                          dispatchEvent(new Event('cMenuToolbar-NewCommand'));
                        }, 100),
                        console.log(
                          `%cCommand '${o.name}' was removed from cMenuToolbar`,
                          'color: #989cab',
                        );
                    }),
                  );
              }),
            'cMenuToolbar-plugin:change-font-color' == o.id)
          )
            return;
          if ('cMenuToolbar-plugin:change-background-color' == o.id) return;
          const n = l.settingEl.createEl('div', { cls: 'cMenuToolbarSettingsTabsContainer_sub' });
          vt.create(n, {
            group: {
              name: 'item',
              pull: !0,
              put: function () {
                return !a.includes('cMenuToolbarCommandsubItem');
              },
            },
            draggable: '.setting-item',
            animation: 150,
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
            dragClass: 'sortable-drag',
            dragoverBubble: !1,
            fallbackOnBody: !0,
            swapThreshold: 0.7,
            forceFallback: !0,
            fallbackClass: 'sortable-fallback',
            easing: 'cubic-bezier(1, 0, 0, 1)',
            onStart: function (e) {},
            onSort: (e) => {
              var t, o, n;
              if (e.from.className === e.to.className) {
                const o =
                  null === (t = this.plugin.settings.menuCommands[i]) || void 0 === t
                    ? void 0
                    : t.SubmenuCommands;
                if (o) {
                  const [t] = o.splice(e.oldIndex, 1);
                  o.splice(e.newIndex, 0, t), this.plugin.saveSettings();
                }
              } else if ('cMenuToolbarSettingsTabsContainer' === e.to.className) {
                const t = this.plugin.settings.menuCommands;
                const n =
                    null === (o = t[Zt(e.path[1].dataset.id, t)]) || void 0 === o
                      ? void 0
                      : o.SubmenuCommands,
                  [i] = n.splice(e.oldIndex, 1);
                t.splice(e.newIndex, 0, i), this.plugin.saveSettings();
              } else if ('cMenuToolbarSettingsTabsContainer' === e.from.className) {
                const t = this.plugin.settings.menuCommands;
                const o =
                    null === (n = t[Zt(e.path[1].dataset.id, t)]) || void 0 === n
                      ? void 0
                      : n.SubmenuCommands,
                  [i] = t.splice(e.oldIndex, 1);
                o.splice(e.newIndex, 0, i), this.plugin.saveSettings();
              }
              setTimeout(() => {
                dispatchEvent(new Event('cMenuToolbar-NewCommand'));
              }, 300);
            },
          }),
            o.SubmenuCommands.forEach((i) => {
              const r = new e.Setting(n);
              r
                .setClass('cMenuToolbarCommandItem')
                .addButton((e) => {
                  e.setClass('cMenuToolbarSettingsIcon').onClick(() =>
                    t(this, void 0, void 0, function* () {
                      new h(this.plugin, i, !0).open();
                    }),
                  ),
                    S(null == i ? void 0 : i.icon)
                      ? (e.buttonEl.innerHTML = i.icon)
                      : e.setIcon(i.icon);
                })
                .setName(i.name)
                .addButton((e) => {
                  e.setIcon('pencil')
                    .setTooltip(u('Change Command name'))
                    .setClass('cMenuToolbarSettingsButton')
                    .onClick(() =>
                      t(this, void 0, void 0, function* () {
                        new m(this.app, this.plugin, i, !0).open();
                      }),
                    );
                })
                .addButton((e) => {
                  e.setIcon('cMenuToolbarDelete')
                    .setTooltip(u('Delete'))
                    .setClass('cMenuToolbarSettingsButton')
                    .setClass('cMenuToolbarSettingsButtonDelete')
                    .onClick(() =>
                      t(this, void 0, void 0, function* () {
                        o.SubmenuCommands.remove(i),
                          yield this.plugin.saveSettings(),
                          this.display(),
                          setTimeout(() => {
                            dispatchEvent(new Event('cMenuToolbar-NewCommand'));
                          }, 100),
                          console.log(
                            `%cCommand '${o.name}' was removed from cMenuToolbar`,
                            'color: #989cab',
                          );
                      }),
                    );
                }),
                r.nameEl;
            });
        } else
          l.addButton((e) => {
            e.setClass('cMenuToolbarSettingsIcon').onClick(() =>
              t(this, void 0, void 0, function* () {
                new h(this.plugin, o, !1).open();
              }),
            ),
              S(o.icon) ? (e.buttonEl.innerHTML = o.icon) : e.setIcon(o.icon);
          }),
            'cMenuToolbar-Divider-Line' == o.id && l.setClass('cMenuToolbar-Divider-Line'),
            l
              .setClass('cMenuToolbarCommandItem')
              .setName(o.name)
              .addButton((e) => {
                e.setIcon('pencil')
                  .setTooltip(u('Change Command name'))
                  .setClass('cMenuToolbarSettingsButton')
                  .onClick(() =>
                    t(this, void 0, void 0, function* () {
                      new m(this.app, this.plugin, o, !1).open();
                    }),
                  );
              })
              .addButton((e) => {
                e.setIcon('cMenuToolbarSub')
                  .setTooltip(u('Add submenu'))
                  .setClass('cMenuToolbarSettingsButton')
                  .setClass('cMenuToolbarSettingsButtonaddsub')
                  .onClick(() =>
                    t(this, void 0, void 0, function* () {
                      const e = {
                        id: 'SubmenuCommands-' + n(1),
                        name: 'submenu',
                        icon: 'remix-Filter3Line',
                        SubmenuCommands: [],
                      };
                      this.plugin.settings.menuCommands.splice(i + 1, 0, e),
                        yield this.plugin.saveSettings(),
                        this.display(),
                        setTimeout(() => {
                          dispatchEvent(new Event('cMenuToolbar-NewCommand'));
                        }, 100),
                        console.log(`%cCommand '${e.id}' add `, 'color: #989cab');
                    }),
                  );
              })
              .addButton((e) => {
                e.setIcon('vertical-split')
                  .setTooltip(u('add hr'))
                  .setClass('cMenuToolbarSettingsButton')
                  .setClass('cMenuToolbarSettingsButtonaddsub')
                  .onClick(() =>
                    t(this, void 0, void 0, function* () {
                      this.plugin.settings.menuCommands.splice(i + 1, 0, {
                        id: 'cMenuToolbar-Divider-Line',
                        name: 'HR',
                        icon: 'vertical-split',
                      }),
                        yield this.plugin.saveSettings(),
                        this.display(),
                        setTimeout(() => {
                          dispatchEvent(new Event('cMenuToolbar-NewCommand'));
                        }, 100);
                    }),
                  );
              })
              .addButton((e) => {
                e.setIcon('cMenuToolbarDelete')
                  .setTooltip(u('Delete'))
                  .setClass('cMenuToolbarSettingsButton')
                  .setClass('cMenuToolbarSettingsButtonDelete')
                  .onClick(() =>
                    t(this, void 0, void 0, function* () {
                      this.plugin.settings.menuCommands.remove(o),
                        yield this.plugin.saveSettings(),
                        this.display(),
                        setTimeout(() => {
                          dispatchEvent(new Event('cMenuToolbar-NewCommand'));
                        }, 100),
                        console.log(
                          `%cCommand '${o.name}' was removed from cMenuToolbar`,
                          'color: #989cab',
                        );
                    }),
                  );
              });
      });
    const l = o.createEl('div', { cls: 'cDonationSection' }),
      s = createEl('p'),
      c = createEl('p');
    c.appendText(
      'If you like this Plugin and are considering donating to support continued development, use the button below!',
    ),
      s.setAttribute('style', 'color: var(--text-muted)'),
      l.appendChild(c),
      l.appendChild(s),
      l.appendChild(Xt('https://www.buymeacoffee.com/cuman'));
  }
  hide() {
    setTimeout(() => {
      dispatchEvent(new Event('cMenuToolbar-NewCommand'));
    }, 100),
      this.pickr.destroyAndRemove();
  }
}
const Xt = (e) => {
    const t = createEl('a');
    return (
      t.setAttribute('href', e),
      t.addClass('buymeacoffee-img'),
      (t.innerHTML =
        '<img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee &emoji=&slug=Cuman&button_colour=BD5FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00" />'),
      t
    );
  },
  Wt = {
    cMenuToolbar:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"><path d="M19 10H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zM5 20v-8h14l.002 8H5zM5 6h14v2H5zm2-4h10v2H7z" fill="currentColor"/></svg>',
    cMenuToolbarSub:
      '<svg t="1661526346488" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16880"  ><path d="M597.333333 85.333333h-341.333333C187.733333 85.333333 128 140.8 128 213.333333v597.333334c0 72.533333 59.733333 128 128 128h426.666667c72.533333 0 128-55.466667 128-128V298.666667l-213.333334-213.333334z m170.666667 725.333334c0 46.933333-38.4 85.333333-85.333333 85.333333H256c-46.933333 0-85.333333-38.4-85.333333-85.333333V213.333333c0-46.933333 38.4-85.333333 85.333333-85.333333h298.666667v213.333333h213.333333v469.333334z m-320-234.666667h128c12.8 0 21.333333 8.533333 21.333333 21.333333s-8.533333 21.333333-21.333333 21.333334h-128v128c0 12.8-8.533333 21.333333-21.333333 21.333333s-21.333333-8.533333-21.333334-21.333333v-128h-128c-12.8 0-21.333333-8.533333-21.333333-21.333334s8.533333-21.333333 21.333333-21.333333h128v-128c0-12.8 8.533333-21.333333 21.333334-21.333333s21.333333 8.533333 21.333333 21.333333v128z" fill="#8a8a8a" p-id="16881"></path></svg>',
    cMenuToolbarAdd:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="white" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z" fill="white"/><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z" fill="white"/></svg>',
    cMenuToolbarDelete:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="white" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z" fill="white"/><path d="M9 10h2v8H9zm4 0h2v8h-2z" fill="white"/></svg>',
    cMenuToolbarReload:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="white" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"><path d="M19 10H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zM5 20v-8h14l.002 8H5zM5 6h14v2H5zm2-4h10v2H7z" fill="white"/></svg>',
    'codeblock-glyph':
      '<svg xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z" fill="currentColor"/><path d="M9.293 9.293L5.586 13l3.707 3.707l1.414-1.414L8.414 13l2.293-2.293zm5.414 0l-1.414 1.414L15.586 13l-2.293 2.293l1.414 1.414L18.414 13z"/></svg>',
    'underline-glyph':
      '<svg xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 1024 1024"><path fill="currentColor" d="M824 804H200c-4.4 0-8 3.4-8 7.6v60.8c0 4.2 3.6 7.6 8 7.6h624c4.4 0 8-3.4 8-7.6v-60.8c0-4.2-3.6-7.6-8-7.6zm-312-76c69.4 0 134.6-27.1 183.8-76.2C745 602.7 772 537.4 772 468V156c0-6.6-5.4-12-12-12h-60c-6.6 0-12 5.4-12 12v312c0 97-79 176-176 176s-176-79-176-176V156c0-6.6-5.4-12-12-12h-60c-6.6 0-12 5.4-12 12v312c0 69.4 27.1 134.6 76.2 183.8C377.3 701 442.6 728 512 728z"/></svg>',
    'superscript-glyph':
      '<svg xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path fill="currentColor"d="M16 7.41L11.41 12L16 16.59L14.59 18L10 13.41L5.41 18L4 16.59L8.59 12L4 7.41L5.41 6L10 10.59L14.59 6L16 7.41M21.85 9h-4.88V8l.89-.82c.76-.64 1.32-1.18 1.7-1.63c.37-.44.56-.85.57-1.23a.884.884 0 0 0-.27-.7c-.18-.19-.47-.28-.86-.29c-.31.01-.58.07-.84.17l-.66.39l-.45-1.17c.27-.22.59-.39.98-.53S18.85 2 19.32 2c.78 0 1.38.2 1.78.61c.4.39.62.93.62 1.57c-.01.56-.19 1.08-.54 1.55c-.34.48-.76.93-1.27 1.36l-.64.52v.02h2.58V9z"/></svg>',
    'subscript-glyph':
      '<svg xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path fill="currentColor" d="M16 7.41L11.41 12L16 16.59L14.59 18L10 13.41L5.41 18L4 16.59L8.59 12L4 7.41L5.41 6L10 10.59L14.59 6L16 7.41m5.85 13.62h-4.88v-1l.89-.8c.76-.65 1.32-1.19 1.7-1.63c.37-.44.56-.85.57-1.24a.898.898 0 0 0-.27-.7c-.18-.16-.47-.28-.86-.28c-.31 0-.58.06-.84.18l-.66.38l-.45-1.17c.27-.21.59-.39.98-.53s.82-.24 1.29-.24c.78.04 1.38.25 1.78.66c.4.41.62.93.62 1.57c-.01.56-.19 1.08-.54 1.55c-.34.47-.76.92-1.27 1.36l-.64.52v.02h2.58v1.35z"/></svg>',
    'bot-glyph':
      '<svg xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path fill="currentColor" d="M21.928 11.607c-.202-.488-.635-.605-.928-.633V8c0-1.103-.897-2-2-2h-6V4.61c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5c-1.103 0-2 .897-2 2v2.997l-.082.006A1 1 0 0 0 1.99 12v2a1 1 0 0 0 1 1H3v5c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5a1 1 0 0 0 1-1v-1.938a1.006 1.006 0 0 0-.072-.455zM5 20V8h14l.001 3.996L19 12v2l.001.005l.001 5.995H5z" fill="currentColor"/><ellipse cx="8.5" cy="12" rx="1.5" ry="2" fill="currentColor"/><ellipse cx="15.5" cy="12" rx="1.5" ry="2" fill="currentColor"/><path d="M8 16h8v2H8z" fill="currentColor"/></svg>',
    'header-1':
      '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill="currentColor"  d="M835.626667 349.397333A42.666667 42.666667 0 0 1 853.333333 384v426.666667a42.666667 42.666667 0 0 1-85.333333 0v-367.488l-71.850667 23.978666a42.666667 42.666667 0 0 1-26.965333-80.981333l128-42.666667a42.666667 42.666667 0 0 1 38.4 5.888zM128 170.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v256h256V213.333333a42.666667 42.666667 0 1 1 85.333333 0v597.333334a42.666667 42.666667 0 1 1-85.333333 0v-256H170.666667v256a42.666667 42.666667 0 1 1-85.333334 0V213.333333a42.666667 42.666667 0 0 1 42.666667-42.666666z" p-id="1635"></path></svg>',
    'header-2':
      '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M768 426.666667a85.333333 85.333333 0 0 0-85.333333 85.333333v21.333333a42.666667 42.666667 0 1 1-85.333334 0V512a170.666667 170.666667 0 0 1 170.666667-170.666667h7.338667a163.328 163.328 0 0 1 115.498666 278.869334L742.997333 768H896a42.666667 42.666667 0 1 1 0 85.333333h-256a42.666667 42.666667 0 0 1-30.165333-72.832l220.672-220.672A77.994667 77.994667 0 0 0 775.338667 426.666667H768zM128 170.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v256h256V213.333333a42.666667 42.666667 0 1 1 85.333333 0v597.333334a42.666667 42.666667 0 1 1-85.333333 0v-256H170.666667v256a42.666667 42.666667 0 1 1-85.333334 0V213.333333a42.666667 42.666667 0 0 1 42.666667-42.666666z" p-id="1791"></path></svg>',
    'header-3':
      '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M597.333333 384a42.666667 42.666667 0 0 1 42.666667-42.666667h256a42.666667 42.666667 0 0 1 30.165333 72.832l-105.941333 105.984A170.752 170.752 0 0 1 768 853.333333a170.666667 170.666667 0 0 1-160.938667-113.877333 42.666667 42.666667 0 0 1 80.469334-28.373333A85.333333 85.333333 0 1 0 768 597.333333h-42.666667a42.666667 42.666667 0 0 1-30.165333-72.832L793.002667 426.666667H640a42.666667 42.666667 0 0 1-42.666667-42.666667zM128 170.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v256h256V213.333333a42.666667 42.666667 0 1 1 85.333333 0v597.333334a42.666667 42.666667 0 1 1-85.333333 0v-256H170.666667v256a42.666667 42.666667 0 1 1-85.333334 0V213.333333a42.666667 42.666667 0 0 1 42.666667-42.666666z" p-id="1949"></path></svg>',
    'header-4':
      '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M780.714667 343.296a42.666667 42.666667 0 0 1 28.032 53.418667L719.36 682.666667H896a42.666667 42.666667 0 1 1 0 85.333333h-234.666667a42.666667 42.666667 0 0 1-40.704-55.381333l106.666667-341.333334a42.666667 42.666667 0 0 1 53.418667-27.989333z" p-id="2107"></path><path d="M853.333333 554.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v213.333334a42.666667 42.666667 0 1 1-85.333333 0v-213.333334a42.666667 42.666667 0 0 1 42.666666-42.666666zM128 170.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v256h256V213.333333a42.666667 42.666667 0 1 1 85.333333 0v597.333334a42.666667 42.666667 0 1 1-85.333333 0v-256H170.666667v256a42.666667 42.666667 0 1 1-85.333334 0V213.333333a42.666667 42.666667 0 0 1 42.666667-42.666666z" p-id="2108"></path></svg>',
    'header-5':
      '\n  <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M683.946667 373.674667A42.666667 42.666667 0 0 1 725.333333 341.333333h170.666667a42.666667 42.666667 0 1 1 0 85.333334h-137.301333l-22.016 88.234666A170.666667 170.666667 0 1 1 640 795.562667a42.666667 42.666667 0 1 1 64-56.448 85.333333 85.333333 0 1 0 0-112.896 42.666667 42.666667 0 0 1-73.386667-38.528l53.333334-214.016zM128 170.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v256h256V213.333333a42.666667 42.666667 0 1 1 85.333333 0v597.333334a42.666667 42.666667 0 1 1-85.333333 0v-256H170.666667v256a42.666667 42.666667 0 1 1-85.333334 0V213.333333a42.666667 42.666667 0 0 1 42.666667-42.666666z" p-id="2264"></path></svg>',
    'header-6':
      '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M831.274667 303.957333a42.666667 42.666667 0 0 1 16.725333 57.984l-83.498667 151.466667a170.453333 170.453333 0 0 1 88.746667 22.741333 169.557333 169.557333 0 0 1 62.506667 232.277334 171.093333 171.093333 0 0 1-232.96 62.165333 169.557333 169.557333 0 0 1-62.805334-231.850667l153.301334-278.016a42.666667 42.666667 0 0 1 57.984-16.768z m-20.48 306.176a85.76 85.76 0 0 0-116.736 31.018667 84.224 84.224 0 0 0 31.189333 115.456 85.76 85.76 0 0 0 116.736-31.018667 84.224 84.224 0 0 0-31.232-115.456zM128 170.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v256h256V213.333333a42.666667 42.666667 0 1 1 85.333333 0v597.333334a42.666667 42.666667 0 1 1-85.333333 0v-256H170.666667v256a42.666667 42.666667 0 1 1-85.333334 0V213.333333a42.666667 42.666667 0 0 1 42.666667-42.666666z" p-id="2422"></path></svg>',
    'header-n':
      '<svg  viewBox="0 0 24 24" ><path d="M2 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-7h9v7a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0v7H3V4a1 1 0 0 0-1-1Zm14 9a1 1 0 0 1 1.984-.177 4.099 4.099 0 0 1 1.757-.576 3.447 3.447 0 0 1 3.759 3.432V20a1 1 0 1 1-2 0v-5.32c0-.851-.73-1.519-1.578-1.442A2.114 2.114 0 0 0 18 15.344V20a1 1 0 1 1-2 0v-8Z" fill="currentColor"></path></svg>',
    obsidian:
      '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="logo-wireframe"><path d="M 30.91 17.52 L 34.43 35.7 M 61.44 14.41 L 62.61 0 M 34.43 35.7 L 37.57 90.47 M 81 26.39 L 61.44 14.41 L 34.43 35.7 L 65.35 100 M 62.61 0 L 30.91 17.52 L 18 45.45 L 37.57 90.47 L 65.35 100 L 70.44 89.8 L 81 26.39 L 62.61 0 Z"></path></svg>',
  };
function Yt() {
  Object.keys(Wt).forEach((t) => {
    e.addIcon(t, Wt[t]);
  });
}
let Gt;
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.toggleFull = exports.isFull = exports.exitFull = exports.beFull = void 0);
let Ut,
  Kt = document.documentElement,
  Jt = Kt.querySelector('head'),
  Qt = document.createElement('style'),
  eo = 'requestFullscreen',
  to = 'exitFullscreen',
  oo = 'fullscreenElement';
if ('webkitRequestFullScreen' in Kt)
  (eo = 'webkitRequestFullScreen'), (to = 'webkitExitFullscreen'), (oo = 'webkitFullscreenElement');
else if ('msRequestFullscreen' in Kt)
  (eo = 'msRequestFullscreen'), (to = 'msExitFullscreen'), (oo = 'msFullscreenElement');
else if ('mozRequestFullScreen' in Kt)
  (eo = 'mozRequestFullScreen'), (to = 'mozCancelFullScreen'), (oo = 'mozFullScreenElement');
else if (!('requestFullscreen' in Kt)) throw '当前浏览器不支持Fullscreen API !';
function no(e) {
  return e instanceof HTMLElement ? e : Kt;
}
function io(e) {
  return no(e)[eo]();
}
function ro() {
  return Kt.contains(Qt) && (null == Jt || Jt.removeChild(Qt)), document[to]();
}
function ao(e) {
  return no(e) === document[oo];
}
(exports.beFull = io),
  (exports.exitFull = ro),
  (exports.isFull = ao),
  (exports.toggleFull = function (e) {
    return ao(e) ? (ro(), !1) : (io(e), !0);
  });
class lo extends e.Plugin {
  constructor() {
    super(...arguments),
      (this.modCommands = [
        { id: 'editor:insert-embed', name: 'Add embed', icon: 'note-glyph' },
        { id: 'editor:insert-link', name: 'Insert markdown link', icon: 'link-glyph' },
        { id: 'editor:insert-tag', name: 'Add tag', icon: 'price-tag-glyph' },
        { id: 'editor:insert-wikilink', name: 'Add internal link', icon: 'bracket-glyph' },
        { id: 'editor:toggle-bold', name: 'Toggle bold', icon: 'bold-glyph' },
        { id: 'editor:toggle-italics', name: 'Toggle italics', icon: 'italic-glyph' },
        {
          id: 'editor:toggle-strikethrough',
          name: 'Toggle strikethrough',
          icon: 'strikethrough-glyph',
        },
        { id: 'editor:toggle-code', name: 'Toggle code', icon: 'code-glyph' },
        { id: 'editor:toggle-blockquote', name: 'Toggle blockquote', icon: 'quote-glyph' },
        { id: 'editor:toggle-bullet-list', name: 'Toggle bullet', icon: 'bullet-list-glyph' },
        {
          id: 'editor:toggle-checklist-status',
          name: 'Toggle checklist status',
          icon: 'checkbox-glyph',
        },
        { id: 'editor:toggle-comments', name: 'Toggle comment', icon: 'percent-sign-glyph' },
        { id: 'editor:toggle-highlight', name: 'Toggle highlight', icon: 'highlight-glyph' },
        {
          id: 'editor:toggle-numbered-list',
          name: 'Toggle numbered list',
          icon: 'number-list-glyph',
        },
      ]),
      (this.handlecMenuToolbar = () => {
        if (1 == this.settings.cMenuVisibility) {
          let t = this.app.workspace.getActiveViewOfType(e.MarkdownView),
            o = q(this.app, this.settings);
          if (t)
            if (o) {
              if ('following' != this.settings.positionStyle)
                try {
                  o.style.visibility = 'visible';
                } catch (e) {
                  console.log(o, 'toolbar_error');
                }
            } else
              setTimeout(() => {
                I(this.app, this);
              }, 100);
        }
      }),
      (this.handlecMenuToolbar_layout = () => {
        if (1 != this.settings.cMenuVisibility) return !1;
        {
          let t = q(this.app, this.settings),
            o = this.app.workspace.getActiveViewOfType(e.MarkdownView);
          !1 !== _(app) && o
            ? !0 === _(app) &&
              (t
                ? 'following' == this.settings.positionStyle
                  ? (t.style.visibility = 'hidden')
                  : (t.style.visibility = 'visible')
                : setTimeout(() => {
                    I(this.app, this);
                  }, 100))
            : t && (t.style.visibility = 'hidden');
        }
      }),
      (this.handlecMenuToolbar_resize = () => {
        var t, o;
        if (1 != this.settings.cMenuVisibility || 'top' != this.settings.positionStyle) return !1;
        if (_(app)) {
          let n = this.app.workspace.getActiveViewOfType(e.MarkdownView);
          if (n) {
            let i =
              null !==
                (o =
                  null === (t = n.containerEl) || void 0 === t
                    ? void 0
                    : t.querySelector('.markdown-source-view').offsetWidth) && void 0 !== o
                ? o
                : 0;
            if (this.Leaf_Width == i) return !1;
            if (i > 0 && ((this.Leaf_Width = i), this.settings.cMenuWidth && i)) {
              if (i - this.settings.cMenuWidth < 78 && i > this.settings.cMenuWidth) return;
              setTimeout(() => {
                (function () {
                  C = e.requireApiVersion('0.15.0') ? activeWindow.document : window.document;
                  let t = C,
                    o = t.querySelectorAll('#cMenuToolbarModalBar'),
                    n = t.querySelectorAll('#cMenuToolbarPopoverBar');
                  o.forEach((e) => {
                    e && (e.firstChild && e.removeChild(e.firstChild), e.remove());
                  }),
                    n.forEach((e) => {
                      e && (e.firstChild && e.removeChild(e.firstChild), e.remove());
                    });
                })(),
                  I(app, this);
              }, 200);
            }
          }
        }
      });
  }
  onload() {
    return t(this, void 0, void 0, function* () {
      console.log('cMenuToolbar v' + this.manifest.version + ' loaded'),
        (Ut = e.requireApiVersion('0.15.0') ? activeWindow.document : window.document),
        yield this.loadSettings(),
        Yt(),
        this.generateCommands(),
        this.app.workspace.onLayoutReady(() => {
          setTimeout(() => {
            this.setupStatusBar();
          });
        }),
        this.init_evt(Ut),
        e.requireApiVersion('0.15.0') &&
          this.app.workspace.on('window-open', (e) => {
            this.init_evt(e.doc);
          }),
        this.addSettingTab(new jt(this.app, this)),
        this.registerEvent(this.app.workspace.on('active-leaf-change', this.handlecMenuToolbar)),
        this.registerEvent(this.app.workspace.on('layout-change', this.handlecMenuToolbar_layout)),
        this.registerEvent(this.app.workspace.on('resize', this.handlecMenuToolbar_resize)),
        1 == this.settings.cMenuVisibility &&
          setTimeout(() => {
            dispatchEvent(new Event('cMenuToolbar-NewCommand'));
          }, 100);
    });
  }
  init_evt(o) {
    (this.EN_FontColor_Format_Brush = !1),
      (this.EN_BG_Format_Brush = !1),
      (this.EN_Text_Format_Brush = !1),
      this.registerDomEvent(o, 'mouseup', (o) =>
        t(this, void 0, void 0, function* () {
          o.button &&
            (this.EN_FontColor_Format_Brush ||
              this.EN_BG_Format_Brush ||
              this.EN_Text_Format_Brush) &&
            N(this);
          let n = this.app.workspace.getActiveViewOfType(e.MarkdownView);
          if (!n) return;
          let i = n.editor;
          if (i.hasFocus()) {
            let o = q(this.app, this.settings);
            if (null == i.getSelection() || '' == i.getSelection())
              return void (
                o &&
                ('following' != this.settings.positionStyle || (o.style.visibility = 'hidden'))
              );
            this.EN_FontColor_Format_Brush
              ? A(this.app, 0, this.settings.cMenuFontColor)
              : this.EN_BG_Format_Brush
              ? B(this.app, 0, this.settings.cMenuBackgroundColor)
              : this.EN_Text_Format_Brush
              ? L(this.app, this)
              : 'following' == this.settings.positionStyle &&
                (this.registerDomEvent(Ut, 'keydown', (e) =>
                  t(this, void 0, void 0, function* () {
                    e.shiftKey || (o && (o.style.visibility = 'hidden'));
                  }),
                ),
                ((t, o) => {
                  var n, i, r, a;
                  let l = _(t),
                    s = q(t, o);
                  if (l) {
                    const l = t.workspace.getActiveViewOfType(e.MarkdownView).editor;
                    if (s) {
                      let t = l.somethingSelected();
                      (s.style.visibility = t ? 'visible' : 'hidden'),
                        s.addClass('cMenuToolbarFlex'),
                        s.removeClass('cMenuToolbarGrid');
                      let c = 1;
                      (s.style.height = 40 * c + 'px'),
                        'tiny' == o.aestheticStyle && (s.style.height = 25 * c + 'px');
                      let d =
                          null !==
                            (i =
                              null ===
                                (n = C.getElementsByClassName('side-dock-ribbon mod-left')[0]) ||
                              void 0 === n
                                ? void 0
                                : n.clientWidth) && void 0 !== i
                            ? i
                            : 0,
                        u =
                          null !==
                            (a =
                              null === (r = C.getElementsByClassName('mod-left-split')[0]) ||
                              void 0 === r
                                ? void 0
                                : r.clientWidth) && void 0 !== a
                            ? a
                            : 0,
                        h = C.getElementById('cMenuToolbarModalBar').offsetWidth,
                        p = C.getElementById('cMenuToolbarModalBar').offsetHeight,
                        g = C.body.offsetWidth,
                        m = ((e) => {
                          var t, o, n;
                          const i = e.getCursor('head');
                          let r;
                          if (e.cursorCoords) r = e.cursorCoords(!0, 'window');
                          else {
                            if (!e.coordsAtPos) return;
                            {
                              const a = e.posToOffset(i);
                              r =
                                null !==
                                  (n =
                                    null === (o = (t = e.cm).coordsAtPos) || void 0 === o
                                      ? void 0
                                      : o.call(t, a)) && void 0 !== n
                                  ? n
                                  : e.coordsAtPos(a);
                            }
                          }
                          return r;
                        })(l),
                        f = l.getCursor('head').ch,
                        b = l.getCursor('from').ch,
                        v = 0,
                        y = m.left - u - d + 20;
                      m.left + h + 15 > g && (y = m.left - u - d - h / 1.3 - 60),
                        e.requireApiVersion('1.0.0')
                          ? f == b
                            ? (v = m.top - p - 10)
                            : ((v = m.top + 25), (y -= 40))
                          : f == b
                          ? (v = m.top - p - 30)
                          : ((v = m.top), (y -= 40)),
                        y < 0 && (y = 0),
                        'visible' != s.style.visibility ||
                          ((s.style.left = y + 'px'), (s.style.top = v + 'px'));
                    }
                  } else s.style.visibility = 'hidden';
                })(this.app, this.settings));
          } else (this.EN_FontColor_Format_Brush || this.EN_BG_Format_Brush || this.EN_Text_Format_Brush) && N(this);
        }),
      );
  }
  generateCommands() {
    this.addCommand({
      id: 'hide-show-menu',
      name: 'Hide/show ',
      icon: 'cMenuToolbar',
      callback: () =>
        t(this, void 0, void 0, function* () {
          (this.settings.cMenuVisibility = !this.settings.cMenuVisibility),
            1 == this.settings.cMenuVisibility
              ? setTimeout(() => {
                  dispatchEvent(new Event('cMenuToolbar-NewCommand'));
                }, 100)
              : l(this.settings.cMenuVisibility),
            k(),
            yield this.saveSettings();
        }),
    }),
      this.addCommand({
        id: 'format-eraser',
        name: 'Format Eraser',
        callback: () => L(this.app, this),
        icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M889 512 l-211 211 q-26 27 -61 36 q-35 9 -70 0 q-35 -9 -61 -36 l-351 -350 q-26 -27 -35.5 -62 q-9.5 -35 0 -70 q9.5 -35 35.5 -61 l170 -170 q12 -12 29 -12 l215 0 q17 0 29 12 l311 310 q26 26 35.5 61 q9.5 35 0 70 q-9.5 35 -35.5 61 ZM831 453 q15 -15 15.5 -36.5 q0.5 -21.5 -14.5 -37.5 l-300 -298 l-181 0 l-158 158 q-15 15 -15 37 q0 22 15 38 l351 351 q16 16 38 16 q22 0 37 -16 l212 -212 ZM686 217 l-59 -59 l-317 315 l58 59 l318 -315 ZM883 81 q18 0 30.5 -12 q12.5 -12 12.5 -29 q0 -17 -12.5 -29 q-12.5 -12 -29.5 -13 l-456 0 q-17 0 -29.5 12 q-12.5 12 -12.5 29 q0 17 12 29 q12 12 29 13 l456 0 Z"></path></g></svg>',
      }),
      this.addCommand({
        id: 'off-Format-Brush',
        name: 'OFF Format Brush',
        callback: () => N(this),
      }),
      this.addCommand({
        id: 'change-font-color',
        name: 'Change font color[html]',
        callback: () => {
          var e;
          return A(
            app,
            0,
            null !== (e = this.settings.cMenuFontColor) && void 0 !== e ? e : '#2DC26B',
          );
        },
        icon: '<svg width="24" height="24" focusable="false" fill="currentColor"><g fill-rule="evenodd"><path id="change-font-color-icon" d="M3 18h18v3H3z" style="fill:#2DC26B"></path><path d="M8.7 16h-.8a.5.5 0 01-.5-.6l2.7-9c.1-.3.3-.4.5-.4h2.8c.2 0 .4.1.5.4l2.7 9a.5.5 0 01-.5.6h-.8a.5.5 0 01-.4-.4l-.7-2.2c0-.3-.3-.4-.5-.4h-3.4c-.2 0-.4.1-.5.4l-.7 2.2c0 .3-.2.4-.4.4zm2.6-7.6l-.6 2a.5.5 0 00.5.6h1.6a.5.5 0 00.5-.6l-.6-2c0-.3-.3-.4-.5-.4h-.4c-.2 0-.4.1-.5.4z"></path></g></svg>',
      }),
      this.addCommand({
        id: 'change-background-color',
        name: 'Change Backgroundcolor[html]',
        callback: () => {
          var e;
          return B(
            app,
            0,
            null !== (e = this.settings.cMenuBackgroundColor) && void 0 !== e ? e : '#FA541C',
          );
        },
        icon: '<svg width="18" height="24" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg"><g   stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd"><g  ><g fill="currentColor"><g transform="translate(119.502295, 137.878331) rotate(-135.000000) translate(-119.502295, -137.878331) translate(48.002295, 31.757731)" ><path d="M100.946943,60.8084699 L43.7469427,60.8084699 C37.2852111,60.8084699 32.0469427,66.0467383 32.0469427,72.5084699 L32.0469427,118.70847 C32.0469427,125.170201 37.2852111,130.40847 43.7469427,130.40847 L100.946943,130.40847 C107.408674,130.40847 112.646943,125.170201 112.646943,118.70847 L112.646943,72.5084699 C112.646943,66.0467383 107.408674,60.8084699 100.946943,60.8084699 Z M93.646,79.808 L93.646,111.408 L51.046,111.408 L51.046,79.808 L93.646,79.808 Z" fill-rule="nonzero"></path><path d="M87.9366521,16.90916 L87.9194966,68.2000001 C87.9183543,69.4147389 86.9334998,70.399264 85.7187607,70.4 L56.9423078,70.4 C55.7272813,70.4 54.7423078,69.4150264 54.7423078,68.2 L54.7423078,39.4621057 C54.7423078,37.2523513 55.5736632,35.1234748 57.0711706,33.4985176 L76.4832996,12.4342613 C78.9534987,9.75382857 83.1289108,9.5834005 85.8093436,12.0535996 C87.1658473,13.303709 87.9372691,15.0644715 87.9366521,16.90916 Z" fill-rule="evenodd"></path><path d="M131.3,111.241199 L11.7,111.241199 C5.23826843,111.241199 0,116.479467 0,122.941199 L0,200.541199 C0,207.002931 5.23826843,212.241199 11.7,212.241199 L131.3,212.241199 C137.761732,212.241199 143,207.002931 143,200.541199 L143,122.941199 C143,116.479467 137.761732,111.241199 131.3,111.241199 Z M124,130.241 L124,193.241 L19,193.241 L19,130.241 L124,130.241 Z" fill-rule="nonzero"></path></g></g><path d="M51,218 L205,218 C211.075132,218 216,222.924868 216,229 C216,235.075132 211.075132,240 205,240 L51,240 C44.9248678,240 40,235.075132 40,229 C40,222.924868 44.9248678,218 51,218 Z" id="change-background-color-icon" style="fill:#FA541C"></path></g></g></svg>',
      }),
      this.addCommand({
        id: 'indent-list',
        name: 'indent list',
        callback: () => this.app.workspace.getActiveViewOfType(e.MarkdownView).editor.indentList(),
        icon: 'indent-glyph',
      }),
      this.addCommand({
        id: 'undent-list',
        name: 'unindent-list',
        callback: () =>
          this.app.workspace.getActiveViewOfType(e.MarkdownView).editor.unindentList(),
        icon: 'unindent-glyph',
      }),
      this.addCommand({
        id: 'editor-undo',
        name: 'undo editor',
        callback: () => this.app.workspace.getActiveViewOfType(e.MarkdownView).editor.undo(),
        icon: 'undo-glyph',
      }),
      this.addCommand({
        id: 'editor-redo',
        name: 'redo editor',
        callback: () => this.app.workspace.getActiveViewOfType(e.MarkdownView).editor.redo(),
        icon: 'redo-glyph',
      }),
      this.addCommand({
        id: 'fullscreen-focus',
        name: 'Fullscreen focus mode',
        hotkeys: [{ modifiers: ['Mod', 'Shift'], key: 'F11' }],
        callback: () =>
          (function (t) {
            var o;
            const n = t.workspace.getActiveViewOfType(e.MarkdownView);
            if (!n) return;
            let i,
              r = n.containerEl,
              a =
                null === (o = document.body) || void 0 === o
                  ? void 0
                  : o.querySelector('.mod-vertical.mod-root');
            (i = new MutationObserver(function (e) {
              e.forEach(function (e) {
                e.addedNodes.forEach(function (e) {
                  if (ao(a))
                    try {
                      document.body.removeChild(e), r.appendChild(e);
                    } catch (e) {
                      console.log(e.message);
                    }
                });
              });
            })),
              a.addEventListener('fullscreenchange', function (e) {
                ao(a) || i.disconnect();
              }),
              ao(a) ? (i.disconnect(), ro()) : (io(a), i.observe(document.body, { childList: !0 }));
          })(app),
        icon: 'fullscreen',
      }),
      this.addCommand({
        id: 'workplace-fullscreen-focus',
        name: 'workplace-Fullscreen ',
        callback: () =>
          (function (t) {
            var o, n;
            Gt = e.requireApiVersion('0.15.0') ? activeWindow.document : window.document;
            let i =
                null === (o = Gt.body) || void 0 === o
                  ? void 0
                  : o.querySelector(' .mod-right-split.is-collapsed'),
              r =
                null === (n = Gt.body) || void 0 === n
                  ? void 0
                  : n.querySelector(' .mod-left-split.is-collapsed');
            i && !r && t.commands.executeCommandById('app:toggle-left-sidebar'),
              !i && r && t.commands.executeCommandById('app:toggle-right-sidebar'),
              ((!i && !r) || (i && r)) &&
                (t.commands.executeCommandById('app:toggle-left-sidebar'),
                t.commands.executeCommandById('app:toggle-right-sidebar'));
          })(app),
        hotkeys: [{ modifiers: ['Mod'], key: 'F11' }],
        icon: 'remix-SplitCellsHorizontal',
      }),
      this.addCommand({
        id: 'header0-text',
        name: 'Remove header level',
        callback: () => O(''),
        hotkeys: [{ modifiers: ['Mod'], key: '`' }],
        icon: 'heading-glyph',
      }),
      this.addCommand({
        id: 'header1-text',
        name: 'Header 1',
        callback: () => O('#'),
        icon: 'header-1',
      }),
      this.addCommand({
        id: 'header2-text',
        name: 'Header 2',
        callback: () => O('##'),
        icon: 'header-2',
      }),
      this.addCommand({
        id: 'header3-text',
        name: 'Header 3',
        callback: () => O('###'),
        icon: 'header-3',
      }),
      this.addCommand({
        id: 'header4-text',
        name: 'Header 4',
        callback: () => O('####'),
        icon: 'header-4',
      }),
      this.addCommand({
        id: 'header5-text',
        name: 'Header 5',
        callback: () => O('#####'),
        icon: 'header-5',
      }),
      this.addCommand({
        id: 'header6-text',
        name: 'Header 6',
        callback: () => O('######'),
        icon: 'header-6',
      });
    const n = {
      hrline: { char: 5, line: 1, prefix: '\n---', suffix: '\n', islinehead: !0 },
      justify: { char: 17, line: 0, prefix: '<p align="justify">', suffix: '</p>', islinehead: !1 },
      left: { char: 17, line: 0, prefix: '<p align="left">', suffix: '</p>', islinehead: !1 },
      right: { char: 17, line: 0, prefix: '<p align="right">', suffix: '</p>', islinehead: !1 },
      center: { char: 8, line: 0, prefix: '<center>', suffix: '</center>', islinehead: !1 },
      underline: { char: 3, line: 0, prefix: '<u>', suffix: '</u>', islinehead: !1 },
      superscript: { char: 5, line: 0, prefix: '<sup>', suffix: '</sup>', islinehead: !1 },
      subscript: { char: 5, line: 0, prefix: '<sub>', suffix: '</sub>', islinehead: !1 },
      codeblock: { char: 4, line: 0, prefix: '\n```\n', suffix: '\n```\n', islinehead: !1 },
    };
    Object.keys(n).forEach((i) => {
      this.addCommand({
        id: `${i}`,
        name: `Toggle ${i}`,
        icon: `${i}-glyph`,
        callback: () =>
          t(this, void 0, void 0, function* () {
            const t = this.app.workspace.getActiveViewOfType(e.MarkdownView);
            if (t) {
              const e = t.editor;
              ((e, t) => {
                const o = t.getSelection(),
                  n = t.getCursor('from'),
                  i = t.getCursor('to');
                let r = e.prefix;
                e.islinehead && n.ch > 0 && (r = '\n' + r);
                const a = e.suffix || r,
                  l = (o) => {
                    t.setCursor(n.line + e.line * o, i.ch + e.char * o);
                  },
                  s = { line: n.line - e.line, ch: n.ch - r.length };
                if (t.getRange(s, n) == r.trimStart()) {
                  const r = { line: n.line + e.line, ch: i.ch + a.length };
                  if (t.getRange(i, r) == a.trimEnd()) return t.replaceRange(o, s, r), l(-1);
                }
                t.replaceSelection(`${r}${o}${a}`), l(1);
              })(n[i], e),
                yield o(10),
                app.commands.executeCommandById('editor:focus');
            }
          }),
      });
    }),
      this.modCommands.forEach((n) => {
        this.addCommand({
          id: `${n.id}`,
          name: `${n.name}`,
          icon: `${n.icon}`,
          callback: () =>
            t(this, void 0, void 0, function* () {
              const t = this.app.workspace.getActiveViewOfType(e.MarkdownView).editor;
              t.getCursor('from');
              const i = t.getCursor('to');
              let r;
              (r =
                'editor:insert-embed' == `${n.id}`
                  ? 3
                  : 'editor:insert-link' == `${n.id}` || 'editor:insert-tag' == `${n.id}`
                  ? 1
                  : 'editor:insert-wikilink' == `${n.id}` || 'editor:toggle-bold' == `${n.id}`
                  ? 2
                  : 'editor:toggle-italics' == `${n.id}`
                  ? 1
                  : 'editor:toggle-strikethrough' == `${n.id}`
                  ? 2
                  : 'editor:toggle-code' == `${n.id}`
                  ? 1
                  : 'editor:toggle-blockquote' == `${n.id}` ||
                    'editor:toggle-bullet-list' == `${n.id}`
                  ? 2
                  : 'editor:toggle-checklist-status' == `${n.id}`
                  ? 4
                  : 'editor:toggle-comments' == `${n.id}` || 'editor:toggle-highlight' == `${n.id}`
                  ? 2
                  : 'editor:toggle-numbered-list' == `${n.id}`
                  ? 3
                  : 2),
                app.commands.executeCommandById(`${n.id}`),
                t.setCursor(i.line, i.ch + r),
                yield o(10),
                app.commands.executeCommandById('editor:focus');
            }),
        });
      });
  }
  setupStatusBar() {
    Yt(),
      (this.statusBarIcon = this.addStatusBarItem()),
      this.statusBarIcon.addClass('cMenuToolbar-statusbar-button'),
      e.setIcon(this.statusBarIcon, 'cMenuToolbar'),
      this.registerDomEvent(this.statusBarIcon, 'click', () => {
        const o = this.statusBarIcon.parentElement.getBoundingClientRect(),
          n = this.statusBarIcon.getBoundingClientRect(),
          i = new e.Menu().addItem((o) => {
            o.setTitle(u('Hide & Show')),
              !e.requireApiVersion('0.15.0') || o.setSection('settings');
            const n = o.dom,
              i = new e.ToggleComponent(n).setValue(this.settings.cMenuVisibility).setDisabled(!0),
              r = () =>
                t(this, void 0, void 0, function* () {
                  (this.settings.cMenuVisibility = !this.settings.cMenuVisibility),
                    i.setValue(this.settings.cMenuVisibility),
                    1 == this.settings.cMenuVisibility
                      ? setTimeout(() => {
                          dispatchEvent(new Event('cMenuToolbar-NewCommand'));
                        }, 100)
                      : l(this.settings.cMenuVisibility),
                    k(),
                    yield this.saveSettings();
                });
            o.onClick((e) => {
              e.preventDefault(), e.stopImmediatePropagation(), r();
            });
          });
        i.dom.addClass('cMenuToolbar-statusbar-menu'),
          i.addItem((t) => {
            t.setIcon('cMenuToolbarAdd'),
              !e.requireApiVersion('0.15.0') || t.setSection('ButtonAdd'),
              t.onClick(() => {
                new p(this).open();
              });
          }),
          i.addItem((t) => {
            t.setIcon('cMenuToolbarReload'),
              !e.requireApiVersion('0.15.0') || t.setSection('ButtonAdd'),
              t.onClick(() => {
                setTimeout(() => {
                  dispatchEvent(new Event('cMenuToolbar-NewCommand'));
                }, 100),
                  console.log('%ccMenuToolbar refreshed', 'color: Violet');
              });
          }),
          i.addItem((t) => {
            t.setIcon('sliders'),
              !e.requireApiVersion('0.15.0') || t.setSection('ButtonAdd'),
              t.onClick(() => {
                new f(this.app, this).open();
              });
          }),
          i.showAtPosition({ x: n.right + 5, y: o.top - 5 });
      });
  }
  onunload() {
    k(),
      console.log('cMenuToolbar unloaded'),
      this.app.workspace.off('active-leaf-change', this.handlecMenuToolbar),
      this.app.workspace.off('layout-change', this.handlecMenuToolbar_layout),
      this.app.workspace.off('resize', this.handlecMenuToolbar_resize);
  }
  setIS_MORE_Button(e) {
    this.IS_MORE_Button = e;
  }
  setEN_BG_Format_Brush(e) {
    this.EN_BG_Format_Brush = e;
  }
  setEN_FontColor_Format_Brush(e) {
    this.EN_FontColor_Format_Brush = e;
  }
  setEN_Text_Format_Brush(e) {
    this.EN_Text_Format_Brush = e;
  }
  setTemp_Notice(e) {
    this.Temp_Notice = e;
  }
  loadSettings() {
    return t(this, void 0, void 0, function* () {
      this.settings = Object.assign({}, w, yield this.loadData());
    });
  }
  saveSettings() {
    return t(this, void 0, void 0, function* () {
      yield this.saveData(this.settings);
    });
  }
}
module.exports = lo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL3NyYy91dGlsL3V0aWwudHMiLCIuLi9zcmMvaWNvbnMvYXBwSWNvbnMudHMiLCIuLi9zcmMvdXRpbC9zdGF0dXNCYXJDb25zdGFudHMudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9hci50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL2VuLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9oZWxwZXIudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9jei50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL2RhLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvZGUudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9lbi1nYi50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL2VzLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvZnIudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9oaS50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL2lkLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvaXQudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9qYS50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL2tvLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvbmwudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9uby50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL3BsLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvcHQudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9wdC1ici50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL3JvLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvcnUudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS90ci50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL3poLWNuLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvemgtdHcudHMiLCIuLi9zcmMvbW9kYWxzL3N1Z2dlc3Rlck1vZGFscy50cyIsIi4uL3NyYy9zZXR0aW5ncy9zZXR0aW5nc0RhdGEudHMiLCIuLi9zcmMvbW9kYWxzL2NNZW51VG9vbGJhck1vZGFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NvcnRhYmxlanMvbW9kdWxhci9zb3J0YWJsZS5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvQHNpbW9ud2VwL3BpY2tyL2Rpc3QvcGlja3IubWluLmpzIiwiLi4vc3JjL3NldHRpbmdzL3NldHRpbmdzVGFiLnRzIiwiLi4vc3JjL2ljb25zL2N1c3RvbUljb25zLnRzIiwiLi4vc3JjL3V0aWwvZnVsbHNjcmVlbi50cyIsIi4uL3NyYy9wbHVnaW4vbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcclxuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XHJcbiAgICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4oc3RhdGUsIHJlY2VpdmVyKSB7XHJcbiAgICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcclxuICAgIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XHJcbn1cclxuIiwiXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3YWl0KGRlbGF5OiBudW1iZXIpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpKTtcclxufVxyXG4vLyBHZW5Ob25EdXBsaWNhdGVJRCgzKSDlsIbnlJ/miJDnsbvkvLwgaXg0OXdsMjk3OHcg55qESURcclxuZXhwb3J0IGZ1bmN0aW9uIEdlbk5vbkR1cGxpY2F0ZUlEKHJhbmRvbUxlbmd0aDogbnVtYmVyKSB7XHJcbiAgbGV0IGlkU3RyID0gRGF0ZS5ub3coKS50b1N0cmluZygzNilcclxuICBpZFN0ciArPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMywgcmFuZG9tTGVuZ3RoKVxyXG4gIHJldHVybiBpZFN0clxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kbWVudUlEKHBsdWdpbjogeyBzZXR0aW5nczogeyBtZW51Q29tbWFuZHM6IGFueTsgfTsgfSwgY29tbWFuZDogeyBpZDogYW55OyB9LCBpc3N1YjogYW55KSB7XHJcbiAgbGV0IGluZGV4O1xyXG4gIGxldCByZXMgPSB7IFwiaW5kZXhcIjogLTEsIFwic3ViaW5kZXhcIjogLTEgfTtcclxuICBsZXQgbWVudWNtZCA9IHBsdWdpbi5zZXR0aW5ncy5tZW51Q29tbWFuZHNcclxuICBpZiAoaXNzdWIpIHtcclxuICAgIG1lbnVjbWQuZm9yRWFjaCgoaXRlbTogeyBTdWJtZW51Q29tbWFuZHM6IGFueVtdOyB9LCBpZHg6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoXCJTdWJtZW51Q29tbWFuZHNcIiBpbiBpdGVtKSB7XHJcbiAgICAgICAgaW5kZXggPSBpdGVtLlN1Ym1lbnVDb21tYW5kcy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT0gY29tbWFuZC5pZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgIHJlcyA9IHsgXCJpbmRleFwiOiBpZHgsIFwic3ViaW5kZXhcIjogaW5kZXggfTtcclxuICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBpbmRleCA9IG1lbnVjbWQuZmluZEluZGV4KCh2OiB7IGlkOiBhbnk7IH0pID0+IHYuaWQgPT0gY29tbWFuZC5pZCk7XHJcbiAgICByZXMgPSB7IFwiaW5kZXhcIjogaW5kZXgsIFwic3ViaW5kZXhcIjogLTEgfTtcclxuICB9XHJcbiAgcmV0dXJuIHJlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9ycGlja2VyKHBsdWdpbjogeyBzZXR0aW5nczogeyBjdXN0b21fZmMxOiBhbnk7IGN1c3RvbV9mYzI6IGFueTsgY3VzdG9tX2ZjMzogYW55OyBjdXN0b21fZmM0OiBhbnk7IGN1c3RvbV9mYzU6IGFueTsgfTsgfSkge1xyXG5cclxuICByZXR1cm4gYDxkaXYgY2xhc3M9J3gtY29sb3ItcGlja2VyLXdyYXBwZXInPlxyXG48ZGl2IGNsYXNzPSd4LWNvbG9yLXBpY2tlcicgPlxyXG4gIDx0YWJsZSBjbGFzcz1cIngtY29sb3ItcGlja2VyLXRhYmxlXCIgaWQ9J3gtY29sb3ItcGlja2VyLXRhYmxlJz5cclxuICAgIDx0Ym9keT5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0aCBjb2xzcGFuPVwiMTBcIiBjbGFzcz1cInVpLXdpZGdldC1jb250ZW50XCI+VGhlbWUgQ29sb3JzPC90aD5cclxuICAgICAgPC90cj5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2ZmZmZmZlwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzAwMDAwMFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2VlZWNlMVwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzFmNDk3ZFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzRmODFiZFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2MwNTA0ZFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzliYmI1OVwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzgwNjRhMlwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzRiYWNjNlwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2Y3OTY0NlwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRoIGNvbHNwYW49XCIxMFwiPjwvdGg+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIDx0ciBjbGFzcz1cInRvcFwiPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2YyZjJmMlwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzdmN2Y3ZlwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2RkZDljM1wiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2M2ZDlmMFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2RiZTVmMVwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2YyZGNkYlwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2ViZjFkZFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2U1ZTBlY1wiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2RiZWVmM1wiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2ZkZWFkYVwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgICA8dHIgY2xhc3M9XCJpblwiPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2Q4ZDhkOFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzU5NTk1OVwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2M0YmQ5N1wiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzhkYjNlMlwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2I4Y2NlNFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2U1YjliN1wiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2Q3ZTNiY1wiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2NjYzFkOVwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2I3ZGRlOFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2ZiZDViNVwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgICA8dHIgY2xhc3M9XCJpblwiPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2JmYmZiZlwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzNmM2YzZlwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzkzODk1M1wiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzU0OGRkNFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Izk1YjNkN1wiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2Q5OTY5NFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2MzZDY5YlwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2IyYTJjN1wiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzkyY2RkY1wiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2ZhYzA4ZlwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgICA8dHIgY2xhc3M9XCJpblwiPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2E1YTVhNVwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzI2MjYyNlwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzQ5NDQyOVwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzE3MzY1ZFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzM2NjA5MlwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Izk1MzczNFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Izc2OTIzY1wiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzVmNDk3YVwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzMxODU5YlwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2UzNmMwOVwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgICA8dHIgY2xhc3M9XCJib3R0b21cIj5cclxuICAgICAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiM3ZjdmN2ZcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiMwYzBjMGNcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiMxZDFiMTBcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiMwZjI0M2VcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiMyNDQwNjFcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiM2MzI0MjNcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiM0ZjYxMjhcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiMzZjMxNTFcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiMyMDU4NjdcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiM5NzQ4MDZcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICAgIDx0cj5cclxuICAgICAgICA8dGggY29sc3Bhbj1cIjEwXCI+PC90aD5cclxuICAgICAgPC90cj5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0aCBjb2xzcGFuPVwiMTBcIiBjbGFzcz1cInVpLXdpZGdldC1jb250ZW50XCI+U3RhbmRhcmQgQ29sb3JzPC90aD5cclxuICAgICAgPC90cj5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2MwMDAwMFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2ZmMDAwMFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2ZmYzAwMFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2ZmZmYwMFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzkyZDA1MFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzAwYjA1MFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzAwYjBmMFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzAwNzBjMFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzAwMjA2MFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IzcwMzBhMFwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgICA8dHI+XHJcbiAgICAgIDx0aCBjb2xzcGFuPVwiMTBcIiBjbGFzcz1cInVpLXdpZGdldC1jb250ZW50XCI+Q3VzdG9tIEZvbnQgQ29sb3JzPC90aD5cclxuICAgIDwvdHI+XHJcbiAgICA8dHI+XHJcbiAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6JHtwbHVnaW4uc2V0dGluZ3MuY3VzdG9tX2ZjMX1cIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgPHRkIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjoke3BsdWdpbi5zZXR0aW5ncy5jdXN0b21fZmMyfVwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiR7cGx1Z2luLnNldHRpbmdzLmN1c3RvbV9mYzN9XCI+PHNwYW4+PC9zcGFuPjwvdGQ+XHJcbiAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6JHtwbHVnaW4uc2V0dGluZ3MuY3VzdG9tX2ZjNH1cIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgPHRkIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjoke3BsdWdpbi5zZXR0aW5ncy5jdXN0b21fZmM1fVwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgPC90cj5cclxuICAgIDwvdGJvZHk+XHJcbiAgPC90YWJsZT5cclxuPC9kaXY+XHJcbjwvZGl2PmA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiYWNrY29sb3JwaWNrZXIocGx1Z2luOiB7IHNldHRpbmdzOiB7IGN1c3RvbV9iZzE6IGFueTsgY3VzdG9tX2JnMjogYW55OyBjdXN0b21fYmczOiBhbnk7IGN1c3RvbV9iZzQ6IGFueTsgY3VzdG9tX2JnNTogYW55OyB9OyB9KSB7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9J3gtY29sb3ItcGlja2VyLXdyYXBwZXInPlxyXG48ZGl2IGNsYXNzPSd4LWNvbG9yLXBpY2tlcicgPlxyXG4gIDx0YWJsZSBjbGFzcz1cIngtY29sb3ItcGlja2VyLXRhYmxlXCIgaWQ9J3gtYmFja2dyb3VuZGNvbG9yLXBpY2tlci10YWJsZSc+XHJcbiAgICA8dGJvZHk+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGggY29sc3Bhbj1cIjVcIiBjbGFzcz1cInVpLXdpZGdldC1jb250ZW50XCI+VHJhbnNsdWNlbnQgQ29sb3JzPC90aD5cclxuICAgICAgPC90cj5cclxuICAgICAgPHRyIGNsYXNzPVwidG9wXCI+XHJcbiAgICAgICAgPHRkIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE0MCwgMTQwLCAxNDAsIDAuMTIpXCI+PHNwYW4+PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgPHRkIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDkyLCA5MiwgOTIsIDAuMilcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTYzLCA2NywgMzEsIDAuMilcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQwLCAxMDcsIDUsIDAuMilcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQwLCAyMDAsIDAsIDAuMilcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0ciBjbGFzcz1cImJvdHRvbVwiPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSgzLCAxMzUsIDEwMiwgMC4yKVwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSgzLCAxMzUsIDEwMiwgMC4yKVwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSg1LCAxMTcsIDE5NywgMC4yKVwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSg3NCwgODIsIDE5OSwgMC4yKVwiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSgxMzYsIDQ5LCAyMDQsIDAuMilcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgPC90cj5cclxuXHJcbiAgICAgIDx0cj5cclxuICAgICAgPHRoIGNvbHNwYW49XCI1XCIgY2xhc3M9XCJ1aS13aWRnZXQtY29udGVudFwiPkhpZ2hsaWdodGVyIENvbG9yczwvdGg+XHJcbiAgICA8L3RyPlxyXG4gICAgXHJcbiAgICA8dHIgY2xhc3M9XCJ0b3BcIj5cclxuICAgICAgPHRkIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAyNDgsIDE0MylcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgPHRkIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjExLCAyNDgsIDE4MilcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgPHRkIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTc1LCAyNTAsIDIwOSlcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgPHRkIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTc3LCAyNTUsIDI1NSlcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgPHRkIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjUzLCAxOTEsIDI1NSlcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICAgPHRyIGNsYXNzPVwiYm90dG9tXCI+XHJcbiAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiKDIxMCwgMjAzLCAyNTUpO1wiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJnYig2NCwgMTY5LCAyNTUpO1wiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDc3LCA3OSk7XCI+PHNwYW4+PC9zcGFuPjwvdGQ+XHJcbiAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiKDIxMiwgMTc3LCA2KTtcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgICAgPHRkIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTQ2LCA4NCwgMjIyKTtcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgIDwvdHI+XHJcbiAgICA8dHI+XHJcbiAgICA8dGggY29sc3Bhbj1cIjVcIiBjbGFzcz1cInVpLXdpZGdldC1jb250ZW50XCI+Q3VzdG9tIENvbG9yczwvdGg+XHJcbiAgPC90cj5cclxuICAgIDx0ciBjbGFzcz1cImJvdHRvbVwiPlxyXG4gICAgPHRkIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJHtwbHVnaW4uc2V0dGluZ3MuY3VzdG9tX2JnMX07XCI+PHNwYW4+PC9zcGFuPjwvdGQ+XHJcbiAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiR7cGx1Z2luLnNldHRpbmdzLmN1c3RvbV9iZzJ9O1wiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gICAgPHRkIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjoke3BsdWdpbi5zZXR0aW5ncy5jdXN0b21fYmczfTtcIj48c3Bhbj48L3NwYW4+PC90ZD5cclxuICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6JHtwbHVnaW4uc2V0dGluZ3MuY3VzdG9tX2JnNH07XCI+PHNwYW4+PC9zcGFuPjwvdGQ+XHJcbiAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiR7cGx1Z2luLnNldHRpbmdzLmN1c3RvbV9iZzV9O1wiPjxzcGFuPjwvc3Bhbj48L3RkPlxyXG4gIDwvdHI+XHJcbiAgICA8L3Rib2R5PlxyXG4gIDwvdGFibGU+XHJcbjwvZGl2PlxyXG48L2Rpdj5gO1xyXG4gIH1cclxuXHJcbiIsImV4cG9ydCBjb25zdCBhcHBJY29uczogc3RyaW5nW10gPSBbXHJcbiAgLy8gZnJvbSBvYnNpZGlhbiBhcHAuanMgZmlsZVxyXG4gIFwiQ3VzdG9tXCIsXHJcbiAgXCJjTWVudVRvb2xiYXJcIixcclxuICBcImNNZW51VG9vbGJhclN1YlwiLFxyXG4gIFwiY01lbnVUb29sYmFyQWRkXCIsXHJcbiAgXCJjTWVudVRvb2xiYXJEZWxldGVcIixcclxuICBcImNNZW51VG9vbGJhclJlbG9hZFwiLFxyXG4gIFwiY29kZWJsb2NrLWdseXBoXCIsXHJcbiAgXCJ1bmRlcmxpbmUtZ2x5cGhcIixcclxuICBcInN1cGVyc2NyaXB0LWdseXBoXCIsXHJcbiAgXCJzdWJzY3JpcHQtZ2x5cGhcIixcclxuICBcImJvdC1nbHlwaFwiLFxyXG4gIFwiaGVhZGVyLTFcIixcclxuICBcImhlYWRlci0yXCIsXHJcbiAgXCJoZWFkZXItM1wiLFxyXG4gIFwiaGVhZGVyLTRcIixcclxuICBcImhlYWRlci01XCIsXHJcbiAgXCJoZWFkZXItNlwiLFxyXG4gIFwiaGVhZGVyLW5cIixcclxuICBcIm9ic2lkaWFuXCIsXHJcbiAgXCJhY2Nlc3NpYmlsaXR5XCIsXHJcbiAgXCJhY3Rpdml0eVwiLFxyXG4gIFwiYWlyLXZlbnRcIixcclxuICBcImFpcnBsYXlcIixcclxuICBcImFsYXJtLWNoZWNrXCIsXHJcbiAgXCJhbGFybS1jbG9jay1vZmZcIixcclxuICBcImFsYXJtLWNsb2NrXCIsXHJcbiAgXCJhbGFybS1taW51c1wiLFxyXG4gIFwiYWxhcm0tcGx1c1wiLFxyXG4gIFwiYWxidW1cIixcclxuICBcImFsZXJ0LWNpcmNsZVwiLFxyXG4gIFwiYWxlcnQtb2N0YWdvblwiLFxyXG4gIFwiYWxlcnQtdHJpYW5nbGVcIixcclxuICBcImFsaWduLWNlbnRlci1ob3Jpem9udGFsXCIsXHJcbiAgXCJhbGlnbi1jZW50ZXItdmVydGljYWxcIixcclxuICBcImFsaWduLWNlbnRlclwiLFxyXG4gIFwiYWxpZ24tZW5kLWhvcml6b250YWxcIixcclxuICBcImFsaWduLWVuZC12ZXJ0aWNhbFwiLFxyXG4gIFwiYWxpZ24taG9yaXpvbnRhbC1kaXN0cmlidXRlLWNlbnRlclwiLFxyXG4gIFwiYWxpZ24taG9yaXpvbnRhbC1kaXN0cmlidXRlLWVuZFwiLFxyXG4gIFwiYWxpZ24taG9yaXpvbnRhbC1kaXN0cmlidXRlLXN0YXJ0XCIsXHJcbiAgXCJhbGlnbi1ob3Jpem9udGFsLWp1c3RpZnktY2VudGVyXCIsXHJcbiAgXCJhbGlnbi1ob3Jpem9udGFsLWp1c3RpZnktZW5kXCIsXHJcbiAgXCJhbGlnbi1ob3Jpem9udGFsLWp1c3RpZnktc3RhcnRcIixcclxuICBcImFsaWduLWhvcml6b250YWwtc3BhY2UtYXJvdW5kXCIsXHJcbiAgXCJhbGlnbi1ob3Jpem9udGFsLXNwYWNlLWJldHdlZW5cIixcclxuICBcImFsaWduLWp1c3RpZnlcIixcclxuICBcImFsaWduLWxlZnRcIixcclxuICBcImFsaWduLXJpZ2h0XCIsXHJcbiAgXCJhbGlnbi1zdGFydC1ob3Jpem9udGFsXCIsXHJcbiAgXCJhbGlnbi1zdGFydC12ZXJ0aWNhbFwiLFxyXG4gIFwiYWxpZ24tdmVydGljYWwtZGlzdHJpYnV0ZS1jZW50ZXJcIixcclxuICBcImFsaWduLXZlcnRpY2FsLWRpc3RyaWJ1dGUtZW5kXCIsXHJcbiAgXCJhbGlnbi12ZXJ0aWNhbC1kaXN0cmlidXRlLXN0YXJ0XCIsXHJcbiAgXCJhbGlnbi12ZXJ0aWNhbC1qdXN0aWZ5LWNlbnRlclwiLFxyXG4gIFwiYWxpZ24tdmVydGljYWwtanVzdGlmeS1lbmRcIixcclxuICBcImFsaWduLXZlcnRpY2FsLWp1c3RpZnktc3RhcnRcIixcclxuICBcImFsaWduLXZlcnRpY2FsLXNwYWNlLWFyb3VuZFwiLFxyXG4gIFwiYWxpZ24tdmVydGljYWwtc3BhY2UtYmV0d2VlblwiLFxyXG4gIFwiYW5jaG9yXCIsXHJcbiAgXCJhbmdyeVwiLFxyXG4gIFwiYW5ub3llZFwiLFxyXG4gIFwiYXBlcnR1cmVcIixcclxuICBcImFwcGxlXCIsXHJcbiAgXCJhcmNoaXZlLXJlc3RvcmVcIixcclxuICBcImFyY2hpdmVcIixcclxuICBcImFybWNoYWlyXCIsXHJcbiAgXCJhcnJvdy1iaWctZG93blwiLFxyXG4gIFwiYXJyb3ctYmlnLWxlZnRcIixcclxuICBcImFycm93LWJpZy1yaWdodFwiLFxyXG4gIFwiYXJyb3ctYmlnLXVwXCIsXHJcbiAgXCJhcnJvdy1kb3duLWNpcmNsZVwiLFxyXG4gIFwiYXJyb3ctZG93bi1sZWZ0XCIsXHJcbiAgXCJhcnJvdy1kb3duLXJpZ2h0XCIsXHJcbiAgXCJhcnJvdy1kb3duXCIsXHJcbiAgXCJhcnJvdy1sZWZ0LWNpcmNsZVwiLFxyXG4gIFwiYXJyb3ctbGVmdC1yaWdodFwiLFxyXG4gIFwiYXJyb3ctbGVmdFwiLFxyXG4gIFwiYXJyb3ctcmlnaHQtY2lyY2xlXCIsXHJcbiAgXCJhcnJvdy1yaWdodFwiLFxyXG4gIFwiYXJyb3ctdXAtY2lyY2xlXCIsXHJcbiAgXCJhcnJvdy11cC1sZWZ0XCIsXHJcbiAgXCJhcnJvdy11cC1yaWdodFwiLFxyXG4gIFwiYXJyb3ctdXBcIixcclxuICBcImFzdGVyaXNrXCIsXHJcbiAgXCJhdC1zaWduXCIsXHJcbiAgXCJhd2FyZFwiLFxyXG4gIFwiYXhlXCIsXHJcbiAgXCJheGlzLTNkXCIsXHJcbiAgXCJiYWJ5XCIsXHJcbiAgXCJiYWNrcGFja1wiLFxyXG4gIFwiYmFnZ2FnZS1jbGFpbVwiLFxyXG4gIFwiYmFuYW5hXCIsXHJcbiAgXCJiYW5rbm90ZVwiLFxyXG4gIFwiYmFyLWNoYXJ0LTJcIixcclxuICBcImJhci1jaGFydC0zXCIsXHJcbiAgXCJiYXItY2hhcnQtNFwiLFxyXG4gIFwiYmFyLWNoYXJ0LWhvcml6b250YWxcIixcclxuICBcImJhci1jaGFydFwiLFxyXG4gIFwiYmFzZWxpbmVcIixcclxuICBcImJhdGhcIixcclxuICBcImJhdHRlcnktY2hhcmdpbmdcIixcclxuICBcImJhdHRlcnktZnVsbFwiLFxyXG4gIFwiYmF0dGVyeS1sb3dcIixcclxuICBcImJhdHRlcnktbWVkaXVtXCIsXHJcbiAgXCJiYXR0ZXJ5XCIsXHJcbiAgXCJiZWFrZXJcIixcclxuICBcImJlZC1kb3VibGVcIixcclxuICBcImJlZC1zaW5nbGVcIixcclxuICBcImJlZFwiLFxyXG4gIFwiYmVlclwiLFxyXG4gIFwiYmVsbC1taW51c1wiLFxyXG4gIFwiYmVsbC1vZmZcIixcclxuICBcImJlbGwtcGx1c1wiLFxyXG4gIFwiYmVsbC1yaW5nXCIsXHJcbiAgXCJiZWxsXCIsXHJcbiAgXCJiaWtlXCIsXHJcbiAgXCJiaW5hcnlcIixcclxuICBcImJpdGNvaW5cIixcclxuICBcImJsdWV0b290aC1jb25uZWN0ZWRcIixcclxuICBcImJsdWV0b290aC1vZmZcIixcclxuICBcImJsdWV0b290aC1zZWFyY2hpbmdcIixcclxuICBcImJsdWV0b290aFwiLFxyXG4gIFwiYm9sZFwiLFxyXG4gIFwiYm9tYlwiLFxyXG4gIFwiYm9uZVwiLFxyXG4gIFwiYm9vay1vcGVuXCIsXHJcbiAgXCJib29rXCIsXHJcbiAgXCJib29rbWFyay1taW51c1wiLFxyXG4gIFwiYm9va21hcmstcGx1c1wiLFxyXG4gIFwiYm9va21hcmtcIixcclxuICBcImJvdFwiLFxyXG4gIFwiYm94LXNlbGVjdFwiLFxyXG4gIFwiYm94XCIsXHJcbiAgXCJib3hlc1wiLFxyXG4gIFwiYnJpZWZjYXNlXCIsXHJcbiAgXCJicnVzaFwiLFxyXG4gIFwiYnVnXCIsXHJcbiAgXCJidWlsZGluZy0yXCIsXHJcbiAgXCJidWlsZGluZ1wiLFxyXG4gIFwiYnVzXCIsXHJcbiAgXCJjYWtlXCIsXHJcbiAgXCJjYWxjdWxhdG9yXCIsXHJcbiAgXCJjYWxlbmRhci1jaGVjay0yXCIsXHJcbiAgXCJjYWxlbmRhci1jaGVja1wiLFxyXG4gIFwiY2FsZW5kYXItY2xvY2tcIixcclxuICBcImNhbGVuZGFyLWRheXNcIixcclxuICBcImNhbGVuZGFyLWhlYXJ0XCIsXHJcbiAgXCJjYWxlbmRhci1taW51c1wiLFxyXG4gIFwiY2FsZW5kYXItb2ZmXCIsXHJcbiAgXCJjYWxlbmRhci1wbHVzXCIsXHJcbiAgXCJjYWxlbmRhci1yYW5nZVwiLFxyXG4gIFwiY2FsZW5kYXItc2VhcmNoXCIsXHJcbiAgXCJjYWxlbmRhci14MlwiLFxyXG4gIFwiY2FsZW5kYXIteFwiLFxyXG4gIFwiY2FsZW5kYXJcIixcclxuICBcImNhbWVyYS1vZmZcIixcclxuICBcImNhbWVyYVwiLFxyXG4gIFwiY2FyXCIsXHJcbiAgXCJjYXJyb3RcIixcclxuICBcImNhc3RcIixcclxuICBcImNoZWNrLWNpcmNsZS0yXCIsXHJcbiAgXCJjaGVjay1jaXJjbGVcIixcclxuICBcImNoZWNrLXNxdWFyZVwiLFxyXG4gIFwiY2hlY2tcIixcclxuICBcImNoZWYtaGF0XCIsXHJcbiAgXCJjaGVycnlcIixcclxuICBcImNoZXZyb24tZG93blwiLFxyXG4gIFwiY2hldnJvbi1maXJzdFwiLFxyXG4gIFwiY2hldnJvbi1sYXN0XCIsXHJcbiAgXCJjaGV2cm9uLWxlZnRcIixcclxuICBcImNoZXZyb24tcmlnaHRcIixcclxuICBcImNoZXZyb24tdXBcIixcclxuICBcImNoZXZyb25zLWRvd24tdXBcIixcclxuICBcImNoZXZyb25zLWRvd25cIixcclxuICBcImNoZXZyb25zLWxlZnQtcmlnaHRcIixcclxuICBcImNoZXZyb25zLWxlZnRcIixcclxuICBcImNoZXZyb25zLXJpZ2h0LWxlZnRcIixcclxuICBcImNoZXZyb25zLXJpZ2h0XCIsXHJcbiAgXCJjaGV2cm9ucy11cC1kb3duXCIsXHJcbiAgXCJjaGV2cm9ucy11cFwiLFxyXG4gIFwiY2hyb21lXCIsXHJcbiAgXCJjaWdhcmV0dGUtb2ZmXCIsXHJcbiAgXCJjaWdhcmV0dGVcIixcclxuICBcImNpcmNsZS1kb3RcIixcclxuICBcImNpcmNsZS1lbGxpcHNpc1wiLFxyXG4gIFwiY2lyY2xlLXNsYXNoZWRcIixcclxuICBcImNpcmNsZVwiLFxyXG4gIFwiY2l0cnVzXCIsXHJcbiAgXCJjbGFwcGVyYm9hcmRcIixcclxuICBcImNsaXBib2FyZC1jaGVja1wiLFxyXG4gIFwiY2xpcGJvYXJkLWNvcHlcIixcclxuICBcImNsaXBib2FyZC1lZGl0XCIsXHJcbiAgXCJjbGlwYm9hcmQtbGlzdFwiLFxyXG4gIFwiY2xpcGJvYXJkLXNpZ25hdHVyZVwiLFxyXG4gIFwiY2xpcGJvYXJkLXR5cGVcIixcclxuICBcImNsaXBib2FyZC14XCIsXHJcbiAgXCJjbGlwYm9hcmRcIixcclxuICBcImNsb2NrLTFcIixcclxuICBcImNsb2NrLTEwXCIsXHJcbiAgXCJjbG9jay0xMVwiLFxyXG4gIFwiY2xvY2stMTJcIixcclxuICBcImNsb2NrLTJcIixcclxuICBcImNsb2NrLTNcIixcclxuICBcImNsb2NrLTRcIixcclxuICBcImNsb2NrLTVcIixcclxuICBcImNsb2NrLTZcIixcclxuICBcImNsb2NrLTdcIixcclxuICBcImNsb2NrLThcIixcclxuICBcImNsb2NrLTlcIixcclxuICBcImNsb2NrXCIsXHJcbiAgXCJjbG91ZC1jb2dcIixcclxuICBcImNsb3VkLWRyaXp6bGVcIixcclxuICBcImNsb3VkLWZvZ1wiLFxyXG4gIFwiY2xvdWQtaGFpbFwiLFxyXG4gIFwiY2xvdWQtbGlnaHRuaW5nXCIsXHJcbiAgXCJjbG91ZC1tb29uLXJhaW5cIixcclxuICBcImNsb3VkLW1vb25cIixcclxuICBcImNsb3VkLW9mZlwiLFxyXG4gIFwiY2xvdWQtcmFpbi13aW5kXCIsXHJcbiAgXCJjbG91ZC1yYWluXCIsXHJcbiAgXCJjbG91ZC1zbm93XCIsXHJcbiAgXCJjbG91ZC1zdW4tcmFpblwiLFxyXG4gIFwiY2xvdWQtc3VuXCIsXHJcbiAgXCJjbG91ZFwiLFxyXG4gIFwiY2xvdWR5XCIsXHJcbiAgXCJjbG92ZXJcIixcclxuICBcImNvZGUtMlwiLFxyXG4gIFwiY29kZVwiLFxyXG4gIFwiY29kZXBlblwiLFxyXG4gIFwiY29kZXNhbmRib3hcIixcclxuICBcImNvZmZlZVwiLFxyXG4gIFwiY29nXCIsXHJcbiAgXCJjb2luc1wiLFxyXG4gIFwiY29sdW1uc1wiLFxyXG4gIFwiY29tbWFuZFwiLFxyXG4gIFwiY29tcGFzc1wiLFxyXG4gIFwiY29tcG9uZW50XCIsXHJcbiAgXCJjb250YWN0XCIsXHJcbiAgXCJjb250cmFzdFwiLFxyXG4gIFwiY29va2llXCIsXHJcbiAgXCJjb3B5XCIsXHJcbiAgXCJjb3B5bGVmdFwiLFxyXG4gIFwiY29weXJpZ2h0XCIsXHJcbiAgXCJjb3JuZXItZG93bi1sZWZ0XCIsXHJcbiAgXCJjb3JuZXItZG93bi1yaWdodFwiLFxyXG4gIFwiY29ybmVyLWxlZnQtZG93blwiLFxyXG4gIFwiY29ybmVyLWxlZnQtdXBcIixcclxuICBcImNvcm5lci1yaWdodC1kb3duXCIsXHJcbiAgXCJjb3JuZXItcmlnaHQtdXBcIixcclxuICBcImNvcm5lci11cC1sZWZ0XCIsXHJcbiAgXCJjb3JuZXItdXAtcmlnaHRcIixcclxuICBcImNwdVwiLFxyXG4gIFwiY3JlZGl0LWNhcmRcIixcclxuICBcImNyb2lzc2FudFwiLFxyXG4gIFwiY3JvcFwiLFxyXG4gIFwiY3Jvc3NcIixcclxuICBcImNyb3NzaGFpclwiLFxyXG4gIFwiY3Jvd25cIixcclxuICBcImN1cC1zb2RhXCIsXHJcbiAgXCJjdXJseS1icmFjZXNcIixcclxuICBcImN1cnJlbmN5XCIsXHJcbiAgXCJkYXRhYmFzZVwiLFxyXG4gIFwiZGVsZXRlXCIsXHJcbiAgXCJkaWFtb25kXCIsXHJcbiAgXCJkaWNlLTFcIixcclxuICBcImRpY2UtMlwiLFxyXG4gIFwiZGljZS0zXCIsXHJcbiAgXCJkaWNlLTRcIixcclxuICBcImRpY2UtNVwiLFxyXG4gIFwiZGljZS02XCIsXHJcbiAgXCJkaWNlc1wiLFxyXG4gIFwiZGlmZlwiLFxyXG4gIFwiZGlzY1wiLFxyXG4gIFwiZGl2aWRlLWNpcmNsZVwiLFxyXG4gIFwiZGl2aWRlLXNxdWFyZVwiLFxyXG4gIFwiZGl2aWRlXCIsXHJcbiAgXCJkb2xsYXItc2lnblwiLFxyXG4gIFwiZG93bmxvYWQtY2xvdWRcIixcclxuICBcImRvd25sb2FkXCIsXHJcbiAgXCJkcmliYmJsZVwiLFxyXG4gIFwiZHJvcGxldFwiLFxyXG4gIFwiZHJvcGxldHNcIixcclxuICBcImRydW1zdGlja1wiLFxyXG4gIFwiZWRpdC0yXCIsXHJcbiAgXCJlZGl0LTNcIixcclxuICBcImVkaXRcIixcclxuICBcImVnZy1mcmllZFwiLFxyXG4gIFwiZWdnXCIsXHJcbiAgXCJlcXVhbC1ub3RcIixcclxuICBcImVxdWFsXCIsXHJcbiAgXCJlcmFzZXJcIixcclxuICBcImV1cm9cIixcclxuICBcImV4cGFuZFwiLFxyXG4gIFwiZXh0ZXJuYWwtbGlua1wiLFxyXG4gIFwiZXllLW9mZlwiLFxyXG4gIFwiZXllXCIsXHJcbiAgXCJmYWNlYm9va1wiLFxyXG4gIFwiZmFjdG9yeVwiLFxyXG4gIFwiZmFzdC1mb3J3YXJkXCIsXHJcbiAgXCJmZWF0aGVyXCIsXHJcbiAgXCJmaWdtYVwiLFxyXG4gIFwiZmlsZS1hcmNoaXZlXCIsXHJcbiAgXCJmaWxlLWF1ZGlvLTJcIixcclxuICBcImZpbGUtYXVkaW9cIixcclxuICBcImZpbGUtYXhpcy0zZFwiLFxyXG4gIFwiZmlsZS1iYWRnZS0yXCIsXHJcbiAgXCJmaWxlLWJhZGdlXCIsXHJcbiAgXCJmaWxlLWJhci1jaGFydC0yXCIsXHJcbiAgXCJmaWxlLWJhci1jaGFydFwiLFxyXG4gIFwiZmlsZS1ib3hcIixcclxuICBcImZpbGUtY2hlY2stMlwiLFxyXG4gIFwiZmlsZS1jaGVja1wiLFxyXG4gIFwiZmlsZS1jbG9ja1wiLFxyXG4gIFwiZmlsZS1jb2RlXCIsXHJcbiAgXCJmaWxlLWNvZy0yXCIsXHJcbiAgXCJmaWxlLWNvZ1wiLFxyXG4gIFwiZmlsZS1kaWZmXCIsXHJcbiAgXCJmaWxlLWRpZ2l0XCIsXHJcbiAgXCJmaWxlLWRvd25cIixcclxuICBcImZpbGUtZWRpdFwiLFxyXG4gIFwiZmlsZS1oZWFydFwiLFxyXG4gIFwiZmlsZS1pbWFnZVwiLFxyXG4gIFwiZmlsZS1pbnB1dFwiLFxyXG4gIFwiZmlsZS1qc29uLTJcIixcclxuICBcImZpbGUtanNvblwiLFxyXG4gIFwiZmlsZS1rZXktMlwiLFxyXG4gIFwiZmlsZS1rZXlcIixcclxuICBcImZpbGUtbGluZS1jaGFydFwiLFxyXG4gIFwiZmlsZS1sb2NrLTJcIixcclxuICBcImZpbGUtbG9ja1wiLFxyXG4gIFwiZmlsZS1taW51cy0yXCIsXHJcbiAgXCJmaWxlLW1pbnVzXCIsXHJcbiAgXCJmaWxlLW91dHB1dFwiLFxyXG4gIFwiZmlsZS1waWUtY2hhcnRcIixcclxuICBcImZpbGUtcGx1cy0yXCIsXHJcbiAgXCJmaWxlLXBsdXNcIixcclxuICBcImZpbGUtcXVlc3Rpb25cIixcclxuICBcImZpbGUtc2NhblwiLFxyXG4gIFwiZmlsZS1zZWFyY2gtMlwiLFxyXG4gIFwiZmlsZS1zZWFyY2hcIixcclxuICBcImZpbGUtc2lnbmF0dXJlXCIsXHJcbiAgXCJmaWxlLXNwcmVhZHNoZWV0XCIsXHJcbiAgXCJmaWxlLXN5bWxpbmtcIixcclxuICBcImZpbGUtdGVybWluYWxcIixcclxuICBcImZpbGUtdGV4dFwiLFxyXG4gIFwiZmlsZS10eXBlLTJcIixcclxuICBcImZpbGUtdHlwZVwiLFxyXG4gIFwiZmlsZS11cFwiLFxyXG4gIFwiZmlsZS12aWRlby0yXCIsXHJcbiAgXCJmaWxlLXZpZGVvXCIsXHJcbiAgXCJmaWxlLXZvbHVtZS0yXCIsXHJcbiAgXCJmaWxlLXZvbHVtZVwiLFxyXG4gIFwiZmlsZS13YXJuaW5nXCIsXHJcbiAgXCJmaWxlLXgyXCIsXHJcbiAgXCJmaWxlLXhcIixcclxuICBcImZpbGVcIixcclxuICBcImZpbGVzXCIsXHJcbiAgXCJmaWxtXCIsXHJcbiAgXCJmaWx0ZXJcIixcclxuICBcImZpbmdlcnByaW50XCIsXHJcbiAgXCJmbGFnLW9mZlwiLFxyXG4gIFwiZmxhZy10cmlhbmdsZS1sZWZ0XCIsXHJcbiAgXCJmbGFnLXRyaWFuZ2xlLXJpZ2h0XCIsXHJcbiAgXCJmbGFnXCIsXHJcbiAgXCJmbGFtZVwiLFxyXG4gIFwiZmxhc2hsaWdodC1vZmZcIixcclxuICBcImZsYXNobGlnaHRcIixcclxuICBcImZsYXNrLWNvbmljYWxcIixcclxuICBcImZsYXNrLXJvdW5kXCIsXHJcbiAgXCJmbGlwLWhvcml6b250YWwtMlwiLFxyXG4gIFwiZmxpcC1ob3Jpem9udGFsXCIsXHJcbiAgXCJmbGlwLXZlcnRpY2FsLTJcIixcclxuICBcImZsaXAtdmVydGljYWxcIixcclxuICBcImZsb3dlci0yXCIsXHJcbiAgXCJmbG93ZXJcIixcclxuICBcImZvY3VzXCIsXHJcbiAgXCJmb2xkZXItYXJjaGl2ZVwiLFxyXG4gIFwiZm9sZGVyLWNoZWNrXCIsXHJcbiAgXCJmb2xkZXItY2xvY2tcIixcclxuICBcImZvbGRlci1jbG9zZWRcIixcclxuICBcImZvbGRlci1jb2ctMlwiLFxyXG4gIFwiZm9sZGVyLWNvZ1wiLFxyXG4gIFwiZm9sZGVyLWRvd25cIixcclxuICBcImZvbGRlci1lZGl0XCIsXHJcbiAgXCJmb2xkZXItaGVhcnRcIixcclxuICBcImZvbGRlci1pbnB1dFwiLFxyXG4gIFwiZm9sZGVyLWtleVwiLFxyXG4gIFwiZm9sZGVyLWxvY2tcIixcclxuICBcImZvbGRlci1taW51c1wiLFxyXG4gIFwiZm9sZGVyLW9wZW5cIixcclxuICBcImZvbGRlci1vdXRwdXRcIixcclxuICBcImZvbGRlci1wbHVzXCIsXHJcbiAgXCJmb2xkZXItc2VhcmNoLTJcIixcclxuICBcImZvbGRlci1zZWFyY2hcIixcclxuICBcImZvbGRlci1zeW1saW5rXCIsXHJcbiAgXCJmb2xkZXItdHJlZVwiLFxyXG4gIFwiZm9sZGVyLXVwXCIsXHJcbiAgXCJmb2xkZXIteFwiLFxyXG4gIFwiZm9sZGVyXCIsXHJcbiAgXCJmb2xkZXJzXCIsXHJcbiAgXCJmb3JtLWlucHV0XCIsXHJcbiAgXCJmb3J3YXJkXCIsXHJcbiAgXCJmcmFtZVwiLFxyXG4gIFwiZnJhbWVyXCIsXHJcbiAgXCJmcm93blwiLFxyXG4gIFwiZnVlbFwiLFxyXG4gIFwiZnVuY3Rpb24tc3F1YXJlXCIsXHJcbiAgXCJnYW1lcGFkLTJcIixcclxuICBcImdhbWVwYWRcIixcclxuICBcImdhdWdlXCIsXHJcbiAgXCJnYXZlbFwiLFxyXG4gIFwiZ2VtXCIsXHJcbiAgXCJnaG9zdFwiLFxyXG4gIFwiZ2lmdFwiLFxyXG4gIFwiZ2l0LWJyYW5jaC1wbHVzXCIsXHJcbiAgXCJnaXQtYnJhbmNoXCIsXHJcbiAgXCJnaXQtY29tbWl0XCIsXHJcbiAgXCJnaXQtY29tcGFyZVwiLFxyXG4gIFwiZ2l0LWZvcmtcIixcclxuICBcImdpdC1tZXJnZVwiLFxyXG4gIFwiZ2l0LXB1bGwtcmVxdWVzdC1jbG9zZWRcIixcclxuICBcImdpdC1wdWxsLXJlcXVlc3QtZHJhZnRcIixcclxuICBcImdpdC1wdWxsLXJlcXVlc3RcIixcclxuICBcImdpdGh1YlwiLFxyXG4gIFwiZ2l0bGFiXCIsXHJcbiAgXCJnbGFzcy13YXRlclwiLFxyXG4gIFwiZ2xhc3Nlc1wiLFxyXG4gIFwiZ2xvYmUtMlwiLFxyXG4gIFwiZ2xvYmVcIixcclxuICBcImdyYWJcIixcclxuICBcImdyYWR1YXRpb24tY2FwXCIsXHJcbiAgXCJncmFwZVwiLFxyXG4gIFwiZ3JpZFwiLFxyXG4gIFwiZ3JpcC1ob3Jpem9udGFsXCIsXHJcbiAgXCJncmlwLXZlcnRpY2FsXCIsXHJcbiAgXCJoYW1tZXJcIixcclxuICBcImhhbmQtbWV0YWxcIixcclxuICBcImhhbmRcIixcclxuICBcImhhcmQtZHJpdmVcIixcclxuICBcImhhcmQtaGF0XCIsXHJcbiAgXCJoYXNoXCIsXHJcbiAgXCJoYXplXCIsXHJcbiAgXCJoZWFkcGhvbmVzXCIsXHJcbiAgXCJoZWFydC1jcmFja1wiLFxyXG4gIFwiaGVhcnQtaGFuZHNoYWtlXCIsXHJcbiAgXCJoZWFydC1vZmZcIixcclxuICBcImhlYXJ0LXB1bHNlXCIsXHJcbiAgXCJoZWFydFwiLFxyXG4gIFwiaGVscC1jaXJjbGVcIixcclxuICBcImhleGFnb25cIixcclxuICBcImhpZ2hsaWdodGVyXCIsXHJcbiAgXCJoaXN0b3J5XCIsXHJcbiAgXCJob21lXCIsXHJcbiAgXCJob3VyZ2xhc3NcIixcclxuICBcImljZS1jcmVhbVwiLFxyXG4gIFwiaW1hZ2UtbWludXNcIixcclxuICBcImltYWdlLW9mZlwiLFxyXG4gIFwiaW1hZ2UtcGx1c1wiLFxyXG4gIFwiaW1hZ2VcIixcclxuICBcImltcG9ydFwiLFxyXG4gIFwiaW5ib3hcIixcclxuICBcImluZGVudFwiLFxyXG4gIFwiaW5kaWFuLXJ1cGVlXCIsXHJcbiAgXCJpbmZpbml0eVwiLFxyXG4gIFwiaW5mb1wiLFxyXG4gIFwiaW5zcGVjdFwiLFxyXG4gIFwiaW5zdGFncmFtXCIsXHJcbiAgXCJpdGFsaWNcIixcclxuICBcImphcGFuZXNlLXllblwiLFxyXG4gIFwiam95c3RpY2tcIixcclxuICBcImtleVwiLFxyXG4gIFwia2V5Ym9hcmRcIixcclxuICBcImxhbXAtY2VpbGluZ1wiLFxyXG4gIFwibGFtcC1kZXNrXCIsXHJcbiAgXCJsYW1wLWZsb29yXCIsXHJcbiAgXCJsYW1wLXdhbGwtZG93blwiLFxyXG4gIFwibGFtcC13YWxsLXVwXCIsXHJcbiAgXCJsYW1wXCIsXHJcbiAgXCJsYW5kbWFya1wiLFxyXG4gIFwibGFuZ3VhZ2VzXCIsXHJcbiAgXCJsYXB0b3AtMlwiLFxyXG4gIFwibGFwdG9wXCIsXHJcbiAgXCJsYXNzby1zZWxlY3RcIixcclxuICBcImxhc3NvXCIsXHJcbiAgXCJsYXVnaFwiLFxyXG4gIFwibGF5ZXJzXCIsXHJcbiAgXCJsYXlvdXQtZGFzaGJvYXJkXCIsXHJcbiAgXCJsYXlvdXQtZ3JpZFwiLFxyXG4gIFwibGF5b3V0LWxpc3RcIixcclxuICBcImxheW91dC10ZW1wbGF0ZVwiLFxyXG4gIFwibGF5b3V0XCIsXHJcbiAgXCJsZWFmXCIsXHJcbiAgXCJsaWJyYXJ5XCIsXHJcbiAgXCJsaWZlLWJ1b3lcIixcclxuICBcImxpZ2h0YnVsYi1vZmZcIixcclxuICBcImxpZ2h0YnVsYlwiLFxyXG4gIFwibGluZS1jaGFydFwiLFxyXG4gIFwibGluay0yb2ZmXCIsXHJcbiAgXCJsaW5rLTJcIixcclxuICBcImxpbmtcIixcclxuICBcImxpbmtlZGluXCIsXHJcbiAgXCJsaXN0LWNoZWNrc1wiLFxyXG4gIFwibGlzdC1lbmRcIixcclxuICBcImxpc3QtbWludXNcIixcclxuICBcImxpc3QtbXVzaWNcIixcclxuICBcImxpc3Qtb3JkZXJlZFwiLFxyXG4gIFwibGlzdC1wbHVzXCIsXHJcbiAgXCJsaXN0LXN0YXJ0XCIsXHJcbiAgXCJsaXN0LXZpZGVvXCIsXHJcbiAgXCJsaXN0LXhcIixcclxuICBcImxpc3RcIixcclxuICBcImxvYWRlci0yXCIsXHJcbiAgXCJsb2FkZXJcIixcclxuICBcImxvY2F0ZS1maXhlZFwiLFxyXG4gIFwibG9jYXRlLW9mZlwiLFxyXG4gIFwibG9jYXRlXCIsXHJcbiAgXCJsb2NrXCIsXHJcbiAgXCJsb2ctaW5cIixcclxuICBcImxvZy1vdXRcIixcclxuICBcImx1Z2dhZ2VcIixcclxuICBcIm1hZ25ldFwiLFxyXG4gIFwibWFpbC1jaGVja1wiLFxyXG4gIFwibWFpbC1taW51c1wiLFxyXG4gIFwibWFpbC1vcGVuXCIsXHJcbiAgXCJtYWlsLXBsdXNcIixcclxuICBcIm1haWwtcXVlc3Rpb25cIixcclxuICBcIm1haWwtc2VhcmNoXCIsXHJcbiAgXCJtYWlsLXdhcm5pbmdcIixcclxuICBcIm1haWwteFwiLFxyXG4gIFwibWFpbFwiLFxyXG4gIFwibWFpbHNcIixcclxuICBcIm1hcC1waW4tb2ZmXCIsXHJcbiAgXCJtYXAtcGluXCIsXHJcbiAgXCJtYXBcIixcclxuICBcIm1hcnRpbmlcIixcclxuICBcIm1heGltaXplLTJcIixcclxuICBcIm1heGltaXplXCIsXHJcbiAgXCJtZWRhbFwiLFxyXG4gIFwibWVnYXBob25lLW9mZlwiLFxyXG4gIFwibWVnYXBob25lXCIsXHJcbiAgXCJtZWhcIixcclxuICBcIm1lbnVcIixcclxuICBcIm1lc3NhZ2UtY2lyY2xlXCIsXHJcbiAgXCJtZXNzYWdlLXNxdWFyZVwiLFxyXG4gIFwibWljLTJcIixcclxuICBcIm1pYy1vZmZcIixcclxuICBcIm1pY1wiLFxyXG4gIFwibWljcm9zY29wZVwiLFxyXG4gIFwibWlsZXN0b25lXCIsXHJcbiAgXCJtaW5pbWl6ZS0yXCIsXHJcbiAgXCJtaW5pbWl6ZVwiLFxyXG4gIFwibWludXMtY2lyY2xlXCIsXHJcbiAgXCJtaW51cy1zcXVhcmVcIixcclxuICBcIm1pbnVzXCIsXHJcbiAgXCJtb25pdG9yLW9mZlwiLFxyXG4gIFwibW9uaXRvci1zcGVha2VyXCIsXHJcbiAgXCJtb25pdG9yXCIsXHJcbiAgXCJtb29uXCIsXHJcbiAgXCJtb3JlLWhvcml6b250YWxcIixcclxuICBcIm1vcmUtdmVydGljYWxcIixcclxuICBcIm1vdW50YWluLXNub3dcIixcclxuICBcIm1vdW50YWluXCIsXHJcbiAgXCJtb3VzZS1wb2ludGVyLTJcIixcclxuICBcIm1vdXNlLXBvaW50ZXItY2xpY2tcIixcclxuICBcIm1vdXNlLXBvaW50ZXJcIixcclxuICBcIm1vdXNlXCIsXHJcbiAgXCJtb3ZlLTNkXCIsXHJcbiAgXCJtb3ZlLWRpYWdvbmFsLTJcIixcclxuICBcIm1vdmUtZGlhZ29uYWxcIixcclxuICBcIm1vdmUtaG9yaXpvbnRhbFwiLFxyXG4gIFwibW92ZS12ZXJ0aWNhbFwiLFxyXG4gIFwibW92ZVwiLFxyXG4gIFwibXVzaWMtMlwiLFxyXG4gIFwibXVzaWMtM1wiLFxyXG4gIFwibXVzaWMtNFwiLFxyXG4gIFwibXVzaWNcIixcclxuICBcIm5hdmlnYXRpb24tMm9mZlwiLFxyXG4gIFwibmF2aWdhdGlvbi0yXCIsXHJcbiAgXCJuYXZpZ2F0aW9uLW9mZlwiLFxyXG4gIFwibmF2aWdhdGlvblwiLFxyXG4gIFwibmV0d29ya1wiLFxyXG4gIFwibmV3c3BhcGVyXCIsXHJcbiAgXCJvY3RhZ29uXCIsXHJcbiAgXCJvcHRpb25cIixcclxuICBcIm91dGRlbnRcIixcclxuICBcInBhY2thZ2UtMlwiLFxyXG4gIFwicGFja2FnZS1jaGVja1wiLFxyXG4gIFwicGFja2FnZS1taW51c1wiLFxyXG4gIFwicGFja2FnZS1vcGVuXCIsXHJcbiAgXCJwYWNrYWdlLXBsdXNcIixcclxuICBcInBhY2thZ2Utc2VhcmNoXCIsXHJcbiAgXCJwYWNrYWdlLXhcIixcclxuICBcInBhY2thZ2VcIixcclxuICBcInBhaW50LWJ1Y2tldFwiLFxyXG4gIFwicGFpbnRicnVzaC0yXCIsXHJcbiAgXCJwYWludGJydXNoXCIsXHJcbiAgXCJwYWxldHRlXCIsXHJcbiAgXCJwYWxtdHJlZVwiLFxyXG4gIFwicGFwZXJjbGlwXCIsXHJcbiAgXCJwYXJ0eS1wb3BwZXJcIixcclxuICBcInBhdXNlLWNpcmNsZVwiLFxyXG4gIFwicGF1c2Utb2N0YWdvblwiLFxyXG4gIFwicGF1c2VcIixcclxuICBcInBlbi10b29sXCIsXHJcbiAgXCJwZW5jaWxcIixcclxuICBcInBlcmNlbnRcIixcclxuICBcInBlcnNvbi1zdGFuZGluZ1wiLFxyXG4gIFwicGhvbmUtY2FsbFwiLFxyXG4gIFwicGhvbmUtZm9yd2FyZGVkXCIsXHJcbiAgXCJwaG9uZS1pbmNvbWluZ1wiLFxyXG4gIFwicGhvbmUtbWlzc2VkXCIsXHJcbiAgXCJwaG9uZS1vZmZcIixcclxuICBcInBob25lLW91dGdvaW5nXCIsXHJcbiAgXCJwaG9uZVwiLFxyXG4gIFwicGllLWNoYXJ0XCIsXHJcbiAgXCJwaWdneS1iYW5rXCIsXHJcbiAgXCJwaW4tb2ZmXCIsXHJcbiAgXCJwaW5cIixcclxuICBcInBpcGV0dGVcIixcclxuICBcInBpenphXCIsXHJcbiAgXCJwbGFuZVwiLFxyXG4gIFwicGxheS1jaXJjbGVcIixcclxuICBcInBsYXlcIixcclxuICBcInBsdWctemFwXCIsXHJcbiAgXCJwbHVzLWNpcmNsZVwiLFxyXG4gIFwicGx1cy1zcXVhcmVcIixcclxuICBcInBsdXNcIixcclxuICBcInBvY2tldFwiLFxyXG4gIFwicG9kY2FzdFwiLFxyXG4gIFwicG9pbnRlclwiLFxyXG4gIFwicG91bmQtc3RlcmxpbmdcIixcclxuICBcInBvd2VyLW9mZlwiLFxyXG4gIFwicG93ZXJcIixcclxuICBcInByaW50ZXJcIixcclxuICBcInB1enpsZVwiLFxyXG4gIFwicXItY29kZVwiLFxyXG4gIFwicXVvdGVcIixcclxuICBcInJhZGlvLXJlY2VpdmVyXCIsXHJcbiAgXCJyYWRpb1wiLFxyXG4gIFwicmVjeWNsZVwiLFxyXG4gIFwicmVkby0yXCIsXHJcbiAgXCJyZWRvXCIsXHJcbiAgXCJyZWZyZXNoLWNjd1wiLFxyXG4gIFwicmVmcmVzaC1jd1wiLFxyXG4gIFwicmVnZXhcIixcclxuICBcInJlcGVhdC0xXCIsXHJcbiAgXCJyZXBlYXRcIixcclxuICBcInJlcGx5LWFsbFwiLFxyXG4gIFwicmVwbHlcIixcclxuICBcInJld2luZFwiLFxyXG4gIFwicm9ja2V0XCIsXHJcbiAgXCJyb2NraW5nLWNoYWlyXCIsXHJcbiAgXCJyb3RhdGUtM2RcIixcclxuICBcInJvdGF0ZS1jY3dcIixcclxuICBcInJvdGF0ZS1jd1wiLFxyXG4gIFwicnNzXCIsXHJcbiAgXCJydWxlclwiLFxyXG4gIFwicnVzc2lhbi1ydWJsZVwiLFxyXG4gIFwic2F2ZVwiLFxyXG4gIFwic2NhbGUtM2RcIixcclxuICBcInNjYWxlXCIsXHJcbiAgXCJzY2FsaW5nXCIsXHJcbiAgXCJzY2FuLWZhY2VcIixcclxuICBcInNjYW4tbGluZVwiLFxyXG4gIFwic2NhblwiLFxyXG4gIFwic2Npc3NvcnNcIixcclxuICBcInNjcmVlbi1zaGFyZS1vZmZcIixcclxuICBcInNjcmVlbi1zaGFyZVwiLFxyXG4gIFwic2Nyb2xsXCIsXHJcbiAgXCJzZWFyY2hcIixcclxuICBcInNlbmRcIixcclxuICBcInNlcGFyYXRvci1ob3Jpem9udGFsXCIsXHJcbiAgXCJzZXBhcmF0b3ItdmVydGljYWxcIixcclxuICBcInNlcnZlci1jb2dcIixcclxuICBcInNlcnZlci1jcmFzaFwiLFxyXG4gIFwic2VydmVyLW9mZlwiLFxyXG4gIFwic2VydmVyXCIsXHJcbiAgXCJzZXR0aW5ncy0yXCIsXHJcbiAgXCJzZXR0aW5nc1wiLFxyXG4gIFwic2hhcmUtMlwiLFxyXG4gIFwic2hhcmVcIixcclxuICBcInNoZWV0XCIsXHJcbiAgXCJzaGllbGQtYWxlcnRcIixcclxuICBcInNoaWVsZC1jaGVja1wiLFxyXG4gIFwic2hpZWxkLWNsb3NlXCIsXHJcbiAgXCJzaGllbGQtb2ZmXCIsXHJcbiAgXCJzaGllbGRcIixcclxuICBcInNoaXJ0XCIsXHJcbiAgXCJzaG9wcGluZy1iYWdcIixcclxuICBcInNob3BwaW5nLWNhcnRcIixcclxuICBcInNob3ZlbFwiLFxyXG4gIFwic2hyaW5rXCIsXHJcbiAgXCJzaHJ1YlwiLFxyXG4gIFwic2h1ZmZsZVwiLFxyXG4gIFwic2lkZWJhci1jbG9zZVwiLFxyXG4gIFwic2lkZWJhci1vcGVuXCIsXHJcbiAgXCJzaWRlYmFyXCIsXHJcbiAgXCJzaWdtYVwiLFxyXG4gIFwic2lnbmFsLWhpZ2hcIixcclxuICBcInNpZ25hbC1sb3dcIixcclxuICBcInNpZ25hbC1tZWRpdW1cIixcclxuICBcInNpZ25hbC16ZXJvXCIsXHJcbiAgXCJzaWduYWxcIixcclxuICBcInNpcmVuXCIsXHJcbiAgXCJza2lwLWJhY2tcIixcclxuICBcInNraXAtZm9yd2FyZFwiLFxyXG4gIFwic2t1bGxcIixcclxuICBcInNsYWNrXCIsXHJcbiAgXCJzbGFzaFwiLFxyXG4gIFwic2xpY2VcIixcclxuICBcInNsaWRlcnMtaG9yaXpvbnRhbFwiLFxyXG4gIFwic2xpZGVyc1wiLFxyXG4gIFwic21hcnRwaG9uZS1jaGFyZ2luZ1wiLFxyXG4gIFwic21hcnRwaG9uZVwiLFxyXG4gIFwic21pbGUtcGx1c1wiLFxyXG4gIFwic21pbGVcIixcclxuICBcInNub3dmbGFrZVwiLFxyXG4gIFwic29mYVwiLFxyXG4gIFwic29ydC1hc2NcIixcclxuICBcInNvcnQtZGVzY1wiLFxyXG4gIFwic3BlYWtlclwiLFxyXG4gIFwic3Byb3V0XCIsXHJcbiAgXCJzcXVhcmVcIixcclxuICBcInN0YXItaGFsZlwiLFxyXG4gIFwic3Rhci1vZmZcIixcclxuICBcInN0YXJcIixcclxuICBcInN0ZXRob3Njb3BlXCIsXHJcbiAgXCJzdGlja2VyXCIsXHJcbiAgXCJzdGlja3ktbm90ZVwiLFxyXG4gIFwic3RvcC1jaXJjbGVcIixcclxuICBcInN0cmV0Y2gtaG9yaXpvbnRhbFwiLFxyXG4gIFwic3RyZXRjaC12ZXJ0aWNhbFwiLFxyXG4gIFwic3RyaWtldGhyb3VnaFwiLFxyXG4gIFwic3Vic2NyaXB0XCIsXHJcbiAgXCJzdW4tZGltXCIsXHJcbiAgXCJzdW4tbWVkaXVtXCIsXHJcbiAgXCJzdW4tbW9vblwiLFxyXG4gIFwic3VuLXNub3dcIixcclxuICBcInN1blwiLFxyXG4gIFwic3VucmlzZVwiLFxyXG4gIFwic3Vuc2V0XCIsXHJcbiAgXCJzdXBlcnNjcmlwdFwiLFxyXG4gIFwic3dpc3MtZnJhbmNcIixcclxuICBcInN3aXRjaC1jYW1lcmFcIixcclxuICBcInN3b3JkXCIsXHJcbiAgXCJzd29yZHNcIixcclxuICBcInN5cmluZ2VcIixcclxuICBcInRhYmxlLTJcIixcclxuICBcInRhYmxlXCIsXHJcbiAgXCJ0YWJsZXRcIixcclxuICBcInRhZ1wiLFxyXG4gIFwidGFnc1wiLFxyXG4gIFwidGFyZ2V0XCIsXHJcbiAgXCJ0ZW50XCIsXHJcbiAgXCJ0ZXJtaW5hbC1zcXVhcmVcIixcclxuICBcInRlcm1pbmFsXCIsXHJcbiAgXCJ0ZXh0LWN1cnNvci1pbnB1dFwiLFxyXG4gIFwidGV4dC1jdXJzb3JcIixcclxuICBcInRoZXJtb21ldGVyLXNub3dmbGFrZVwiLFxyXG4gIFwidGhlcm1vbWV0ZXItc3VuXCIsXHJcbiAgXCJ0aGVybW9tZXRlclwiLFxyXG4gIFwidGh1bWJzLWRvd25cIixcclxuICBcInRodW1icy11cFwiLFxyXG4gIFwidGlja2V0XCIsXHJcbiAgXCJ0aW1lci1vZmZcIixcclxuICBcInRpbWVyLXJlc2V0XCIsXHJcbiAgXCJ0aW1lclwiLFxyXG4gIFwidG9nZ2xlLWxlZnRcIixcclxuICBcInRvZ2dsZS1yaWdodFwiLFxyXG4gIFwidG9ybmFkb1wiLFxyXG4gIFwidG95LWJyaWNrXCIsXHJcbiAgXCJ0cmFpblwiLFxyXG4gIFwidHJhc2gtMlwiLFxyXG4gIFwidHJhc2hcIixcclxuICBcInRyZWUtZGVjaWR1b3VzXCIsXHJcbiAgXCJ0cmVlLXBpbmVcIixcclxuICBcInRyZWVzXCIsXHJcbiAgXCJ0cmVsbG9cIixcclxuICBcInRyZW5kaW5nLWRvd25cIixcclxuICBcInRyZW5kaW5nLXVwXCIsXHJcbiAgXCJ0cmlhbmdsZVwiLFxyXG4gIFwidHJvcGh5XCIsXHJcbiAgXCJ0cnVja1wiLFxyXG4gIFwidHYtMlwiLFxyXG4gIFwidHZcIixcclxuICBcInR3aXRjaFwiLFxyXG4gIFwidHdpdHRlclwiLFxyXG4gIFwidHlwZVwiLFxyXG4gIFwidW1icmVsbGFcIixcclxuICBcInVuZGVybGluZVwiLFxyXG4gIFwidW5kby0yXCIsXHJcbiAgXCJ1bmRvXCIsXHJcbiAgXCJ1bmxpbmstMlwiLFxyXG4gIFwidW5saW5rXCIsXHJcbiAgXCJ1bmxvY2tcIixcclxuICBcInVwbG9hZC1jbG91ZFwiLFxyXG4gIFwidXBsb2FkXCIsXHJcbiAgXCJ1c2JcIixcclxuICBcInVzZXItY2hlY2tcIixcclxuICBcInVzZXItY29nXCIsXHJcbiAgXCJ1c2VyLW1pbnVzXCIsXHJcbiAgXCJ1c2VyLXBsdXNcIixcclxuICBcInVzZXIteFwiLFxyXG4gIFwidXNlclwiLFxyXG4gIFwidXNlcnNcIixcclxuICBcInV0ZW5zaWxzLWNyb3NzZWRcIixcclxuICBcInV0ZW5zaWxzXCIsXHJcbiAgXCJ2ZW5ldGlhbi1tYXNrXCIsXHJcbiAgXCJ2ZXJpZmllZFwiLFxyXG4gIFwidmlicmF0ZS1vZmZcIixcclxuICBcInZpYnJhdGVcIixcclxuICBcInZpZGVvLW9mZlwiLFxyXG4gIFwidmlkZW9cIixcclxuICBcInZpZXdcIixcclxuICBcInZvaWNlbWFpbFwiLFxyXG4gIFwidm9sdW1lLTFcIixcclxuICBcInZvbHVtZS0yXCIsXHJcbiAgXCJ2b2x1bWUteFwiLFxyXG4gIFwidm9sdW1lXCIsXHJcbiAgXCJ3YWxsZXRcIixcclxuICBcIndhbmQtMlwiLFxyXG4gIFwid2FuZFwiLFxyXG4gIFwid2F0Y2hcIixcclxuICBcIndhdmVzXCIsXHJcbiAgXCJ3ZWJjYW1cIixcclxuICBcIndlYmhvb2tcIixcclxuICBcIndpZmktb2ZmXCIsXHJcbiAgXCJ3aWZpXCIsXHJcbiAgXCJ3aW5kXCIsXHJcbiAgXCJ3aW5lXCIsXHJcbiAgXCJ3cmFwLXRleHRcIixcclxuICBcIndyZW5jaFwiLFxyXG4gIFwieC1jaXJjbGVcIixcclxuICBcIngtb2N0YWdvblwiLFxyXG4gIFwieC1zcXVhcmVcIixcclxuICBcInhcIixcclxuICBcInlvdXR1YmVcIixcclxuICBcInphcC1vZmZcIixcclxuICBcInphcFwiLFxyXG4gIFwiem9vbS1pblwiLFxyXG4gIFwiem9vbS1vdXRcIixcclxuICBcImNyZWF0ZS1uZXdcIixcclxuICBcInRyYXNoXCIsXHJcbiAgXCJzZWFyY2hcIixcclxuICBcInJpZ2h0LXRyaWFuZ2xlXCIsXHJcbiAgXCJkb2N1bWVudFwiLFxyXG4gIFwiZm9sZGVyXCIsXHJcbiAgXCJwZW5jaWxcIixcclxuICBcImxlZnQtYXJyb3dcIixcclxuICBcInJpZ2h0LWFycm93XCIsXHJcbiAgXCJ0aHJlZS1ob3Jpem9udGFsLWJhcnNcIixcclxuICBcImRvdC1uZXR3b3JrXCIsXHJcbiAgXCJhdWRpby1maWxlXCIsXHJcbiAgXCJpbWFnZS1maWxlXCIsXHJcbiAgXCJwZGYtZmlsZVwiLFxyXG4gIFwiZ2VhclwiLFxyXG4gIFwiZG9jdW1lbnRzXCIsXHJcbiAgXCJibG9ja3NcIixcclxuICBcImdvLXRvLWZpbGVcIixcclxuICBcInByZXNlbnRhdGlvblwiLFxyXG4gIFwiY3Jvc3MtaW4tYm94XCIsXHJcbiAgXCJtaWNyb3Bob25lXCIsXHJcbiAgXCJtaWNyb3Bob25lLWZpbGxlZFwiLFxyXG4gIFwidHdvLWNvbHVtbnNcIixcclxuICBcImxpbmtcIixcclxuICBcInBvcHVwLW9wZW5cIixcclxuICBcImNoZWNrbWFya1wiLFxyXG4gIFwiaGFzaHRhZ1wiLFxyXG4gIFwibGVmdC1hcnJvdy13aXRoLXRhaWxcIixcclxuICBcInJpZ2h0LWFycm93LXdpdGgtdGFpbFwiLFxyXG4gIFwidXAtYXJyb3ctd2l0aC10YWlsXCIsXHJcbiAgXCJkb3duLWFycm93LXdpdGgtdGFpbFwiLFxyXG4gIFwibGluZXMtb2YtdGV4dFwiLFxyXG4gIFwidmVydGljYWwtdGhyZWUtZG90c1wiLFxyXG4gIFwicGluXCIsXHJcbiAgXCJtYWduaWZ5aW5nLWdsYXNzXCIsXHJcbiAgXCJpbmZvXCIsXHJcbiAgXCJob3Jpem9udGFsLXNwbGl0XCIsXHJcbiAgXCJ2ZXJ0aWNhbC1zcGxpdFwiLFxyXG4gIFwiY2FsZW5kYXItd2l0aC1jaGVja21hcmtcIixcclxuICBcImZvbGRlci1taW51c1wiLFxyXG4gIFwic2hlZXRzLWluLWJveFwiLFxyXG4gIFwidXAtYW5kLWRvd24tYXJyb3dzXCIsXHJcbiAgXCJicm9rZW4tbGlua1wiLFxyXG4gIFwiY3Jvc3NcIixcclxuICBcImFueS1rZXlcIixcclxuICBcInJlc2V0XCIsXHJcbiAgXCJzdGFyXCIsXHJcbiAgXCJjcm9zc2VkLXN0YXJcIixcclxuICBcImRpY2VcIixcclxuICBcImZpbGxlZC1waW5cIixcclxuICBcImVudGVyXCIsXHJcbiAgXCJoZWxwXCIsXHJcbiAgXCJ2YXVsdFwiLFxyXG4gIFwib3Blbi12YXVsdFwiLFxyXG4gIFwicGFwZXItcGxhbmVcIixcclxuICBcImJ1bGxldC1saXN0XCIsXHJcbiAgXCJ1cHBlcmNhc2UtbG93ZXJjYXNlLWFcIixcclxuICBcInN0YXItbGlzdFwiLFxyXG4gIFwiZXhwYW5kLXZlcnRpY2FsbHlcIixcclxuICBcImxhbmd1YWdlc1wiLFxyXG4gIFwic3dpdGNoXCIsXHJcbiAgXCJwYW5lLWxheW91dFwiLFxyXG4gIFwiaW5zdGFsbFwiLFxyXG4gIFwic3luY1wiLFxyXG4gIFwiY2hlY2staW4tY2lyY2xlXCIsXHJcbiAgXCJzeW5jLXNtYWxsXCIsXHJcbiAgXCJjaGVjay1zbWFsbFwiLFxyXG4gIFwicGF1c2VkXCIsXHJcbiAgXCJmb3J3YXJkLWFycm93XCIsXHJcbiAgXCJzdGFja2VkLWxldmVsc1wiLFxyXG4gIFwiYnJhY2tldC1nbHlwaFwiLFxyXG4gIFwibm90ZS1nbHlwaFwiLFxyXG4gIFwidGFnLWdseXBoXCIsXHJcbiAgXCJwcmljZS10YWctZ2x5cGhcIixcclxuICBcImhlYWRpbmctZ2x5cGhcIixcclxuICBcImJvbGQtZ2x5cGhcIixcclxuICBcIml0YWxpYy1nbHlwaFwiLFxyXG4gIFwic3RyaWtldGhyb3VnaC1nbHlwaFwiLFxyXG4gIFwiaGlnaGxpZ2h0LWdseXBoXCIsXHJcbiAgXCJjb2RlLWdseXBoXCIsXHJcbiAgXCJxdW90ZS1nbHlwaFwiLFxyXG4gIFwibGluay1nbHlwaFwiLFxyXG4gIFwiYnVsbGV0LWxpc3QtZ2x5cGhcIixcclxuICBcIm51bWJlci1saXN0LWdseXBoXCIsXHJcbiAgXCJjaGVja2JveC1nbHlwaFwiLFxyXG4gIFwidW5kby1nbHlwaFwiLFxyXG4gIFwicmVkby1nbHlwaFwiLFxyXG4gIFwidXAtY2hldnJvbi1nbHlwaFwiLFxyXG4gIFwiZG93bi1jaGV2cm9uLWdseXBoXCIsXHJcbiAgXCJsZWZ0LWNoZXZyb24tZ2x5cGhcIixcclxuICBcInJpZ2h0LWNoZXZyb24tZ2x5cGhcIixcclxuICBcInBlcmNlbnQtc2lnbi1nbHlwaFwiLFxyXG4gIFwia2V5Ym9hcmQtZ2x5cGhcIixcclxuICBcImRvdWJsZS11cC1hcnJvdy1nbHlwaFwiLFxyXG4gIFwiZG91YmxlLWRvd24tYXJyb3ctZ2x5cGhcIixcclxuICBcImltYWdlLWdseXBoXCIsXHJcbiAgXCJ3cmVuY2gtc2NyZXdkcml2ZXItZ2x5cGhcIixcclxuICBcImNsb2NrXCIsXHJcbiAgXCJwbHVzLXdpdGgtY2lyY2xlXCIsXHJcbiAgXCJtaW51cy13aXRoLWNpcmNsZVwiLFxyXG4gIFwiaW5kZW50LWdseXBoXCIsXHJcbiAgXCJ1bmluZGVudC1nbHlwaFwiLFxyXG4gIFwiZnVsbHNjcmVlblwiLFxyXG4gIFwiZXhpdC1mdWxsc2NyZWVuXCIsXHJcbiAgXCJjbG91ZFwiLFxyXG4gIFwicnVuLWNvbW1hbmRcIixcclxuICBcImNvbXByZXNzLWdseXBoXCIsXHJcbiAgXCJlbmxhcmdlLWdseXBoXCIsXHJcbiAgXCJzY2lzc29ycy1nbHlwaFwiLFxyXG4gIFwidXAtY3VybHktYXJyb3ctZ2x5cGhcIixcclxuICBcImRvd24tY3VybHktYXJyb3ctZ2x5cGhcIixcclxuICBcInBsdXMtbWludXMtZ2x5cGhcIixcclxuICBcImxpbmtzLWdvaW5nLW91dFwiLFxyXG4gIFwibGlua3MtY29taW5nLWluXCIsXHJcbiAgXCJhZGQtbm90ZS1nbHlwaFwiLFxyXG4gIFwiZHVwbGljYXRlLWdseXBoXCIsXHJcbiAgXCJjbG9jay1nbHlwaFwiLFxyXG4gIFwiY2FsZW5kYXItZ2x5cGhcIixcclxuICBcImNvbW1hbmQtZ2x5cGhcIixcclxuICBcImRpY2UtZ2x5cGhcIixcclxuICBcImZpbGUtZXhwbG9yZXItZ2x5cGhcIixcclxuICBcImdyYXBoLWdseXBoXCIsXHJcbiAgXCJpbXBvcnQtZ2x5cGhcIixcclxuICBcIm5hdmlnYXRlLWdseXBoXCIsXHJcbiAgXCJvcGVuLWVsc2V3aGVyZS1nbHlwaFwiLFxyXG4gIFwicHJlc2VudGF0aW9uLWdseXBoXCIsXHJcbiAgXCJwYXBlci1wbGFuZS1nbHlwaFwiLFxyXG4gIFwicXVlc3Rpb24tbWFyay1nbHlwaFwiLFxyXG4gIFwicmVzdG9yZS1maWxlLWdseXBoXCIsXHJcbiAgXCJzZWFyY2gtZ2x5cGhcIixcclxuICBcInN0YXItZ2x5cGhcIixcclxuICBcInBsYXktYXVkaW8tZ2x5cGhcIixcclxuICBcInN0b3AtYXVkaW8tZ2x5cGhcIixcclxuICBcInRvbW9ycm93LWdseXBoXCIsXHJcbiAgXCJ3YW5kLWdseXBoXCIsXHJcbiAgXCJ3b3Jrc3BhY2UtZ2x5cGhcIixcclxuICBcInllc3RlcmRheS1nbHlwaFwiLFxyXG4gIFwiYm94LWdseXBoXCIsXHJcbiAgXCJtZXJnZS1maWxlcy1nbHlwaFwiLFxyXG4gIFwibWVyZ2UtZmlsZXNcIixcclxuICBcInR3by1ibGFuay1wYWdlc1wiLFxyXG4gIFwic2Npc3NvcnNcIixcclxuICBcInBhc3RlXCIsXHJcbiAgXCJwYXN0ZS10ZXh0XCIsXHJcbiAgXCJzcGxpdFwiLFxyXG4gIFwic2VsZWN0LWFsbC10ZXh0XCIsXHJcbiAgXCJ3YW5kXCIsXHJcbiAgXCJnaXRodWItZ2x5cGhcIixcclxuICBcInJlYWRpbmctZ2xhc3Nlc1wiLFxyXG4gIFwidXNlci1tYW51YWwtZmlsbGVkXCIsXHJcbiAgXCJkaXNjb3JkLWZpbGxlZFwiLFxyXG4gIFwiY2hhdC1idWJibGVzLWZpbGxlZFwiLFxyXG4gIFwiZXhwZXJpbWVudC1maWxsZWRcIixcclxuICBcImJyYWNrZXQtZ2x5cGhcIixcclxuICBcImJveC1nbHlwaFwiLFxyXG4gIFwiY2hlY2stc21hbGxcIixcclxuICBcImRpY2UtZ2x5cGhcIixcclxuICBcImRpY2VcIixcclxuICBcImRpc2NvcmRcIixcclxuICBcInJpZ2h0LXRyaWFuZ2xlXCIsXHJcbiAgXCJoZWFkaW5nLWdseXBoXCIsXHJcbiAgXCJoZWxwXCIsXHJcbiAgXCJrZXlib2FyZC10b2dnbGVcIixcclxuICBcImJyb2tlbi1saW5rXCIsXHJcbiAgXCJleHBlcmltZW50XCIsXHJcbiAgXCJsZWZ0LWFycm93XCIsXHJcbiAgXCJsaW5rXCIsXHJcbiAgXCJsaW5rLWdseXBoXCIsXHJcbiAgXCJsaW5rcy1jb21pbmctaW5cIixcclxuICBcImxpbmtzLWdvaW5nLW91dFwiLFxyXG4gIFwib3Blbi12YXVsdFwiLFxyXG4gIFwicGF1c2VkXCIsXHJcbiAgXCJxdWVzdGlvbi1tYXJrLWdseXBoXCIsXHJcbiAgXCJyaWdodC1hcnJvd1wiLFxyXG4gIFwic2lkZWJhci1sZWZ0XCIsXHJcbiAgXCJzaWRlYmFyLXJpZ2h0XCIsXHJcbiAgXCJzaGVldHMtaW4tYm94XCIsXHJcbiAgXCJzdGFyLWxpc3RcIixcclxuICBcInN5bmMtc21hbGxcIixcclxuICBcInRhYnNcIixcclxuICBcInVwcGVyY2FzZS1sb3dlcmNhc2UtYVwiLFxyXG4gIFwidmF1bHRcIixcclxuICBcInN0YWNrLWhvcml6b250YWxcIixcclxuICBcInN0YWNrLXZlcnRpY2FsXCIsXHJcbiAgXCJzdHJldGNoLWhvcml6b250YWxcIixcclxuICBcInN0cmV0Y2gtdmVydGljYWxcIixcclxuICBcImRpc3RyaWJ1dGUtc3BhY2UtaG9yaXpvbnRhbFwiLFxyXG4gIFwiZGlzdHJpYnV0ZS1zcGFjZS12ZXJ0aWNhbFwiXHJcbl07XHJcbiIsImltcG9ydCAge3JlcXVpcmVBcGlWZXJzaW9ufSBmcm9tIFwib2JzaWRpYW5cIlxyXG5sZXQgYWN0aXZlRG9jdW1lbnQ6IERvY3VtZW50O1xyXG5leHBvcnQgY29uc3Qgc2V0TWVudVZpc2liaWxpdHkgPSAoY01lbnVWaXNpYmlsaXR5OiBib29sZWFuKSA9PiB7XHJcbiAgcmVxdWlyZUFwaVZlcnNpb24oXCIwLjE1LjBcIik/YWN0aXZlRG9jdW1lbnQ9YWN0aXZlV2luZG93LmRvY3VtZW50OmFjdGl2ZURvY3VtZW50PXdpbmRvdy5kb2N1bWVudDtcclxuICBsZXQgY01lbnVUb29sYmFyTW9kYWxCYXIgPSBhY3RpdmVEb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNNZW51VG9vbGJhck1vZGFsQmFyXCIpO1xyXG4gIGlmIChjTWVudVRvb2xiYXJNb2RhbEJhcikge1xyXG4gICAgY01lbnVWaXNpYmlsaXR5ID09IGZhbHNlXHJcbiAgICAgID8gKGNNZW51VG9vbGJhck1vZGFsQmFyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiKVxyXG4gICAgICA6IChjTWVudVRvb2xiYXJNb2RhbEJhci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCIpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRCb3R0b21WYWx1ZSA9IChcclxuICBzZXR0aW5nczogYW55XHJcbikgPT4ge1xyXG4gIHJlcXVpcmVBcGlWZXJzaW9uKFwiMC4xNS4wXCIpP2FjdGl2ZURvY3VtZW50PWFjdGl2ZVdpbmRvdy5kb2N1bWVudDphY3RpdmVEb2N1bWVudD13aW5kb3cuZG9jdW1lbnQ7XHJcbiAgbGV0IGNNZW51VG9vbGJhck1vZGFsQmFyID0gYWN0aXZlRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjTWVudVRvb2xiYXJNb2RhbEJhclwiKTtcclxuXHJcbiAgaWYgKGNNZW51VG9vbGJhck1vZGFsQmFyKSB7XHJcbiAgICBcclxuICAgIHNldHRpbmdzLnBvc2l0aW9uU3R5bGUgPT0gXCJmb2xsb3dpbmdcIiA/IGNNZW51VG9vbGJhck1vZGFsQmFyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiIDogdHJ1ZTtcclxuICAgIGlmKHNldHRpbmdzLnBvc2l0aW9uU3R5bGUgPT0gXCJmaXhlZFwiKVxyXG4gICAge1xyXG4gICAgICBjTWVudVRvb2xiYXJNb2RhbEJhci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgbGVmdDogY2FsYyg1MCUgLSBjYWxjKCR7Y01lbnVUb29sYmFyTW9kYWxCYXIub2Zmc2V0V2lkdGh9cHggLyAyKSk7IGJvdHRvbTogJHtzZXR0aW5ncy5jTWVudUJvdHRvbVZhbHVlfWVtOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICR7XCIxZnIgXCIucmVwZWF0KHNldHRpbmdzLmNNZW51TnVtUm93cyl9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbn07XHJcblxyXG4iLCIvLyDYp9mE2LnYsdio2YrYqVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge307XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuJ0VkaXRpbmcgVG9vbGJhciBhcHBlbmQgbWV0aG9kJzonRWRpdGluZyBUb29sYmFyIGFwcGVuZCBtZXRob2QnLFxyXG4nQ2hvb3NlIHdoZXJlIEVkaXRpbmcgVG9vbGJhciB3aWxsIGFwcGVuZCB1cG9uIHJlZ2VuZXJhdGlvbi4gVG8gc2VlIHRoZSBjaGFuZ2UsIGhpdCB0aGUgcmVmcmVzaCBidXR0b24gYmVsb3csIG9yIGluIHRoZSBzdGF0dXMgYmFyIG1lbnUuJzonQ2hvb3NlIHdoZXJlIEVkaXRpbmcgVG9vbGJhciB3aWxsIGFwcGVuZCB1cG9uIHJlZ2VuZXJhdGlvbi4gVG8gc2VlIHRoZSBjaGFuZ2UsIGhpdCB0aGUgcmVmcmVzaCBidXR0b24gYmVsb3csIG9yIGluIHRoZSBzdGF0dXMgYmFyIG1lbnUuJyxcclxuJ0VkaXRpbmcgVG9vbGJhciBhZXN0aGV0aWMnOidFZGl0aW5nIFRvb2xiYXIgYWVzdGhldGljJyxcclxuJ0Nob29zZSBiZXR3ZWVuIGEgZ2xhc3MgbW9ycGhpc20gLHRpbnkgYW5kIGRlZmF1bHQgc3R5bGUgZm9yIEVkaXRpbmcgVG9vbGJhci4gVG8gc2VlIHRoZSBjaGFuZ2UsIGhpdCB0aGUgcmVmcmVzaCBidXR0b24gYmVsb3csIG9yIGluIHRoZSBzdGF0dXMgYmFyIG1lbnUuJzonQ2hvb3NlIGJldHdlZW4gYSBnbGFzcyBtb3JwaGlzbSAsdGlueSBhbmQgZGVmYXVsdCBzdHlsZSBmb3IgRWRpdGluZyBUb29sYmFyLiBUbyBzZWUgdGhlIGNoYW5nZSwgaGl0IHRoZSByZWZyZXNoIGJ1dHRvbiBiZWxvdywgb3IgaW4gdGhlIHN0YXR1cyBiYXIgbWVudS4nLFxyXG4nRWRpdGluZyBUb29sYmFyIHBvc2l0aW9uJzonRWRpdGluZyBUb29sYmFyIHBvc2l0aW9uJyxcclxuJ0Nob29zZSBiZXR3ZWVuIGZpeGVkIHBvc2l0aW9uIG9yIGN1cnNvciBmb2xsb3dpbmcgbW9kZS4nOidDaG9vc2UgYmV0d2VlbiBmaXhlZCBwb3NpdGlvbiAsIGN1cnNvciBmb2xsb3dpbmcgIG9yIFRvcCBtb2RlIC4nLFxyXG4nRWRpdGluZyBUb29sYmFyIGNvbHVtbnMnOidFZGl0aW5nIFRvb2xiYXIgY29sdW1ucycsXHJcbidDaG9vc2UgdGhlIG51bWJlciBvZiBjb2x1bW5zIHBlciByb3cgdG8gZGlzcGxheSBvbiBFZGl0aW5nIFRvb2xiYXIuIFRvIHNlZSB0aGUgY2hhbmdlLCBoaXQgdGhlIHJlZnJlc2ggYnV0dG9uIGJlbG93LCBvciBpbiB0aGUgc3RhdHVzIGJhciBtZW51Lic6J0Nob29zZSB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgcGVyIHJvdyB0byBkaXNwbGF5IG9uIEVkaXRpbmcgVG9vbGJhci4gVG8gc2VlIHRoZSBjaGFuZ2UsIGhpdCB0aGUgcmVmcmVzaCBidXR0b24gYmVsb3csIG9yIGluIHRoZSBzdGF0dXMgYmFyIG1lbnUuJyxcclxuJ0VkaXRpbmcgVG9vbGJhciByZWZyZXNoJzonRWRpdGluZyBUb29sYmFyIHJlZnJlc2gnLFxyXG4nRWRpdGluZyBUb29sYmFyIGNvbW1hbmRzJzonRWRpdGluZyBUb29sYmFyIGNvbW1hbmRzJyxcclxuXCJBZGQgYSBjb21tYW5kIG9udG8gRWRpdGluZyBUb29sYmFyIGZyb20gT2JzaWRpYW4ncyBjb21tYW5kcyBsaWJyYXJ5LiBUbyByZW9yZGVyIHRoZSBjb21tYW5kcywgZHJhZyBhbmQgZHJvcCB0aGUgY29tbWFuZCBpdGVtcy4gVG8gZGVsZXRlIHRoZW0sIHVzZSB0aGUgZGVsZXRlIGJ1dHRvbSB0byB0aGUgcmlnaHQgb2YgdGhlIGNvbW1hbmQgaXRlbS4gRWRpdGluZyBUb29sYmFyIHdpbGwgbm90IGF1dG9tYXRpY2FseSByZWZyZXNoIGFmdGVyIHJlb3JkZXJpbmcgY29tbWFuZHMuIFVzZSB0aGUgcmVmcmVzaCBidXR0b24gYWJvdmUuXCI6XCJBZGQgYSBjb21tYW5kIG9udG8gRWRpdGluZyBUb29sYmFyIGZyb20gT2JzaWRpYW4ncyBjb21tYW5kcyBsaWJyYXJ5LiBUbyByZW9yZGVyIHRoZSBjb21tYW5kcywgZHJhZyBhbmQgZHJvcCB0aGUgY29tbWFuZCBpdGVtcy4gVG8gZGVsZXRlIHRoZW0sIHVzZSB0aGUgZGVsZXRlIGJ1dHRvbSB0byB0aGUgcmlnaHQgb2YgdGhlIGNvbW1hbmQgaXRlbS4gRWRpdGluZyBUb29sYmFyIHdpbGwgbm90IGF1dG9tYXRpY2FseSByZWZyZXNoIGFmdGVyIHJlb3JkZXJpbmcgY29tbWFuZHMuIFVzZSB0aGUgcmVmcmVzaCBidXR0b24gYWJvdmUuXCIsXHJcbidGb3JtYXQgQnJ1c2ggT2ZmISc6J0Zvcm1hdCBCcnVzaCBPZmYhJyxcclxuJ0hpZGUgJiBTaG93JzonSGlkZSAmIFNob3cnLFxyXG4nRWRpdGluZyBUb29sYmFyIHdpbGwgb25seSByZWZyZXNoIGF1dG9tYXRpY2FsbHkgYWZ0ZXIgeW91IGhhdmUgZWl0aGVyIGFkZGVkIG9yIGRlbGV0ZWQgYSBjb21tYW5kIGZyb20gaXQuIFRvIHNlZSBVSSBjaGFuZ2VzIHRvIGNNZW51VG9vbGJhciAoYWJvdmUgc2V0dGluZ3MgY2hhbmdlcykgdXNlIHRoZSByZWZyZXNoIGJ1dHRvbi4gSWYgeW91IGZvcmdldCB0byByZWZyZXNoIGluIHNldHRpbmdzLCBubyB3b3JyaWVzLiBUaGVyZSBpcyBhbHNvIGEgcmVmcmVzaCBidXR0b24gaW4gdGhlIGNNZW51VG9vbGJhciBzdGF0dXMgYmFyIG1lbnUuJzonRWRpdGluZyBUb29sYmFyIHdpbGwgb25seSByZWZyZXNoIGF1dG9tYXRpY2FsbHkgYWZ0ZXIgeW91IGhhdmUgZWl0aGVyIGFkZGVkIG9yIGRlbGV0ZWQgYSBjb21tYW5kIGZyb20gaXQuIFRvIHNlZSBVSSBjaGFuZ2VzIHRvIGNNZW51VG9vbGJhciAoYWJvdmUgc2V0dGluZ3MgY2hhbmdlcykgdXNlIHRoZSByZWZyZXNoIGJ1dHRvbi4gSWYgeW91IGZvcmdldCB0byByZWZyZXNoIGluIHNldHRpbmdzLCBubyB3b3JyaWVzLiBUaGVyZSBpcyBhbHNvIGEgcmVmcmVzaCBidXR0b24gaW4gdGhlIGNNZW51VG9vbGJhciBzdGF0dXMgYmFyIG1lbnUuJyxcclxuJ0ZvbnQtQ29sb3IgZm9ybWF0dGluZyBicnVzaCBPTiEnOidGb250LUNvbG9yIGZvcm1hdHRpbmcgYnJ1c2ggT04hJyxcclxuJ01vcmUnOidNb3JlJyxcclxuJ0ZvbnQgQ29sb3JzJzonRm9udCBDb2xvcnMnLFxyXG4nRm9ybWF0IEJydXNoJzonRm9ybWF0IEJydXNoJyxcclxuJ0JhY2tncm91bmQgY29sb3InOidCYWNrZ3JvdW5kIGNvbG9yJyxcclxuJ1JlZnJlc2gnOidSZWZyZXNoJyxcclxuJ0FkZCc6J0FkZCcsXHJcbidEZWxldGUnOidEZWxldGUnLFxyXG4nQ2hhbmdlIENvbW1hbmQgbmFtZSc6J0NoYW5nZSBDb21tYW5kIG5hbWUnLFxyXG4nQWRkIHN1Ym1lbnUnOidBZGQgc3VibWVudScsXHJcbidhZGQgaHInOidhZGQgaHInLFxyXG4nRW50ZXIgdGhlIGljb24gY29kZSwgaXQgbG9va3MgbGlrZSA8c3ZnPi4uLi4gPC9zdmc+IGZvcm1hdCc6J0VudGVyIHRoZSBpY29uIGNvZGUsIGl0IGxvb2tzIGxpa2UgPHN2Zz4uLi4uIDwvc3ZnPiBmb3JtYXQnLFxyXG4nUGxlYXNlIGVudGVyIGEgbmV3IG5hbWXvvJonOidQbGVhc2UgZW50ZXIgYSBuZXcgbmFtZe+8micsXHJcbidEcmFnIHRoZSBzbGlkZXIgdG8gbW92ZSB0aGUgcG9zaXRpb24nOidEcmFnIHRoZSBzbGlkZXIgdG8gbW92ZSB0aGUgcG9zaXRpb24nLFxyXG4nUGx1Z2luIFNldHRpbmdzJzonUGx1Z2luIFNldHRpbmdzJyxcclxuJ0JhY2tncm91bmQtY29sb3IgZm9ybWF0dGluZyBicnVzaCBPTiEnOidCYWNrZ3JvdW5kLWNvbG9yIGZvcm1hdHRpbmcgYnJ1c2ggT04hXFxuQ2xpY2sgdGhlICBtb3VzZSBtaWRkbGUgb3IgcmlnaHQga2V5IHRvIGNsb3NlIHRoZSBmb3JtYXR0aW5nLWJydXNoJyxcclxuJ0NsZWFyIGZvcm1hdHRpbmcgYnJ1c2ggT04hJzonQ2xlYXIgZm9ybWF0dGluZyBicnVzaCBPTiEnLFxyXG4nQ2xlYXIgZm9ybWF0dGluZyBicnVzaCBPTiFcXG5DbGljayB0aGUgIG1vdXNlIG1pZGRsZSBvciByaWdodCBrZXkgdG8gY2xvc2UgdGhlIGZvcm1hdHRpbmctYnJ1c2gnOidDbGVhciBmb3JtYXR0aW5nIGJydXNoIE9OIVxcbkNsaWNrIHRoZSAgbW91c2UgbWlkZGxlIG9yIHJpZ2h0IGtleSB0byBjbG9zZSB0aGUgZm9ybWF0dGluZy1icnVzaCcsXHJcbidUaGUgdG9vbGJhciBpcyBkaXNwbGF5ZWQgd2hlbiB0aGUgbW91c2UgbW92ZXMgb3ZlciBpdCwgb3RoZXJ3aXNlIGl0IGlzIGF1dG9tYXRpY2FsbHkgaGlkZGVuJzonVGhlIHRvb2xiYXIgaXMgZGlzcGxheWVkIHdoZW4gdGhlIG1vdXNlIG1vdmVzIG92ZXIgaXQsIG90aGVyd2lzZSBpdCBpcyBhdXRvbWF0aWNhbGx5IGhpZGRlbicsXHJcbidFZGl0aW5nIFRvb2xiYXIgQXV0by1oaWRlJzonRWRpdGluZyBUb29sYmFyIEF1dG8taGlkZScsXHJcbidDdXN0b20gQmFja2dyb3VkIENvbG9yJzonQ3VzdG9tIEJhY2tncm91ZCBDb2xvcicsXHJcbidDdXN0b20gRm9udCBDb2xvcic6J0N1c3RvbSBGb250IENvbG9yJyxcclxuJ/CfjqggU2V0IGN1c3RvbSBiYWNrZ3JvdW5kJzon8J+OqCBTZXQgY3VzdG9tIGJhY2tncm91bmQnLFxyXG4n8J+WjO+4jyBTZXQgY3VzdG9tIGZvbnQgY29sb3InOifwn5aM77iPIFNldCBjdXN0b20gZm9udCBjb2xvcicsXHJcbidDbGljayBvbiB0aGUgcGlja2VyIHRvIGFkanVzdCB0aGUgY29sb3VyJzonQ2xpY2sgb24gdGhlIHBpY2tlciB0byBhZGp1c3QgdGhlIGNvbG91cidcclxufTtcclxuIiwiLy8gQ29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS92YWxlbnRpbmUxOTUvb2JzaWRpYW4tYWRtb25pdGlvbi9ibG9iL21hc3Rlci9zcmMvbGFuZy9oZWxwZXJzLnRzXHJcblxyXG5pbXBvcnQgeyBtb21lbnQgfSBmcm9tICdvYnNpZGlhbic7XHJcblxyXG5pbXBvcnQgYXIgZnJvbSAnLi9sb2NhbGUvYXInO1xyXG5pbXBvcnQgY3ogZnJvbSAnLi9sb2NhbGUvY3onO1xyXG5pbXBvcnQgZGEgZnJvbSAnLi9sb2NhbGUvZGEnO1xyXG5pbXBvcnQgZGUgZnJvbSAnLi9sb2NhbGUvZGUnO1xyXG5pbXBvcnQgZW4gZnJvbSAnLi9sb2NhbGUvZW4nO1xyXG5pbXBvcnQgZW5HQiBmcm9tICcuL2xvY2FsZS9lbi1nYic7XHJcbmltcG9ydCBlcyBmcm9tICcuL2xvY2FsZS9lcyc7XHJcbmltcG9ydCBmciBmcm9tICcuL2xvY2FsZS9mcic7XHJcbmltcG9ydCBoaSBmcm9tICcuL2xvY2FsZS9oaSc7XHJcbmltcG9ydCBpZCBmcm9tICcuL2xvY2FsZS9pZCc7XHJcbmltcG9ydCBpdCBmcm9tICcuL2xvY2FsZS9pdCc7XHJcbmltcG9ydCBqYSBmcm9tICcuL2xvY2FsZS9qYSc7XHJcbmltcG9ydCBrbyBmcm9tICcuL2xvY2FsZS9rbyc7XHJcbmltcG9ydCBubCBmcm9tICcuL2xvY2FsZS9ubCc7XHJcbmltcG9ydCBubyBmcm9tICcuL2xvY2FsZS9ubyc7XHJcbmltcG9ydCBwbCBmcm9tICcuL2xvY2FsZS9wbCc7XHJcbmltcG9ydCBwdCBmcm9tICcuL2xvY2FsZS9wdCc7XHJcbmltcG9ydCBwdEJSIGZyb20gJy4vbG9jYWxlL3B0LWJyJztcclxuaW1wb3J0IHJvIGZyb20gJy4vbG9jYWxlL3JvJztcclxuaW1wb3J0IHJ1IGZyb20gJy4vbG9jYWxlL3J1JztcclxuaW1wb3J0IHRyIGZyb20gJy4vbG9jYWxlL3RyJztcclxuaW1wb3J0IHpoQ04gZnJvbSAnLi9sb2NhbGUvemgtY24nO1xyXG5pbXBvcnQgemhUVyBmcm9tICcuL2xvY2FsZS96aC10dyc7XHJcblxyXG5jb25zdCBsb2NhbGVNYXA6IHsgW2s6IHN0cmluZ106IFBhcnRpYWw8dHlwZW9mIGVuPiB9ID0ge1xyXG4gIGFyLFxyXG4gIGNzOiBjeixcclxuICBkYSxcclxuICBkZSxcclxuICBlbixcclxuICAnZW4tZ2InOiBlbkdCLFxyXG4gIGVzLFxyXG4gIGZyLFxyXG4gIGhpLFxyXG4gIGlkLFxyXG4gIGl0LFxyXG4gIGphLFxyXG4gIGtvLFxyXG4gIG5sLFxyXG4gIG5uOiBubyxcclxuICBwbCxcclxuICBwdCxcclxuICAncHQtYnInOiBwdEJSLFxyXG4gIHJvLFxyXG4gIHJ1LFxyXG4gIHRyLFxyXG4gICd6aC1jbic6IHpoQ04sXHJcbiAgJ3poLXR3JzogemhUVyxcclxufTtcclxuXHJcbmNvbnN0IGxvY2FsZSA9IGxvY2FsZU1hcFttb21lbnQubG9jYWxlKCldO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHQoc3RyOiBrZXlvZiB0eXBlb2YgZW4pOiBzdHJpbmcge1xyXG4gIHJldHVybiAobG9jYWxlICYmIGxvY2FsZVtzdHJdKSB8fCBlbltzdHJdO1xyXG59XHJcbiIsIi8vIMSNZcWhdGluYVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge307XHJcbiIsIi8vIERhbnNrXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7fTtcclxuIiwiLy8gRGV1dHNjaFxyXG5cclxuZXhwb3J0IGRlZmF1bHQge307XHJcbiIsIi8vIEJyaXRpc2ggRW5nbGlzaFxyXG5cclxuZXhwb3J0IGRlZmF1bHQge307XHJcbiIsIi8vIEVzcGHDsW9sXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7fTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge307XHJcbiIsIi8vIOCkueCkv+CkqOCljeCkpuClgFxyXG5cclxuZXhwb3J0IGRlZmF1bHQge307XHJcbiIsIi8vIEJhaGFzYSBJbmRvbmVzaWFcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHt9O1xyXG4iLCIvLyBJdGFsaWFub1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge307XHJcbiIsIi8vIOaXpeacrOiqnlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge307XHJcbiIsIi8vIO2VnOq1reyWtFxyXG5cclxuZXhwb3J0IGRlZmF1bHQge307XHJcbiIsIi8vIE5lZGVybGFuZHNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHt9O1xyXG4iLCIvLyBOb3Jza1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge307XHJcbiIsIi8vIGrEmXp5ayBwb2xza2lcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHt9O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7fTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge307XHJcbiIsIi8vIFJvbcOibsSDXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7fTtcclxuIiwiLy8g0YDRg9GB0YHQutC40LlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHt9O1xyXG4iLCIvLyBUw7xya8OnZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge307XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyBzZXR0aW5nLnRzXHJcbiAgJ0VkaXRpbmcgVG9vbGJhciBhcHBlbmQgbWV0aG9kJzogJ+W3peWFt+agj+eahOmZhOWKoOaWueazleOAgicsXHJcbiAgJ0Nob29zZSB3aGVyZSBFZGl0aW5nIFRvb2xiYXIgd2lsbCBhcHBlbmQgdXBvbiByZWdlbmVyYXRpb24uIFRvIHNlZSB0aGUgY2hhbmdlLCBoaXQgdGhlIHJlZnJlc2ggYnV0dG9uIGJlbG93LCBvciBpbiB0aGUgc3RhdHVzIGJhciBtZW51Lic6ICflt6XlhbfmoI/lnKhPYnNpZGlhbuS4reeahOi/veWKoOeahOS9jee9ru+8jOWPquWvueWbuuWumuWSjOi3n+maj+aooeW8j+acieaViOOAguWmguaenOS9oOmBh+WIsOW3peWFt+agj+aYvuekuumXrumimO+8jOWPr+S7pemAieaLqWJvZHnor5Xor5XjgILor7fngrnlh7vkuIvpnaLmiJbogIXnirbmgIHmoI/oj5zljZXkuK3nmoTliLfmlrDmjInpkq7nlJ/mlYjjgIInLFxyXG4gICdFZGl0aW5nIFRvb2xiYXIgYWVzdGhldGljJzogJ+W3peWFt+agj+agt+W8jycsXHJcbiAgJ0Nob29zZSBiZXR3ZWVuIGEgZ2xhc3MgbW9ycGhpc20gLHRpbnkgYW5kIGRlZmF1bHQgc3R5bGUgZm9yIEVkaXRpbmcgVG9vbGJhci4gVG8gc2VlIHRoZSBjaGFuZ2UsIGhpdCB0aGUgcmVmcmVzaCBidXR0b24gYmVsb3csIG9yIGluIHRoZSBzdGF0dXMgYmFyIG1lbnUuJzogJ+agt+W8j+acieavm+eOu+eSgyznroDnuqblkozpu5jorqTpo47moLzpgInmi6njgILor7fngrnlh7vkuIvpnaLmiJbogIXnirbmgIHmoI/oj5zljZXkuK3nmoTliLfmlrDmjInpkq7nlJ/mlYjjgIInLFxyXG4gICdFZGl0aW5nIFRvb2xiYXIgcG9zaXRpb24nOiAn5bel5YW35qCP5L2N572uJyxcclxuICAnQ2hvb3NlIGJldHdlZW4gZml4ZWQgcG9zaXRpb24gb3IgY3Vyc29yIGZvbGxvd2luZyBtb2RlLic6ICflnKjlm7rlrprkvY3nva4s5YWJ5qCH6Lef6ZqP5qih5byP5oiW6ICF572u6aG25qih5byP5LmL6Ze06L+b6KGM6YCJ5oup44CCJyxcclxuICAnRWRpdGluZyBUb29sYmFyIGNvbHVtbnMnOiAn5bel5YW35qCP5qCP55uu5pWwJyxcclxuICAnQ2hvb3NlIHRoZSBudW1iZXIgb2YgY29sdW1ucyBwZXIgcm93IHRvIGRpc3BsYXkgb24gRWRpdGluZyBUb29sYmFyLiBUbyBzZWUgdGhlIGNoYW5nZSwgaGl0IHRoZSByZWZyZXNoIGJ1dHRvbiBiZWxvdywgb3IgaW4gdGhlIHN0YXR1cyBiYXIgbWVudS4nOiAn6YCJ5oup5ZyoRWRpdGluZyBUb29sYmFy5LiK5pi+56S655qE5q+P6KGM55qE5YiX5pWw44CCJyxcclxuICAnRWRpdGluZyBUb29sYmFyIHJlZnJlc2gnOiAn5Yi35paw5bel5YW35qCPJyxcclxuICAnRWRpdGluZyBUb29sYmFyIGNvbW1hbmRzJzogJ+WcqOW3peWFt+agj+S4rea3u+WKoOWRveS7pCcsXHJcbiAgXCJBZGQgYSBjb21tYW5kIG9udG8gRWRpdGluZyBUb29sYmFyIGZyb20gT2JzaWRpYW4ncyBjb21tYW5kcyBsaWJyYXJ5LiBUbyByZW9yZGVyIHRoZSBjb21tYW5kcywgZHJhZyBhbmQgZHJvcCB0aGUgY29tbWFuZCBpdGVtcy4gVG8gZGVsZXRlIHRoZW0sIHVzZSB0aGUgZGVsZXRlIGJ1dHRvbSB0byB0aGUgcmlnaHQgb2YgdGhlIGNvbW1hbmQgaXRlbS4gRWRpdGluZyBUb29sYmFyIHdpbGwgbm90IGF1dG9tYXRpY2FseSByZWZyZXNoIGFmdGVyIHJlb3JkZXJpbmcgY29tbWFuZHMuIFVzZSB0aGUgcmVmcmVzaCBidXR0b24gYWJvdmUuXCI6ICfku45PYnNpZGlhbueahOWRveS7pOW6k+S4rea3u+WKoOS4gOS4quWRveS7pOWIsOW3peWFt+agj+OAguimgemHjeaWsOaOkuWIl+WRveS7pO+8jOWPr+S7peaLluaUvuWRveS7pOmhueOAguimgeWIoOmZpOWug+S7rO+8jOivt+S9v+eUqOWRveS7pOmhueWPs+i+ueeahOWIoOmZpOaMiemSruOAguWbvuagh+mAieaLqUN1c3RvbeWPr+S7peiHquWumuS5ieWbvuaghycsXHJcbiAgJ0Zvcm1hdCBCcnVzaCBPZmYhJzogJ+WFs+mXreagvOW8j+WIt++8gScsXHJcbiAgJ0hpZGUgJiBTaG93JzogJ+makOiXjyAmIOaYvuekuicsXHJcbiAgJ0VkaXRpbmcgVG9vbGJhciB3aWxsIG9ubHkgcmVmcmVzaCBhdXRvbWF0aWNhbGx5IGFmdGVyIHlvdSBoYXZlIGVpdGhlciBhZGRlZCBvciBkZWxldGVkIGEgY29tbWFuZCBmcm9tIGl0LiBUbyBzZWUgVUkgY2hhbmdlcyB0byBjTWVudVRvb2xiYXIgKGFib3ZlIHNldHRpbmdzIGNoYW5nZXMpIHVzZSB0aGUgcmVmcmVzaCBidXR0b24uIElmIHlvdSBmb3JnZXQgdG8gcmVmcmVzaCBpbiBzZXR0aW5ncywgbm8gd29ycmllcy4gVGhlcmUgaXMgYWxzbyBhIHJlZnJlc2ggYnV0dG9uIGluIHRoZSBjTWVudVRvb2xiYXIgc3RhdHVzIGJhciBtZW51Lic6ICflr7nlpJbop4LnmoTmm7TmlLnnlJ/mlYjpnIDopoHkvb/nlKjliLfmlrDmjInpkq7jgILlpoLmnpzkvaDlv5jorrDlnKjorr7nva7kuK3liLfmlrDvvIzlnKjnirbmgIHmoI/oj5zljZXkuK3kuZ/mnInkuIDkuKrliLfmlrDmjInpkq7jgIInLFxyXG4gICdGb250LUNvbG9yIGZvcm1hdHRpbmcgYnJ1c2ggT04hJzogJ+Wtl+S9k+minOiJsuagvOW8j+WIt+W8gOWQr1xcbueCueWHu+m8oOagh+S4remUruaIluiAheWPs+mUruWFs+mXreagvOW8j+WItycsXHJcbiAgJ01vcmUnOiAn5pu05aSaJyxcclxuICAnRm9udCBDb2xvcnMnOiAn5a2X5L2T6aKc6ImyJyxcclxuICAnRm9ybWF0IEJydXNoJzogJ+agvOW8j+WItycsXHJcbiAgJ0JhY2tncm91bmQgY29sb3InOiAn6IOM5pmv6aKc6ImyJyxcclxuICAnUmVmcmVzaCc6ICfliLfmlrAnLFxyXG4gICdBZGQnOiAn5re75YqgJyxcclxuICAnRGVsZXRlJzogJ+WIoOmZpCcsXHJcbiAgJ0NoYW5nZSBDb21tYW5kIG5hbWUnOiAn5pu05pS55ZG95Luk5ZCN56ewJyxcclxuICAnQWRkIHN1Ym1lbnUnOiAn5re75Yqg5a2Q6I+c5Y2VJyxcclxuICAnYWRkIGhyJzogJ+a3u+WKoOWIhuWJsue6vycsXHJcbiAgJ0VudGVyIHRoZSBpY29uIGNvZGUsIGl0IGxvb2tzIGxpa2UgPHN2Zz4uLi4uIDwvc3ZnPiBmb3JtYXQnOiAn6L6T5YWl5Zu+5qCH5Luj56CB77yM57G75Ly8PHN2Zz4uLi4uIDwvc3ZnPuagvOW8jycsXHJcbiAgJ1BsZWFzZSBlbnRlciBhIG5ldyBuYW1l77yaJzogJ+ivt+i+k+WFpeaWsOWQjeensO+8micsXHJcbiAgJ0RyYWcgdGhlIHNsaWRlciB0byBtb3ZlIHRoZSBwb3NpdGlvbic6ICfmi5bliqjmu5HlnZfmnaXnp7vliqjkvY3nva4nLFxyXG4gICdQbHVnaW4gU2V0dGluZ3MnOiAn5o+S5Lu26K6+572uJyxcclxuICAnQmFja2dyb3VuZC1jb2xvciBmb3JtYXR0aW5nIGJydXNoIE9OISc6J+W8gOWQr+iDjOaZr+iJsuagvOW8j+WItycsXHJcbiAgJ0NsZWFyIGZvcm1hdHRpbmcgYnJ1c2ggT04hJzon5riF6Zmk5qC85byP5Yi35bey5byA5ZCvJyxcclxuICAnQ2xlYXIgZm9ybWF0dGluZyBicnVzaCBPTiFcXG5DbGljayB0aGUgIG1vdXNlIG1pZGRsZSBvciByaWdodCBrZXkgdG8gY2xvc2UgdGhlIGZvcm1hdHRpbmctYnJ1c2gnOifmuIXpmaTmoLzlvI/liLflt7LlvIDlkK9cXG7ngrnlh7vpvKDmoIfkuK3plK7miJbogIXlj7PplK7lhbPpl63moLzlvI/liLcnLFxyXG4gICdUaGUgdG9vbGJhciBpcyBkaXNwbGF5ZWQgd2hlbiB0aGUgbW91c2UgbW92ZXMgb3ZlciBpdCwgb3RoZXJ3aXNlIGl0IGlzIGF1dG9tYXRpY2FsbHkgaGlkZGVuJzon5b2T6byg5qCH56e75Yiw5bel5YW35qCP5LiK5pa55pe277yM5bel5YW35qCP5pi+56S677yM5ZCm5YiZ6Ieq5Yqo6ZqQ6JePJyxcclxuICAnRWRpdGluZyBUb29sYmFyIEF1dG8taGlkZSc6J+W3peWFt+agj+aYr+WQpuiHquWKqOmakOiXjycsXHJcbiAgJ0N1c3RvbSBCYWNrZ3JvdWQgQ29sb3InOiforr7nva7oh6rlrprkuYnog4zmma/oibInLFxyXG4gICdDdXN0b20gRm9udCBDb2xvcic6J+iuvue9ruiHquWumuS5ieWtl+S9k+minOiJsicsXHJcbiAgJ/CfjqggU2V0IGN1c3RvbSBiYWNrZ3JvdW5kJzon8J+OqCDorr7nva7oh6rlrprkuYnog4zmma8nLFxyXG4gICfwn5aM77iPIFNldCBjdXN0b20gZm9udCBjb2xvcic6J/CflozvuI8g6K6+572u6Ieq5a6a5LmJ5a2X5L2T6aKc6ImyJyxcclxuICAnQ2xpY2sgb24gdGhlIHBpY2tlciB0byBhZGp1c3QgdGhlIGNvbG91cic6J+eCueWHu+mAieWPluWZqOadpeiwg+aVtOminOiJsidcclxufTtcclxuIiwiLy8g57mB6auU5Lit5paHXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7fTtcclxuIiwiaW1wb3J0IHR5cGUgY01lbnVUb29sYmFyUGx1Z2luIGZyb20gXCJzcmMvcGx1Z2luL21haW5cIjtcclxuaW1wb3J0IHsgYXBwSWNvbnMgfSBmcm9tIFwic3JjL2ljb25zL2FwcEljb25zXCI7XHJcbmltcG9ydCB7IE5vdGljZSwgQ29tbWFuZCwgc2V0SWNvbiwgRnV6enlNYXRjaCwgRnV6enlTdWdnZXN0TW9kYWwsIE1vZGFsLCBTbGlkZXJDb21wb25lbnQsIFRleHRBcmVhQ29tcG9uZW50LCBUZXh0Q29tcG9uZW50LCBkZWJvdW5jZSwgQXBwIH0gZnJvbSBcIm9ic2lkaWFuXCI7XHJcbmltcG9ydCB7IGZpbmRtZW51SUQgfSBmcm9tIFwic3JjL3V0aWwvdXRpbFwiO1xyXG5pbXBvcnQgeyBzZXRCb3R0b21WYWx1ZSB9IGZyb20gXCJzcmMvdXRpbC9zdGF0dXNCYXJDb25zdGFudHNcIjtcclxuaW1wb3J0IHsgdCB9IGZyb20gXCJzcmMvdHJhbnNsYXRpb25zL2hlbHBlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENob29zZUZyb21JY29uTGlzdCBleHRlbmRzIEZ1enp5U3VnZ2VzdE1vZGFsPHN0cmluZz4ge1xyXG4gIHBsdWdpbjogY01lbnVUb29sYmFyUGx1Z2luO1xyXG4gIGNvbW1hbmQ6IENvbW1hbmQ7XHJcbiAgaXNzdWI6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBsdWdpbjogY01lbnVUb29sYmFyUGx1Z2luLCBjb21tYW5kOiBDb21tYW5kLCBpc3N1YjogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBzdXBlcihwbHVnaW4uYXBwKTtcclxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG4gICAgdGhpcy5jb21tYW5kID0gY29tbWFuZDtcclxuICAgIHRoaXMuaXNzdWIgPSBpc3N1YjtcclxuICAgIHRoaXMuc2V0UGxhY2Vob2xkZXIoXCJDaG9vc2UgYW4gaWNvblwiKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FwaXRhbEpvaW4oc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgaWNvbiA9IHN0cmluZy5zcGxpdChcIiBcIik7XHJcblxyXG4gICAgcmV0dXJuIGljb25cclxuICAgICAgLm1hcCgoaWNvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBpY29uWzBdLnRvVXBwZXJDYXNlKCkgKyBpY29uLnN1YnN0cmluZygxKTtcclxuICAgICAgfSlcclxuICAgICAgLmpvaW4oXCIgXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbXMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIGFwcEljb25zO1xyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbVRleHQoaXRlbTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNhcGl0YWxKb2luKFxyXG4gICAgICBpdGVtXHJcbiAgICAgICAgLnJlcGxhY2UoXCJmZWF0aGVyLVwiLCBcIlwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwicmVtaXgtXCIsIFwiXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJieC1cIiwgXCJcIilcclxuICAgICAgICAucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiAkMVwiKVxyXG4gICAgICAgIC50cmltKClcclxuICAgICAgICAucmVwbGFjZSgvLS9naSwgXCIgXCIpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyU3VnZ2VzdGlvbihpY29uOiBGdXp6eU1hdGNoPHN0cmluZz4sIGljb25JdGVtOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc3BhbiA9IGNyZWF0ZVNwYW4oeyBjbHM6IFwiY01lbnVUb29sYmFySWNvblBpY2tcIiB9KTtcclxuICAgIGljb25JdGVtLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgc2V0SWNvbihzcGFuLCBpY29uLml0ZW0pO1xyXG4gICAgc3VwZXIucmVuZGVyU3VnZ2VzdGlvbihpY29uLCBpY29uSXRlbSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkNob29zZUl0ZW0oaXRlbTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAoaXRlbSA9PT0gXCJDdXN0b21cIikge1xyXG4gICAgICBuZXcgQ3VzdG9tSWNvbih0aGlzLmFwcCwgdGhpcy5wbHVnaW4sIHRoaXMuY29tbWFuZCwgdGhpcy5pc3N1Yikub3BlbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuY29tbWFuZC5pY29uKSAvL+WtmOWcqOWwseS/ruaUueS4jeWtmOWcqOaWsOWinlxyXG4gICAgICB7XHJcbiAgICAgICAgbGV0IG1lbnVJRCA9IGZpbmRtZW51SUQodGhpcy5wbHVnaW4sIHRoaXMuY29tbWFuZCwgdGhpcy5pc3N1YilcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhtZW51SUQpO1xyXG4gICAgICAgIHRoaXMuaXNzdWIgPyB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tZW51Q29tbWFuZHNbbWVudUlEWydpbmRleCddXS5TdWJtZW51Q29tbWFuZHNbbWVudUlEWydzdWJpbmRleCddXS5pY29uID0gaXRlbSA6IHRoaXMucGx1Z2luLnNldHRpbmdzLm1lbnVDb21tYW5kc1ttZW51SURbJ2luZGV4J11dLmljb24gPSBpdGVtO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29tbWFuZC5pY29uID0gaXRlbTtcclxuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tZW51Q29tbWFuZHMucHVzaCh0aGlzLmNvbW1hbmQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjTWVudVRvb2xiYXItTmV3Q29tbWFuZFwiKSk7XHJcbiAgICAgIH0sIDEwMCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIGAlY0NvbW1hbmQgJyR7dGhpcy5jb21tYW5kLm5hbWV9JyB3YXMgYWRkZWQgdG8gY01lbnVUb29sYmFyYCxcclxuICAgICAgICBcImNvbG9yOiBWaW9sZXRcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1hbmRQaWNrZXIgZXh0ZW5kcyBGdXp6eVN1Z2dlc3RNb2RhbDxDb21tYW5kPiB7XHJcbiAgY29tbWFuZDogQ29tbWFuZDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbHVnaW46IGNNZW51VG9vbGJhclBsdWdpbikge1xyXG4gICAgc3VwZXIocGx1Z2luLmFwcCk7XHJcbiAgICB0aGlzLmFwcDtcclxuICAgIHRoaXMuc2V0UGxhY2Vob2xkZXIoXCJDaG9vc2UgYSBjb21tYW5kXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbXMoKTogQ29tbWFuZFtdIHtcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgcmV0dXJuIGFwcC5jb21tYW5kcy5saXN0Q29tbWFuZHMoKTtcclxuICB9XHJcblxyXG4gIGdldEl0ZW1UZXh0KGl0ZW06IENvbW1hbmQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGl0ZW0ubmFtZTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uQ2hvb3NlSXRlbShpdGVtOiBDb21tYW5kKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tZW51Q29tbWFuZHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09IGl0ZW0uaWQpO1xyXG4gICAgLy8gIGNvbnNvbGUubG9nKGluZGV4KVxyXG5cclxuICAgIGlmIChpbmRleCA+IC0xKSAvL+WtmOWcqFxyXG4gICAge1xyXG4gICAgICBuZXcgTm90aWNlKFwiVGhlIGNvbW1hbmRcIiArIGl0ZW0ubmFtZSArIFwiYWxyZWFkeSBleGlzdHNcIiwgMzAwMCk7XHJcbiAgICAgIC8vICBjb25zb2xlLmxvZyhgJWNDb21tYW5kICcke2l0ZW0ubmFtZX0nIGFscmVhZHkgZXhpc3RzIGAsIFwiY29sb3I6IFZpb2xldFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGl0ZW0uaWNvbikge1xyXG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm1lbnVDb21tYW5kcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjTWVudVRvb2xiYXItTmV3Q29tbWFuZFwiKSk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgIGAlY0NvbW1hbmQgJyR7aXRlbS5uYW1lfScgd2FzIGFkZGVkIHRvIGNNZW51VG9vbGJhcmAsXHJcbiAgICAgICAgICBcImNvbG9yOiBWaW9sZXRcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3IENob29zZUZyb21JY29uTGlzdCh0aGlzLnBsdWdpbiwgaXRlbSwgZmFsc2UpLm9wZW4oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUljb24gZXh0ZW5kcyBNb2RhbCB7XHJcbiAgcGx1Z2luOiBjTWVudVRvb2xiYXJQbHVnaW47XHJcbiAgaXRlbTogQ29tbWFuZDtcclxuICBpc3N1YjogYm9vbGVhbjtcclxuICBzdWJtaXRFbnRlckNhbGxiYWNrOiAodGhpczogSFRNTFRleHRBcmVhRWxlbWVudCwgZXY6IEtleWJvYXJkRXZlbnQpID0+IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogY01lbnVUb29sYmFyUGx1Z2luLCBpdGVtOiBDb21tYW5kLCBpc3N1YjogYm9vbGVhbikge1xyXG4gICAgc3VwZXIocGx1Z2luLmFwcCk7XHJcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcclxuICAgIHRoaXMuaXRlbSA9IGl0ZW07XHJcbiAgICB0aGlzLmlzc3ViID0gaXNzdWI7XHJcbiAgICB0aGlzLmNvbnRhaW5lckVsLmFkZENsYXNzKFwiY01lbnVUb29sYmFyLU1vZGFsXCIpO1xyXG4gICAgdGhpcy5jb250YWluZXJFbC5hZGRDbGFzcyhcImN1c3RvbWljb25cIik7XHJcbiAgfVxyXG4gIG9uT3BlbigpIHtcclxuXHJcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpcztcclxuICAgIGNvbnRlbnRFbC5jcmVhdGVFbChcImJcIiwgeyB0ZXh0OiB0KFwiRW50ZXIgdGhlIGljb24gY29kZSwgaXQgbG9va3MgbGlrZSA8c3ZnPi4uLi4gPC9zdmc+IGZvcm1hdFwiKSB9KTtcclxuICAgIGNvbnN0IHRleHRDb21wb25lbnQgPSBuZXcgVGV4dEFyZWFDb21wb25lbnQoY29udGVudEVsKTtcclxuICAgIHRleHRDb21wb25lbnQuaW5wdXRFbC5jbGFzc0xpc3QuYWRkKCd3aWRlSW5wdXRQcm9tcHRJbnB1dEVsJyk7XHJcbiAgICB0ZXh0Q29tcG9uZW50LnNldFBsYWNlaG9sZGVyKFwiXCIpXHJcbiAgICAgIC5zZXRWYWx1ZSh0aGlzLml0ZW0uaWNvbiA/PyAnJylcclxuICAgICAgLm9uQ2hhbmdlKGRlYm91bmNlKGFzeW5jICh2YWx1ZTogc3RyaW5nKSA9PiB7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbS5pY29uID0gdmFsdWU7XHJcbiAgICAgICAgbGV0IG1lbnVJRCA9IGZpbmRtZW51SUQodGhpcy5wbHVnaW4sIHRoaXMuaXRlbSwgdGhpcy5pc3N1YilcclxuICAgICAgICBpZiAoIXRoaXMuaXNzdWIpIC8v5LiN5piv5a2Q6aG5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGV0IGluZGV4ID0gbWVudUlEWydpbmRleCddXHJcbiAgICAgICAgICBpbmRleCA9PT0gLTEgPyB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tZW51Q29tbWFuZHMucHVzaCh0aGlzLml0ZW0pIDpcclxuICAgICAgICAgICAgKHRoaXMucGx1Z2luLnNldHRpbmdzLm1lbnVDb21tYW5kc1tpbmRleF0uaWNvbiA9IHRoaXMuaXRlbS5pY29uKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBzdWJpbmRleCA9IG1lbnVJRFsnc3ViaW5kZXgnXVxyXG4gICAgICAgICAgc3ViaW5kZXggPT09IC0xID8gdGhpcy5wbHVnaW4uc2V0dGluZ3MubWVudUNvbW1hbmRzW21lbnVJRFtcImluZGV4XCJdXS5TdWJtZW51Q29tbWFuZHMucHVzaCh0aGlzLml0ZW0pIDogdGhpcy5wbHVnaW4uc2V0dGluZ3MubWVudUNvbW1hbmRzW21lbnVJRFsnaW5kZXgnXV0uU3VibWVudUNvbW1hbmRzW3N1YmluZGV4XS5pY29uID0gdmFsdWVcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICB9LCAxMDAsIHRydWUpXHJcbiAgICAgIClcclxuICAgICAgLmlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3VibWl0RW50ZXJDYWxsYmFjayk7XHJcbiAgfVxyXG4gIG9uQ2xvc2UoKSB7XHJcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpcztcclxuICAgIGNvbnRlbnRFbC5lbXB0eSgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY01lbnVUb29sYmFyLU5ld0NvbW1hbmRcIikpO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZUNtZG5hbWUgZXh0ZW5kcyBNb2RhbCB7XHJcbiAgcGx1Z2luOiBjTWVudVRvb2xiYXJQbHVnaW47XHJcbiAgaXRlbTogQ29tbWFuZDtcclxuICBpc3N1YjogYm9vbGVhbjtcclxuICBzdWJtaXRFbnRlckNhbGxiYWNrOiAodGhpczogSFRNTElucHV0RWxlbWVudCwgZXY6IEtleWJvYXJkRXZlbnQpID0+IGFueTtcclxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBjTWVudVRvb2xiYXJQbHVnaW4sIGl0ZW06IENvbW1hbmQsIGlzc3ViOiBib29sZWFuKSB7XHJcbiAgICBzdXBlcihwbHVnaW4uYXBwKTtcclxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG4gICAgdGhpcy5pdGVtID0gaXRlbTtcclxuICAgIHRoaXMuaXNzdWIgPSBpc3N1YjtcclxuICAgIHRoaXMuY29udGFpbmVyRWwuYWRkQ2xhc3MoXCJjTWVudVRvb2xiYXItTW9kYWxcIik7XHJcbiAgICB0aGlzLmNvbnRhaW5lckVsLmFkZENsYXNzKFwiY2hhbmdlbmFtZVwiKTtcclxuICB9XHJcbiAgb25PcGVuKCkge1xyXG5cclxuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzO1xyXG4gICAgY29udGVudEVsLmNyZWF0ZUVsKFwiYlwiLCB7IHRleHQ6IHQoXCJQbGVhc2UgZW50ZXIgYSBuZXcgbmFtZe+8mlwiKSB9KTtcclxuXHJcbiAgICBjb25zdCB0ZXh0Q29tcG9uZW50ID0gbmV3IFRleHRDb21wb25lbnQoY29udGVudEVsKTtcclxuICAgIHRleHRDb21wb25lbnQuaW5wdXRFbC5jbGFzc0xpc3QuYWRkKCdJbnB1dFByb21wdElucHV0RWwnKTtcclxuICAgIHRleHRDb21wb25lbnQuc2V0UGxhY2Vob2xkZXIoXCJcIilcclxuICAgICAgLnNldFZhbHVlKHRoaXMuaXRlbS5uYW1lID8/ICcnKVxyXG4gICAgICAub25DaGFuZ2UoZGVib3VuY2UoYXN5bmMgKHZhbHVlKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBtZW51SUQgPSBmaW5kbWVudUlEKHRoaXMucGx1Z2luLCB0aGlzLml0ZW0sIHRoaXMuaXNzdWIpXHJcbiAgICAgICAgdGhpcy5pdGVtLm5hbWUgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNzdWIpIC8v5LiN5piv5a2Q6aG5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGV0IGluZGV4ID0gbWVudUlEWydpbmRleCddXHJcbiAgICAgICAgICAvLyAgY29uc29sZS5sb2coaW5kZXgsXCJpbmRleFwiKVxyXG4gICAgICAgICAgaW5kZXggPT09IC0xID8gdGhpcy5wbHVnaW4uc2V0dGluZ3MubWVudUNvbW1hbmRzLnB1c2godGhpcy5pdGVtKSA6XHJcbiAgICAgICAgICAgICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5tZW51Q29tbWFuZHNbaW5kZXhdLm5hbWUgPSB0aGlzLml0ZW0ubmFtZSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsZXQgc3ViaW5kZXggPSBtZW51SURbJ3N1YmluZGV4J11cclxuICAgICAgICAgIHN1YmluZGV4ID09PSAtMSA/IHRoaXMucGx1Z2luLnNldHRpbmdzLm1lbnVDb21tYW5kc1ttZW51SURbXCJpbmRleFwiXV0uU3VibWVudUNvbW1hbmRzLnB1c2godGhpcy5pdGVtKSA6IHRoaXMucGx1Z2luLnNldHRpbmdzLm1lbnVDb21tYW5kc1ttZW51SURbJ2luZGV4J11dLlN1Ym1lbnVDb21tYW5kc1tzdWJpbmRleF0ubmFtZSA9IHZhbHVlXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgfSwgMTAwLCB0cnVlKSlcclxuICAgICAgLmlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3VibWl0RW50ZXJDYWxsYmFjayk7XHJcbiAgfVxyXG4gIG9uQ2xvc2UoKSB7XHJcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpcztcclxuICAgIGNvbnRlbnRFbC5lbXB0eSgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY01lbnVUb29sYmFyLU5ld0NvbW1hbmRcIikpO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3Mgb3BlblNsaWRlciBleHRlbmRzIE1vZGFsIHtcclxuICBwbHVnaW46IGNNZW51VG9vbGJhclBsdWdpbjtcclxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBjTWVudVRvb2xiYXJQbHVnaW4pIHtcclxuICAgIHN1cGVyKHBsdWdpbi5hcHApO1xyXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XHJcbiAgICB0aGlzLmNvbnRhaW5lckVsLmFkZENsYXNzKFwiY01lbnVUb29sYmFyLU1vZGFsXCIpO1xyXG4gIH1cclxuICBvbk9wZW4oKSB7XHJcblxyXG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXM7XHJcbiAgICBjb250ZW50RWwuY3JlYXRlRWwoXCJwXCIsIHsgdGV4dDogdChcIkRyYWcgdGhlIHNsaWRlciB0byBtb3ZlIHRoZSBwb3NpdGlvblwiKSB9KTtcclxuICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5wb3NpdGlvblN0eWxlID09IFwidG9wXCIpIHtcclxuICAgICAgbGV0IHRvcGVtID0gICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jTWVudUJvdHRvbVZhbHVlIC0gNC4yNSkqNTtcclxuICAgICAgbmV3IFNsaWRlckNvbXBvbmVudChjb250ZW50RWwpXHJcbiAgICAgICAgLnNldExpbWl0cygwLCA4MCwgMC41KVxyXG4gICAgICAgIC5zZXRWYWx1ZSh0b3BlbSlcclxuICAgICAgICAub25DaGFuZ2UoZGVib3VuY2UoYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJWMke3ZhbHVlfXB4YCwgXCJjb2xvcjogVmlvbGV0XCIpO1xyXG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY01lbnVCb3R0b21WYWx1ZSA9IHZhbHVlLzUgKyA0LjI1O1xyXG4gICAgICAgICAgc2V0Qm90dG9tVmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjTWVudVRvb2xiYXItTmV3Q29tbWFuZFwiKSk7XHJcbiAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0sIDEwMCwgdHJ1ZSkpXHJcbiAgICAgICAgLnNldER5bmFtaWNUb29sdGlwKCk7XHJcbiAgICB9ZWxzZXtcclxuICAgIG5ldyBTbGlkZXJDb21wb25lbnQoY29udGVudEVsKVxyXG4gICAgICAuc2V0TGltaXRzKDIsIDE4LCAwLjI1KVxyXG4gICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuY01lbnVCb3R0b21WYWx1ZSlcclxuICAgICAgLm9uQ2hhbmdlKGRlYm91bmNlKGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAlYyR7dmFsdWV9ZW1gLCBcImNvbG9yOiBWaW9sZXRcIik7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY01lbnVCb3R0b21WYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHNldEJvdHRvbVZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY01lbnVUb29sYmFyLU5ld0NvbW1hbmRcIikpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICAgIH0sIDEwMCwgdHJ1ZSkpXHJcbiAgICAgIC5zZXREeW5hbWljVG9vbHRpcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBvbkNsb3NlKCkge1xyXG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXM7XHJcbiAgICBjb250ZW50RWwuZW1wdHkoKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB0eXBlIHsgQ29tbWFuZCB9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5leHBvcnQgY29uc3QgQVBQRU5EX01FVEhPRFMgPSBbXCJib2R5XCIsIFwid29ya3NwYWNlXCJdO1xyXG5leHBvcnQgY29uc3QgQUVTVEhFVElDX1NUWUxFUyA9IFtcImdsYXNzXCIsIFwiZGVmYXVsdFwiLCBcInRpbnlcIl07XHJcbmV4cG9ydCBjb25zdCBQT1NJVElPTl9TVFlMRVMgPSBbXCJmaXhlZFwiLCBcImZvbGxvd2luZ1wiLCBcInRvcFwiXTtcclxuXHJcblxyXG5cclxuZGVjbGFyZSBtb2R1bGUgJ29ic2lkaWFuJyB7XHJcbiAgZXhwb3J0IGludGVyZmFjZSBDb21tYW5kIHtcclxuICAgIFN1Ym1lbnVDb21tYW5kcz86IENvbW1hbmRbXTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBjTWVudVRvb2xiYXJTZXR0aW5ncyB7XHJcbiAgY01lbnVXaWR0aDogbnVtYmVyO1xyXG4gIGNNZW51Rm9udENvbG9yOiBzdHJpbmc7XHJcbiAgY01lbnVCYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICBhZXN0aGV0aWNTdHlsZTogc3RyaW5nO1xyXG4gIHBvc2l0aW9uU3R5bGU6IHN0cmluZztcclxuICBtZW51Q29tbWFuZHM6IENvbW1hbmRbXTtcclxuICBhcHBlbmRNZXRob2Q6IHN0cmluZztcclxuICBzaG91bGRTaG93TWVudU9uU2VsZWN0OiBib29sZWFuO1xyXG4gIGNNZW51VmlzaWJpbGl0eTogYm9vbGVhbjtcclxuICBjTWVudUJvdHRvbVZhbHVlOiBudW1iZXI7XHJcbiAgY01lbnVOdW1Sb3dzOiBudW1iZXI7XHJcbiAgYXV0b2hpZGU6Ym9vbGVhbjtcclxuICBjdXN0b21fYmcxOnN0cmluZztcclxuICBjdXN0b21fYmcyOnN0cmluZztcclxuICBjdXN0b21fYmczOnN0cmluZztcclxuICBjdXN0b21fYmc0OnN0cmluZztcclxuICBjdXN0b21fYmc1OnN0cmluZztcclxuICBjdXN0b21fZmMxOnN0cmluZztcclxuICBjdXN0b21fZmMyOnN0cmluZztcclxuICBjdXN0b21fZmMzOnN0cmluZztcclxuICBjdXN0b21fZmM0OnN0cmluZztcclxuICBjdXN0b21fZmM1OnN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0VUVElOR1M6IGNNZW51VG9vbGJhclNldHRpbmdzID0ge1xyXG4gIGFlc3RoZXRpY1N0eWxlOiBcImRlZmF1bHRcIixcclxuICBwb3NpdGlvblN0eWxlOiBcInRvcFwiLFxyXG4gIG1lbnVDb21tYW5kczogW1xyXG4gICAge1xyXG4gICAgICBpZDogJ2VkaXRpbmctdG9vbGJhcjplZGl0b3ItdW5kbycsXHJcbiAgICAgIG5hbWU6ICd1bmRvIGVkaXRvcicsXHJcbiAgICAgIGljb246IFwidW5kby1nbHlwaFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ2VkaXRpbmctdG9vbGJhcjplZGl0b3ItcmVkbycsXHJcbiAgICAgIG5hbWU6ICdyZWRvIGVkaXRvcicsXHJcbiAgICAgIGljb246IFwicmVkby1nbHlwaFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlkXCI6IFwiZWRpdGluZy10b29sYmFyOmZvcm1hdC1lcmFzZXJcIixcclxuICAgICAgXCJuYW1lXCI6IFwiQ2xlYXIgdGV4dCBmb3JtYXR0aW5nXCIsXHJcbiAgICAgIFwiaWNvblwiOiBcIjxzdmcgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjE4XFxcIiBmb2N1c2FibGU9XFxcImZhbHNlXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiICB2aWV3Qm94PVxcXCIwIDAgMTAyNCAxMDI0XFxcIj48ZyB0cmFuc2Zvcm09XFxcInNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoMCwgLTg5Nikgc2NhbGUoMC45LCAwLjkpIFxcXCI+PHBhdGggY2xhc3M9XFxcInBhdGhcXFwiIGQ9XFxcIk04ODkgNTEyIGwtMjExIDIxMSBxLTI2IDI3IC02MSAzNiBxLTM1IDkgLTcwIDAgcS0zNSAtOSAtNjEgLTM2IGwtMzUxIC0zNTAgcS0yNiAtMjcgLTM1LjUgLTYyIHEtOS41IC0zNSAwIC03MCBxOS41IC0zNSAzNS41IC02MSBsMTcwIC0xNzAgcTEyIC0xMiAyOSAtMTIgbDIxNSAwIHExNyAwIDI5IDEyIGwzMTEgMzEwIHEyNiAyNiAzNS41IDYxIHE5LjUgMzUgMCA3MCBxLTkuNSAzNSAtMzUuNSA2MSBaTTgzMSA0NTMgcTE1IC0xNSAxNS41IC0zNi41IHEwLjUgLTIxLjUgLTE0LjUgLTM3LjUgbC0zMDAgLTI5OCBsLTE4MSAwIGwtMTU4IDE1OCBxLTE1IDE1IC0xNSAzNyBxMCAyMiAxNSAzOCBsMzUxIDM1MSBxMTYgMTYgMzggMTYgcTIyIDAgMzcgLTE2IGwyMTIgLTIxMiBaTTY4NiAyMTcgbC01OSAtNTkgbC0zMTcgMzE1IGw1OCA1OSBsMzE4IC0zMTUgWk04ODMgODEgcTE4IDAgMzAuNSAtMTIgcTEyLjUgLTEyIDEyLjUgLTI5IHEwIC0xNyAtMTIuNSAtMjkgcS0xMi41IC0xMiAtMjkuNSAtMTMgbC00NTYgMCBxLTE3IDAgLTI5LjUgMTIgcS0xMi41IDEyIC0xMi41IDI5IHEwIDE3IDEyIDI5IHExMiAxMiAyOSAxMyBsNDU2IDAgWlxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiZWRpdGluZy10b29sYmFyOmhlYWRlcjItdGV4dFwiLFxyXG4gICAgICBuYW1lOiBcIkhlYWRlciAyXCIsXHJcbiAgICAgIGljb246IFwiaGVhZGVyLTJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiZWRpdGluZy10b29sYmFyOmhlYWRlcjMtdGV4dFwiLFxyXG4gICAgICBuYW1lOiBcIkhlYWRlciAzXCIsXHJcbiAgICAgIGljb246IFwiaGVhZGVyLTNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiU3VibWVudUNvbW1hbmRzLWhlYWRlclwiLFxyXG4gICAgICBuYW1lOiBcInN1Ym1lbnVcIixcclxuICAgICAgaWNvbjogXCJoZWFkZXItblwiLFxyXG4gICAgICBTdWJtZW51Q29tbWFuZHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCJlZGl0aW5nLXRvb2xiYXI6aGVhZGVyMS10ZXh0XCIsXHJcbiAgICAgICAgICBuYW1lOiBcIkhlYWRlciAxXCIsXHJcbiAgICAgICAgICBpY29uOiBcImhlYWRlci0xXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBcImVkaXRpbmctdG9vbGJhcjpoZWFkZXI0LXRleHRcIixcclxuICAgICAgICAgIG5hbWU6IFwiSGVhZGVyIDRcIixcclxuICAgICAgICAgIGljb246IFwiaGVhZGVyLTRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IFwiZWRpdGluZy10b29sYmFyOmhlYWRlcjUtdGV4dFwiLFxyXG4gICAgICAgICAgbmFtZTogXCJIZWFkZXIgNVwiLFxyXG4gICAgICAgICAgaWNvbjogXCJoZWFkZXItNVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCJlZGl0aW5nLXRvb2xiYXI6aGVhZGVyNi10ZXh0XCIsXHJcbiAgICAgICAgICBuYW1lOiBcIkhlYWRlciA2XCIsXHJcbiAgICAgICAgICBpY29uOiBcImhlYWRlci02XCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcImVkaXRpbmctdG9vbGJhcjplZGl0b3I6dG9nZ2xlLWJvbGRcIixcclxuICAgICAgbmFtZTogXCJUb2dnbGUgYm9sZFwiLFxyXG4gICAgICBpY29uOiBcImJvbGQtZ2x5cGhcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcImVkaXRpbmctdG9vbGJhcjplZGl0b3I6dG9nZ2xlLWl0YWxpY3NcIixcclxuICAgICAgbmFtZTogXCJUb2dnbGUgaXRhbGljc1wiLFxyXG4gICAgICBpY29uOiBcIml0YWxpYy1nbHlwaFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiZWRpdGluZy10b29sYmFyOmVkaXRvcjp0b2dnbGUtc3RyaWtldGhyb3VnaFwiLFxyXG4gICAgICBuYW1lOiBcIlRvZ2dsZSBzdHJpa2V0aHJvdWdoXCIsXHJcbiAgICAgIGljb246IFwic3RyaWtldGhyb3VnaC1nbHlwaFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiZWRpdGluZy10b29sYmFyOnVuZGVybGluZVwiLFxyXG4gICAgICBuYW1lOiBcIlRvZ2dsZSB1bmRlcmxpbmVcIixcclxuICAgICAgaWNvbjogXCJ1bmRlcmxpbmUtZ2x5cGhcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWRcIjogXCJlZGl0b3I6dG9nZ2xlLWhpZ2hsaWdodFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCI9PVRvZ2dsZSBoaWdobGlnaHQgPT1cIixcclxuICAgICAgXCJpY29uXCI6IFwiaGlnaGxpZ2h0LWdseXBoXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcImVkaXRpbmctdG9vbGJhcjplZGl0b3I6dG9nZ2xlLWJsb2NrcXVvdGVcIixcclxuICAgICAgbmFtZTogXCJUb2dnbGUgYmxvY2txdW90ZVwiLFxyXG4gICAgICBpY29uOiBcInF1b3RlLWdseXBoXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlkXCI6IFwiU3VibWVudUNvbW1hbmRzLW1kY21kZXJcIixcclxuICAgICAgXCJuYW1lXCI6IFwic3VibWVudVwiLFxyXG4gICAgICBcImljb25cIjogXCI8c3ZnIHdpZHRoPVxcXCIxOFxcXCIgaGVpZ2h0PVxcXCIxOFxcXCIgZm9jdXNhYmxlPVxcXCJmYWxzZVxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiAgdmlld0JveD1cXFwiMCAwIDEwMjQgMTAyNFxcXCI+PGcgdHJhbnNmb3JtPVxcXCJzY2FsZSgxLCAtMSkgdHJhbnNsYXRlKDAsIC04OTYpIHNjYWxlKDAuOSwgMC45KSBcXFwiPjxwYXRoIGNsYXNzPVxcXCJwYXRoXFxcIiBkPVxcXCJNNDY0IDYwOCBsMCAtNTY4IHEwIC0zIC0yLjUgLTUuNSBxLTIuNSAtMi41IC01LjUgLTIuNSBsLTgwIDAgcS0zIDAgLTUuNSAyLjUgcS0yLjUgMi41IC0yLjUgNS41IGwwIDU2OCBsLTIzMiAwIHEtMyAwIC01LjUgMi41IHEtMi41IDIuNSAtMi41IDUuNSBsMCA4MCBxMCAzIDIuNSA1LjUgcTIuNSAyLjUgNS41IDIuNSBsNTYwIDAgcTMgMCA1LjUgLTIuNSBxMi41IC0yLjUgMi41IC01LjUgbDAgLTgwIHEwIC0zIC0yLjUgLTUuNSBxLTIuNSAtMi41IC01LjUgLTIuNSBsLTIzMiAwIFpNODY0IDY5NiBxMTcgMCAyOC41IDExLjUgcTExLjUgMTEuNSAxMS41IDI4LjUgcTAgMTcgLTExLjUgMjguNSBxLTExLjUgMTEuNSAtMjguNSAxMS41IHEtMTcgMCAtMjguNSAtMTEuNSBxLTExLjUgLTExLjUgLTExLjUgLTI4LjUgcTAgLTE3IDExLjUgLTI4LjUgcTExLjUgLTExLjUgMjguNSAtMTEuNSBaTTg2NCA2NDAgcS00MCAwIC02OCAyOCBxLTI4IDI4IC0yOCA2OCBxMCA0MCAyOCA2OCBxMjggMjggNjggMjggcTQwIDAgNjggLTI4IHEyOCAtMjggMjggLTY4IHEwIC00MCAtMjggLTY4IHEtMjggLTI4IC02OCAtMjggWk01NzYgMzIyIGwwIC02MyBxMCAtMyAyIC01IGw4OSAtNzAgbC04OSAtNzAgcS0yIC0yIC0yIC01IGwwIC02MyBxMCAtNCAzLjUgLTUuNSBxMy41IC0xLjUgNi41IDAuNSBsMTcwIDEzMyBxNCAzIDQuNSA4LjUgcTAuNSA1LjUgLTIuNSA5LjUgbC0yIDIgbC0xNzAgMTMzIHEtMyAyIC02LjUgMC41IHEtMy41IC0xLjUgLTMuNSAtNS41IFpNMjU2IDMyMiBsMCAtNjMgcTAgLTMgLTIgLTUgbC04OSAtNzAgbDg5IC03MCBxMiAtMiAyIC01IGwwIC02MyBxMCAtNCAtMy41IC01LjUgcS0zLjUgLTEuNSAtNi41IDAuNSBsLTE3MCAxMzMgcS00IDMgLTQuNSA4LjUgcS0wLjUgNS41IDIuNSA5LjUgbDIgMiBsMTcwIDEzMyBxMyAyIDYuNSAwLjUgcTMuNSAtMS41IDMuNSAtNS41IFpcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIsXHJcbiAgICAgIFwiU3VibWVudUNvbW1hbmRzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCJlZGl0aW5nLXRvb2xiYXI6c3VwZXJzY3JpcHRcIixcclxuICAgICAgICAgIG5hbWU6IFwiVG9nZ2xlIHN1cGVyc2NyaXB0XCIsXHJcbiAgICAgICAgICBpY29uOiBcInN1cGVyc2NyaXB0LWdseXBoXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCJlZGl0aW5nLXRvb2xiYXI6c3Vic2NyaXB0XCIsXHJcbiAgICAgICAgICBuYW1lOiBcIlRvZ2dsZSBzdWJzY3JpcHRcIixcclxuICAgICAgICAgIGljb246IFwic3Vic2NyaXB0LWdseXBoXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiZWRpdGluZy10b29sYmFyOmVkaXRvcjp0b2dnbGUtY29kZVwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiaW5saW5lIGNvZGVcIixcclxuICAgICAgICAgIFwiaWNvblwiOiBcImNvZGUtZ2x5cGhcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IFwiZWRpdGluZy10b29sYmFyOmNvZGVibG9ja1wiLFxyXG4gICAgICAgICAgbmFtZTogXCJUb2dnbGUgY29kZWJsb2NrXCIsXHJcbiAgICAgICAgICBpY29uOiBcImNvZGVibG9jay1nbHlwaFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOiBcImVkaXRpbmctdG9vbGJhcjplZGl0b3I6aW5zZXJ0LXdpa2lsaW5rXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJpbnNlcnQgd2lraWxpbmsgW1tdXVwiLFxyXG4gICAgICAgICAgXCJpY29uXCI6IFwiPHN2ZyB3aWR0aD1cXFwiMTVcXFwiIGhlaWdodD1cXFwiMTVcXFwiIGZvY3VzYWJsZT1cXFwiZmFsc2VcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgIHZpZXdCb3g9XFxcIjAgMCAxMDI0IDEwMjRcXFwiPjxnIHRyYW5zZm9ybT1cXFwic2NhbGUoMSwgLTEpIHRyYW5zbGF0ZSgwLCAtODk2KSBzY2FsZSgwLjksIDAuOSkgXFxcIj48cGF0aCBjbGFzcz1cXFwicGF0aFxcXCIgZD1cXFwiTTMwNiAxMzQgbDkxIDAgcTEgMCAxIC04IGwwIC04MCBxMCAtOCAtMSAtOCBsLTkxIDAgcS0xIDAgLTEgNyBxMCAtOCAtNSAtOCBsLTQ1IDAgcS01IDAgLTUgOCBsMCA3ODQgcTAgOCA1IDggbDQ1IDAgcTUgMCA1IC04IHEwIDggMSA4IGw5MSAwIHExIDAgMSAtOCBsMCAtODAgcTAgLTggLTEgLTggbC05MSAwIHEtMSAwIC0xIDggbDAgLTYyMyBxMCA4IDEgOCBaTTEzOSAxMzQgbDkxIDAgcTEgMCAxIC04IGwwIC04MCBxMCAtOCAtMSAtOCBsLTkxIDAgcS0xIDAgLTEgNyBxMCAtOCAtNSAtOCBsLTQ1IDAgcS01IDAgLTUgOCBsMCA3ODQgcTAgOCA1IDggbDQ1IDAgcTUgMCA1IC04IHEwIDggMSA4IGw5MSAwIHExIDAgMSAtOCBsMCAtODAgcTAgLTggLTEgLTggbC05MSAwIHEtMSAwIC0xIDggbDAgLTYyMyBxMCA4IDEgOCBaTTcxMSAxMzQgcTEgMCAxIC04IGwwIDYyMyBxMCAtOCAtMSAtOCBsLTkxIDAgcS0xIDAgLTEgOCBsMCA4MCBxMCA4IDEgOCBsOTEgMCBxMSAwIDEgLTggcTAgOCA0IDggbDQ2IDAgcTQgMCA0IC04IGwwIC03ODQgcTAgLTggLTQgLTggbC00NiAwIHEtNCAwIC00IDggcTAgLTcgLTEgLTcgbC05MSAwIHEtMSAwIC0xIDggbDAgODAgcTAgOCAxIDggbDkxIDAgWk04NzggMTM0IHExIDAgMSAtOCBsMCA2MjMgcTAgLTggLTEgLTggbC05MSAwIHEtMSAwIC0xIDggbDAgODAgcTAgOCAxIDggbDkxIDAgcTEgMCAxIC04IHEwIDggNSA4IGw0NSAwIHE0IDAgNCAtOCBsMCAtNzg0IHEwIC04IC00IC04IGwtNDUgMCBxLTUgMCAtNSA4IHEwIC03IC0xIC03IGwtOTEgMCBxLTEgMCAtMSA4IGwwIDgwIHEwIDggMSA4IGw5MSAwIFpcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCJlZGl0aW5nLXRvb2xiYXI6ZWRpdG9yOmluc2VydC1saW5rXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJpbnNlcnQgbGluayBbXSgpXCIsXHJcbiAgICAgICAgICBcImljb25cIjogXCJsaW5rLWdseXBoXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCJlZGl0aW5nLXRvb2xiYXI6ZWRpdG9yOmluc2VydC1lbWJlZFwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiaW5zZXJ0IGVtYmVkICFbW11dXCIsXHJcbiAgICAgICAgICBcImljb25cIjogXCJub3RlLWdseXBoXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCJlZGl0aW5nLXRvb2xiYXI6aHJsaW5lXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJIb3Jpem9udGFsIGRpdmlkZXJcIixcclxuICAgICAgICAgIFwiaWNvblwiOiBcIjxzdmcgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjE4XFxcIiBmb2N1c2FibGU9XFxcImZhbHNlXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiICB2aWV3Qm94PVxcXCIwIDAgMTAyNCAxMDI0XFxcIj48ZyB0cmFuc2Zvcm09XFxcInNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoMCwgLTg5Nikgc2NhbGUoMC45LCAwLjkpIFxcXCI+PHBhdGggY2xhc3M9XFxcInBhdGhcXFwiIGQ9XFxcIk05MTIgNDI0IGwwIC04MCBxMCAtMyAtMi41IC01LjUgcS0yLjUgLTIuNSAtNS41IC0yLjUgbC03ODQgMCBxLTMgMCAtNS41IDIuNSBxLTIuNSAyLjUgLTIuNSA1LjUgbDAgODAgcTAgMyAyLjUgNS41IHEyLjUgMi41IDUuNSAyLjUgbDc4NCAwIHEzIDAgNS41IC0yLjUgcTIuNSAtMi41IDIuNSAtNS41IFpcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWRcIjogXCJTdWJtZW51Q29tbWFuZHMtbGlzdFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJzdWJtZW51LWxpc3RcIixcclxuICAgICAgXCJpY29uXCI6IFwiYnVsbGV0LWxpc3QtZ2x5cGhcIixcclxuICAgICAgXCJTdWJtZW51Q29tbWFuZHNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCJlZGl0b3I6dG9nZ2xlLW51bWJlcmVkLWxpc3RcIixcclxuICAgICAgICAgIFwibmFtZVwiOiBcIm51bWJlcmVkIGxpc3RcIixcclxuICAgICAgICAgIFwiaWNvblwiOiBcIjxzdmcgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjE4XFxcIiBmb2N1c2FibGU9XFxcImZhbHNlXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiICB2aWV3Qm94PVxcXCIwIDAgMTAyNCAxMDI0XFxcIj48ZyB0cmFuc2Zvcm09XFxcInNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoMCwgLTg5Nikgc2NhbGUoMC45LCAwLjkpIFxcXCI+PHBhdGggY2xhc3M9XFxcInBhdGhcXFwiIGQ9XFxcIk04NjAgNDI0IHExNyAwIDI4LjUgLTExLjUgcTExLjUgLTExLjUgMTEuNSAtMjggcTAgLTE2LjUgLTExLjUgLTI4LjUgcS0xMS41IC0xMiAtMjcuNSAtMTIgbC00NTcgMCBxLTE3IDAgLTI4LjUgMTEuNSBxLTExLjUgMTEuNSAtMTEuNSAyOCBxMCAxNi41IDExLjUgMjguNSBxMTEuNSAxMiAyNy41IDEyIGw0NTcgMCBaTTg2MCA3NTYgcTE3IDAgMjguNSAtMTEuNSBxMTEuNSAtMTEuNSAxMS41IC0yOCBxMCAtMTYuNSAtMTEuNSAtMjguNSBxLTExLjUgLTEyIC0yNy41IC0xMiBsLTQ1NyAwIHEtMTcgMCAtMjguNSAxMS41IHEtMTEuNSAxMS41IC0xMS41IDI4IHEwIDE2LjUgMTEuNSAyOC41IHExMS41IDEyIDI3LjUgMTIgbDQ1NyAwIFpNODYwIDkyIHExNyAwIDI4LjUgLTExLjUgcTExLjUgLTExLjUgMTEuNSAtMjggcTAgLTE2LjUgLTExLjUgLTI4LjUgcS0xMS41IC0xMiAtMjcuNSAtMTIgbC00NTcgMCBxLTE3IDAgLTI4LjUgMTEuNSBxLTExLjUgMTEuNSAtMTEuNSAyOCBxMCAxNi41IDExLjUgMjguNSBxMTEuNSAxMiAyNy41IDEyIGw0NTcgMCBaTTI2NCAxMzYgbC0zIC0zIGwtNTEgLTU3IGw1NiAwIHExNCAwIDI0LjUgLTEwIHExMC41IC0xMCAxMS41IC0yNSBsMCAtMSBxMCAtMTUgLTEwLjUgLTI1LjUgcS0xMC41IC0xMC41IC0yNC41IC0xMC41IGwtMTM3IDAgcS0xNSAwIC0yNSAxMCBxLTEwIDEwIC0xMSAyNC41IHEtMSAxNC41IDkgMjUuNSBsNjMgNzAgbDQ5IDU0IHE3IDcgNyAxNi41IHEwIDkuNSAtNy41IDE2LjUgcS03LjUgNyAtMTguNSA3IHEtMTEgMCAtMTguNSAtNi41IHEtNy41IC02LjUgLTguNSAtMTYuNSBsMCAwIHEwIC0xNSAtMTAuNSAtMjUuNSBxLTEwLjUgLTEwLjUgLTI1LjUgLTEwLjUgcS0xNSAwIC0yNS41IDEwLjUgcS0xMC41IDEwLjUgLTEwLjUgMjUuNSBxMCAyNiAxMy41IDQ3LjUgcTEzLjUgMjEuNSAzNiAzNC41IHEyMi41IDEzIDQ5IDEzIHEyNi41IDAgNDkuNSAtMTMgcTIzIC0xMyAzNiAtMzQuNSBxMTMgLTIxLjUgMTMgLTQ3LjUgcTAgLTIwIC03LjUgLTM3LjUgcS03LjUgLTE3LjUgLTIxLjUgLTMwLjUgbC0xIC0xIFpNMTczIDc5NCBxMTEgMTEgMjUgMTAuNSBxMTQgLTAuNSAyNC41IC0xMC41IHExMC41IC0xMCAxMC41IC0yNSBsMCAtMjkzIHEwIC0xNSAtMTAgLTI1LjUgcS0xMCAtMTAuNSAtMjUgLTEwLjUgcS0xNSAwIC0yNS41IDEwIHEtMTAuNSAxMCAtMTEuNSAyNSBsMCAyMTEgcS0xMCAtOCAtMjMuNSAtNyBxLTEzLjUgMSAtMjIuNSAxMSBsLTEgMCBxLTEwIDExIC05LjUgMjUuNSBxMC41IDE0LjUgMTAuNSAyNC41IGw1OCA1NCBaXFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiZWRpdG9yOnRvZ2dsZS1idWxsZXQtbGlzdFwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiYnVsbGV0IGxpc3RcIixcclxuICAgICAgICAgIFwiaWNvblwiOiBcIjxzdmcgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjE4XFxcIiBmb2N1c2FibGU9XFxcImZhbHNlXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiICB2aWV3Qm94PVxcXCIwIDAgMTAyNCAxMDI0XFxcIj48ZyB0cmFuc2Zvcm09XFxcInNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoMCwgLTg5Nikgc2NhbGUoMC45LCAwLjkpIFxcXCI+PHBhdGggY2xhc3M9XFxcInBhdGhcXFwiIGQ9XFxcIk04NjAgNDI0IHExNyAwIDI4LjUgLTExLjUgcTExLjUgLTExLjUgMTEuNSAtMjggcTAgLTE2LjUgLTExLjUgLTI4LjUgcS0xMS41IC0xMiAtMjcuNSAtMTIgbC00NzcgMCBxLTE3IDAgLTI4LjUgMTEuNSBxLTExLjUgMTEuNSAtMTEuNSAyOCBxMCAxNi41IDExLjUgMjguNSBxMTEuNSAxMiAyNy41IDEyIGw0NzcgMCBaTTg2MCA3NTYgcTE3IDAgMjguNSAtMTEuNSBxMTEuNSAtMTEuNSAxMS41IC0yOCBxMCAtMTYuNSAtMTEuNSAtMjguNSBxLTExLjUgLTEyIC0yNy41IC0xMiBsLTQ3NyAwIHEtMTcgMCAtMjguNSAxMS41IHEtMTEuNSAxMS41IC0xMS41IDI4IHEwIDE2LjUgMTEuNSAyOC41IHExMS41IDEyIDI3LjUgMTIgbDQ3NyAwIFpNODYwIDkyIHExNyAwIDI4LjUgLTExLjUgcTExLjUgLTExLjUgMTEuNSAtMjggcTAgLTE2LjUgLTExLjUgLTI4LjUgcS0xMS41IC0xMiAtMjcuNSAtMTIgbC00NzcgMCBxLTE3IDAgLTI4LjUgMTEuNSBxLTExLjUgMTEuNSAtMTEuNSAyOCBxMCAxNi41IDExLjUgMjguNSBxMTEuNSAxMiAyNy41IDEyIGw0NzcgMCBaTTE3NiA3MTYgbDAgMCBaTTExMiA3MTYgcTAgLTI3IDE4LjUgLTQ1LjUgcTE4LjUgLTE4LjUgNDUuNSAtMTguNSBxMjcgMCA0NS41IDE4LjUgcTE4LjUgMTguNSAxOC41IDQ1LjUgcTAgMjcgLTE4LjUgNDUuNSBxLTE4LjUgMTguNSAtNDUuNSAxOC41IHEtMjcgMCAtNDUuNSAtMTguNSBxLTE4LjUgLTE4LjUgLTE4LjUgLTQ1LjUgWk0xNzYgMzg0IGwwIDAgWk0xMTIgMzg0IHEwIC0yNyAxOC41IC00NS41IHExOC41IC0xOC41IDQ1LjUgLTE4LjUgcTI3IDAgNDUuNSAxOC41IHExOC41IDE4LjUgMTguNSA0NS41IHEwIDI3IC0xOC41IDQ1LjUgcS0xOC41IDE4LjUgLTQ1LjUgMTguNSBxLTI3IDAgLTQ1LjUgLTE4LjUgcS0xOC41IC0xOC41IC0xOC41IC00NS41IFpNMTc2IDUyIGwwIDAgWk0xMTIgNTIgcTAgLTI3IDE4LjUgLTQ1LjUgcTE4LjUgLTE4LjUgNDUuNSAtMTguNSBxMjcgMCA0NS41IDE4LjUgcTE4LjUgMTguNSAxOC41IDQ1LjUgcTAgMjcgLTE4LjUgNDUuNSBxLTE4LjUgMTguNSAtNDUuNSAxOC41IHEtMjcgMCAtNDUuNSAtMTguNSBxLTE4LjUgLTE4LjUgLTE4LjUgLTQ1LjUgWlxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOiBcImVkaXRpbmctdG9vbGJhcjp1bmRlbnQtbGlzdFwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwidW5pbmRlbnQtbGlzdFwiLFxyXG4gICAgICAgICAgXCJpY29uXCI6IFwiPHN2ZyB3aWR0aD1cXFwiMThcXFwiIGhlaWdodD1cXFwiMThcXFwiIGZvY3VzYWJsZT1cXFwiZmFsc2VcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgIHZpZXdCb3g9XFxcIjAgMCAxMDI0IDEwMjRcXFwiPjxnIHRyYW5zZm9ybT1cXFwic2NhbGUoMSwgLTEpIHRyYW5zbGF0ZSgwLCAtODk2KSBzY2FsZSgwLjksIDAuOSkgXFxcIj48cGF0aCBjbGFzcz1cXFwicGF0aFxcXCIgZD1cXFwiTTg3MiAzMDIgcTE3IDAgMjguNSAtMTEuNSBxMTEuNSAtMTEuNSAxMS41IC0yOCBxMCAtMTYuNSAtMTEuNSAtMjguNSBxLTExLjUgLTEyIC0yNy41IC0xMiBsLTQyOSAwIHEtMTcgMCAtMjguNSAxMS41IHEtMTEuNSAxMS41IC0xMS41IDI4IHEwIDE2LjUgMTEuNSAyOC41IHExMS41IDEyIDI3LjUgMTIgbDQyOSAwIFpNODcyIDU0MiBxMTcgMCAyOC41IC0xMS41IHExMS41IC0xMS41IDExLjUgLTI4IHEwIC0xNi41IC0xMS41IC0yOC41IHEtMTEuNSAtMTIgLTI3LjUgLTEyIGwtNDI5IDAgcS0xNyAwIC0yOC41IDExLjUgcS0xMS41IDExLjUgLTExLjUgMjggcTAgMTYuNSAxMS41IDI4LjUgcTExLjUgMTIgMjcuNSAxMiBsNDI5IDAgWk04NzIgNzg0IHExNyAwIDI4LjUgLTExLjUgcTExLjUgLTExLjUgMTEuNSAtMjggcTAgLTE2LjUgLTExLjUgLTI4LjUgcS0xMS41IC0xMiAtMjcuNSAtMTIgbC03MjEgMCBxLTE3IDAgLTI4LjUgMTEuNSBxLTExLjUgMTEuNSAtMTEuNSAyOCBxMCAxNi41IDExLjUgMjguNSBxMTEuNSAxMiAyNy41IDEyIGw3MjEgMCBaTTg3MiA2MiBxMTcgMCAyOC41IC0xMS41IHExMS41IC0xMS41IDExLjUgLTI4IHEwIC0xNi41IC0xMS41IC0yOC41IHEtMTEuNSAtMTIgLTI3LjUgLTEyIGwtNzIxIDAgcS0xNyAwIC0yOC41IDExLjUgcS0xMS41IDExLjUgLTExLjUgMjggcTAgMTYuNSAxMS41IDI4LjUgcTExLjUgMTIgMjcuNSAxMiBsNzIxIDAgWk0yNDQgNTM0IGwtMTIzIC0xMjIgcS04IC03IC04IC0xOCBxMCAtMTEgOCAtMTggbDEyMyAtMTIyIHE4IC03IDE5IC03IHExMSAwIDE4LjUgNy41IHE3LjUgNy41IDcuNSAxOC41IGwwIDI0MiBxMCAxMSAtNy41IDE4LjUgcS03LjUgNy41IC0xOC41IDcuNSBxLTExIDAgLTE5IC03IFpcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCJlZGl0aW5nLXRvb2xiYXI6aW5kZW50LWxpc3RcIixcclxuICAgICAgICAgIFwibmFtZVwiOiBcImluZGVudCBsaXN0XCIsXHJcbiAgICAgICAgICBcImljb25cIjogXCI8c3ZnIHdpZHRoPVxcXCIxOFxcXCIgaGVpZ2h0PVxcXCIxOFxcXCIgZm9jdXNhYmxlPVxcXCJmYWxzZVxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiAgdmlld0JveD1cXFwiMCAwIDEwMjQgMTAyNFxcXCI+PGcgdHJhbnNmb3JtPVxcXCJzY2FsZSgxLCAtMSkgdHJhbnNsYXRlKDAsIC04OTYpIHNjYWxlKDAuOSwgMC45KSBcXFwiPjxwYXRoIGNsYXNzPVxcXCJwYXRoXFxcIiBkPVxcXCJNODcyIDMwMiBxMTcgMCAyOC41IC0xMS41IHExMS41IC0xMS41IDExLjUgLTI4IHEwIC0xNi41IC0xMS41IC0yOC41IHEtMTEuNSAtMTIgLTI3LjUgLTEyIGwtNDI5IDAgcS0xNyAwIC0yOC41IDExLjUgcS0xMS41IDExLjUgLTExLjUgMjggcTAgMTYuNSAxMS41IDI4LjUgcTExLjUgMTIgMjcuNSAxMiBsNDI5IDAgWk04NzIgNTQyIHExNyAwIDI4LjUgLTExLjUgcTExLjUgLTExLjUgMTEuNSAtMjggcTAgLTE2LjUgLTExLjUgLTI4LjUgcS0xMS41IC0xMiAtMjcuNSAtMTIgbC00MjkgMCBxLTE3IDAgLTI4LjUgMTEuNSBxLTExLjUgMTEuNSAtMTEuNSAyOCBxMCAxNi41IDExLjUgMjguNSBxMTEuNSAxMiAyNy41IDEyIGw0MjkgMCBaTTg3MiA3ODQgcTE3IDAgMjguNSAtMTEuNSBxMTEuNSAtMTEuNSAxMS41IC0yOCBxMCAtMTYuNSAtMTEuNSAtMjguNSBxLTExLjUgLTEyIC0yNy41IC0xMiBsLTcyMSAwIHEtMTcgMCAtMjguNSAxMS41IHEtMTEuNSAxMS41IC0xMS41IDI4IHEwIDE2LjUgMTEuNSAyOC41IHExMS41IDEyIDI3LjUgMTIgbDcyMSAwIFpNODcyIDYyIHExNyAwIDI4LjUgLTExLjUgcTExLjUgLTExLjUgMTEuNSAtMjggcTAgLTE2LjUgLTExLjUgLTI4LjUgcS0xMS41IC0xMiAtMjcuNSAtMTIgbC03MjEgMCBxLTE3IDAgLTI4LjUgMTEuNSBxLTExLjUgMTEuNSAtMTEuNSAyOCBxMCAxNi41IDExLjUgMjguNSBxMTEuNSAxMiAyNy41IDEyIGw3MjEgMCBaTTE1OCA1MzQgbDEyNCAtMTIyIHE3IC03IDcgLTE4IHEwIC0xMSAtNyAtMTggbC0xMjQgLTEyMiBxLTcgLTcgLTE4IC03IHEtMTEgMCAtMTkgNy41IHEtOCA3LjUgLTggMTguNSBsMCAyNDIgcTAgMTEgOCAxOC41IHE4IDcuNSAxOSA3LjUgcTExIDAgMTggLTcgWlxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpZFwiOiBcIlN1Ym1lbnVDb21tYW5kcy1hbGlnaW5cIixcclxuICAgICAgXCJuYW1lXCI6IFwic3VibWVudS1hbGlnaW5cIixcclxuICAgICAgXCJpY29uXCI6IFwiPHN2ZyB3aWR0aD1cXFwiMThcXFwiIGhlaWdodD1cXFwiMThcXFwiIGZvY3VzYWJsZT1cXFwiZmFsc2VcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgIHZpZXdCb3g9XFxcIjAgMCAxMDI0IDEwMjRcXFwiPjxnIHRyYW5zZm9ybT1cXFwic2NhbGUoMSwgLTEpIHRyYW5zbGF0ZSgwLCAtODk2KSBzY2FsZSgwLjksIDAuOSkgXFxcIj48cGF0aCBjbGFzcz1cXFwicGF0aFxcXCIgZD1cXFwiTTcyNCAzMDQgcTE3IDAgMjguNSAtMTEuNSBxMTEuNSAtMTEuNSAxMS41IC0yOCBxMCAtMTYuNSAtMTEuNSAtMjguNSBxLTExLjUgLTEyIC0yNy41IC0xMiBsLTQyMSAwIHEtMTcgMCAtMjguNSAxMS41IHEtMTEuNSAxMS41IC0xMS41IDI4IHEwIDE2LjUgMTEuNSAyOC41IHExMS41IDEyIDI3LjUgMTIgbDQyMSAwIFpNODcyIDU0MCBxMTcgMCAyOC41IC0xMS41IHExMS41IC0xMS41IDExLjUgLTI4IHEwIC0xNi41IC0xMS41IC0yOC41IHEtMTEuNSAtMTIgLTI3LjUgLTEyIGwtNzIxIDAgcS0xNyAwIC0yOC41IDExLjUgcS0xMS41IDExLjUgLTExLjUgMjggcTAgMTYuNSAxMS41IDI4LjUgcTExLjUgMTIgMjcuNSAxMiBsNzIxIDAgWk03MjQgNzc2IHExNyAwIDI4LjUgLTExLjUgcTExLjUgLTExLjUgMTEuNSAtMjggcTAgLTE2LjUgLTExLjUgLTI4LjUgcS0xMS41IC0xMiAtMjcuNSAtMTIgbC00MjEgMCBxLTE3IDAgLTI4LjUgMTEuNSBxLTExLjUgMTEuNSAtMTEuNSAyOCBxMCAxNi41IDExLjUgMjguNSBxMTEuNSAxMiAyNy41IDEyIGw0MjEgMCBaTTg3MiA2OCBxMTcgMCAyOC41IC0xMS41IHExMS41IC0xMS41IDExLjUgLTI4IHEwIC0xNi41IC0xMS41IC0yOC41IHEtMTEuNSAtMTIgLTI3LjUgLTEyIGwtNzIxIDAgcS0xNyAwIC0yOC41IDExLjUgcS0xMS41IDExLjUgLTExLjUgMjggcTAgMTYuNSAxMS41IDI4LjUgcTExLjUgMTIgMjcuNSAxMiBsNzIxIDAgWlxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIixcclxuICAgICAgXCJTdWJtZW51Q29tbWFuZHNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCJlZGl0aW5nLXRvb2xiYXI6anVzdGlmeVwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiPHAgYWxpZ2luPVxcXCJqdXN0aWZ5XFxcIj48L3A+XCIsXHJcbiAgICAgICAgICBcImljb25cIjogXCI8c3ZnIHdpZHRoPVxcXCIxOFxcXCIgaGVpZ2h0PVxcXCIxOFxcXCIgZm9jdXNhYmxlPVxcXCJmYWxzZVxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiAgdmlld0JveD1cXFwiMCAwIDEwMjQgMTAyNFxcXCI+PGcgdHJhbnNmb3JtPVxcXCJzY2FsZSgxLCAtMSkgdHJhbnNsYXRlKDAsIC04OTYpIHNjYWxlKDAuOSwgMC45KSBcXFwiPjxwYXRoIGNsYXNzPVxcXCJwYXRoXFxcIiBkPVxcXCJNMTEyIDczNiBsMCAwIFpNMTIwIDczNiBsNzg0IDAgcTggMCA4IC04IGwwIC04MCBxMCAtOCAtOCAtOCBsLTc4NCAwIHEtOCAwIC04IDggbDAgODAgcTAgOCA4IDggWk0xMTIgMzMxIGwwIDAgWk0xMjAgMzMxIGw3ODQgMCBxOCAwIDggLTggbDAgLTgwIHEwIC04IC04IC04IGwtNzg0IDAgcS04IDAgLTggOCBsMCA4MCBxMCA4IDggOCBaTTExMiAxMjggbDAgMCBaTTEyMCAxMjggbDc4NCAwIHE4IDAgOCAtOCBsMCAtODAgcTAgLTggLTggLTggbC03ODQgMCBxLTggMCAtOCA4IGwwIDgwIHEwIDggOCA4IFpNMTEyIDUzMyBsMCAwIFpNMTIwIDUzMyBsNzg0IDAgcTggMCA4IC04IGwwIC04MCBxMCAtOCAtOCAtOCBsLTc4NCAwIHEtOCAwIC04IDggbDAgODAgcTAgOCA4IDggWlxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOiBcImVkaXRpbmctdG9vbGJhcjpsZWZ0XCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCI8cCBhbGlnaW49XFxcImxlZnRcXFwiPjwvcD5cIixcclxuICAgICAgICAgIFwiaWNvblwiOiBcIjxzdmcgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjE4XFxcIiBmb2N1c2FibGU9XFxcImZhbHNlXFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiICB2aWV3Qm94PVxcXCIwIDAgMTAyNCAxMDI0XFxcIj48ZyB0cmFuc2Zvcm09XFxcInNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoMCwgLTg5Nikgc2NhbGUoMC45LCAwLjkpIFxcXCI+PHBhdGggY2xhc3M9XFxcInBhdGhcXFwiIGQ9XFxcIk01NzIgMzA0IHExNyAwIDI4LjUgLTExLjUgcTExLjUgLTExLjUgMTEuNSAtMjggcTAgLTE2LjUgLTExLjUgLTI4LjUgcS0xMS41IC0xMiAtMjcuNSAtMTIgbC00MjEgMCBxLTE3IDAgLTI4LjUgMTEuNSBxLTExLjUgMTEuNSAtMTEuNSAyOCBxMCAxNi41IDExLjUgMjguNSBxMTEuNSAxMiAyNy41IDEyIGw0MjEgMCBaTTg3MiA1NDAgcTE3IDAgMjguNSAtMTEuNSBxMTEuNSAtMTEuNSAxMS41IC0yOCBxMCAtMTYuNSAtMTEuNSAtMjguNSBxLTExLjUgLTEyIC0yNy41IC0xMiBsLTcyMSAwIHEtMTcgMCAtMjguNSAxMS41IHEtMTEuNSAxMS41IC0xMS41IDI4IHEwIDE2LjUgMTEuNSAyOC41IHExMS41IDEyIDI3LjUgMTIgbDcyMSAwIFpNNTcyIDc3NiBxMTcgMCAyOC41IC0xMS41IHExMS41IC0xMS41IDExLjUgLTI4IHEwIC0xNi41IC0xMS41IC0yOC41IHEtMTEuNSAtMTIgLTI3LjUgLTEyIGwtNDIxIDAgcS0xNyAwIC0yOC41IDExLjUgcS0xMS41IDExLjUgLTExLjUgMjggcTAgMTYuNSAxMS41IDI4LjUgcTExLjUgMTIgMjcuNSAxMiBsNDIxIDAgWk04NzIgNjggcTE3IDAgMjguNSAtMTEuNSBxMTEuNSAtMTEuNSAxMS41IC0yOCBxMCAtMTYuNSAtMTEuNSAtMjguNSBxLTExLjUgLTEyIC0yNy41IC0xMiBsLTcyMSAwIHEtMTcgMCAtMjguNSAxMS41IHEtMTEuNSAxMS41IC0xMS41IDI4IHEwIDE2LjUgMTEuNSAyOC41IHExMS41IDEyIDI3LjUgMTIgbDcyMSAwIFpcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCJlZGl0aW5nLXRvb2xiYXI6Y2VudGVyXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCI8Y2VudGVyPlwiLFxyXG4gICAgICAgICAgXCJpY29uXCI6IFwiPHN2ZyB3aWR0aD1cXFwiMThcXFwiIGhlaWdodD1cXFwiMThcXFwiIGZvY3VzYWJsZT1cXFwiZmFsc2VcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgIHZpZXdCb3g9XFxcIjAgMCAxMDI0IDEwMjRcXFwiPjxnIHRyYW5zZm9ybT1cXFwic2NhbGUoMSwgLTEpIHRyYW5zbGF0ZSgwLCAtODk2KSBzY2FsZSgwLjksIDAuOSkgXFxcIj48cGF0aCBjbGFzcz1cXFwicGF0aFxcXCIgZD1cXFwiTTcyNCAzMDQgcTE3IDAgMjguNSAtMTEuNSBxMTEuNSAtMTEuNSAxMS41IC0yOCBxMCAtMTYuNSAtMTEuNSAtMjguNSBxLTExLjUgLTEyIC0yNy41IC0xMiBsLTQyMSAwIHEtMTcgMCAtMjguNSAxMS41IHEtMTEuNSAxMS41IC0xMS41IDI4IHEwIDE2LjUgMTEuNSAyOC41IHExMS41IDEyIDI3LjUgMTIgbDQyMSAwIFpNODcyIDU0MCBxMTcgMCAyOC41IC0xMS41IHExMS41IC0xMS41IDExLjUgLTI4IHEwIC0xNi41IC0xMS41IC0yOC41IHEtMTEuNSAtMTIgLTI3LjUgLTEyIGwtNzIxIDAgcS0xNyAwIC0yOC41IDExLjUgcS0xMS41IDExLjUgLTExLjUgMjggcTAgMTYuNSAxMS41IDI4LjUgcTExLjUgMTIgMjcuNSAxMiBsNzIxIDAgWk03MjQgNzc2IHExNyAwIDI4LjUgLTExLjUgcTExLjUgLTExLjUgMTEuNSAtMjggcTAgLTE2LjUgLTExLjUgLTI4LjUgcS0xMS41IC0xMiAtMjcuNSAtMTIgbC00MjEgMCBxLTE3IDAgLTI4LjUgMTEuNSBxLTExLjUgMTEuNSAtMTEuNSAyOCBxMCAxNi41IDExLjUgMjguNSBxMTEuNSAxMiAyNy41IDEyIGw0MjEgMCBaTTg3MiA2OCBxMTcgMCAyOC41IC0xMS41IHExMS41IC0xMS41IDExLjUgLTI4IHEwIC0xNi41IC0xMS41IC0yOC41IHEtMTEuNSAtMTIgLTI3LjUgLTEyIGwtNzIxIDAgcS0xNyAwIC0yOC41IDExLjUgcS0xMS41IDExLjUgLTExLjUgMjggcTAgMTYuNSAxMS41IDI4LjUgcTExLjUgMTIgMjcuNSAxMiBsNzIxIDAgWlxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOiBcImVkaXRpbmctdG9vbGJhcjpyaWdodFwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiPHAgYWxpZ2luPVxcXCJyaWdodFxcXCI+PC9wPlwiLFxyXG4gICAgICAgICAgXCJpY29uXCI6IFwiPHN2ZyB3aWR0aD1cXFwiMThcXFwiIGhlaWdodD1cXFwiMThcXFwiIGZvY3VzYWJsZT1cXFwiZmFsc2VcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgIHZpZXdCb3g9XFxcIjAgMCAxMDI0IDEwMjRcXFwiPjxnIHRyYW5zZm9ybT1cXFwic2NhbGUoMSwgLTEpIHRyYW5zbGF0ZSgwLCAtODk2KSBzY2FsZSgwLjksIDAuOSkgXFxcIj48cGF0aCBjbGFzcz1cXFwicGF0aFxcXCIgZD1cXFwiTTg3MiAzMDQgcTE3IDAgMjguNSAtMTEuNSBxMTEuNSAtMTEuNSAxMS41IC0yOCBxMCAtMTYuNSAtMTEuNSAtMjguNSBxLTExLjUgLTEyIC0yNy41IC0xMiBsLTQyMSAwIHEtMTcgMCAtMjguNSAxMS41IHEtMTEuNSAxMS41IC0xMS41IDI4IHEwIDE2LjUgMTEuNSAyOC41IHExMS41IDEyIDI3LjUgMTIgbDQyMSAwIFpNODcyIDU0MCBxMTcgMCAyOC41IC0xMS41IHExMS41IC0xMS41IDExLjUgLTI4IHEwIC0xNi41IC0xMS41IC0yOC41IHEtMTEuNSAtMTIgLTI3LjUgLTEyIGwtNzIxIDAgcS0xNyAwIC0yOC41IDExLjUgcS0xMS41IDExLjUgLTExLjUgMjggcTAgMTYuNSAxMS41IDI4LjUgcTExLjUgMTIgMjcuNSAxMiBsNzIxIDAgWk04NzIgNzc2IHExNyAwIDI4LjUgLTExLjUgcTExLjUgLTExLjUgMTEuNSAtMjggcTAgLTE2LjUgLTExLjUgLTI4LjUgcS0xMS41IC0xMiAtMjcuNSAtMTIgbC00MjEgMCBxLTE3IDAgLTI4LjUgMTEuNSBxLTExLjUgMTEuNSAtMTEuNSAyOCBxMCAxNi41IDExLjUgMjguNSBxMTEuNSAxMiAyNy41IDEyIGw0MjEgMCBaTTg3MiA2OCBxMTcgMCAyOC41IC0xMS41IHExMS41IC0xMS41IDExLjUgLTI4IHEwIC0xNi41IC0xMS41IC0yOC41IHEtMTEuNSAtMTIgLTI3LjUgLTEyIGwtNzIxIDAgcS0xNyAwIC0yOC41IDExLjUgcS0xMS41IDExLjUgLTExLjUgMjggcTAgMTYuNSAxMS41IDI4LjUgcTExLjUgMTIgMjcuNSAxMiBsNzIxIDAgWlxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdlZGl0aW5nLXRvb2xiYXI6Y2hhbmdlLWZvbnQtY29sb3InLFxyXG4gICAgICBuYW1lOiAnQ2hhbmdlIGZvbnQgY29sb3JbaHRtbF0nLFxyXG4gICAgICBpY29uOiBgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj48ZyBmaWxsLXJ1bGU9XCJldmVub2RkXCI+PHBhdGggaWQ9XCJjaGFuZ2UtZm9udC1jb2xvci1pY29uXCIgZD1cIk0zIDE4aDE4djNIM3pcIiBzdHlsZT1cImZpbGw6IzJEQzI2QlwiPjwvcGF0aD48cGF0aCBkPVwiTTguNyAxNmgtLjhhLjUuNSAwIDAxLS41LS42bDIuNy05Yy4xLS4zLjMtLjQuNS0uNGgyLjhjLjIgMCAuNC4xLjUuNGwyLjcgOWEuNS41IDAgMDEtLjUuNmgtLjhhLjUuNSAwIDAxLS40LS40bC0uNy0yLjJjMC0uMy0uMy0uNC0uNS0uNGgtMy40Yy0uMiAwLS40LjEtLjUuNGwtLjcgMi4yYzAgLjMtLjIuNC0uNC40em0yLjYtNy42bC0uNiAyYS41LjUgMCAwMC41LjZoMS42YS41LjUgMCAwMC41LS42bC0uNi0yYzAtLjMtLjMtLjQtLjUtLjRoLS40Yy0uMiAwLS40LjEtLjUuNHpcIj48L3BhdGg+PC9nPjwvc3ZnPmBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnZWRpdGluZy10b29sYmFyOmNoYW5nZS1iYWNrZ3JvdW5kLWNvbG9yJyxcclxuICAgICAgbmFtZTogJ0NoYW5nZSBCYWNrZ3JvdW5kY29sb3JbaHRtbF0nLFxyXG4gICAgICBpY29uOiBgPHN2ZyB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnICAgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjxnICA+PGcgZmlsbD1cImN1cnJlbnRDb2xvclwiPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMTkuNTAyMjk1LCAxMzcuODc4MzMxKSByb3RhdGUoLTEzNS4wMDAwMDApIHRyYW5zbGF0ZSgtMTE5LjUwMjI5NSwgLTEzNy44NzgzMzEpIHRyYW5zbGF0ZSg0OC4wMDIyOTUsIDMxLjc1NzczMSlcIiA+PHBhdGggZD1cIk0xMDAuOTQ2OTQzLDYwLjgwODQ2OTkgTDQzLjc0Njk0MjcsNjAuODA4NDY5OSBDMzcuMjg1MjExMSw2MC44MDg0Njk5IDMyLjA0Njk0MjcsNjYuMDQ2NzM4MyAzMi4wNDY5NDI3LDcyLjUwODQ2OTkgTDMyLjA0Njk0MjcsMTE4LjcwODQ3IEMzMi4wNDY5NDI3LDEyNS4xNzAyMDEgMzcuMjg1MjExMSwxMzAuNDA4NDcgNDMuNzQ2OTQyNywxMzAuNDA4NDcgTDEwMC45NDY5NDMsMTMwLjQwODQ3IEMxMDcuNDA4Njc0LDEzMC40MDg0NyAxMTIuNjQ2OTQzLDEyNS4xNzAyMDEgMTEyLjY0Njk0MywxMTguNzA4NDcgTDExMi42NDY5NDMsNzIuNTA4NDY5OSBDMTEyLjY0Njk0Myw2Ni4wNDY3MzgzIDEwNy40MDg2NzQsNjAuODA4NDY5OSAxMDAuOTQ2OTQzLDYwLjgwODQ2OTkgWiBNOTMuNjQ2LDc5LjgwOCBMOTMuNjQ2LDExMS40MDggTDUxLjA0NiwxMTEuNDA4IEw1MS4wNDYsNzkuODA4IEw5My42NDYsNzkuODA4IFpcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCI+PC9wYXRoPjxwYXRoIGQ9XCJNODcuOTM2NjUyMSwxNi45MDkxNiBMODcuOTE5NDk2Niw2OC4yMDAwMDAxIEM4Ny45MTgzNTQzLDY5LjQxNDczODkgODYuOTMzNDk5OCw3MC4zOTkyNjQgODUuNzE4NzYwNyw3MC40IEw1Ni45NDIzMDc4LDcwLjQgQzU1LjcyNzI4MTMsNzAuNCA1NC43NDIzMDc4LDY5LjQxNTAyNjQgNTQuNzQyMzA3OCw2OC4yIEw1NC43NDIzMDc4LDM5LjQ2MjEwNTcgQzU0Ljc0MjMwNzgsMzcuMjUyMzUxMyA1NS41NzM2NjMyLDM1LjEyMzQ3NDggNTcuMDcxMTcwNiwzMy40OTg1MTc2IEw3Ni40ODMyOTk2LDEyLjQzNDI2MTMgQzc4Ljk1MzQ5ODcsOS43NTM4Mjg1NyA4My4xMjg5MTA4LDkuNTgzNDAwNSA4NS44MDkzNDM2LDEyLjA1MzU5OTYgQzg3LjE2NTg0NzMsMTMuMzAzNzA5IDg3LjkzNzI2OTEsMTUuMDY0NDcxNSA4Ny45MzY2NTIxLDE2LjkwOTE2IFpcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+PC9wYXRoPjxwYXRoIGQ9XCJNMTMxLjMsMTExLjI0MTE5OSBMMTEuNywxMTEuMjQxMTk5IEM1LjIzODI2ODQzLDExMS4yNDExOTkgMCwxMTYuNDc5NDY3IDAsMTIyLjk0MTE5OSBMMCwyMDAuNTQxMTk5IEMwLDIwNy4wMDI5MzEgNS4yMzgyNjg0MywyMTIuMjQxMTk5IDExLjcsMjEyLjI0MTE5OSBMMTMxLjMsMjEyLjI0MTE5OSBDMTM3Ljc2MTczMiwyMTIuMjQxMTk5IDE0MywyMDcuMDAyOTMxIDE0MywyMDAuNTQxMTk5IEwxNDMsMTIyLjk0MTE5OSBDMTQzLDExNi40Nzk0NjcgMTM3Ljc2MTczMiwxMTEuMjQxMTk5IDEzMS4zLDExMS4yNDExOTkgWiBNMTI0LDEzMC4yNDEgTDEyNCwxOTMuMjQxIEwxOSwxOTMuMjQxIEwxOSwxMzAuMjQxIEwxMjQsMTMwLjI0MSBaXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiPjwvcGF0aD48L2c+PC9nPjxwYXRoIGQ9XCJNNTEsMjE4IEwyMDUsMjE4IEMyMTEuMDc1MTMyLDIxOCAyMTYsMjIyLjkyNDg2OCAyMTYsMjI5IEMyMTYsMjM1LjA3NTEzMiAyMTEuMDc1MTMyLDI0MCAyMDUsMjQwIEw1MSwyNDAgQzQ0LjkyNDg2NzgsMjQwIDQwLDIzNS4wNzUxMzIgNDAsMjI5IEM0MCwyMjIuOTI0ODY4IDQ0LjkyNDg2NzgsMjE4IDUxLDIxOCBaXCIgaWQ9XCJjaGFuZ2UtYmFja2dyb3VuZC1jb2xvci1pY29uXCIgc3R5bGU9XCJmaWxsOiNGQTU0MUNcIj48L3BhdGg+PC9nPjwvZz48L3N2Zz5gXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCJlZGl0aW5nLXRvb2xiYXI6ZnVsbHNjcmVlbi1mb2N1c1wiLFxyXG4gICAgICBuYW1lOiBcIkZ1bGxzY3JlZW4gZm9jdXMgbW9kZVwiLFxyXG4gICAgICBpY29uOiBcImZ1bGxzY3JlZW5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiZWRpdGluZy10b29sYmFyOndvcmtwbGFjZS1mdWxsc2NyZWVuLWZvY3VzXCIsXHJcbiAgICAgIG5hbWU6IFwid29ya3BsYWNlLUZ1bGxzY3JlZW4gXCIsXHJcbiAgICAgIGljb246IFwiZXhpdC1mdWxsc2NyZWVuXCJcclxuICAgIH0sXHJcbiAgXSxcclxuICBhcHBlbmRNZXRob2Q6IFwid29ya3NwYWNlXCIsXHJcbiAgc2hvdWxkU2hvd01lbnVPblNlbGVjdDogZmFsc2UsXHJcbiAgY01lbnVWaXNpYmlsaXR5OiB0cnVlLFxyXG4gIGNNZW51Qm90dG9tVmFsdWU6IDQuMjUsXHJcbiAgY01lbnVOdW1Sb3dzOiAxMixcclxuICBjTWVudVdpZHRoOiAzMDAsXHJcbiAgY01lbnVGb250Q29sb3I6IFwiIzJEQzI2QlwiLFxyXG4gIGNNZW51QmFja2dyb3VuZENvbG9yOiBcIiNkM2Y4YjZcIixcclxuICBhdXRvaGlkZTogZmFsc2UsXHJcbiAgY3VzdG9tX2JnMTogXCIjRkZCNzhCOENcIixcclxuICBjdXN0b21fYmcyOiBcIiNDREY0Njk4Q1wiLFxyXG4gIGN1c3RvbV9iZzM6IFwiI0EwQ0NGNjhDXCIsXHJcbiAgY3VzdG9tX2JnNDogXCIjRjBBN0Q4OENcIixcclxuICBjdXN0b21fYmc1OiBcIiNBREVGRUY4Q1wiLFxyXG4gIGN1c3RvbV9mYzE6IFwiI0Q4MzkzMVwiLFxyXG4gIGN1c3RvbV9mYzI6IFwiI0RFNzgwMlwiLFxyXG4gIGN1c3RvbV9mYzM6IFwiIzI0NUJEQlwiLFxyXG4gIGN1c3RvbV9mYzQ6IFwiIzY0MjVEMFwiLFxyXG4gIGN1c3RvbV9mYzU6IFwiIzY0NkE3M1wiXHJcbn07XHJcbiIsIlxyXG5pbXBvcnQgdHlwZSBjTWVudVRvb2xiYXJQbHVnaW4gZnJvbSBcInNyYy9wbHVnaW4vbWFpblwiO1xyXG5pbXBvcnQgeyBBcHAsIE5vdGljZSwgZGVib3VuY2UsIHJlcXVpcmVBcGlWZXJzaW9uLCBJdGVtVmlldyxNYXJrZG93blZpZXcsIEJ1dHRvbkNvbXBvbmVudCwgV29ya3NwYWNlUGFyZW50LCBXb3Jrc3BhY2VXaW5kb3csIFNldHRpbmdUYWIsIFdvcmtzcGFjZVBhcmVudEV4dCwgVmlldyB9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5pbXBvcnQgeyBzZXRCb3R0b21WYWx1ZSB9IGZyb20gXCJzcmMvdXRpbC9zdGF0dXNCYXJDb25zdGFudHNcIjtcclxuaW1wb3J0IHsgYmFja2NvbG9ycGlja2VyLCBjb2xvcnBpY2tlciB9IGZyb20gXCJzcmMvdXRpbC91dGlsXCI7XHJcbmltcG9ydCB7IHQgfSBmcm9tIFwic3JjL3RyYW5zbGF0aW9ucy9oZWxwZXJcIjtcclxuaW1wb3J0IHsgY01lbnVUb29sYmFyU2V0dGluZ3MgfSBmcm9tIFwic3JjL3NldHRpbmdzL3NldHRpbmdzRGF0YVwiO1xyXG5cclxuXHJcbmxldCBhY3RpdmVEb2N1bWVudDogRG9jdW1lbnQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um9vdFNwbGl0cygpOiBXb3Jrc3BhY2VQYXJlbnRFeHRbXSB7XHJcblxyXG4gIGNvbnN0IHJvb3RTcGxpdHM6IFdvcmtzcGFjZVBhcmVudEV4dFtdID0gW107XHJcblxyXG4gIC8vIHB1c2ggdGhlIG1haW4gd2luZG93J3Mgcm9vdCBzcGxpdCB0byB0aGUgbGlzdFxyXG4gIHJvb3RTcGxpdHMucHVzaChhcHAud29ya3NwYWNlLnJvb3RTcGxpdCBhcyBXb3Jrc3BhY2VQYXJlbnQgYXMgV29ya3NwYWNlUGFyZW50RXh0KVxyXG5cclxuICAvLyBAdHMtaWdub3JlIGZsb2F0aW5nU3BsaXQgaXMgdW5kb2N1bWVudGVkXHJcbiAgY29uc3QgZmxvYXRpbmdTcGxpdCA9IGFwcC53b3Jrc3BhY2UuZmxvYXRpbmdTcGxpdCBhcyBXb3Jrc3BhY2VQYXJlbnRFeHQ7XHJcbiAgZmxvYXRpbmdTcGxpdD8uY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IFdvcmtzcGFjZVBhcmVudEV4dCkgPT4ge1xyXG4gICAgLy8gaWYgdGhpcyBpcyBhIHdpbmRvdywgcHVzaCBpdCB0byB0aGUgbGlzdCBcclxuICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFdvcmtzcGFjZVdpbmRvdykge1xyXG4gICAgICByb290U3BsaXRzLnB1c2goY2hpbGQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcm9vdFNwbGl0cztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0VG9vbGJhcigpIHtcclxuICByZXF1aXJlQXBpVmVyc2lvbihcIjAuMTUuMFwiKSA/IGFjdGl2ZURvY3VtZW50ID0gYWN0aXZlV2luZG93LmRvY3VtZW50IDogYWN0aXZlRG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XHJcbiAgbGV0IGN1cnJlbnRsZWFmID0gYWN0aXZlRG9jdW1lbnQ7XHJcbiAgbGV0IGNNZW51VG9vbGJhck1vZGFsQmFyID0gY3VycmVudGxlYWYucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiI2NNZW51VG9vbGJhck1vZGFsQmFyXCJcclxuICApO1xyXG4gIGxldCBjTWVudVRvb2xiYXJQb3BvdmVyQmFyID0gY3VycmVudGxlYWYucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiI2NNZW51VG9vbGJhclBvcG92ZXJCYXJcIlxyXG4gICk7XHJcbiAgY01lbnVUb29sYmFyTW9kYWxCYXIuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgIGlmIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcbiAgY01lbnVUb29sYmFyUG9wb3ZlckJhci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgaWYgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgICAgfVxyXG4gICAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxmRGVzdHJ1Y3QoKSB7XHJcbiAgY29uc3Qgcm9vdFNwbGl0cyA9IGdldFJvb3RTcGxpdHMoKTtcclxuICBjb25zdCBjbGVhclRvb2xiYXIgPSAobGVhZjogSFRNTEVsZW1lbnQpID0+IHtcclxuXHJcbiAgICBsZXQgY01lbnVUb29sYmFyTW9kYWxCYXIgPSBsZWFmLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiI2NNZW51VG9vbGJhck1vZGFsQmFyXCJcclxuICAgICk7XHJcbiAgICBsZXQgY01lbnVUb29sYmFyUG9wb3ZlckJhciA9IGxlYWYucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIjY01lbnVUb29sYmFyUG9wb3ZlckJhclwiXHJcbiAgICApO1xyXG5cclxuICAgIGNNZW51VG9vbGJhck1vZGFsQmFyLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgICBjTWVudVRvb2xiYXJQb3BvdmVyQmFyLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9XHJcbiAgaWYgKHJvb3RTcGxpdHMpXHJcbiAgICByb290U3BsaXRzLmZvckVhY2goKHJvb3RTcGxpdDogV29ya3NwYWNlUGFyZW50RXh0KSA9PiB7XHJcbiAgICAgIGlmIChyb290U3BsaXQ/LmNvbnRhaW5lckVsKVxyXG4gICAgICAgIGNsZWFyVG9vbGJhcihyb290U3BsaXQ/LmNvbnRhaW5lckVsKVxyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNFeGlzdG9vbGJhcihhcHA6IEFwcCwgc2V0dGluZ3M6IGNNZW51VG9vbGJhclNldHRpbmdzKTogSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0IHBvc2l0aW9uID0gc2V0dGluZ3MucG9zaXRpb25TdHlsZTtcclxuICBsZXQgY29udGFpbmVyO1xyXG4gIHJlcXVpcmVBcGlWZXJzaW9uKFwiMC4xNS4wXCIpID8gYWN0aXZlRG9jdW1lbnQgPSBhY3RpdmVXaW5kb3cuZG9jdW1lbnQgOiBhY3RpdmVEb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcclxuICBwb3NpdGlvbiA9PSBcInRvcFwiID8gY29udGFpbmVyID0gYXBwLndvcmtzcGFjZS5hY3RpdmVMZWFmLnZpZXcuY29udGFpbmVyRWw/LnF1ZXJ5U2VsZWN0b3IoXCIjY01lbnVUb29sYmFyTW9kYWxCYXJcIilcclxuICAgIDogY29udGFpbmVyID0gYWN0aXZlRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjTWVudVRvb2xiYXJNb2RhbEJhclwiKTtcclxuICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICByZXR1cm4gY29udGFpbmVyIGFzIEhUTUxFbGVtZW50O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBnZXROZXN0ZWRPYmplY3QgPSAobmVzdGVkT2JqOiBhbnksIHBhdGhBcnI6IGFueVtdKSA9PiB7XHJcbiAgcmV0dXJuIHBhdGhBcnIucmVkdWNlKChvYmosIGtleSkgPT5cclxuICAgIChvYmogJiYgb2JqW2tleV0gIT09ICd1bmRlZmluZWQnKSA/IG9ialtrZXldIDogdW5kZWZpbmVkLCBuZXN0ZWRPYmopO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRIaWxpdGUoa2V5czogYW55LCBob3c6IHN0cmluZykge1xyXG4gIC8vIG5lZWQgdG8gY2hlY2sgaWYgZXhpc3Rpbmcga2V5IGNvbWJvIGlzIG92ZXJyaWRkZW4gYnkgdW5kZWZpbmluZyBpdFxyXG4gIGlmIChrZXlzICYmIGtleXNbMV1bMF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIGhvdyArIGtleXMuZmxhdCgyKS5qb2luKCcrJykucmVwbGFjZSgnTW9kJywgJ0N0cmwnKSArIGhvdztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGhvdyArICfigJMnICsgaG93O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SG90a2V5KGFwcDogQXBwLCBjbWRpZDogc3RyaW5nLCBoaWdobGlnaHQgPSB0cnVlKSB7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIGxldCBhcnIgPSBhcHAuY29tbWFuZHMuZmluZENvbW1hbmQoY21kaWQpXHJcbiAgbGV0IGhpID0gaGlnaGxpZ2h0ID8gJyonIDogJyc7XHJcbiAgaWYgKGFycikge1xyXG4gICAgbGV0IGRlZmtleXMgPSBhcnIuaG90a2V5cyA/IFtbZ2V0TmVzdGVkT2JqZWN0KGFyci5ob3RrZXlzLCBbMCwgJ21vZGlmaWVycyddKV0sXHJcbiAgICBbZ2V0TmVzdGVkT2JqZWN0KGFyci5ob3RrZXlzLCBbMCwgJ2tleSddKV1dIDogdW5kZWZpbmVkO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IGNrID0gYXBwLmhvdGtleU1hbmFnZXIuY3VzdG9tS2V5c1thcnIuaWRdO1xyXG4gICAgdmFyIGhvdGtleXMgPSBjayA/IFtbZ2V0TmVzdGVkT2JqZWN0KGNrLCBbMCwgJ21vZGlmaWVycyddKV0sIFtnZXROZXN0ZWRPYmplY3QoY2ssIFswLCAna2V5J10pXV0gOiB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gaG90a2V5cyA/IHNldEhpbGl0ZShob3RrZXlzLCBoaSkgOiBzZXRIaWxpdGUoZGVma2V5cywgJycpO1xyXG4gIH0gZWxzZVxyXG4gICAgcmV0dXJuIFwi4oCTXCJcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29vcmRzID0gKGVkaXRvcjogYW55KSA9PiB7XHJcbiAgY29uc3QgY3Vyc29yRnJvbSA9IGVkaXRvci5nZXRDdXJzb3IoXCJoZWFkXCIpO1xyXG5cclxuICBsZXQgY29vcmRzO1xyXG4gIGlmIChlZGl0b3IuY3Vyc29yQ29vcmRzKSBjb29yZHMgPSBlZGl0b3IuY3Vyc29yQ29vcmRzKHRydWUsIFwid2luZG93XCIpO1xyXG4gIGVsc2UgaWYgKGVkaXRvci5jb29yZHNBdFBvcykge1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gZWRpdG9yLnBvc1RvT2Zmc2V0KGN1cnNvckZyb20pO1xyXG4gICAgY29vcmRzID0gZWRpdG9yLmNtLmNvb3Jkc0F0UG9zPy4ob2Zmc2V0KSA/PyBlZGl0b3IuY29vcmRzQXRQb3Mob2Zmc2V0KTtcclxuICB9IGVsc2UgcmV0dXJuO1xyXG5cclxuICByZXR1cm4gY29vcmRzO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZGVzdGF0ZShhcHA6IEFwcCkge1xyXG4gIGNvbnN0IGFjdGl2ZVBhbmUgPSBhcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcclxuIC8vIGNvbnN0IHZpZXcgPSBhcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoSXRlbVZpZXcpO1xyXG4gIC8vY29uc29sZS5sb2codmlldz8uZ2V0U3RhdGUoKS5tb2RlLFwiZ2V0U3RhdGVcIilcclxuIFxyXG4gIGlmIChhY3RpdmVQYW5lKSB7XHJcbiAgICBsZXQgY3VycmVudG1vZGUgPSBhY3RpdmVQYW5lPy5nZXRNb2RlKCk7XHJcbiAgICBpZiAoY3VycmVudG1vZGUgPT0gXCJwcmV2aWV3XCIpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlXHJcbiAgICAgIGlmIChjdXJyZW50bW9kZSA9PSBcInNvdXJjZVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0h0bWwoaHRtbFN0cjogc3RyaW5nKSB7XHJcbiAgbGV0IHJlZyA9IC88W14+XSs+L2c7XHJcbiAgcmV0dXJuIHJlZy50ZXN0KGh0bWxTdHIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGl2KHNlbGVjdG9yOiBzdHJpbmcpIHtcclxuICBsZXQgZGl2ID0gY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgZGl2LmFkZENsYXNzKHNlbGVjdG9yKTtcclxuICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFibGVjZWxsKGFwcDogQXBwLCBwbHVnaW46IGNNZW51VG9vbGJhclBsdWdpbiwgZWw6IHN0cmluZykge1xyXG4gIHJlcXVpcmVBcGlWZXJzaW9uKFwiMC4xNS4wXCIpID8gYWN0aXZlRG9jdW1lbnQgPSBhY3RpdmVXaW5kb3cuZG9jdW1lbnQgOiBhY3RpdmVEb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcclxuICBsZXQgY29udGFpbmVyID0gaXNFeGlzdG9vbGJhcihhcHAsIHBsdWdpbi5zZXR0aW5ncykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgbGV0IHRhYiA9IGNvbnRhaW5lcj8ucXVlcnlTZWxlY3RvcignIycgKyBlbCk7XHJcbiAgaWYgKHRhYikge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IHJvd3MgPSB0YWIucm93cztcclxuICAgIGxldCBybGVuID0gcm93cy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHJsZW47IGkrKykge1xyXG4gICAgICAvL+mBjeWOhuaJgOacieihjFxyXG4gICAgICBsZXQgY2VsbHMgPSByb3dzW2ldLmNlbGxzOyAvL+W+l+WIsOi/meS4gOihjOeahOaJgOacieWNleWFg+agvFxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNlbGxzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgLy/nu5nmr4/kuIDkuKrljZXlhYPmoLzmt7vliqBjbGlja+S6i+S7tlxyXG4gICAgICAgIGNlbGxzW2pdLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBsZXQgYmFja2NvbG9yID0gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICBpZiAoYmFja2NvbG9yICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgYmFja2NvbG9yID0gc2V0Y29sb3JIZXgoYmFja2NvbG9yKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGJhY2tjb2xvciwnYmFja2NvbG9yJylcclxuICAgICAgICAgICAgaWYgKGVsID09IFwieC1jb2xvci1waWNrZXItdGFibGVcIikge1xyXG4gICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5jTWVudUZvbnRDb2xvciA9IGJhY2tjb2xvcjtcclxuICAgICAgICAgICAgICBzZXRGb250Y29sb3IoYXBwLCBwbHVnaW4sIGJhY2tjb2xvcik7XHJcbiAgICAgICAgICAgICAgbGV0IGZvbnRfY29sb3VyX2RvbSA9IGFjdGl2ZURvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY2hhbmdlLWZvbnQtY29sb3ItaWNvblwiKVxyXG4gICAgICAgICAgICAgIGZvbnRfY29sb3VyX2RvbS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsZSA9IGVsZW1lbnQgYXMgSFRNTEVsZW1lbnRcclxuICAgICAgICAgICAgICAgIGVsZS5zdHlsZS5maWxsID0gYmFja2NvbG9yO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbCA9PSBcIngtYmFja2dyb3VuZGNvbG9yLXBpY2tlci10YWJsZVwiKSB7ICAgXHJcbiAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MuY01lbnVCYWNrZ3JvdW5kQ29sb3IgPSBiYWNrY29sb3I7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiMzMzXCIpXHJcbiAgICAgICAgICAgICAgICBzZXRCYWNrZ3JvdW5kY29sb3IoYXBwLCBwbHVnaW4sIGJhY2tjb2xvcik7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmFja2dyb3VuZF9jb2xvdXJfZG9tID0gYWN0aXZlRG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjaGFuZ2UtYmFja2dyb3VuZC1jb2xvci1pY29uXCIpXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kX2NvbG91cl9kb20uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgbGV0IGVsZSA9IGVsZW1lbnQgYXMgSFRNTEVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgZWxlLnN0eWxlLmZpbGwgPSBiYWNrY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIC8vICBiYWNrZ3JvdW5kX2NvbG91cl9kb20uc3R5bGUuZmlsbCA9IHBsdWdpbi5zZXR0aW5ncy5jTWVudUJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRGb250Y29sb3IoYXBwOiBBcHAsIHBsdWdpbjogY01lbnVUb29sYmFyUGx1Z2luLCBjb2xvcjogc3RyaW5nKSB7XHJcbiAgLy9mcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9vYnNpZGlhbi1jYW56aS9FbmhhbmNlZC1lZGl0aW5nXHJcbiAgY29uc3QgYWN0aXZlTGVhZiA9IGFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xyXG4gIGlmIChhY3RpdmVMZWFmKSB7XHJcbiAgICBjb25zdCB2aWV3ID0gYWN0aXZlTGVhZjtcclxuICAgIGNvbnN0IGVkaXRvciA9IHZpZXcuZWRpdG9yO1xyXG4gICAgbGV0IHNlbGVjdFRleHQgPSBlZGl0b3IuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAvLyBpZiAoc2VsZWN0VGV4dCA9PSBudWxsIHx8IHNlbGVjdFRleHQudHJpbSgpID09IFwiXCIpIHtcclxuICAgIC8vICAgLy/lpoLmnpzmsqHmnInpgInkuK3lhoXlrrnmv4DmtLvmoLzlvI/liLdcclxuICAgIC8vICAgcXVpdGVGb3JtYXRicnVzaGVzKHBsdWdpbik7XHJcbiAgICAvLyAgIHBsdWdpbi5zZXRFTl9Gb250Q29sb3JfRm9ybWF0X0JydXNoKHRydWUpO1xyXG4gICAgLy8gICBwbHVnaW4uc2V0VGVtcF9Ob3RpY2UobmV3IE5vdGljZSh0KFwiRm9udC1Db2xvciBmb3JtYXR0aW5nIGJydXNoIE9OIVwiKSwgMCkpO1xyXG4gICAgLy8gICByZXR1cm47XHJcbiAgICAvLyB9XHJcblxyXG4gICAgbGV0IF9odG1sMCA9IC9cXDxmb250IGNvbG9yPVswLTlhLXpBLVojXStbXlxcPFxcPl0qXFw+W15cXDxcXD5dK1xcPFxcL2ZvbnRcXD4vZztcclxuICAgIGxldCBfaHRtbDEgPSAvXlxcPGZvbnQgY29sb3I9WzAtOWEtekEtWiNdK1teXFw8XFw+XSpcXD4oW15cXDxcXD5dKylcXDxcXC9mb250XFw+JC87XHJcbiAgICBsZXQgX2h0bWwyID0gJzxmb250IGNvbG9yPVwiJyArIGNvbG9yICsgJ1wiPiQxPC9mb250Pic7XHJcbiAgICBsZXQgX2h0bWwzID0gL1xcPGZvbnQgY29sb3I9W15cXDxdKiR8XlteXFw+XSpmb250XFw+L2c7IC8v5piv5ZCm5Y+q5YyF5ZCr5LiA5L6n55qEPD5cclxuXHJcbiAgICBpZiAoX2h0bWwzLnRlc3Qoc2VsZWN0VGV4dCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmIChfaHRtbDAudGVzdChzZWxlY3RUZXh0KSkge1xyXG4gICAgICBpZiAoX2h0bWwxLnRlc3Qoc2VsZWN0VGV4dCkpIHtcclxuXHJcbiAgICAgICAgc2VsZWN0VGV4dCA9IHNlbGVjdFRleHQucmVwbGFjZShfaHRtbDEsIF9odG1sMik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZWN0VGV4dCA9IHNlbGVjdFRleHQucmVwbGFjZShcclxuICAgICAgICAgIC9cXDxmb250IGNvbG9yPVswLTlhLXpBLVojXStbXlxcPFxcPl0qP1xcPnxcXDxcXC9mb250XFw+L2csXHJcbiAgICAgICAgICBcIlwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2VsZWN0VGV4dCA9IHNlbGVjdFRleHQucmVwbGFjZSgvXiguKykkL2dtLCBfaHRtbDIpO1xyXG4gICAgfVxyXG4gICAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oc2VsZWN0VGV4dCk7XHJcbiAgICBlZGl0b3IuZXhlYyhcImdvUmlnaHRcIik7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBhcHAuY29tbWFuZHMuZXhlY3V0ZUNvbW1hbmRCeUlkKFwiZWRpdG9yOmZvY3VzXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEJhY2tncm91bmRjb2xvcihhcHA6IEFwcCwgcGx1Z2luOiBjTWVudVRvb2xiYXJQbHVnaW4sIGNvbG9yOiBzdHJpbmcpIHtcclxuICAvL2Zyb20gaHR0cHM6Ly9naXRodWIuY29tL29ic2lkaWFuLWNhbnppL0VuaGFuY2VkLWVkaXRpbmdcclxuICBjb25zdCBhY3RpdmVMZWFmID0gYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XHJcbiAgaWYgKGFjdGl2ZUxlYWYpIHtcclxuICAgIGNvbnN0IHZpZXcgPSBhY3RpdmVMZWFmO1xyXG4gICAgY29uc3QgZWRpdG9yID0gdmlldy5lZGl0b3I7XHJcbiAgICBsZXQgc2VsZWN0VGV4dCA9IGVkaXRvci5nZXRTZWxlY3Rpb24oKTtcclxuICAvLyAgY29uc29sZS5sb2coc2VsZWN0VGV4dCwnc2VsZWN0VGV4dCcpXHJcbiAgICAvLyBpZiAoc2VsZWN0VGV4dCA9PSBudWxsIHx8IHNlbGVjdFRleHQudHJpbSgpID09IFwiXCIpIHtcclxuICAgIC8vICAgLy/lpoLmnpzmsqHmnInpgInkuK3lhoXlrrnmv4DmtLvmoLzlvI/liLdcclxuICAgIC8vICAgcXVpdGVGb3JtYXRicnVzaGVzKHBsdWdpbik7XHJcbiAgICAvLyAgIHBsdWdpbi5zZXRFTl9CR19Gb3JtYXRfQnJ1c2godHJ1ZSk7XHJcbiAgICAvLyAgIHBsdWdpbi5zZXRUZW1wX05vdGljZShuZXcgTm90aWNlKHQoXCJCYWNrZ3JvdW5kLWNvbG9yIGZvcm1hdHRpbmcgYnJ1c2ggT04hXCIpLCAwKSk7XHJcbiAgICAvLyAgIHJldHVybjtcclxuICAgIC8vIH1cclxuICAgIGxldCBfaHRtbDAgPVxyXG4gICAgICAvXFw8c3BhbiBzdHlsZT1bXFxcIiddW15cXDxcXD5dKzpbMC05YS16QS1aI10rW1xcXCInXVteXFw8XFw+XSpcXD5bXlxcPFxcPl0rXFw8XFwvc3BhblxcPi9nO1xyXG4gICAgbGV0IF9odG1sMSA9XHJcbiAgICAgIC9eXFw8c3BhbiBzdHlsZT1bXFxcIiddW15cXDxcXD5dKzpbMC05YS16QS1aI10rW1xcXCInXVteXFw8XFw+XSpcXD4oW15cXDxcXD5dKylcXDxcXC9zcGFuXFw+JC87XHJcbiAgICBsZXQgX2h0bWwyID0gJzxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZDonICsgY29sb3IgKyAnXCI+JDE8L3NwYW4+JztcclxuICAgIGxldCBfaHRtbDMgPSAvXFw8c3BhbiBzdHlsZT1bXlxcPF0qJHxeW15cXD5dKnNwYW5cXD4vZzsgLy/mmK/lkKblj6rljIXlkKvkuIDkvqfnmoQ8PlxyXG4gICAgaWYgKF9odG1sMy50ZXN0KHNlbGVjdFRleHQpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAoX2h0bWwwLnRlc3Qoc2VsZWN0VGV4dCkpIHtcclxuICAgICAgaWYgKF9odG1sMS50ZXN0KHNlbGVjdFRleHQpKSB7XHJcbiAgICAgICAgc2VsZWN0VGV4dCA9IHNlbGVjdFRleHQucmVwbGFjZShfaHRtbDEsIF9odG1sMik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZWN0VGV4dCA9IHNlbGVjdFRleHQucmVwbGFjZShcclxuICAgICAgICAgIC9cXDxzcGFuIHN0eWxlPVtcXFwiJ11bXlxcPFxcPl0rOlswLTlhLXpBLVojXStbXFxcIiddW15cXDxcXD5dKlxcPnxcXDxcXC9zcGFuXFw+L2csXHJcbiAgICAgICAgICBcIlwiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNlbGVjdFRleHQgPSBzZWxlY3RUZXh0LnJlcGxhY2UoL14oLispJC9nbSwgX2h0bWwyKTtcclxuICAgIH1cclxuICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKHNlbGVjdFRleHQpO1xyXG4gICAgZWRpdG9yLmV4ZWMoXCJnb1JpZ2h0XCIpO1xyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICBhcHAuY29tbWFuZHMuZXhlY3V0ZUNvbW1hbmRCeUlkKFwiZWRpdG9yOmZvY3VzXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldGNvbG9ySGV4ID0gZnVuY3Rpb24gKGNvbG9yOiBzdHJpbmcpIHtcclxuICBsZXQgdGhhdCA9IGNvbG9yO1xyXG5cclxuICBsZXQgcmVnID0gL14jKFswLTlhLWZBLWZdezN9fFswLTlhLWZBLWZdezZ9KSQvO1xyXG4gIGlmICgvXihyZ2J8UkdCKS8udGVzdCh0aGF0KSkge1xyXG4gICAgbGV0IGFDb2xvciA9IHRoYXQucmVwbGFjZSgvKD86XFwofFxcKXxyZ2J8UkdCKSovZywgXCJcIikuc3BsaXQoXCIsXCIpO1xyXG4gICAgbGV0IHN0ckhleCA9IFwiI1wiO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhQ29sb3IubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGhleCA9IE51bWJlcihhQ29sb3JbaV0pLnRvU3RyaW5nKDE2KTtcclxuICAgICAgaWYgKGhleCA9PT0gXCIwXCIpIHtcclxuICAgICAgICBoZXggKz0gaGV4O1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGhleC5sZW5ndGg9PTEpXHJcbiAgICAgIHtcclxuICAgICAgICBoZXg9ICcwJytoZXg7XHJcbiAgICAgIH1cclxuICAgICAgc3RySGV4ICs9IGhleDtcclxuICAgIH1cclxuICAgIGlmIChzdHJIZXgubGVuZ3RoICE9PSA3KSB7XHJcbiAgICAgIHN0ckhleCA9IHRoYXQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RySGV4O1xyXG4gIH0gZWxzZSBpZiAocmVnLnRlc3QodGhhdCkpIHtcclxuICAgIGxldCBhTnVtID0gdGhhdC5yZXBsYWNlKC8jLywgXCJcIikuc3BsaXQoXCJcIik7XHJcbiAgICBpZiAoYU51bS5sZW5ndGggPT09IDYpIHtcclxuICAgICAgcmV0dXJuIHRoYXQ7XHJcbiAgICB9IGVsc2UgaWYgKGFOdW0ubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgIGxldCBudW1IZXggPSBcIiNcIjtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhTnVtLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgbnVtSGV4ICs9IGFOdW1baV0gKyBhTnVtW2ldO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudW1IZXg7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB0aGF0O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb3JlbWVudShhcHA6IEFwcCwgcGx1Z2luOiBjTWVudVRvb2xiYXJQbHVnaW4sIHNlbGVjdG9yOiBIVE1MRGl2RWxlbWVudCkge1xyXG4gIC8vIGxldCAgaXNzdWJtZW51PSBhY3RpdmVEb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNNZW51VG9vbGJhck1vZGFsQmFyXCIpLnF1ZXJ5U2VsZWN0b3IoJy4nK3NlbGVjdG9yKTtcclxuICAvLyBsZXQgYmFySGVpZ2h0ID0gYWN0aXZlRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjTWVudVRvb2xiYXJNb2RhbEJhclwiKS5vZmZzZXRIZWlnaHQ7XHJcbiAgLy8gcmVxdWlyZUFwaVZlcnNpb24oXCIwLjE1LjBcIikgPyBhY3RpdmVEb2N1bWVudCA9IGFjdGl2ZVdpbmRvdy5kb2N1bWVudCA6IGFjdGl2ZURvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xyXG4gIC8vbGV0IE1vcmVjb250YWluZXIgPSBhY3RpdmVEb2N1bWVudC5ib2R5Py5xdWVyeVNlbGVjdG9yKFwiLndvcmtzcGFjZS1sZWFmLm1vZC1hY3RpdmVcIik/LnF1ZXJ5U2VsZWN0b3IoXCIjY01lbnVUb29sYmFyUG9wb3ZlckJhclwiKSBhcyBIVE1MRWxlbWVudDtcclxuICBsZXQgdmlldyA9IGFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpXHJcbiAgaWYgKHZpZXcpIHtcclxuICAgIGxldCBNb3JlY29udGFpbmVyID0gdmlldy5jb250YWluZXJFbC5xdWVyeVNlbGVjdG9yKFwiI2NNZW51VG9vbGJhclBvcG92ZXJCYXJcIikgYXMgSFRNTEVsZW1lbnRcclxuICAgIGlmICghcGx1Z2luLklTX01PUkVfQnV0dG9uKSByZXR1cm47XHJcbiAgICBsZXQgY01vcmVNZW51ID0gc2VsZWN0b3IuY3JlYXRlRWwoXCJzcGFuXCIpO1xyXG4gICAgY01vcmVNZW51LmFkZENsYXNzKFwibW9yZS1tZW51XCIpO1xyXG4gICAgbGV0IG1vcmVidXR0b24gPSBuZXcgQnV0dG9uQ29tcG9uZW50KGNNb3JlTWVudSk7XHJcbiAgICBtb3JlYnV0dG9uXHJcbiAgICAgIC5zZXRDbGFzcyhcImNNZW51VG9vbGJhckNvbW1hbmRJdGVtXCIpXHJcbiAgICAgIC5zZXRUb29sdGlwKHQoXCJNb3JlXCIpKVxyXG4gICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKE1vcmVjb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9PSBcImhpZGRlblwiKSB7XHJcbiAgICAgICAgICBNb3JlY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICAgIE1vcmVjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gXCIzMnB4XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIE1vcmVjb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICBNb3JlY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiMFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICBtb3JlYnV0dG9uLmJ1dHRvbkVsLmlubmVySFRNTCA9IGA8c3ZnICB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIiAgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCAxMDI0IDEwMjRcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPjxwYXRoIGZpbGw9XCIjNjY2XCIgZD1cIk01MTAuMjkgMTQuMTMgcTE3LjA5IC0xNS4wNyA0MC4yIC0xNC4wNyBxMjMuMTIgMSAzOS4yIDE4LjA4IGwzMzQuNjYgMzg1LjkyIHEyNS4xMiAzMC4xNSAzNC4xNiA2Ni44MyBxOS4wNCAzNi42OCAwLjUgNzMuODcgcS04LjU0IDM3LjE5IC0zMi42NiA2Ny4zNCBsLTMzNS42NyAzOTAuOTQgcS0xNS4wNyAxOC4wOSAtMzguNjkgMjAuMSBxLTIzLjYyIDIuMDEgLTQxLjcxIC0xMy4wNyBxLTE4LjA4IC0xNS4wOCAtMjAuMDkgLTM4LjE5IHEtMi4wMSAtMjMuMTIgMTMuMDYgLTQxLjIxIGwzMzQuNjYgLTM5MC45NCBxMTEuMDYgLTEzLjA2IDExLjU2IC0yOS42NSBxMC41IC0xNi41OCAtMTAuNTUgLTI5LjY0IGwtMzM0LjY3IC0zODYuOTIgcS0xNS4wNyAtMTcuMDkgLTEzLjU2IC00MC43IHExLjUxIC0yMy42MiAxOS41OSAtMzguNyBaTTgxLjE3IDE0LjEzIHExNy4wOCAtMTUuMDcgNDAuMTkgLTE0LjA3IHEyMy4xMSAxIDM5LjIgMTguMDggbDMzNC42NiAzODUuOTIgcTI1LjEyIDMwLjE1IDM0LjE2IDY2LjgzIHE5LjA0IDM2LjY4IDAuNSA3My44NyBxLTguNTQgMzcuMTkgLTMyLjY2IDY3LjM0IGwtMzM1LjY3IDM5MC45NCBxLTE1LjA3IDE4LjA5IC0zOC42OSAyMC42IHEtMjMuNjEgMi41MSAtNDEuNyAtMTIuNTcgcS0xOC4wOSAtMTUuMDggLTIwLjEgLTM4LjY5IHEtMi4wMSAtMjMuNjIgMTMuMDYgLTQxLjcxIGwzMzQuNjYgLTM5MC45NCBxMTEuMDYgLTEzLjA2IDExLjU2IC0yOS42NSBxMC41IC0xNi41OCAtMTAuNTUgLTI5LjY0IGwtMzM0LjY2IC0zODYuOTIgcS0xNS4wOCAtMTcuMDkgLTEzLjU3IC00MC43IHExLjUxIC0yMy42MiAxOS42IC0zOC43IFpcIi8+PC9zdmc+YDtcclxuICAgIHBsdWdpbi5zZXRJU19NT1JFX0J1dHRvbihmYWxzZSk7XHJcbiAgICByZXR1cm4gY01vcmVNZW51O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHF1aXRlRm9ybWF0YnJ1c2hlcyhwbHVnaW46Y01lbnVUb29sYmFyUGx1Z2luKSB7XHJcbiAgLy9mcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9vYnNpZGlhbi1jYW56aS9FbmhhbmNlZC1lZGl0aW5nXHJcbiAgLy/lhbPpl63miYDmnInmoLzlvI/liLflj5jph49cclxuICBpZiAocGx1Z2luLlRlbXBfTm90aWNlKSBwbHVnaW4uVGVtcF9Ob3RpY2UuaGlkZSgpO1xyXG4gIHBsdWdpbi5zZXRFTl9CR19Gb3JtYXRfQnJ1c2goZmFsc2UpO1xyXG4gIHBsdWdpbi5zZXRFTl9Gb250Q29sb3JfRm9ybWF0X0JydXNoKGZhbHNlKTtcclxuICBwbHVnaW4uc2V0RU5fVGV4dF9Gb3JtYXRfQnJ1c2goZmFsc2UpO1xyXG4gIC8vIGdsb2JhbFRoaXMuRU5fQkdfRm9ybWF0X0JydXNoID0gZmFsc2U7IC8v5aSa5b2p6IOM5pmv5Yi3XHJcbiAgLy8gZ2xvYmFsVGhpcy5FTl9Gb250Q29sb3JfRm9ybWF0X0JydXNoID0gZmFsc2U7IC8v5aSa5b2p5paH5a2X5Yi3XHJcbiAgLy8gZ2xvYmFsVGhpcy5FTl9UZXh0X0Zvcm1hdF9CcnVzaCA9IGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0SGVhZGVyKF9zdHI6IHN0cmluZykge1xyXG4gIC8vZnJvbSBodHRwczovL2dpdGh1Yi5jb20vb2JzaWRpYW4tY2FuemkvRW5oYW5jZWQtZWRpdGluZ1xyXG5cclxuICBjb25zdCBhY3RpdmVMZWFmID0gYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XHJcbiAgaWYgKGFjdGl2ZUxlYWYpIHtcclxuICAgIGNvbnN0IHZpZXcgPSBhY3RpdmVMZWFmO1xyXG4gICAgY29uc3QgZWRpdG9yID0gdmlldy5lZGl0b3I7XHJcbiAgICBsZXQgbGluZXRleHQgPSBlZGl0b3IuZ2V0TGluZShlZGl0b3IuZ2V0Q3Vyc29yKCkubGluZSk7XHJcbiAgICBsZXQgbmV3c3RyLCBsaW5lbmQgPSBcIlwiO1xyXG4gICAgY29uc3QgcmVnZXggPSAvXihcXD4qKFxcW1shXFx3XStcXF0pP1xccyopIytcXHMvO1xyXG4gICAgbGV0IG1hdGNoc3RyXHJcbiAgICBjb25zdCBtYXRjaCA9IGxpbmV0ZXh0Lm1hdGNoKHJlZ2V4KTtcclxuICAgIGlmIChtYXRjaCkgbWF0Y2hzdHIgPSBtYXRjaFswXS50cmltKCk7XHJcbiAgICBpZiAoX3N0ciA9PSBtYXRjaHN0cikgICAvL+i9rOaNoueahOi3n+WOn+adpeeahOS4gOiHtOWwseWPlua2iOagh+mimFxyXG4gICAge1xyXG4gICAgICBuZXdzdHIgPSBsaW5ldGV4dC5yZXBsYWNlKHJlZ2V4LCBcIiQxXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKF9zdHIgPT0gXCJcIikgeyAgIC8v6Iul5Li65qCH6aKY77yM6L2s5Li65pmu6YCa5paH5pysXHJcbiAgICAgICAgbmV3c3RyID0gbGluZXRleHQucmVwbGFjZShyZWdleCwgXCIkMVwiKTtcclxuICAgICAgfSBlbHNlIHsgIC8v5YiX6KGo44CB5byV55So77yM5YWI6L2s5Li65pmu6YCa5paH5pys77yM5YaN6L2s5Li65qCH6aKYXHJcbiAgICAgICAgbmV3c3RyID0gbGluZXRleHQucmVwbGFjZSgvXlxccyooIyp8XFw+fFxcLXxcXGQrXFwuKVxccyovbSwgXCJcIik7XHJcbiAgICAgICAgbmV3c3RyID0gX3N0ciArIFwiIFwiICsgbmV3c3RyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld3N0ciAhPSBcIlwiKSB7XHJcbiAgICAgIGxpbmVuZCA9IGVkaXRvci5nZXRSYW5nZShlZGl0b3IuZ2V0Q3Vyc29yKCksIHsgbGluZTogZWRpdG9yLmdldEN1cnNvcigpLmxpbmUsIGNoOiBsaW5ldGV4dC5sZW5ndGggfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsaW5lbmQgPSBlZGl0b3IuZ2V0UmFuZ2UoZWRpdG9yLmdldEN1cnNvcigpLCB7IGxpbmU6IGVkaXRvci5nZXRDdXJzb3IoKS5saW5lLCBjaDogMCB9KTtcclxuICAgIH07XHJcbiAgICBlZGl0b3Iuc2V0TGluZShlZGl0b3IuZ2V0Q3Vyc29yKCkubGluZSwgbmV3c3RyKTtcclxuICAgIGVkaXRvci5zZXRDdXJzb3IoeyBsaW5lOiBlZGl0b3IuZ2V0Q3Vyc29yKCkubGluZSwgY2g6IE51bWJlcihuZXdzdHIubGVuZ3RoIC0gbGluZW5kLmxlbmd0aCkgfSk7XHJcbiAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Rm9ybWF0ZXJhc2VyKGFwcDogQXBwLCBwbHVnaW46IGNNZW51VG9vbGJhclBsdWdpbikge1xyXG4gIGNvbnN0IGFjdGl2ZUxlYWYgPSBhcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcclxuICBpZiAoYWN0aXZlTGVhZikge1xyXG4gICAgY29uc3QgdmlldyA9IGFjdGl2ZUxlYWY7XHJcbiAgICBjb25zdCBlZGl0b3IgPSB2aWV3LmVkaXRvclxyXG4gICAgbGV0IGxpbmVuZDtcclxuICAgIGxldCBzZWxzdGFydCA9IGVkaXRvci5nZXRSYW5nZSh7IGxpbmU6IGVkaXRvci5nZXRDdXJzb3IoKS5saW5lLCBjaDogMCB9LCBlZGl0b3IuZ2V0Q3Vyc29yKCkpO1xyXG4gICAgbGV0IGxpbmV0ZXh0ID0gZWRpdG9yLmdldExpbmUoZWRpdG9yLmdldEN1cnNvcigpLmxpbmUpO1xyXG5cclxuICAgIGlmIChsaW5ldGV4dCAhPSBcIlwiKSB7XHJcbiAgICAgIGxpbmVuZCA9IGVkaXRvci5nZXRSYW5nZShlZGl0b3IuZ2V0Q3Vyc29yKCksIHsgbGluZTogZWRpdG9yLmdldEN1cnNvcigpLmxpbmUsIGNoOiBsaW5ldGV4dC5sZW5ndGggfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsaW5lbmQgPSBlZGl0b3IuZ2V0UmFuZ2UoZWRpdG9yLmdldEN1cnNvcigpLCB7IGxpbmU6IGVkaXRvci5nZXRDdXJzb3IoKS5saW5lLCBjaDogMCB9KTtcclxuICAgIH07XHJcbiAgICBsZXQgc2VsZWN0VGV4dCA9IGVkaXRvci5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGlmIChzZWxlY3RUZXh0ID09IG51bGwgfHwgc2VsZWN0VGV4dCA9PSBcIlwiKSB7XHJcbiAgICAgIHF1aXRlRm9ybWF0YnJ1c2hlcyhwbHVnaW4pO1xyXG4gICAgICBwbHVnaW4uc2V0RU5fVGV4dF9Gb3JtYXRfQnJ1c2godHJ1ZSk7XHJcbiAgICAgIC8vIGdsb2JhbFRoaXMuRU5fVGV4dF9Gb3JtYXRfQnJ1c2ggPSB0cnVlO1xyXG4gICAgICBpZiAocGx1Z2luLlRlbXBfTm90aWNlKSB7XHJcbiAgICAgICAgaWYgKHBsdWdpbi5UZW1wX05vdGljZS5ub3RpY2VFbC5pbm5lclRleHQgIT0gdChcIkNsZWFyIGZvcm1hdHRpbmcgYnJ1c2ggT04hXFxuQ2xpY2sgdGhlICBtb3VzZSBtaWRkbGUgb3IgcmlnaHQga2V5IHRvIGNsb3NlIHRoZSBmb3JtYXR0aW5nLWJydXNoXCIpKVxyXG4gICAgICAgICAgcGx1Z2luLlRlbXBfTm90aWNlID0gbmV3IE5vdGljZSh0KFwiQ2xlYXIgZm9ybWF0dGluZyBicnVzaCBPTiFcXG5DbGljayB0aGUgIG1vdXNlIG1pZGRsZSBvciByaWdodCBrZXkgdG8gY2xvc2UgdGhlIGZvcm1hdHRpbmctYnJ1c2hcIiksIDApO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgcGx1Z2luLlRlbXBfTm90aWNlID0gbmV3IE5vdGljZSh0KFwiQ2xlYXIgZm9ybWF0dGluZyBicnVzaCBPTiFcXG5DbGljayB0aGUgIG1vdXNlIG1pZGRsZSBvciByaWdodCBrZXkgdG8gY2xvc2UgdGhlIGZvcm1hdHRpbmctYnJ1c2hcIiksIDApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBtZFRleHQgPSAvKF4jK1xcc3woPzw9XnxcXHMqKSN8XlxcPnxeXFwtIFxcWyggfHgpXFxdfF5cXCsgfFxcPFteXFw8XFw+XSs/XFw+fF4xXFwuIHxeXFxzKlxcLSB8XlxcLSskfF5cXCorJCkvbWc7XHJcbiAgICAgIHNlbGVjdFRleHQgPSBzZWxlY3RUZXh0LnJlcGxhY2UobWRUZXh0LCBcIlwiKTtcclxuICAgICAgc2VsZWN0VGV4dCA9IHNlbGVjdFRleHQucmVwbGFjZSgvXlsgXSt8WyBdKyQvbWcsIFwiXCIpO1xyXG4gICAgICBzZWxlY3RUZXh0ID0gc2VsZWN0VGV4dC5yZXBsYWNlKC9cXCE/XFxbXFxbKFteXFxbXFxdXFx8XSpcXHwpKihbXlxcKFxcKVxcW1xcXV0rKVxcXVxcXS9nLCBcIiQyXCIpO1xyXG4gICAgICBzZWxlY3RUZXh0ID0gc2VsZWN0VGV4dC5yZXBsYWNlKC9cXCE/XFxbKyhbXlxcW1xcXVxcKFxcKV0rKVxcXStcXCgoW15cXChcXCldKylcXCkvZywgXCIkMVwiKTtcclxuICAgICAgc2VsZWN0VGV4dCA9IHNlbGVjdFRleHQucmVwbGFjZSgvYChbXmBdKylgL2csIFwiJDFcIik7XHJcbiAgICAgIHNlbGVjdFRleHQgPSBzZWxlY3RUZXh0LnJlcGxhY2UoL18oW15fXSspXy9nLCBcIiQxXCIpO1xyXG4gICAgICBzZWxlY3RUZXh0ID0gc2VsZWN0VGV4dC5yZXBsYWNlKC89PShbXj1dKyk9PS9nLCBcIiQxXCIpO1xyXG4gICAgICBzZWxlY3RUZXh0ID0gc2VsZWN0VGV4dC5yZXBsYWNlKC9cXCpcXCpcXCooW15cXCpdKylcXCpcXCpcXCovZywgXCIkMVwiKTtcclxuICAgICAgc2VsZWN0VGV4dCA9IHNlbGVjdFRleHQucmVwbGFjZSgvXFwqXFwqPyhbXlxcKl0rKVxcKlxcKj8vZywgXCIkMVwiKTtcclxuICAgICAgc2VsZWN0VGV4dCA9IHNlbGVjdFRleHQucmVwbGFjZSgvfn4oW15+XSspfn4vZywgXCIkMVwiKTtcclxuXHJcbiAgICAgIC8vIHNlbGVjdFRleHQgPSBzZWxlY3RUZXh0LnJlcGxhY2UoLyhcXHIqXFxuKSsvbWcsIFwiXFxyXFxuXCIpO1xyXG4gICAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihzZWxlY3RUZXh0KTtcclxuICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgIGFwcC5jb21tYW5kcy5leGVjdXRlQ29tbWFuZEJ5SWQoXCJlZGl0b3I6Zm9jdXNcIik7XHJcblxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUZvbGxvd2luZ2JhciA9IChhcHA6IEFwcCwgc2V0dGluZ3M6IGNNZW51VG9vbGJhclNldHRpbmdzKSA9PiB7XHJcblxyXG4gIGxldCBpc291cmNlID0gZ2V0TW9kZXN0YXRlKGFwcCk7XHJcblxyXG4gIGxldCBjTWVudVRvb2xiYXJNb2RhbEJhciA9IGlzRXhpc3Rvb2xiYXIoYXBwLCBzZXR0aW5ncyk7XHJcbiAgLy9jb25zb2xlLmxvZyhhY3RpdmVMZWFmLmdldFZpZXdTdGF0ZSgpLnN0YXRlLm1vZGUpXHJcbiAgaWYgKGlzb3VyY2UpIHtcclxuICAgIGNvbnN0IGFjdGl2ZUxlYWYgPSBhcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcclxuICAgIGNvbnN0IHZpZXcgPSBhY3RpdmVMZWFmO1xyXG4gICAgY29uc3QgZWRpdG9yID0gdmlldy5lZGl0b3I7XHJcblxyXG5cclxuICAgIGlmIChjTWVudVRvb2xiYXJNb2RhbEJhcikge1xyXG5cclxuICAgICAgbGV0IHNlbGVjdGlvbiA9IGVkaXRvci5zb21ldGhpbmdTZWxlY3RlZCgpO1xyXG4gICAgICAvLyBsZXQgY01lbnVUb29sYmFyUm93cyA9IHNldHRpbmdzLmNNZW51TnVtUm93cztcclxuICAgICAgc2VsZWN0aW9uXHJcbiAgICAgICAgPyAoY01lbnVUb29sYmFyTW9kYWxCYXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiKVxyXG4gICAgICAgIDogKGNNZW51VG9vbGJhck1vZGFsQmFyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiKTtcclxuXHJcbiAgICAgIC8vICAgbGV0IEVsZW1lbnRDb3VudCA9IGNNZW51VG9vbGJhck1vZGFsQmFyLmNoaWxkRWxlbWVudENvdW50O1xyXG4gICAgICAvLyAgIGlmIChFbGVtZW50Q291bnQpIHtcclxuICAgICAgLy8gICAgIEVsZW1lbnRDb3VudCA9PSBjTWVudVRvb2xiYXJSb3dzXHJcbiAgICAgIC8vICA/IChjTWVudVRvb2xiYXJNb2RhbEJhci5hZGRDbGFzcyhcImNNZW51VG9vbGJhckdyaWRcIiksIGNNZW51VG9vbGJhck1vZGFsQmFyLnJlbW92ZUNsYXNzKFwiY01lbnVUb29sYmFyRmxleFwiKSlcclxuICAgICAgY01lbnVUb29sYmFyTW9kYWxCYXIuYWRkQ2xhc3MoXCJjTWVudVRvb2xiYXJGbGV4XCIpXHJcbiAgICAgIGNNZW51VG9vbGJhck1vZGFsQmFyLnJlbW92ZUNsYXNzKFwiY01lbnVUb29sYmFyR3JpZFwiKVxyXG5cclxuICAgICAgLy8gbGV0IGNtaGVpZ2h0ID0gTWF0aC5jZWlsKEVsZW1lbnRDb3VudCAvIGNNZW51VG9vbGJhclJvd3MpO1xyXG4gICAgICBsZXQgY21oZWlnaHQgPSAxO1xyXG4gICAgICBjTWVudVRvb2xiYXJNb2RhbEJhci5zdHlsZS5oZWlnaHQgPSA0MCAqIGNtaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICBpZiAoc2V0dGluZ3MuYWVzdGhldGljU3R5bGUgPT0gXCJ0aW55XCIpIHtcclxuICAgICAgICBjTWVudVRvb2xiYXJNb2RhbEJhci5zdHlsZS5oZWlnaHQgPSAyNSAqIGNtaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBybGVmdHdpZHRoID1cclxuICAgICAgICBhY3RpdmVEb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2lkZS1kb2NrLXJpYmJvbiBtb2QtbGVmdFwiKVswXVxyXG4gICAgICAgICAgPy5jbGllbnRXaWR0aCA/PyAwO1xyXG5cclxuICAgICAgbGV0IGxlZnR3aWR0aCA9XHJcbiAgICAgICAgYWN0aXZlRG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZC1sZWZ0LXNwbGl0XCIpWzBdXHJcbiAgICAgICAgICA/LmNsaWVudFdpZHRoID8/IDA7XHJcblxyXG4gICAgICBsZXQgYmFyd2lkdGggPSBhY3RpdmVEb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICBcImNNZW51VG9vbGJhck1vZGFsQmFyXCJcclxuICAgICAgKS5vZmZzZXRXaWR0aDtcclxuICAgICAgbGV0IGJhckhlaWdodCA9IGFjdGl2ZURvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgIFwiY01lbnVUb29sYmFyTW9kYWxCYXJcIlxyXG4gICAgICApLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgIGxldCBib2R5d2lkdGggPSBhY3RpdmVEb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoO1xyXG4gICAgICBsZXQgY29vcmRzID0gZ2V0Q29vcmRzKGVkaXRvcik7XHJcbiAgICAgIGxldCBjdXJzb3JfaGVhZCA9IGVkaXRvci5nZXRDdXJzb3IoXCJoZWFkXCIpLmNoXHJcbiAgICAgIGxldCBjdXJzb3JfZnJvbSA9IGVkaXRvci5nZXRDdXJzb3IoXCJmcm9tXCIpLmNoXHJcblxyXG4gICAgICBsZXQgdG9wcHggPSAwO1xyXG4gICAgICAvKua3u+WKoOWIpOaWrei+ueeVjCAqL1xyXG4gICAgICBsZXQgbGVmdHB4ID0gY29vcmRzLmxlZnQgLSBsZWZ0d2lkdGggLSBybGVmdHdpZHRoICsgMjA7XHJcbiAgICAgIGlmIChjb29yZHMubGVmdCArIGJhcndpZHRoICsgMTUgPiBib2R5d2lkdGgpXHJcbiAgICAgICAgbGVmdHB4ID0gY29vcmRzLmxlZnQgLSBsZWZ0d2lkdGggLSBybGVmdHdpZHRoIC0gYmFyd2lkdGggLyAxLjMgLSA2MDtcclxuICAgICAgaWYgKHJlcXVpcmVBcGlWZXJzaW9uKFwiMS4wLjBcIikpXHJcbiAgICAgICAgY3Vyc29yX2hlYWQgPT0gY3Vyc29yX2Zyb20gP1xyXG4gICAgICAgICAgdG9wcHggPSBjb29yZHMudG9wIC0gYmFySGVpZ2h0IC0gMTAgOiAodG9wcHggPSBjb29yZHMudG9wICsgMjUsIGxlZnRweCA9IGxlZnRweCAtIDQwKTtcclxuICAgICAgZWxzZSBjdXJzb3JfaGVhZCA9PSBjdXJzb3JfZnJvbSA/XHJcbiAgICAgICAgdG9wcHggPSBjb29yZHMudG9wIC0gYmFySGVpZ2h0IC0gMzAgOiAodG9wcHggPSBjb29yZHMudG9wLCBsZWZ0cHggPSBsZWZ0cHggLSA0MCk7XHJcbiAgICAgIGlmIChsZWZ0cHggPCAwKSBsZWZ0cHggPSAwO1xyXG4gICAgICBjTWVudVRvb2xiYXJNb2RhbEJhci5zdHlsZS52aXNpYmlsaXR5ID09IFwidmlzaWJsZVwiID9cclxuICAgICAgICAoY01lbnVUb29sYmFyTW9kYWxCYXIuc3R5bGUubGVmdCA9IGxlZnRweCArIFwicHhcIiwgY01lbnVUb29sYmFyTW9kYWxCYXIuc3R5bGUudG9wID0gdG9wcHggKyBcInB4XCIpIDogdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICB9IGVsc2VcclxuICAgIGNNZW51VG9vbGJhck1vZGFsQmFyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNNZW51VG9vbGJhclBvcG92ZXIoXHJcbiAgYXBwOiBBcHAsXHJcbiAgcGx1Z2luOiBjTWVudVRvb2xiYXJQbHVnaW5cclxuKTogdm9pZCB7XHJcbiAgbGV0IHNldHRpbmdzID0gcGx1Z2luLnNldHRpbmdzO1xyXG4gIHJlcXVpcmVBcGlWZXJzaW9uKFwiMC4xNS4wXCIpID8gYWN0aXZlRG9jdW1lbnQgPSBhY3RpdmVXaW5kb3cuZG9jdW1lbnQgOiBhY3RpdmVEb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcclxuICBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xyXG4gICAgY29uc3QgZ2VuZXJhdGVNZW51ID0gKCkgPT4ge1xyXG4gICAgICBsZXQgYnRud2lkdGggPSAwO1xyXG4gICAgICBsZXQgY01lbnVUb29sYmFyID0gY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgIGlmIChjTWVudVRvb2xiYXIpIHtcclxuICAgICAgICBpZiAoc2V0dGluZ3MucG9zaXRpb25TdHlsZSA9PSBcInRvcFwiKSB7XHJcbiAgICAgICAgICBsZXQgdG9wZW0gPSAoc2V0dGluZ3MuY01lbnVCb3R0b21WYWx1ZSAtIDQuMjUpICogNTtcclxuICAgICAgICAgIGNNZW51VG9vbGJhci5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgIFwic3R5bGVcIixcclxuICAgICAgICAgICAgYHBvc2l0aW9uOiByZWxhdGl2ZTsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyOHB4LCAxZnIpKTt0b3A6ICR7dG9wZW1cclxuICAgICAgICAgICAgfXB4O2BcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjTWVudVRvb2xiYXIuY2xhc3NOYW1lICs9IFwiIHRvcFwiO1xyXG4gICAgICAgICAgaWYgKHNldHRpbmdzLmF1dG9oaWRlKSBcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY01lbnVUb29sYmFyLmNsYXNzTmFtZSArPSBcIiBhdXRvaGlkZVwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjTWVudVRvb2xiYXIuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICBcInN0eWxlXCIsXHJcbiAgICAgICAgICAgIGBsZWZ0OiBjYWxjKDUwJSAtIGNhbGMoJHtjTWVudVRvb2xiYXIub2Zmc2V0V2lkdGhcclxuICAgICAgICAgICAgfXB4IC8gMikpOyBib3R0b206ICR7c2V0dGluZ3MuY01lbnVCb3R0b21WYWx1ZVxyXG4gICAgICAgICAgICB9ZW07IGdyaWQtdGVtcGxhdGUtY29sdW1uczogJHtcIjFmciBcIi5yZXBlYXQoc2V0dGluZ3MuY01lbnVOdW1Sb3dzKX1gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjTWVudVRvb2xiYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjTWVudVRvb2xiYXJNb2RhbEJhclwiKTtcclxuICAgICAgLy/kuoznuqflvLnlh7roj5zljZVcclxuXHJcbiAgICAgIGxldCBQb3BvdmVyTWVudSA9IGNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICBQb3BvdmVyTWVudS5hZGRDbGFzcyhcImNNZW51VG9vbGJhcnBvcG92ZXJcIik7XHJcbiAgICAgIFBvcG92ZXJNZW51LmFkZENsYXNzKFwiY01lbnVUb29sYmFyVGlueUFlc3RoZXRpY1wiKTtcclxuICAgICAgUG9wb3Zlck1lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjTWVudVRvb2xiYXJQb3BvdmVyQmFyXCIpO1xyXG4gICAgICBQb3BvdmVyTWVudS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgUG9wb3Zlck1lbnUuc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XHJcbiAgICAgIGlmIChzZXR0aW5ncy5hZXN0aGV0aWNTdHlsZSA9PSBcImRlZmF1bHRcIikge1xyXG4gICAgICAgIGNNZW51VG9vbGJhci5hZGRDbGFzcyhcImNNZW51VG9vbGJhckRlZmF1bHRBZXN0aGV0aWNcIik7XHJcbiAgICAgICAgY01lbnVUb29sYmFyLnJlbW92ZUNsYXNzKFwiY01lbnVUb29sYmFyVGlueUFlc3RoZXRpY1wiKTtcclxuICAgICAgICBjTWVudVRvb2xiYXIucmVtb3ZlQ2xhc3MoXCJjTWVudVRvb2xiYXJHbGFzc0Flc3RoZXRpY1wiKTtcclxuICAgICAgfSBlbHNlIGlmIChzZXR0aW5ncy5hZXN0aGV0aWNTdHlsZSA9PSBcInRpbnlcIikge1xyXG4gICAgICAgIGNNZW51VG9vbGJhci5hZGRDbGFzcyhcImNNZW51VG9vbGJhclRpbnlBZXN0aGV0aWNcIik7XHJcbiAgICAgICAgY01lbnVUb29sYmFyLnJlbW92ZUNsYXNzKFwiY01lbnVUb29sYmFyRGVmYXVsdEFlc3RoZXRpY1wiKTtcclxuICAgICAgICBjTWVudVRvb2xiYXIucmVtb3ZlQ2xhc3MoXCJjTWVudVRvb2xiYXJHbGFzc0Flc3RoZXRpY1wiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjTWVudVRvb2xiYXIuYWRkQ2xhc3MoXCJjTWVudVRvb2xiYXJHbGFzc0Flc3RoZXRpY1wiKTtcclxuICAgICAgICBjTWVudVRvb2xiYXIucmVtb3ZlQ2xhc3MoXCJjTWVudVRvb2xiYXJUaW55QWVzdGhldGljXCIpO1xyXG4gICAgICAgIGNNZW51VG9vbGJhci5yZW1vdmVDbGFzcyhcImNNZW51VG9vbGJhckRlZmF1bHRBZXN0aGV0aWNcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vICBpZiAoc2V0dGluZ3MucG9zaXRpb25TdHlsZSA9PSBcImZvbGxvd2luZ1wiKSB7XHJcbiAgICAgIC8vICAgIGNNZW51VG9vbGJhci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgbGV0IGxlYWZ3aWR0aCA9IDk5OTk5O1xyXG4gICAgICBpZiAoc2V0dGluZ3MucG9zaXRpb25TdHlsZSA9PSBcInRvcFwiKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRsZWFmID0gYXBwLndvcmtzcGFjZS5hY3RpdmVMZWFmLnZpZXcuY29udGFpbmVyRWxcclxuICAgICAgICBpZiAoIWN1cnJlbnRsZWFmPy5xdWVyeVNlbGVjdG9yKFwiI2NNZW51VG9vbGJhclBvcG92ZXJCYXJcIikpXHJcbiAgICAgICAgICBjdXJyZW50bGVhZj8ucXVlcnlTZWxlY3RvcihcIi5tYXJrZG93bi1zb3VyY2Utdmlld1wiKVxyXG4gICAgICAgICAgICAuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJiZWdpblwiLCBQb3BvdmVyTWVudSk7XHJcbiAgICAgICAgY3VycmVudGxlYWZcclxuICAgICAgICAgID8ucXVlcnlTZWxlY3RvcihcIi5tYXJrZG93bi1zb3VyY2Utdmlld1wiKVxyXG4gICAgICAgICAgLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgY01lbnVUb29sYmFyKTtcclxuICAgICAgICBsZWFmd2lkdGggPSBjdXJyZW50bGVhZj8ucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXHJcbiAgICAgICAgICBcIi5tYXJrZG93bi1zb3VyY2Utdmlld1wiXHJcbiAgICAgICAgKS5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGluZ3MuYXBwZW5kTWV0aG9kID09IFwiYm9keVwiKSB7XHJcbiAgICAgICAgYWN0aXZlRG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjTWVudVRvb2xiYXIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHNldHRpbmdzLmFwcGVuZE1ldGhvZCA9PSBcIndvcmtzcGFjZVwiKSB7XHJcbiAgICAgICAgYWN0aXZlRG9jdW1lbnQuYm9keVxyXG4gICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKFwiLm1vZC12ZXJ0aWNhbC5tb2Qtcm9vdFwiKVxyXG4gICAgICAgICAgLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgY01lbnVUb29sYmFyKTtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgbGV0IGNNZW51VG9vbGJhclBvcG92ZXJCYXIgPSBhcHAud29ya3NwYWNlLmFjdGl2ZUxlYWYudmlldy5jb250YWluZXJFbFxyXG4gICAgICAgID8ucXVlcnlTZWxlY3RvcihcIiNjTWVudVRvb2xiYXJQb3BvdmVyQmFyXCIpIGFzIEhUTUxFbGVtZW50XHJcbiAgICAgIHNldHRpbmdzLm1lbnVDb21tYW5kcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGxldCB0aXBcclxuICAgICAgICBpZiAoXCJTdWJtZW51Q29tbWFuZHNcIiBpbiBpdGVtKSB7XHJcbiAgICAgICAgICBsZXQgX2J0bjogYW55O1xyXG4gICAgXHJcbiAgICAgICAgICBpZiAoYnRud2lkdGggPj0gbGVhZndpZHRoIC0gMjYgKiA0ICYmIGxlYWZ3aWR0aCA+IDEwMCkge1xyXG4gICAgICAgICAgICAvL+ivtOaYjuW3sue7j+a6ouWHulxyXG4gICAgICAgICAgICBwbHVnaW4uc2V0SVNfTU9SRV9CdXR0b24odHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vIGdsb2JhbFRoaXMuSVNfTU9SRV9CdXR0b24gPSB0cnVlOyAvL+mcgOimgea3u+WKoOabtOWkmuaMiemSrlxyXG4gICAgICAgICAgICBfYnRuID0gbmV3IEJ1dHRvbkNvbXBvbmVudChjTWVudVRvb2xiYXJQb3BvdmVyQmFyKTtcclxuICAgICAgICAgIH0gZWxzZSBfYnRuID0gbmV3IEJ1dHRvbkNvbXBvbmVudChjTWVudVRvb2xiYXIpO1xyXG5cclxuICAgICAgICAgIF9idG4uc2V0Q2xhc3MoXCJjTWVudVRvb2xiYXJDb21tYW5kc3ViSXRlbVwiICsgaW5kZXgpO1xyXG4gICAgICAgICAgaWYoaW5kZXggPj0gc2V0dGluZ3MuY01lbnVOdW1Sb3dzKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBfYnRuLnNldENsYXNzKFwiY01lbnVUb29sYmFyU2Vjb25kXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWYoc2V0dGluZ3MucG9zaXRpb25TdHlsZSAhPSBcInRvcFwiKSBcclxuICAgICAgICAgICAgICBfYnRuLmJ1dHRvbkVsLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbC1wb3NpdGlvbicsJ3RvcCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGNoZWNrSHRtbChpdGVtLmljb24pXHJcbiAgICAgICAgICAgID8gKF9idG4uYnV0dG9uRWwuaW5uZXJIVE1MID0gaXRlbS5pY29uKVxyXG4gICAgICAgICAgICA6IF9idG4uc2V0SWNvbihpdGVtLmljb24pO1xyXG5cclxuICAgICAgICAgIC8vIGxldCBfX2J0bndpZHRoO1xyXG4gICAgICAgICAgLy8gaWYgKF9idG4uYnV0dG9uRWwub2Zmc2V0V2lkdGggPiAxMDApIF9fYnRud2lkdGggPSAyNjtcclxuICAgICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgICAgLy8gICBpZiAoX2J0bi5idXR0b25FbC5vZmZzZXRXaWR0aCA8IDI2KSBfX2J0bndpZHRoID0gMjY7XHJcbiAgICAgICAgICAvLyAgIGVsc2UgX19idG53aWR0aCA9IF9idG4uYnV0dG9uRWwub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICBidG53aWR0aCArPSAyNiArIDI7XHJcbiAgICAgICAgICBsZXQgc3VibWVudSA9IGNyZWF0ZURpdihcInN1Yml0ZW1cIik7XHJcbiAgICAgICAgICBpZiAoc3VibWVudSkge1xyXG4gICAgICAgICAgICBpdGVtLlN1Ym1lbnVDb21tYW5kcy5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgIChzdWJpdGVtOiB7IG5hbWU6IHN0cmluZzsgaWQ6IGFueTsgaWNvbjogc3RyaW5nIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBob3RrZXkgPSBnZXRIb3RrZXkoYXBwLCBzdWJpdGVtLmlkKTtcclxuICAgICAgICAgICAgICAgIGhvdGtleSA9PSBcIuKAk1wiID8gdGlwID0gc3ViaXRlbS5uYW1lIDogdGlwID0gc3ViaXRlbS5uYW1lICsgXCIoXCIgKyBob3RrZXkgKyBcIilcIjtcclxuICAgICAgICAgICAgICAgIGxldCBzdWJfYnRuID0gbmV3IEJ1dHRvbkNvbXBvbmVudChzdWJtZW51KVxyXG4gICAgICAgICAgICAgICAgICAuc2V0VG9vbHRpcCh0aXApXHJcbiAgICAgICAgICAgICAgICAgIC5zZXRDbGFzcyhcIm1lbnUtaXRlbVwiKVxyXG4gICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLmNvbW1hbmRzLmV4ZWN1dGVDb21tYW5kQnlJZChzdWJpdGVtLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLmNNZW51VmlzaWJpbGl0eSA9PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgIGNNZW51VG9vbGJhci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5wb3NpdGlvblN0eWxlID09IFwiZm9sbG93aW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY01lbnVUb29sYmFyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGNNZW51VG9vbGJhci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgaWYoaW5kZXggPCBzZXR0aW5ncy5jTWVudU51bVJvd3MpXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihzZXR0aW5ncy5wb3NpdGlvblN0eWxlICE9IFwidG9wXCIpIFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Yl9idG4uYnV0dG9uRWwuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsLXBvc2l0aW9uJywndG9wJylcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2hlY2tIdG1sKHN1Yml0ZW0uaWNvbilcclxuICAgICAgICAgICAgICAgICAgPyAoc3ViX2J0bi5idXR0b25FbC5pbm5lckhUTUwgPSBzdWJpdGVtLmljb24pXHJcbiAgICAgICAgICAgICAgICAgIDogc3ViX2J0bi5zZXRJY29uKHN1Yml0ZW0uaWNvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgX2J0bi5idXR0b25FbC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIHN1Ym1lbnUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGl0ZW0uaWQgPT0gXCJlZGl0aW5nLXRvb2xiYXI6Y2hhbmdlLWZvbnQtY29sb3JcIikge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9uMiA9IG5ldyBCdXR0b25Db21wb25lbnQoY01lbnVUb29sYmFyKTtcclxuICAgICAgICAgICAgYnV0dG9uMlxyXG4gICAgICAgICAgICAgIC5zZXRDbGFzcyhcImNNZW51VG9vbGJhckNvbW1hbmRzdWJJdGVtLWZvbnQtY29sb3JcIilcclxuICAgICAgICAgICAgICAuc2V0VG9vbHRpcCh0KFwiRm9udCBDb2xvcnNcIikpXHJcbiAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBhcHAuY29tbWFuZHMuZXhlY3V0ZUNvbW1hbmRCeUlkKGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLmNNZW51VmlzaWJpbGl0eSA9PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgY01lbnVUb29sYmFyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5wb3NpdGlvblN0eWxlID09IFwiZm9sbG93aW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjTWVudVRvb2xiYXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBjTWVudVRvb2xiYXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjaGVja0h0bWwoaXRlbS5pY29uKVxyXG4gICAgICAgICAgICAgID8gKGJ1dHRvbjIuYnV0dG9uRWwuaW5uZXJIVE1MID0gaXRlbS5pY29uKVxyXG4gICAgICAgICAgICAgIDogYnV0dG9uMi5zZXRJY29uKGl0ZW0uaWNvbik7XHJcblxyXG4gICAgICAgICAgICBidG53aWR0aCArPSAyNjtcclxuICAgICAgICAgICAgLy8gIGxldCBTZWxlY3Rpb24gPSBjcmVhdGVEaXYoXCJ0cmlhbmdsZS1pY29uXCIpO1xyXG4gICAgICAgICAgICBsZXQgc3VibWVudTIgPSBjcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgc3VibWVudTIuYWRkQ2xhc3MoXCJzdWJpdGVtXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN1Ym1lbnUyKSB7XHJcbiAgICAgICAgICAgICAgc3VibWVudTIuaW5uZXJIVE1MID0gY29sb3JwaWNrZXIocGx1Z2luKTtcclxuXHJcbiAgICAgICAgICAgICAgYnV0dG9uMi5idXR0b25FbC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIHN1Ym1lbnUyKTtcclxuICAgICAgICAgICAgICAvLyAgICBpZiAoc2V0dGluZ3MuY01lbnVGb250Q29sb3IpXHJcbiAgICAgICAgICAgICAgLy8gICAgIGFjdGl2ZURvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhbmdlLWZvbnQtY29sb3ItaWNvblwiKS5zdHlsZS5maWxsID0gc2V0dGluZ3MuY01lbnVGb250Q29sb3I7XHJcbiAgICAgICAgICAgICAgY3JlYXRlVGFibGVjZWxsKGFwcCwgcGx1Z2luLCBcIngtY29sb3ItcGlja2VyLXRhYmxlXCIpO1xyXG4gICAgICAgICAgICAgIGxldCBlbCA9IHN1Ym1lbnUyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICBcIi54LWNvbG9yLXBpY2tlci13cmFwcGVyXCJcclxuICAgICAgICAgICAgICApIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgICBsZXQgYnV0dG9uMyA9IG5ldyBCdXR0b25Db21wb25lbnQoZWwpO1xyXG4gICAgICAgICAgICAgIGJ1dHRvbjNcclxuICAgICAgICAgICAgICAgIC5zZXRJY29uKFwicGFpbnRicnVzaFwiKVxyXG4gICAgICAgICAgICAgICAgLnNldFRvb2x0aXAodChcIkZvcm1hdCBCcnVzaFwiKSlcclxuICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcXVpdGVGb3JtYXRicnVzaGVzKHBsdWdpbik7XHJcbiAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXRFTl9Gb250Q29sb3JfRm9ybWF0X0JydXNoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgZ2xvYmFsVGhpcy5FTl9Gb250Q29sb3JfRm9ybWF0X0JydXNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgcGx1Z2luLlRlbXBfTm90aWNlID0gbmV3IE5vdGljZShcclxuICAgICAgICAgICAgICAgICAgICB0KFwiRm9udC1Db2xvciBmb3JtYXR0aW5nIGJydXNoIE9OIVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnV0dG9uNCA9IG5ldyBCdXR0b25Db21wb25lbnQoZWwpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uNFxyXG4gICAgICAgICAgICAgICAgICAuc2V0SWNvbihcInBhbGV0dGVcIilcclxuICAgICAgICAgICAgICAgICAgLnNldFRvb2x0aXAodChcIkN1c3RvbSBGb250IENvbG9yXCIpKVxyXG4gICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLnNldHRpbmcub3BlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcC5zZXR0aW5nLm9wZW5UYWJCeUlkKFwiZWRpdGluZy10b29sYmFyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHNldHRpbmdFSSA9IGFwcC5zZXR0aW5nLmFjdGl2ZVRhYi5jb250YWluZXJFbC5xdWVyeVNlbGVjdG9yKFwiLmN1c3RvbV9mb250XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ0VJKSB7IHNldHRpbmdFSS5hZGRDbGFzcz8uKFwidG9vbGJhci1jdGFcIik7IH1cclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xyXG4gIFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmlkID09IFwiZWRpdGluZy10b29sYmFyOmNoYW5nZS1iYWNrZ3JvdW5kLWNvbG9yXCIpIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbjIgPSBuZXcgQnV0dG9uQ29tcG9uZW50KGNNZW51VG9vbGJhcik7XHJcbiAgICAgICAgICAgIGJ1dHRvbjJcclxuICAgICAgICAgICAgICAuc2V0Q2xhc3MoXCJjTWVudVRvb2xiYXJDb21tYW5kc3ViSXRlbS1mb250LWNvbG9yXCIpXHJcbiAgICAgICAgICAgICAgLnNldFRvb2x0aXAodChcIkJhY2tncm91bmQgY29sb3JcIikpXHJcbiAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBhcHAuY29tbWFuZHMuZXhlY3V0ZUNvbW1hbmRCeUlkKGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLmNNZW51VmlzaWJpbGl0eSA9PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgY01lbnVUb29sYmFyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5wb3NpdGlvblN0eWxlID09IFwiZm9sbG93aW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjTWVudVRvb2xiYXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBjTWVudVRvb2xiYXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjaGVja0h0bWwoaXRlbS5pY29uKVxyXG4gICAgICAgICAgICAgID8gKGJ1dHRvbjIuYnV0dG9uRWwuaW5uZXJIVE1MID0gaXRlbS5pY29uKVxyXG4gICAgICAgICAgICAgIDogYnV0dG9uMi5zZXRJY29uKGl0ZW0uaWNvbik7XHJcblxyXG4gICAgICAgICAgICBidG53aWR0aCArPSAyNjtcclxuICAgICAgICAgICAgLy8gIGxldCBTZWxlY3Rpb24gPSBjcmVhdGVEaXYoXCJ0cmlhbmdsZS1pY29uXCIpO1xyXG4gICAgICAgICAgICBsZXQgc3VibWVudTIgPSBjcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgc3VibWVudTIuYWRkQ2xhc3MoXCJzdWJpdGVtXCIpO1xyXG4gICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKGJ0bndpZHRoLGl0ZW0ubmFtZSlcclxuICAgICAgICAgICAgaWYgKHN1Ym1lbnUyKSB7XHJcbiAgICAgICAgICAgICAgc3VibWVudTIuaW5uZXJIVE1MID0gYmFja2NvbG9ycGlja2VyKHBsdWdpbik7XHJcblxyXG4gICAgICAgICAgICAgIGJ1dHRvbjIuYnV0dG9uRWwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJiZWdpblwiLCBzdWJtZW51Mik7XHJcbiAgICAgICAgICAgICAgLy8gaWYgKHBsdWdpbi5zZXR0aW5ncy5jTWVudUJhY2tncm91bmRDb2xvcilcclxuICAgICAgICAgICAgICAvLyAgYWN0aXZlRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFuZ2UtYmFja2dyb3VuZC1jb2xvci1pY29uXCIpLnN0eWxlLmZpbGwgPSBwbHVnaW4uc2V0dGluZ3MuY01lbnVCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgICAgY3JlYXRlVGFibGVjZWxsKGFwcCwgcGx1Z2luLCBcIngtYmFja2dyb3VuZGNvbG9yLXBpY2tlci10YWJsZVwiKTtcclxuICAgICAgICAgICAgICBsZXQgZWwgPSBzdWJtZW51Mi5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgICAgXCIueC1jb2xvci1waWNrZXItd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgbGV0IGJ1dHRvbjMgPSBuZXcgQnV0dG9uQ29tcG9uZW50KGVsKTtcclxuICAgICAgICAgICAgICBidXR0b24zXHJcbiAgICAgICAgICAgICAgICAuc2V0SWNvbihcInBhaW50YnJ1c2hcIilcclxuICAgICAgICAgICAgICAgIC5zZXRUb29sdGlwKHQoXCJGb3JtYXQgQnJ1c2hcIikpXHJcbiAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHF1aXRlRm9ybWF0YnJ1c2hlcyhwbHVnaW4pO1xyXG4gICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0RU5fQkdfRm9ybWF0X0JydXNoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgZ2xvYmFscGx1Z2luLkVOX0JHX0Zvcm1hdF9CcnVzaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIHBsdWdpbi5UZW1wX05vdGljZSA9IG5ldyBOb3RpY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgdChcIkZvbnQtQ29sb3IgZm9ybWF0dGluZyBicnVzaCBPTiFcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ1dHRvbjQgPSBuZXcgQnV0dG9uQ29tcG9uZW50KGVsKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbjRcclxuICAgICAgICAgICAgICAgICAgLnNldEljb24oXCJwYWxldHRlXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5zZXRUb29sdGlwKHQoXCJDdXN0b20gQmFja2dyb3VkIENvbG9yXCIpKVxyXG4gICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLnNldHRpbmcub3BlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcC5zZXR0aW5nLm9wZW5UYWJCeUlkKFwiZWRpdGluZy10b29sYmFyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHNldHRpbmdFSSA9IGFwcC5zZXR0aW5nLmFjdGl2ZVRhYi5jb250YWluZXJFbC5xdWVyeVNlbGVjdG9yKFwiLmN1c3RvbV9iZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdFSSkgeyBzZXR0aW5nRUkuYWRkQ2xhc3M/LihcInRvb2xiYXItY3RhXCIpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcclxuICBcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9uO1xyXG4gICAgICAgICAgICBpZiAoYnRud2lkdGggPj0gbGVhZndpZHRoIC0gMjYgKiA0ICYmIGxlYWZ3aWR0aCA+IDEwMCkge1xyXG4gICAgICAgICAgICAgIC8v6K+05piO5bey57uP5rqi5Ye6XHJcbiAgICAgICAgICAgICAgcGx1Z2luLnNldElTX01PUkVfQnV0dG9uKHRydWUpO1xyXG4gICAgICAgICAgICAgIC8vZ2xvYmFscGx1Z2luSVNfTU9SRV9CdXR0b24gPSB0cnVlOyAvL+mcgOimgea3u+WKoOabtOWkmuaMiemSrlxyXG4gICAgICAgICAgICAgIGJ1dHRvbiA9IG5ldyBCdXR0b25Db21wb25lbnQoY01lbnVUb29sYmFyUG9wb3ZlckJhcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBidXR0b24gPSBuZXcgQnV0dG9uQ29tcG9uZW50KGNNZW51VG9vbGJhcik7XHJcbiAgICAgICAgICAgIGxldCBob3RrZXkgPSBnZXRIb3RrZXkoYXBwLCBpdGVtLmlkKTtcclxuICAgICAgICAgICAgaG90a2V5ID09IFwi4oCTXCIgPyB0aXAgPSBpdGVtLm5hbWUgOiB0aXAgPSBpdGVtLm5hbWUgKyBcIihcIiArIGhvdGtleSArIFwiKVwiO1xyXG4gICAgICAgICAgICBidXR0b24uc2V0VG9vbHRpcCh0aXApLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgIGFwcC5jb21tYW5kcy5leGVjdXRlQ29tbWFuZEJ5SWQoaXRlbS5pZCk7XHJcbiAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLmNNZW51VmlzaWJpbGl0eSA9PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgIGNNZW51VG9vbGJhci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5wb3NpdGlvblN0eWxlID09IFwiZm9sbG93aW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgY01lbnVUb29sYmFyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGNNZW51VG9vbGJhci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRDbGFzcyhcImNNZW51VG9vbGJhckNvbW1hbmRJdGVtXCIpO1xyXG4gICAgICAgICAgICBpZihpbmRleCA+PSBzZXR0aW5ncy5jTWVudU51bVJvd3MpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGJ1dHRvbi5zZXRDbGFzcyhcImNNZW51VG9vbGJhclNlY29uZFwiKTtcclxuICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICBpZihzZXR0aW5ncy5wb3NpdGlvblN0eWxlICE9IFwidG9wXCIpIFxyXG4gICAgICAgICAgICAgIGJ1dHRvbi5idXR0b25FbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwtcG9zaXRpb24nLCd0b3AnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09IFwiY01lbnVUb29sYmFyLURpdmlkZXItTGluZVwiKVxyXG4gICAgICAgICAgICAgIGJ1dHRvbi5zZXRDbGFzcyhcImNNZW51VG9vbGJhci1EaXZpZGVyLUxpbmVcIik7XHJcbiAgICAgICAgICAgIGNoZWNrSHRtbChpdGVtLmljb24pXHJcbiAgICAgICAgICAgICAgPyAoYnV0dG9uLmJ1dHRvbkVsLmlubmVySFRNTCA9IGl0ZW0uaWNvbilcclxuICAgICAgICAgICAgICA6IGJ1dHRvbi5zZXRJY29uKGl0ZW0uaWNvbik7XHJcbiAgICAgICAgICAgIC8vbGV0IF9fYnRud2lkdGgyO1xyXG4gICAgICAgICAgICAvLyBpZiAoYnV0dG9uLmJ1dHRvbkVsLm9mZnNldFdpZHRoID4gMTAwKSBfX2J0bndpZHRoMiA9IDI2O1xyXG4gICAgICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAgICAgLy8gICBpZiAoYnV0dG9uLmJ1dHRvbkVsLm9mZnNldFdpZHRoIDwgMjYpIF9fYnRud2lkdGgyID0gMjY7XHJcbiAgICAgICAgICAgIC8vICAgZWxzZSBfX2J0bndpZHRoMiA9IGJ1dHRvbi5idXR0b25FbC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgYnRud2lkdGggKz0gMjY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNyZWF0ZU1vcmVtZW51KGFwcCwgcGx1Z2luLCBjTWVudVRvb2xiYXIpO1xyXG4gICAgICBpZiAoTWF0aC5hYnMocGx1Z2luLnNldHRpbmdzLmNNZW51V2lkdGggLSBOdW1iZXIoYnRud2lkdGgpKSA+IDMwKSB7XHJcbiAgICAgICAgcGx1Z2luLnNldHRpbmdzLmNNZW51V2lkdGggPSBOdW1iZXIoYnRud2lkdGgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCB2aWV3ID0gYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKEl0ZW1WaWV3KTtcclxuICAgIGlmKHZpZXc/LmdldFZpZXdUeXBlKCk9PT1cIm1hcmtkb3duXCIgfHx2aWV3Py5nZXRWaWV3VHlwZSgpPT09XCJjYW52YXNcIil7XHJcbiAgLy8gIGxldCBNYXJrZG93biA9IGFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xyXG4gICAvLyBpZiAoTWFya2Rvd24pIHtcclxuICAgICAgaWYgKGlzRXhpc3Rvb2xiYXIoYXBwLCBwbHVnaW4uc2V0dGluZ3MpKSByZXR1cm47XHJcblxyXG4gICAgICBnZW5lcmF0ZU1lbnUoKTtcclxuXHJcbiAgICAgIHNldEJvdHRvbVZhbHVlKHNldHRpbmdzKTtcclxuXHJcbiAgICAgIHNldHN2Z0NvbG9yKHNldHRpbmdzLmNNZW51Rm9udENvbG9yLCBzZXR0aW5ncy5jTWVudUJhY2tncm91bmRDb2xvcilcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyAgc2VsZkRlc3RydWN0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIGNyZWF0ZU1lbnUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0c3ZnQ29sb3IoZm9udGNvbG9yOiBzdHJpbmcsIGJnY29sb3I6IHN0cmluZykge1xyXG4gIHJlcXVpcmVBcGlWZXJzaW9uKFwiMC4xNS4wXCIpID8gYWN0aXZlRG9jdW1lbnQgPSBhY3RpdmVXaW5kb3cuZG9jdW1lbnQgOiBhY3RpdmVEb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcclxuICBsZXQgZm9udF9jb2xvdXJfZG9tID0gYWN0aXZlRG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjaGFuZ2UtZm9udC1jb2xvci1pY29uXCIpXHJcbiAgaWYgKGZvbnRfY29sb3VyX2RvbSkge1xyXG4gICAgZm9udF9jb2xvdXJfZG9tLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGxldCBlbGUgPSBlbGVtZW50IGFzIEhUTUxFbGVtZW50XHJcbiAgICAgIGVsZS5zdHlsZS5maWxsID0gZm9udGNvbG9yO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsZXQgYmFja2dyb3VuZF9jb2xvdXJfZG9tID0gYWN0aXZlRG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjaGFuZ2UtYmFja2dyb3VuZC1jb2xvci1pY29uXCIpXHJcbiAgaWYgKGJhY2tncm91bmRfY29sb3VyX2RvbSkge1xyXG4gICAgYmFja2dyb3VuZF9jb2xvdXJfZG9tLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGxldCBlbGUgPSBlbGVtZW50IGFzIEhUTUxFbGVtZW50XHJcbiAgICAgIGVsZS5zdHlsZS5maWxsID0gYmdjb2xvcjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn0iLCIvKiohXG4gKiBTb3J0YWJsZSAxLjE1LjBcbiAqIEBhdXRob3JcdFJ1YmFYYSAgIDx0cmFzaEBydWJheGEub3JnPlxuICogQGF1dGhvclx0b3dlbm0gICAgPG93ZW4yMzM1NUBnbWFpbC5jb20+XG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuXG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSB7XG4gICAgICBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG5cbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG52YXIgdmVyc2lvbiA9IFwiMS4xNS4wXCI7XG5cbmZ1bmN0aW9uIHVzZXJBZ2VudChwYXR0ZXJuKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubmF2aWdhdG9yKSB7XG4gICAgcmV0dXJuICEhIC8qQF9fUFVSRV9fKi9uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKHBhdHRlcm4pO1xuICB9XG59XG5cbnZhciBJRTExT3JMZXNzID0gdXNlckFnZW50KC8oPzpUcmlkZW50LipydlsgOl0/MTFcXC58bXNpZXxpZW1vYmlsZXxXaW5kb3dzIFBob25lKS9pKTtcbnZhciBFZGdlID0gdXNlckFnZW50KC9FZGdlL2kpO1xudmFyIEZpcmVGb3ggPSB1c2VyQWdlbnQoL2ZpcmVmb3gvaSk7XG52YXIgU2FmYXJpID0gdXNlckFnZW50KC9zYWZhcmkvaSkgJiYgIXVzZXJBZ2VudCgvY2hyb21lL2kpICYmICF1c2VyQWdlbnQoL2FuZHJvaWQvaSk7XG52YXIgSU9TID0gdXNlckFnZW50KC9pUChhZHxvZHxob25lKS9pKTtcbnZhciBDaHJvbWVGb3JBbmRyb2lkID0gdXNlckFnZW50KC9jaHJvbWUvaSkgJiYgdXNlckFnZW50KC9hbmRyb2lkL2kpO1xuXG52YXIgY2FwdHVyZU1vZGUgPSB7XG4gIGNhcHR1cmU6IGZhbHNlLFxuICBwYXNzaXZlOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gb24oZWwsIGV2ZW50LCBmbikge1xuICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgIUlFMTFPckxlc3MgJiYgY2FwdHVyZU1vZGUpO1xufVxuXG5mdW5jdGlvbiBvZmYoZWwsIGV2ZW50LCBmbikge1xuICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgIUlFMTFPckxlc3MgJiYgY2FwdHVyZU1vZGUpO1xufVxuXG5mdW5jdGlvbiBtYXRjaGVzKFxuLyoqSFRNTEVsZW1lbnQqL1xuZWwsXG4vKipTdHJpbmcqL1xuc2VsZWN0b3IpIHtcbiAgaWYgKCFzZWxlY3RvcikgcmV0dXJuO1xuICBzZWxlY3RvclswXSA9PT0gJz4nICYmIChzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cmluZygxKSk7XG5cbiAgaWYgKGVsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChlbC5tYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiBlbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICAgIH0gZWxzZSBpZiAoZWwubXNNYXRjaGVzU2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGVsLm1zTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH0gZWxzZSBpZiAoZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFBhcmVudE9ySG9zdChlbCkge1xuICByZXR1cm4gZWwuaG9zdCAmJiBlbCAhPT0gZG9jdW1lbnQgJiYgZWwuaG9zdC5ub2RlVHlwZSA/IGVsLmhvc3QgOiBlbC5wYXJlbnROb2RlO1xufVxuXG5mdW5jdGlvbiBjbG9zZXN0KFxuLyoqSFRNTEVsZW1lbnQqL1xuZWwsXG4vKipTdHJpbmcqL1xuc2VsZWN0b3IsXG4vKipIVE1MRWxlbWVudCovXG5jdHgsIGluY2x1ZGVDVFgpIHtcbiAgaWYgKGVsKSB7XG4gICAgY3R4ID0gY3R4IHx8IGRvY3VtZW50O1xuXG4gICAgZG8ge1xuICAgICAgaWYgKHNlbGVjdG9yICE9IG51bGwgJiYgKHNlbGVjdG9yWzBdID09PSAnPicgPyBlbC5wYXJlbnROb2RlID09PSBjdHggJiYgbWF0Y2hlcyhlbCwgc2VsZWN0b3IpIDogbWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB8fCBpbmNsdWRlQ1RYICYmIGVsID09PSBjdHgpIHtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWwgPT09IGN0eCkgYnJlYWs7XG4gICAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gICAgfSB3aGlsZSAoZWwgPSBnZXRQYXJlbnRPckhvc3QoZWwpKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUl9TUEFDRSA9IC9cXHMrL2c7XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsLCBuYW1lLCBzdGF0ZSkge1xuICBpZiAoZWwgJiYgbmFtZSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIGVsLmNsYXNzTGlzdFtzdGF0ZSA/ICdhZGQnIDogJ3JlbW92ZSddKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gKCcgJyArIGVsLmNsYXNzTmFtZSArICcgJykucmVwbGFjZShSX1NQQUNFLCAnICcpLnJlcGxhY2UoJyAnICsgbmFtZSArICcgJywgJyAnKTtcbiAgICAgIGVsLmNsYXNzTmFtZSA9IChjbGFzc05hbWUgKyAoc3RhdGUgPyAnICcgKyBuYW1lIDogJycpKS5yZXBsYWNlKFJfU1BBQ0UsICcgJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNzcyhlbCwgcHJvcCwgdmFsKSB7XG4gIHZhciBzdHlsZSA9IGVsICYmIGVsLnN0eWxlO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIGlmICh2YWwgPT09IHZvaWQgMCkge1xuICAgICAgaWYgKGRvY3VtZW50LmRlZmF1bHRWaWV3ICYmIGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUpIHtcbiAgICAgICAgdmFsID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgJycpO1xuICAgICAgfSBlbHNlIGlmIChlbC5jdXJyZW50U3R5bGUpIHtcbiAgICAgICAgdmFsID0gZWwuY3VycmVudFN0eWxlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcCA9PT0gdm9pZCAwID8gdmFsIDogdmFsW3Byb3BdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIShwcm9wIGluIHN0eWxlKSAmJiBwcm9wLmluZGV4T2YoJ3dlYmtpdCcpID09PSAtMSkge1xuICAgICAgICBwcm9wID0gJy13ZWJraXQtJyArIHByb3A7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlW3Byb3BdID0gdmFsICsgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gJycgOiAncHgnKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0cml4KGVsLCBzZWxmT25seSkge1xuICB2YXIgYXBwbGllZFRyYW5zZm9ybXMgPSAnJztcblxuICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgIGFwcGxpZWRUcmFuc2Zvcm1zID0gZWw7XG4gIH0gZWxzZSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRyYW5zZm9ybSA9IGNzcyhlbCwgJ3RyYW5zZm9ybScpO1xuXG4gICAgICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgICAgIGFwcGxpZWRUcmFuc2Zvcm1zID0gdHJhbnNmb3JtICsgJyAnICsgYXBwbGllZFRyYW5zZm9ybXM7XG4gICAgICB9XG4gICAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG5cbiAgICB9IHdoaWxlICghc2VsZk9ubHkgJiYgKGVsID0gZWwucGFyZW50Tm9kZSkpO1xuICB9XG5cbiAgdmFyIG1hdHJpeEZuID0gd2luZG93LkRPTU1hdHJpeCB8fCB3aW5kb3cuV2ViS2l0Q1NTTWF0cml4IHx8IHdpbmRvdy5DU1NNYXRyaXggfHwgd2luZG93Lk1TQ1NTTWF0cml4O1xuICAvKmpzaGludCAtVzA1NiAqL1xuXG4gIHJldHVybiBtYXRyaXhGbiAmJiBuZXcgbWF0cml4Rm4oYXBwbGllZFRyYW5zZm9ybXMpO1xufVxuXG5mdW5jdGlvbiBmaW5kKGN0eCwgdGFnTmFtZSwgaXRlcmF0b3IpIHtcbiAgaWYgKGN0eCkge1xuICAgIHZhciBsaXN0ID0gY3R4LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbiA9IGxpc3QubGVuZ3RoO1xuXG4gICAgaWYgKGl0ZXJhdG9yKSB7XG4gICAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgICBpdGVyYXRvcihsaXN0W2ldLCBpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuXG4gIHJldHVybiBbXTtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpIHtcbiAgdmFyIHNjcm9sbGluZ0VsZW1lbnQgPSBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50O1xuXG4gIGlmIChzY3JvbGxpbmdFbGVtZW50KSB7XG4gICAgcmV0dXJuIHNjcm9sbGluZ0VsZW1lbnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBcImJvdW5kaW5nIGNsaWVudCByZWN0XCIgb2YgZ2l2ZW4gZWxlbWVudFxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgICAgICAgICAgICAgICAgICAgICBUaGUgZWxlbWVudCB3aG9zZSBib3VuZGluZ0NsaWVudFJlY3QgaXMgd2FudGVkXG4gKiBAcGFyYW0gIHtbQm9vbGVhbl19IHJlbGF0aXZlVG9Db250YWluaW5nQmxvY2sgIFdoZXRoZXIgdGhlIHJlY3Qgc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBjb250YWluaW5nIGJsb2NrIG9mIChpbmNsdWRpbmcpIHRoZSBjb250YWluZXJcbiAqIEBwYXJhbSAge1tCb29sZWFuXX0gcmVsYXRpdmVUb05vblN0YXRpY1BhcmVudCAgV2hldGhlciB0aGUgcmVjdCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIHJlbGF0aXZlIHBhcmVudCBvZiAoaW5jbHVkaW5nKSB0aGUgY29udGFpZW5yXG4gKiBAcGFyYW0gIHtbQm9vbGVhbl19IHVuZG9TY2FsZSAgICAgICAgICAgICAgICAgIFdoZXRoZXIgdGhlIGNvbnRhaW5lcidzIHNjYWxlKCkgc2hvdWxkIGJlIHVuZG9uZVxuICogQHBhcmFtICB7W0hUTUxFbGVtZW50XX0gY29udGFpbmVyICAgICAgICAgICAgICBUaGUgcGFyZW50IHRoZSBlbGVtZW50IHdpbGwgYmUgcGxhY2VkIGluXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBib3VuZGluZ0NsaWVudFJlY3Qgb2YgZWwsIHdpdGggc3BlY2lmaWVkIGFkanVzdG1lbnRzXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRSZWN0KGVsLCByZWxhdGl2ZVRvQ29udGFpbmluZ0Jsb2NrLCByZWxhdGl2ZVRvTm9uU3RhdGljUGFyZW50LCB1bmRvU2NhbGUsIGNvbnRhaW5lcikge1xuICBpZiAoIWVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAmJiBlbCAhPT0gd2luZG93KSByZXR1cm47XG4gIHZhciBlbFJlY3QsIHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCwgaGVpZ2h0LCB3aWR0aDtcblxuICBpZiAoZWwgIT09IHdpbmRvdyAmJiBlbC5wYXJlbnROb2RlICYmIGVsICE9PSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCkpIHtcbiAgICBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0b3AgPSBlbFJlY3QudG9wO1xuICAgIGxlZnQgPSBlbFJlY3QubGVmdDtcbiAgICBib3R0b20gPSBlbFJlY3QuYm90dG9tO1xuICAgIHJpZ2h0ID0gZWxSZWN0LnJpZ2h0O1xuICAgIGhlaWdodCA9IGVsUmVjdC5oZWlnaHQ7XG4gICAgd2lkdGggPSBlbFJlY3Qud2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgdG9wID0gMDtcbiAgICBsZWZ0ID0gMDtcbiAgICBib3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgcmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfVxuXG4gIGlmICgocmVsYXRpdmVUb0NvbnRhaW5pbmdCbG9jayB8fCByZWxhdGl2ZVRvTm9uU3RhdGljUGFyZW50KSAmJiBlbCAhPT0gd2luZG93KSB7XG4gICAgLy8gQWRqdXN0IGZvciB0cmFuc2xhdGUoKVxuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lciB8fCBlbC5wYXJlbnROb2RlOyAvLyBzb2x2ZXMgIzExMjMgKHNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM3OTUzODA2LzYwODgzMTIpXG4gICAgLy8gTm90IG5lZWRlZCBvbiA8PSBJRTExXG5cbiAgICBpZiAoIUlFMTFPckxlc3MpIHtcbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICYmIChjc3MoY29udGFpbmVyLCAndHJhbnNmb3JtJykgIT09ICdub25lJyB8fCByZWxhdGl2ZVRvTm9uU3RhdGljUGFyZW50ICYmIGNzcyhjb250YWluZXIsICdwb3NpdGlvbicpICE9PSAnc3RhdGljJykpIHtcbiAgICAgICAgICB2YXIgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgLy8gU2V0IHJlbGF0aXZlIHRvIGVkZ2VzIG9mIHBhZGRpbmcgYm94IG9mIGNvbnRhaW5lclxuXG4gICAgICAgICAgdG9wIC09IGNvbnRhaW5lclJlY3QudG9wICsgcGFyc2VJbnQoY3NzKGNvbnRhaW5lciwgJ2JvcmRlci10b3Atd2lkdGgnKSk7XG4gICAgICAgICAgbGVmdCAtPSBjb250YWluZXJSZWN0LmxlZnQgKyBwYXJzZUludChjc3MoY29udGFpbmVyLCAnYm9yZGVyLWxlZnQtd2lkdGgnKSk7XG4gICAgICAgICAgYm90dG9tID0gdG9wICsgZWxSZWN0LmhlaWdodDtcbiAgICAgICAgICByaWdodCA9IGxlZnQgKyBlbFJlY3Qud2lkdGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuXG4gICAgICB9IHdoaWxlIChjb250YWluZXIgPSBjb250YWluZXIucGFyZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHVuZG9TY2FsZSAmJiBlbCAhPT0gd2luZG93KSB7XG4gICAgLy8gQWRqdXN0IGZvciBzY2FsZSgpXG4gICAgdmFyIGVsTWF0cml4ID0gbWF0cml4KGNvbnRhaW5lciB8fCBlbCksXG4gICAgICAgIHNjYWxlWCA9IGVsTWF0cml4ICYmIGVsTWF0cml4LmEsXG4gICAgICAgIHNjYWxlWSA9IGVsTWF0cml4ICYmIGVsTWF0cml4LmQ7XG5cbiAgICBpZiAoZWxNYXRyaXgpIHtcbiAgICAgIHRvcCAvPSBzY2FsZVk7XG4gICAgICBsZWZ0IC89IHNjYWxlWDtcbiAgICAgIHdpZHRoIC89IHNjYWxlWDtcbiAgICAgIGhlaWdodCAvPSBzY2FsZVk7XG4gICAgICBib3R0b20gPSB0b3AgKyBoZWlnaHQ7XG4gICAgICByaWdodCA9IGxlZnQgKyB3aWR0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcDogdG9wLFxuICAgIGxlZnQ6IGxlZnQsXG4gICAgYm90dG9tOiBib3R0b20sXG4gICAgcmlnaHQ6IHJpZ2h0LFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufVxuLyoqXG4gKiBDaGVja3MgaWYgYSBzaWRlIG9mIGFuIGVsZW1lbnQgaXMgc2Nyb2xsZWQgcGFzdCBhIHNpZGUgb2YgaXRzIHBhcmVudHNcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSAgZWwgICAgICAgICAgIFRoZSBlbGVtZW50IHdobydzIHNpZGUgYmVpbmcgc2Nyb2xsZWQgb3V0IG9mIHZpZXcgaXMgaW4gcXVlc3Rpb25cbiAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgZWxTaWRlICAgICAgIFNpZGUgb2YgdGhlIGVsZW1lbnQgaW4gcXVlc3Rpb24gKCd0b3AnLCAnbGVmdCcsICdyaWdodCcsICdib3R0b20nKVxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgICBwYXJlbnRTaWRlICAgU2lkZSBvZiB0aGUgcGFyZW50IGluIHF1ZXN0aW9uICgndG9wJywgJ2xlZnQnLCAncmlnaHQnLCAnYm90dG9tJylcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAgICAgICAgICAgICAgIFRoZSBwYXJlbnQgc2Nyb2xsIGVsZW1lbnQgdGhhdCB0aGUgZWwncyBzaWRlIGlzIHNjcm9sbGVkIHBhc3QsIG9yIG51bGwgaWYgdGhlcmUgaXMgbm8gc3VjaCBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiBpc1Njcm9sbGVkUGFzdChlbCwgZWxTaWRlLCBwYXJlbnRTaWRlKSB7XG4gIHZhciBwYXJlbnQgPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbCwgdHJ1ZSksXG4gICAgICBlbFNpZGVWYWwgPSBnZXRSZWN0KGVsKVtlbFNpZGVdO1xuICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG5cbiAgd2hpbGUgKHBhcmVudCkge1xuICAgIHZhciBwYXJlbnRTaWRlVmFsID0gZ2V0UmVjdChwYXJlbnQpW3BhcmVudFNpZGVdLFxuICAgICAgICB2aXNpYmxlID0gdm9pZCAwO1xuXG4gICAgaWYgKHBhcmVudFNpZGUgPT09ICd0b3AnIHx8IHBhcmVudFNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgdmlzaWJsZSA9IGVsU2lkZVZhbCA+PSBwYXJlbnRTaWRlVmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aXNpYmxlID0gZWxTaWRlVmFsIDw9IHBhcmVudFNpZGVWYWw7XG4gICAgfVxuXG4gICAgaWYgKCF2aXNpYmxlKSByZXR1cm4gcGFyZW50O1xuICAgIGlmIChwYXJlbnQgPT09IGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKSkgYnJlYWs7XG4gICAgcGFyZW50ID0gZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQocGFyZW50LCBmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIEdldHMgbnRoIGNoaWxkIG9mIGVsLCBpZ25vcmluZyBoaWRkZW4gY2hpbGRyZW4sIHNvcnRhYmxlJ3MgZWxlbWVudHMgKGRvZXMgbm90IGlnbm9yZSBjbG9uZSBpZiBpdCdzIHZpc2libGUpXG4gKiBhbmQgbm9uLWRyYWdnYWJsZSBlbGVtZW50c1xuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgICAgIFRoZSBwYXJlbnQgZWxlbWVudFxuICogQHBhcmFtICB7TnVtYmVyfSBjaGlsZE51bSAgICAgIFRoZSBpbmRleCBvZiB0aGUgY2hpbGRcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyAgICAgICBQYXJlbnQgU29ydGFibGUncyBvcHRpb25zXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICAgICAgICAgVGhlIGNoaWxkIGF0IGluZGV4IGNoaWxkTnVtLCBvciBudWxsIGlmIG5vdCBmb3VuZFxuICovXG5cblxuZnVuY3Rpb24gZ2V0Q2hpbGQoZWwsIGNoaWxkTnVtLCBvcHRpb25zLCBpbmNsdWRlRHJhZ0VsKSB7XG4gIHZhciBjdXJyZW50Q2hpbGQgPSAwLFxuICAgICAgaSA9IDAsXG4gICAgICBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuO1xuXG4gIHdoaWxlIChpIDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgaWYgKGNoaWxkcmVuW2ldLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJyAmJiBjaGlsZHJlbltpXSAhPT0gU29ydGFibGUuZ2hvc3QgJiYgKGluY2x1ZGVEcmFnRWwgfHwgY2hpbGRyZW5baV0gIT09IFNvcnRhYmxlLmRyYWdnZWQpICYmIGNsb3Nlc3QoY2hpbGRyZW5baV0sIG9wdGlvbnMuZHJhZ2dhYmxlLCBlbCwgZmFsc2UpKSB7XG4gICAgICBpZiAoY3VycmVudENoaWxkID09PSBjaGlsZE51bSkge1xuICAgICAgICByZXR1cm4gY2hpbGRyZW5baV07XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRDaGlsZCsrO1xuICAgIH1cblxuICAgIGkrKztcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuLyoqXG4gKiBHZXRzIHRoZSBsYXN0IGNoaWxkIGluIHRoZSBlbCwgaWdub3JpbmcgZ2hvc3RFbCBvciBpbnZpc2libGUgZWxlbWVudHMgKGNsb25lcylcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAgICAgICBQYXJlbnQgZWxlbWVudFxuICogQHBhcmFtICB7c2VsZWN0b3J9IHNlbGVjdG9yICAgIEFueSBvdGhlciBlbGVtZW50cyB0aGF0IHNob3VsZCBiZSBpZ25vcmVkXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICAgICAgICAgVGhlIGxhc3QgY2hpbGQsIGlnbm9yaW5nIGdob3N0RWxcbiAqL1xuXG5cbmZ1bmN0aW9uIGxhc3RDaGlsZChlbCwgc2VsZWN0b3IpIHtcbiAgdmFyIGxhc3QgPSBlbC5sYXN0RWxlbWVudENoaWxkO1xuXG4gIHdoaWxlIChsYXN0ICYmIChsYXN0ID09PSBTb3J0YWJsZS5naG9zdCB8fCBjc3MobGFzdCwgJ2Rpc3BsYXknKSA9PT0gJ25vbmUnIHx8IHNlbGVjdG9yICYmICFtYXRjaGVzKGxhc3QsIHNlbGVjdG9yKSkpIHtcbiAgICBsYXN0ID0gbGFzdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICB9XG5cbiAgcmV0dXJuIGxhc3QgfHwgbnVsbDtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgaW5kZXggb2YgYW4gZWxlbWVudCB3aXRoaW4gaXRzIHBhcmVudCBmb3IgYSBzZWxlY3RlZCBzZXQgb2ZcbiAqIGVsZW1lbnRzXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSAge3NlbGVjdG9yfSBzZWxlY3RvclxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5cblxuZnVuY3Rpb24gaW5kZXgoZWwsIHNlbGVjdG9yKSB7XG4gIHZhciBpbmRleCA9IDA7XG5cbiAgaWYgKCFlbCB8fCAhZWwucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG5cblxuICB3aGlsZSAoZWwgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgaWYgKGVsLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdURU1QTEFURScgJiYgZWwgIT09IFNvcnRhYmxlLmNsb25lICYmICghc2VsZWN0b3IgfHwgbWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSkge1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIHNjcm9sbCBvZmZzZXQgb2YgdGhlIGdpdmVuIGVsZW1lbnQsIGFkZGVkIHdpdGggYWxsIHRoZSBzY3JvbGwgb2Zmc2V0cyBvZiBwYXJlbnQgZWxlbWVudHMuXG4gKiBUaGUgdmFsdWUgaXMgcmV0dXJuZWQgaW4gcmVhbCBwaXhlbHMuXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgICBPZmZzZXRzIGluIHRoZSBmb3JtYXQgb2YgW2xlZnQsIHRvcF1cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFJlbGF0aXZlU2Nyb2xsT2Zmc2V0KGVsKSB7XG4gIHZhciBvZmZzZXRMZWZ0ID0gMCxcbiAgICAgIG9mZnNldFRvcCA9IDAsXG4gICAgICB3aW5TY3JvbGxlciA9IGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcblxuICBpZiAoZWwpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgZWxNYXRyaXggPSBtYXRyaXgoZWwpLFxuICAgICAgICAgIHNjYWxlWCA9IGVsTWF0cml4LmEsXG4gICAgICAgICAgc2NhbGVZID0gZWxNYXRyaXguZDtcbiAgICAgIG9mZnNldExlZnQgKz0gZWwuc2Nyb2xsTGVmdCAqIHNjYWxlWDtcbiAgICAgIG9mZnNldFRvcCArPSBlbC5zY3JvbGxUb3AgKiBzY2FsZVk7XG4gICAgfSB3aGlsZSAoZWwgIT09IHdpblNjcm9sbGVyICYmIChlbCA9IGVsLnBhcmVudE5vZGUpKTtcbiAgfVxuXG4gIHJldHVybiBbb2Zmc2V0TGVmdCwgb2Zmc2V0VG9wXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG9iamVjdCB3aXRoaW4gdGhlIGdpdmVuIGFycmF5XG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyICAgQXJyYXkgdGhhdCBtYXkgb3IgbWF5IG5vdCBob2xkIHRoZSBvYmplY3RcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqICBBbiBvYmplY3QgdGhhdCBoYXMgYSBrZXktdmFsdWUgcGFpciB1bmlxdWUgdG8gYW5kIGlkZW50aWNhbCB0byBhIGtleS12YWx1ZSBwYWlyIGluIHRoZSBvYmplY3QgeW91IHdhbnQgdG8gZmluZFxuICogQHJldHVybiB7TnVtYmVyfSAgICAgIFRoZSBpbmRleCBvZiB0aGUgb2JqZWN0IGluIHRoZSBhcnJheSwgb3IgLTFcbiAqL1xuXG5cbmZ1bmN0aW9uIGluZGV4T2ZPYmplY3QoYXJyLCBvYmopIHtcbiAgZm9yICh2YXIgaSBpbiBhcnIpIHtcbiAgICBpZiAoIWFyci5oYXNPd25Qcm9wZXJ0eShpKSkgY29udGludWU7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkgJiYgb2JqW2tleV0gPT09IGFycltpXVtrZXldKSByZXR1cm4gTnVtYmVyKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoZWwsIGluY2x1ZGVTZWxmKSB7XG4gIC8vIHNraXAgdG8gd2luZG93XG4gIGlmICghZWwgfHwgIWVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkgcmV0dXJuIGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbiAgdmFyIGVsZW0gPSBlbDtcbiAgdmFyIGdvdFNlbGYgPSBmYWxzZTtcblxuICBkbyB7XG4gICAgLy8gd2UgZG9uJ3QgbmVlZCB0byBnZXQgZWxlbSBjc3MgaWYgaXQgaXNuJ3QgZXZlbiBvdmVyZmxvd2luZyBpbiB0aGUgZmlyc3QgcGxhY2UgKHBlcmZvcm1hbmNlKVxuICAgIGlmIChlbGVtLmNsaWVudFdpZHRoIDwgZWxlbS5zY3JvbGxXaWR0aCB8fCBlbGVtLmNsaWVudEhlaWdodCA8IGVsZW0uc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICB2YXIgZWxlbUNTUyA9IGNzcyhlbGVtKTtcblxuICAgICAgaWYgKGVsZW0uY2xpZW50V2lkdGggPCBlbGVtLnNjcm9sbFdpZHRoICYmIChlbGVtQ1NTLm92ZXJmbG93WCA9PSAnYXV0bycgfHwgZWxlbUNTUy5vdmVyZmxvd1ggPT0gJ3Njcm9sbCcpIHx8IGVsZW0uY2xpZW50SGVpZ2h0IDwgZWxlbS5zY3JvbGxIZWlnaHQgJiYgKGVsZW1DU1Mub3ZlcmZsb3dZID09ICdhdXRvJyB8fCBlbGVtQ1NTLm92ZXJmbG93WSA9PSAnc2Nyb2xsJykpIHtcbiAgICAgICAgaWYgKCFlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCB8fCBlbGVtID09PSBkb2N1bWVudC5ib2R5KSByZXR1cm4gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICAgICAgICBpZiAoZ290U2VsZiB8fCBpbmNsdWRlU2VsZikgcmV0dXJuIGVsZW07XG4gICAgICAgIGdvdFNlbGYgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG5cbiAgfSB3aGlsZSAoZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSk7XG5cbiAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKGRzdCwgc3JjKSB7XG4gIGlmIChkc3QgJiYgc3JjKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGRzdFtrZXldID0gc3JjW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuZnVuY3Rpb24gaXNSZWN0RXF1YWwocmVjdDEsIHJlY3QyKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHJlY3QxLnRvcCkgPT09IE1hdGgucm91bmQocmVjdDIudG9wKSAmJiBNYXRoLnJvdW5kKHJlY3QxLmxlZnQpID09PSBNYXRoLnJvdW5kKHJlY3QyLmxlZnQpICYmIE1hdGgucm91bmQocmVjdDEuaGVpZ2h0KSA9PT0gTWF0aC5yb3VuZChyZWN0Mi5oZWlnaHQpICYmIE1hdGgucm91bmQocmVjdDEud2lkdGgpID09PSBNYXRoLnJvdW5kKHJlY3QyLndpZHRoKTtcbn1cblxudmFyIF90aHJvdHRsZVRpbWVvdXQ7XG5cbmZ1bmN0aW9uIHRocm90dGxlKGNhbGxiYWNrLCBtcykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghX3Rocm90dGxlVGltZW91dCkge1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgICAgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbChfdGhpcywgYXJnc1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjay5hcHBseShfdGhpcywgYXJncyk7XG4gICAgICB9XG5cbiAgICAgIF90aHJvdHRsZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3Rocm90dGxlVGltZW91dCA9IHZvaWQgMDtcbiAgICAgIH0sIG1zKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNhbmNlbFRocm90dGxlKCkge1xuICBjbGVhclRpbWVvdXQoX3Rocm90dGxlVGltZW91dCk7XG4gIF90aHJvdHRsZVRpbWVvdXQgPSB2b2lkIDA7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbEJ5KGVsLCB4LCB5KSB7XG4gIGVsLnNjcm9sbExlZnQgKz0geDtcbiAgZWwuc2Nyb2xsVG9wICs9IHk7XG59XG5cbmZ1bmN0aW9uIGNsb25lKGVsKSB7XG4gIHZhciBQb2x5bWVyID0gd2luZG93LlBvbHltZXI7XG4gIHZhciAkID0gd2luZG93LmpRdWVyeSB8fCB3aW5kb3cuWmVwdG87XG5cbiAgaWYgKFBvbHltZXIgJiYgUG9seW1lci5kb20pIHtcbiAgICByZXR1cm4gUG9seW1lci5kb20oZWwpLmNsb25lTm9kZSh0cnVlKTtcbiAgfSBlbHNlIGlmICgkKSB7XG4gICAgcmV0dXJuICQoZWwpLmNsb25lKHRydWUpWzBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlbC5jbG9uZU5vZGUodHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0UmVjdChlbCwgcmVjdCkge1xuICBjc3MoZWwsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICBjc3MoZWwsICd0b3AnLCByZWN0LnRvcCk7XG4gIGNzcyhlbCwgJ2xlZnQnLCByZWN0LmxlZnQpO1xuICBjc3MoZWwsICd3aWR0aCcsIHJlY3Qud2lkdGgpO1xuICBjc3MoZWwsICdoZWlnaHQnLCByZWN0LmhlaWdodCk7XG59XG5cbmZ1bmN0aW9uIHVuc2V0UmVjdChlbCkge1xuICBjc3MoZWwsICdwb3NpdGlvbicsICcnKTtcbiAgY3NzKGVsLCAndG9wJywgJycpO1xuICBjc3MoZWwsICdsZWZ0JywgJycpO1xuICBjc3MoZWwsICd3aWR0aCcsICcnKTtcbiAgY3NzKGVsLCAnaGVpZ2h0JywgJycpO1xufVxuXG52YXIgZXhwYW5kbyA9ICdTb3J0YWJsZScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuZnVuY3Rpb24gQW5pbWF0aW9uU3RhdGVNYW5hZ2VyKCkge1xuICB2YXIgYW5pbWF0aW9uU3RhdGVzID0gW10sXG4gICAgICBhbmltYXRpb25DYWxsYmFja0lkO1xuICByZXR1cm4ge1xuICAgIGNhcHR1cmVBbmltYXRpb25TdGF0ZTogZnVuY3Rpb24gY2FwdHVyZUFuaW1hdGlvblN0YXRlKCkge1xuICAgICAgYW5pbWF0aW9uU3RhdGVzID0gW107XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5hbmltYXRpb24pIHJldHVybjtcbiAgICAgIHZhciBjaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwodGhpcy5lbC5jaGlsZHJlbik7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY3NzKGNoaWxkLCAnZGlzcGxheScpID09PSAnbm9uZScgfHwgY2hpbGQgPT09IFNvcnRhYmxlLmdob3N0KSByZXR1cm47XG4gICAgICAgIGFuaW1hdGlvblN0YXRlcy5wdXNoKHtcbiAgICAgICAgICB0YXJnZXQ6IGNoaWxkLFxuICAgICAgICAgIHJlY3Q6IGdldFJlY3QoY2hpbGQpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBmcm9tUmVjdCA9IF9vYmplY3RTcHJlYWQyKHt9LCBhbmltYXRpb25TdGF0ZXNbYW5pbWF0aW9uU3RhdGVzLmxlbmd0aCAtIDFdLnJlY3QpOyAvLyBJZiBhbmltYXRpbmc6IGNvbXBlbnNhdGUgZm9yIGN1cnJlbnQgYW5pbWF0aW9uXG5cblxuICAgICAgICBpZiAoY2hpbGQudGhpc0FuaW1hdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgICAgdmFyIGNoaWxkTWF0cml4ID0gbWF0cml4KGNoaWxkLCB0cnVlKTtcblxuICAgICAgICAgIGlmIChjaGlsZE1hdHJpeCkge1xuICAgICAgICAgICAgZnJvbVJlY3QudG9wIC09IGNoaWxkTWF0cml4LmY7XG4gICAgICAgICAgICBmcm9tUmVjdC5sZWZ0IC09IGNoaWxkTWF0cml4LmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQuZnJvbVJlY3QgPSBmcm9tUmVjdDtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYWRkQW5pbWF0aW9uU3RhdGU6IGZ1bmN0aW9uIGFkZEFuaW1hdGlvblN0YXRlKHN0YXRlKSB7XG4gICAgICBhbmltYXRpb25TdGF0ZXMucHVzaChzdGF0ZSk7XG4gICAgfSxcbiAgICByZW1vdmVBbmltYXRpb25TdGF0ZTogZnVuY3Rpb24gcmVtb3ZlQW5pbWF0aW9uU3RhdGUodGFyZ2V0KSB7XG4gICAgICBhbmltYXRpb25TdGF0ZXMuc3BsaWNlKGluZGV4T2ZPYmplY3QoYW5pbWF0aW9uU3RhdGVzLCB7XG4gICAgICAgIHRhcmdldDogdGFyZ2V0XG4gICAgICB9KSwgMSk7XG4gICAgfSxcbiAgICBhbmltYXRlQWxsOiBmdW5jdGlvbiBhbmltYXRlQWxsKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5hbmltYXRpb24pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGFuaW1hdGlvbkNhbGxiYWNrSWQpO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBhbmltYXRpbmcgPSBmYWxzZSxcbiAgICAgICAgICBhbmltYXRpb25UaW1lID0gMDtcbiAgICAgIGFuaW1hdGlvblN0YXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgdGltZSA9IDAsXG4gICAgICAgICAgICB0YXJnZXQgPSBzdGF0ZS50YXJnZXQsXG4gICAgICAgICAgICBmcm9tUmVjdCA9IHRhcmdldC5mcm9tUmVjdCxcbiAgICAgICAgICAgIHRvUmVjdCA9IGdldFJlY3QodGFyZ2V0KSxcbiAgICAgICAgICAgIHByZXZGcm9tUmVjdCA9IHRhcmdldC5wcmV2RnJvbVJlY3QsXG4gICAgICAgICAgICBwcmV2VG9SZWN0ID0gdGFyZ2V0LnByZXZUb1JlY3QsXG4gICAgICAgICAgICBhbmltYXRpbmdSZWN0ID0gc3RhdGUucmVjdCxcbiAgICAgICAgICAgIHRhcmdldE1hdHJpeCA9IG1hdHJpeCh0YXJnZXQsIHRydWUpO1xuXG4gICAgICAgIGlmICh0YXJnZXRNYXRyaXgpIHtcbiAgICAgICAgICAvLyBDb21wZW5zYXRlIGZvciBjdXJyZW50IGFuaW1hdGlvblxuICAgICAgICAgIHRvUmVjdC50b3AgLT0gdGFyZ2V0TWF0cml4LmY7XG4gICAgICAgICAgdG9SZWN0LmxlZnQgLT0gdGFyZ2V0TWF0cml4LmU7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXQudG9SZWN0ID0gdG9SZWN0O1xuXG4gICAgICAgIGlmICh0YXJnZXQudGhpc0FuaW1hdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgICAgLy8gQ291bGQgYWxzbyBjaGVjayBpZiBhbmltYXRpbmdSZWN0IGlzIGJldHdlZW4gZnJvbVJlY3QgYW5kIHRvUmVjdFxuICAgICAgICAgIGlmIChpc1JlY3RFcXVhbChwcmV2RnJvbVJlY3QsIHRvUmVjdCkgJiYgIWlzUmVjdEVxdWFsKGZyb21SZWN0LCB0b1JlY3QpICYmIC8vIE1ha2Ugc3VyZSBhbmltYXRpbmdSZWN0IGlzIG9uIGxpbmUgYmV0d2VlbiB0b1JlY3QgJiBmcm9tUmVjdFxuICAgICAgICAgIChhbmltYXRpbmdSZWN0LnRvcCAtIHRvUmVjdC50b3ApIC8gKGFuaW1hdGluZ1JlY3QubGVmdCAtIHRvUmVjdC5sZWZ0KSA9PT0gKGZyb21SZWN0LnRvcCAtIHRvUmVjdC50b3ApIC8gKGZyb21SZWN0LmxlZnQgLSB0b1JlY3QubGVmdCkpIHtcbiAgICAgICAgICAgIC8vIElmIHJldHVybmluZyB0byBzYW1lIHBsYWNlIGFzIHN0YXJ0ZWQgZnJvbSBhbmltYXRpb24gYW5kIG9uIHNhbWUgYXhpc1xuICAgICAgICAgICAgdGltZSA9IGNhbGN1bGF0ZVJlYWxUaW1lKGFuaW1hdGluZ1JlY3QsIHByZXZGcm9tUmVjdCwgcHJldlRvUmVjdCwgX3RoaXMub3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIGlmIGZyb21SZWN0ICE9IHRvUmVjdDogYW5pbWF0ZVxuXG5cbiAgICAgICAgaWYgKCFpc1JlY3RFcXVhbCh0b1JlY3QsIGZyb21SZWN0KSkge1xuICAgICAgICAgIHRhcmdldC5wcmV2RnJvbVJlY3QgPSBmcm9tUmVjdDtcbiAgICAgICAgICB0YXJnZXQucHJldlRvUmVjdCA9IHRvUmVjdDtcblxuICAgICAgICAgIGlmICghdGltZSkge1xuICAgICAgICAgICAgdGltZSA9IF90aGlzLm9wdGlvbnMuYW5pbWF0aW9uO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLmFuaW1hdGUodGFyZ2V0LCBhbmltYXRpbmdSZWN0LCB0b1JlY3QsIHRpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRpbWUpIHtcbiAgICAgICAgICBhbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgIGFuaW1hdGlvblRpbWUgPSBNYXRoLm1heChhbmltYXRpb25UaW1lLCB0aW1lKTtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGFyZ2V0LmFuaW1hdGlvblJlc2V0VGltZXIpO1xuICAgICAgICAgIHRhcmdldC5hbmltYXRpb25SZXNldFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0YXJnZXQuYW5pbWF0aW9uVGltZSA9IDA7XG4gICAgICAgICAgICB0YXJnZXQucHJldkZyb21SZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIHRhcmdldC5mcm9tUmVjdCA9IG51bGw7XG4gICAgICAgICAgICB0YXJnZXQucHJldlRvUmVjdCA9IG51bGw7XG4gICAgICAgICAgICB0YXJnZXQudGhpc0FuaW1hdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgICAgICB9LCB0aW1lKTtcbiAgICAgICAgICB0YXJnZXQudGhpc0FuaW1hdGlvbkR1cmF0aW9uID0gdGltZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjbGVhclRpbWVvdXQoYW5pbWF0aW9uQ2FsbGJhY2tJZCk7XG5cbiAgICAgIGlmICghYW5pbWF0aW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmltYXRpb25DYWxsYmFja0lkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgYW5pbWF0aW9uVGltZSk7XG4gICAgICB9XG5cbiAgICAgIGFuaW1hdGlvblN0YXRlcyA9IFtdO1xuICAgIH0sXG4gICAgYW5pbWF0ZTogZnVuY3Rpb24gYW5pbWF0ZSh0YXJnZXQsIGN1cnJlbnRSZWN0LCB0b1JlY3QsIGR1cmF0aW9uKSB7XG4gICAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgICAgY3NzKHRhcmdldCwgJ3RyYW5zaXRpb24nLCAnJyk7XG4gICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2Zvcm0nLCAnJyk7XG4gICAgICAgIHZhciBlbE1hdHJpeCA9IG1hdHJpeCh0aGlzLmVsKSxcbiAgICAgICAgICAgIHNjYWxlWCA9IGVsTWF0cml4ICYmIGVsTWF0cml4LmEsXG4gICAgICAgICAgICBzY2FsZVkgPSBlbE1hdHJpeCAmJiBlbE1hdHJpeC5kLFxuICAgICAgICAgICAgdHJhbnNsYXRlWCA9IChjdXJyZW50UmVjdC5sZWZ0IC0gdG9SZWN0LmxlZnQpIC8gKHNjYWxlWCB8fCAxKSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVkgPSAoY3VycmVudFJlY3QudG9wIC0gdG9SZWN0LnRvcCkgLyAoc2NhbGVZIHx8IDEpO1xuICAgICAgICB0YXJnZXQuYW5pbWF0aW5nWCA9ICEhdHJhbnNsYXRlWDtcbiAgICAgICAgdGFyZ2V0LmFuaW1hdGluZ1kgPSAhIXRyYW5zbGF0ZVk7XG4gICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoJyArIHRyYW5zbGF0ZVggKyAncHgsJyArIHRyYW5zbGF0ZVkgKyAncHgsMCknKTtcbiAgICAgICAgdGhpcy5mb3JSZXBhaW50RHVtbXkgPSByZXBhaW50KHRhcmdldCk7IC8vIHJlcGFpbnRcblxuICAgICAgICBjc3ModGFyZ2V0LCAndHJhbnNpdGlvbicsICd0cmFuc2Zvcm0gJyArIGR1cmF0aW9uICsgJ21zJyArICh0aGlzLm9wdGlvbnMuZWFzaW5nID8gJyAnICsgdGhpcy5vcHRpb25zLmVhc2luZyA6ICcnKSk7XG4gICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoMCwwLDApJyk7XG4gICAgICAgIHR5cGVvZiB0YXJnZXQuYW5pbWF0ZWQgPT09ICdudW1iZXInICYmIGNsZWFyVGltZW91dCh0YXJnZXQuYW5pbWF0ZWQpO1xuICAgICAgICB0YXJnZXQuYW5pbWF0ZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjc3ModGFyZ2V0LCAndHJhbnNpdGlvbicsICcnKTtcbiAgICAgICAgICBjc3ModGFyZ2V0LCAndHJhbnNmb3JtJywgJycpO1xuICAgICAgICAgIHRhcmdldC5hbmltYXRlZCA9IGZhbHNlO1xuICAgICAgICAgIHRhcmdldC5hbmltYXRpbmdYID0gZmFsc2U7XG4gICAgICAgICAgdGFyZ2V0LmFuaW1hdGluZ1kgPSBmYWxzZTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVwYWludCh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldC5vZmZzZXRXaWR0aDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlUmVhbFRpbWUoYW5pbWF0aW5nUmVjdCwgZnJvbVJlY3QsIHRvUmVjdCwgb3B0aW9ucykge1xuICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGZyb21SZWN0LnRvcCAtIGFuaW1hdGluZ1JlY3QudG9wLCAyKSArIE1hdGgucG93KGZyb21SZWN0LmxlZnQgLSBhbmltYXRpbmdSZWN0LmxlZnQsIDIpKSAvIE1hdGguc3FydChNYXRoLnBvdyhmcm9tUmVjdC50b3AgLSB0b1JlY3QudG9wLCAyKSArIE1hdGgucG93KGZyb21SZWN0LmxlZnQgLSB0b1JlY3QubGVmdCwgMikpICogb3B0aW9ucy5hbmltYXRpb247XG59XG5cbnZhciBwbHVnaW5zID0gW107XG52YXIgZGVmYXVsdHMgPSB7XG4gIGluaXRpYWxpemVCeURlZmF1bHQ6IHRydWVcbn07XG52YXIgUGx1Z2luTWFuYWdlciA9IHtcbiAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KHBsdWdpbikge1xuICAgIC8vIFNldCBkZWZhdWx0IHN0YXRpYyBwcm9wZXJ0aWVzXG4gICAgZm9yICh2YXIgb3B0aW9uIGluIGRlZmF1bHRzKSB7XG4gICAgICBpZiAoZGVmYXVsdHMuaGFzT3duUHJvcGVydHkob3B0aW9uKSAmJiAhKG9wdGlvbiBpbiBwbHVnaW4pKSB7XG4gICAgICAgIHBsdWdpbltvcHRpb25dID0gZGVmYXVsdHNbb3B0aW9uXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICAgIGlmIChwLnBsdWdpbk5hbWUgPT09IHBsdWdpbi5wbHVnaW5OYW1lKSB7XG4gICAgICAgIHRocm93IFwiU29ydGFibGU6IENhbm5vdCBtb3VudCBwbHVnaW4gXCIuY29uY2F0KHBsdWdpbi5wbHVnaW5OYW1lLCBcIiBtb3JlIHRoYW4gb25jZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBwbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgfSxcbiAgcGx1Z2luRXZlbnQ6IGZ1bmN0aW9uIHBsdWdpbkV2ZW50KGV2ZW50TmFtZSwgc29ydGFibGUsIGV2dCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLmV2ZW50Q2FuY2VsZWQgPSBmYWxzZTtcblxuICAgIGV2dC5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5ldmVudENhbmNlbGVkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgdmFyIGV2ZW50TmFtZUdsb2JhbCA9IGV2ZW50TmFtZSArICdHbG9iYWwnO1xuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICBpZiAoIXNvcnRhYmxlW3BsdWdpbi5wbHVnaW5OYW1lXSkgcmV0dXJuOyAvLyBGaXJlIGdsb2JhbCBldmVudHMgaWYgaXQgZXhpc3RzIGluIHRoaXMgc29ydGFibGVcblxuICAgICAgaWYgKHNvcnRhYmxlW3BsdWdpbi5wbHVnaW5OYW1lXVtldmVudE5hbWVHbG9iYWxdKSB7XG4gICAgICAgIHNvcnRhYmxlW3BsdWdpbi5wbHVnaW5OYW1lXVtldmVudE5hbWVHbG9iYWxdKF9vYmplY3RTcHJlYWQyKHtcbiAgICAgICAgICBzb3J0YWJsZTogc29ydGFibGVcbiAgICAgICAgfSwgZXZ0KSk7XG4gICAgICB9IC8vIE9ubHkgZmlyZSBwbHVnaW4gZXZlbnQgaWYgcGx1Z2luIGlzIGVuYWJsZWQgaW4gdGhpcyBzb3J0YWJsZSxcbiAgICAgIC8vIGFuZCBwbHVnaW4gaGFzIGV2ZW50IGRlZmluZWRcblxuXG4gICAgICBpZiAoc29ydGFibGUub3B0aW9uc1twbHVnaW4ucGx1Z2luTmFtZV0gJiYgc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdW2V2ZW50TmFtZV0oX29iamVjdFNwcmVhZDIoe1xuICAgICAgICAgIHNvcnRhYmxlOiBzb3J0YWJsZVxuICAgICAgICB9LCBldnQpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgaW5pdGlhbGl6ZVBsdWdpbnM6IGZ1bmN0aW9uIGluaXRpYWxpemVQbHVnaW5zKHNvcnRhYmxlLCBlbCwgZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgdmFyIHBsdWdpbk5hbWUgPSBwbHVnaW4ucGx1Z2luTmFtZTtcbiAgICAgIGlmICghc29ydGFibGUub3B0aW9uc1twbHVnaW5OYW1lXSAmJiAhcGx1Z2luLmluaXRpYWxpemVCeURlZmF1bHQpIHJldHVybjtcbiAgICAgIHZhciBpbml0aWFsaXplZCA9IG5ldyBwbHVnaW4oc29ydGFibGUsIGVsLCBzb3J0YWJsZS5vcHRpb25zKTtcbiAgICAgIGluaXRpYWxpemVkLnNvcnRhYmxlID0gc29ydGFibGU7XG4gICAgICBpbml0aWFsaXplZC5vcHRpb25zID0gc29ydGFibGUub3B0aW9ucztcbiAgICAgIHNvcnRhYmxlW3BsdWdpbk5hbWVdID0gaW5pdGlhbGl6ZWQ7IC8vIEFkZCBkZWZhdWx0IG9wdGlvbnMgZnJvbSBwbHVnaW5cblxuICAgICAgX2V4dGVuZHMoZGVmYXVsdHMsIGluaXRpYWxpemVkLmRlZmF1bHRzKTtcbiAgICB9KTtcblxuICAgIGZvciAodmFyIG9wdGlvbiBpbiBzb3J0YWJsZS5vcHRpb25zKSB7XG4gICAgICBpZiAoIXNvcnRhYmxlLm9wdGlvbnMuaGFzT3duUHJvcGVydHkob3B0aW9uKSkgY29udGludWU7XG4gICAgICB2YXIgbW9kaWZpZWQgPSB0aGlzLm1vZGlmeU9wdGlvbihzb3J0YWJsZSwgb3B0aW9uLCBzb3J0YWJsZS5vcHRpb25zW29wdGlvbl0pO1xuXG4gICAgICBpZiAodHlwZW9mIG1vZGlmaWVkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzb3J0YWJsZS5vcHRpb25zW29wdGlvbl0gPSBtb2RpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldEV2ZW50UHJvcGVydGllczogZnVuY3Rpb24gZ2V0RXZlbnRQcm9wZXJ0aWVzKG5hbWUsIHNvcnRhYmxlKSB7XG4gICAgdmFyIGV2ZW50UHJvcGVydGllcyA9IHt9O1xuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICBpZiAodHlwZW9mIHBsdWdpbi5ldmVudFByb3BlcnRpZXMgIT09ICdmdW5jdGlvbicpIHJldHVybjtcblxuICAgICAgX2V4dGVuZHMoZXZlbnRQcm9wZXJ0aWVzLCBwbHVnaW4uZXZlbnRQcm9wZXJ0aWVzLmNhbGwoc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdLCBuYW1lKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGV2ZW50UHJvcGVydGllcztcbiAgfSxcbiAgbW9kaWZ5T3B0aW9uOiBmdW5jdGlvbiBtb2RpZnlPcHRpb24oc29ydGFibGUsIG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIG1vZGlmaWVkVmFsdWU7XG4gICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIC8vIFBsdWdpbiBtdXN0IGV4aXN0IG9uIHRoZSBTb3J0YWJsZVxuICAgICAgaWYgKCFzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV0pIHJldHVybjsgLy8gSWYgc3RhdGljIG9wdGlvbiBsaXN0ZW5lciBleGlzdHMgZm9yIHRoaXMgb3B0aW9uLCBjYWxsIGluIHRoZSBjb250ZXh0IG9mIHRoZSBTb3J0YWJsZSdzIGluc3RhbmNlIG9mIHRoaXMgcGx1Z2luXG5cbiAgICAgIGlmIChwbHVnaW4ub3B0aW9uTGlzdGVuZXJzICYmIHR5cGVvZiBwbHVnaW4ub3B0aW9uTGlzdGVuZXJzW25hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG1vZGlmaWVkVmFsdWUgPSBwbHVnaW4ub3B0aW9uTGlzdGVuZXJzW25hbWVdLmNhbGwoc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1vZGlmaWVkVmFsdWU7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoX3JlZikge1xuICB2YXIgc29ydGFibGUgPSBfcmVmLnNvcnRhYmxlLFxuICAgICAgcm9vdEVsID0gX3JlZi5yb290RWwsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgdGFyZ2V0RWwgPSBfcmVmLnRhcmdldEVsLFxuICAgICAgY2xvbmVFbCA9IF9yZWYuY2xvbmVFbCxcbiAgICAgIHRvRWwgPSBfcmVmLnRvRWwsXG4gICAgICBmcm9tRWwgPSBfcmVmLmZyb21FbCxcbiAgICAgIG9sZEluZGV4ID0gX3JlZi5vbGRJbmRleCxcbiAgICAgIG5ld0luZGV4ID0gX3JlZi5uZXdJbmRleCxcbiAgICAgIG9sZERyYWdnYWJsZUluZGV4ID0gX3JlZi5vbGREcmFnZ2FibGVJbmRleCxcbiAgICAgIG5ld0RyYWdnYWJsZUluZGV4ID0gX3JlZi5uZXdEcmFnZ2FibGVJbmRleCxcbiAgICAgIG9yaWdpbmFsRXZlbnQgPSBfcmVmLm9yaWdpbmFsRXZlbnQsXG4gICAgICBwdXRTb3J0YWJsZSA9IF9yZWYucHV0U29ydGFibGUsXG4gICAgICBleHRyYUV2ZW50UHJvcGVydGllcyA9IF9yZWYuZXh0cmFFdmVudFByb3BlcnRpZXM7XG4gIHNvcnRhYmxlID0gc29ydGFibGUgfHwgcm9vdEVsICYmIHJvb3RFbFtleHBhbmRvXTtcbiAgaWYgKCFzb3J0YWJsZSkgcmV0dXJuO1xuICB2YXIgZXZ0LFxuICAgICAgb3B0aW9ucyA9IHNvcnRhYmxlLm9wdGlvbnMsXG4gICAgICBvbk5hbWUgPSAnb24nICsgbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyKDEpOyAvLyBTdXBwb3J0IGZvciBuZXcgQ3VzdG9tRXZlbnQgZmVhdHVyZVxuXG4gIGlmICh3aW5kb3cuQ3VzdG9tRXZlbnQgJiYgIUlFMTFPckxlc3MgJiYgIUVkZ2UpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldnQuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpO1xuICB9XG5cbiAgZXZ0LnRvID0gdG9FbCB8fCByb290RWw7XG4gIGV2dC5mcm9tID0gZnJvbUVsIHx8IHJvb3RFbDtcbiAgZXZ0Lml0ZW0gPSB0YXJnZXRFbCB8fCByb290RWw7XG4gIGV2dC5jbG9uZSA9IGNsb25lRWw7XG4gIGV2dC5vbGRJbmRleCA9IG9sZEluZGV4O1xuICBldnQubmV3SW5kZXggPSBuZXdJbmRleDtcbiAgZXZ0Lm9sZERyYWdnYWJsZUluZGV4ID0gb2xkRHJhZ2dhYmxlSW5kZXg7XG4gIGV2dC5uZXdEcmFnZ2FibGVJbmRleCA9IG5ld0RyYWdnYWJsZUluZGV4O1xuICBldnQub3JpZ2luYWxFdmVudCA9IG9yaWdpbmFsRXZlbnQ7XG4gIGV2dC5wdWxsTW9kZSA9IHB1dFNvcnRhYmxlID8gcHV0U29ydGFibGUubGFzdFB1dE1vZGUgOiB1bmRlZmluZWQ7XG5cbiAgdmFyIGFsbEV2ZW50UHJvcGVydGllcyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBleHRyYUV2ZW50UHJvcGVydGllcyksIFBsdWdpbk1hbmFnZXIuZ2V0RXZlbnRQcm9wZXJ0aWVzKG5hbWUsIHNvcnRhYmxlKSk7XG5cbiAgZm9yICh2YXIgb3B0aW9uIGluIGFsbEV2ZW50UHJvcGVydGllcykge1xuICAgIGV2dFtvcHRpb25dID0gYWxsRXZlbnRQcm9wZXJ0aWVzW29wdGlvbl07XG4gIH1cblxuICBpZiAocm9vdEVsKSB7XG4gICAgcm9vdEVsLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfVxuXG4gIGlmIChvcHRpb25zW29uTmFtZV0pIHtcbiAgICBvcHRpb25zW29uTmFtZV0uY2FsbChzb3J0YWJsZSwgZXZ0KTtcbiAgfVxufVxuXG52YXIgX2V4Y2x1ZGVkID0gW1wiZXZ0XCJdO1xuXG52YXIgcGx1Z2luRXZlbnQgPSBmdW5jdGlvbiBwbHVnaW5FdmVudChldmVudE5hbWUsIHNvcnRhYmxlKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fSxcbiAgICAgIG9yaWdpbmFsRXZlbnQgPSBfcmVmLmV2dCxcbiAgICAgIGRhdGEgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgX2V4Y2x1ZGVkKTtcblxuICBQbHVnaW5NYW5hZ2VyLnBsdWdpbkV2ZW50LmJpbmQoU29ydGFibGUpKGV2ZW50TmFtZSwgc29ydGFibGUsIF9vYmplY3RTcHJlYWQyKHtcbiAgICBkcmFnRWw6IGRyYWdFbCxcbiAgICBwYXJlbnRFbDogcGFyZW50RWwsXG4gICAgZ2hvc3RFbDogZ2hvc3RFbCxcbiAgICByb290RWw6IHJvb3RFbCxcbiAgICBuZXh0RWw6IG5leHRFbCxcbiAgICBsYXN0RG93bkVsOiBsYXN0RG93bkVsLFxuICAgIGNsb25lRWw6IGNsb25lRWwsXG4gICAgY2xvbmVIaWRkZW46IGNsb25lSGlkZGVuLFxuICAgIGRyYWdTdGFydGVkOiBtb3ZlZCxcbiAgICBwdXRTb3J0YWJsZTogcHV0U29ydGFibGUsXG4gICAgYWN0aXZlU29ydGFibGU6IFNvcnRhYmxlLmFjdGl2ZSxcbiAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50LFxuICAgIG9sZEluZGV4OiBvbGRJbmRleCxcbiAgICBvbGREcmFnZ2FibGVJbmRleDogb2xkRHJhZ2dhYmxlSW5kZXgsXG4gICAgbmV3SW5kZXg6IG5ld0luZGV4LFxuICAgIG5ld0RyYWdnYWJsZUluZGV4OiBuZXdEcmFnZ2FibGVJbmRleCxcbiAgICBoaWRlR2hvc3RGb3JUYXJnZXQ6IF9oaWRlR2hvc3RGb3JUYXJnZXQsXG4gICAgdW5oaWRlR2hvc3RGb3JUYXJnZXQ6IF91bmhpZGVHaG9zdEZvclRhcmdldCxcbiAgICBjbG9uZU5vd0hpZGRlbjogZnVuY3Rpb24gY2xvbmVOb3dIaWRkZW4oKSB7XG4gICAgICBjbG9uZUhpZGRlbiA9IHRydWU7XG4gICAgfSxcbiAgICBjbG9uZU5vd1Nob3duOiBmdW5jdGlvbiBjbG9uZU5vd1Nob3duKCkge1xuICAgICAgY2xvbmVIaWRkZW4gPSBmYWxzZTtcbiAgICB9LFxuICAgIGRpc3BhdGNoU29ydGFibGVFdmVudDogZnVuY3Rpb24gZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KG5hbWUpIHtcbiAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIGRhdGEpKTtcbn07XG5cbmZ1bmN0aW9uIF9kaXNwYXRjaEV2ZW50KGluZm8pIHtcbiAgZGlzcGF0Y2hFdmVudChfb2JqZWN0U3ByZWFkMih7XG4gICAgcHV0U29ydGFibGU6IHB1dFNvcnRhYmxlLFxuICAgIGNsb25lRWw6IGNsb25lRWwsXG4gICAgdGFyZ2V0RWw6IGRyYWdFbCxcbiAgICByb290RWw6IHJvb3RFbCxcbiAgICBvbGRJbmRleDogb2xkSW5kZXgsXG4gICAgb2xkRHJhZ2dhYmxlSW5kZXg6IG9sZERyYWdnYWJsZUluZGV4LFxuICAgIG5ld0luZGV4OiBuZXdJbmRleCxcbiAgICBuZXdEcmFnZ2FibGVJbmRleDogbmV3RHJhZ2dhYmxlSW5kZXhcbiAgfSwgaW5mbykpO1xufVxuXG52YXIgZHJhZ0VsLFxuICAgIHBhcmVudEVsLFxuICAgIGdob3N0RWwsXG4gICAgcm9vdEVsLFxuICAgIG5leHRFbCxcbiAgICBsYXN0RG93bkVsLFxuICAgIGNsb25lRWwsXG4gICAgY2xvbmVIaWRkZW4sXG4gICAgb2xkSW5kZXgsXG4gICAgbmV3SW5kZXgsXG4gICAgb2xkRHJhZ2dhYmxlSW5kZXgsXG4gICAgbmV3RHJhZ2dhYmxlSW5kZXgsXG4gICAgYWN0aXZlR3JvdXAsXG4gICAgcHV0U29ydGFibGUsXG4gICAgYXdhaXRpbmdEcmFnU3RhcnRlZCA9IGZhbHNlLFxuICAgIGlnbm9yZU5leHRDbGljayA9IGZhbHNlLFxuICAgIHNvcnRhYmxlcyA9IFtdLFxuICAgIHRhcEV2dCxcbiAgICB0b3VjaEV2dCxcbiAgICBsYXN0RHgsXG4gICAgbGFzdER5LFxuICAgIHRhcERpc3RhbmNlTGVmdCxcbiAgICB0YXBEaXN0YW5jZVRvcCxcbiAgICBtb3ZlZCxcbiAgICBsYXN0VGFyZ2V0LFxuICAgIGxhc3REaXJlY3Rpb24sXG4gICAgcGFzdEZpcnN0SW52ZXJ0VGhyZXNoID0gZmFsc2UsXG4gICAgaXNDaXJjdW1zdGFudGlhbEludmVydCA9IGZhbHNlLFxuICAgIHRhcmdldE1vdmVEaXN0YW5jZSxcbiAgICAvLyBGb3IgcG9zaXRpb25pbmcgZ2hvc3QgYWJzb2x1dGVseVxuZ2hvc3RSZWxhdGl2ZVBhcmVudCxcbiAgICBnaG9zdFJlbGF0aXZlUGFyZW50SW5pdGlhbFNjcm9sbCA9IFtdLFxuICAgIC8vIChsZWZ0LCB0b3ApXG5fc2lsZW50ID0gZmFsc2UsXG4gICAgc2F2ZWRJbnB1dENoZWNrZWQgPSBbXTtcbi8qKiBAY29uc3QgKi9cblxudmFyIGRvY3VtZW50RXhpc3RzID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyxcbiAgICBQb3NpdGlvbkdob3N0QWJzb2x1dGVseSA9IElPUyxcbiAgICBDU1NGbG9hdFByb3BlcnR5ID0gRWRnZSB8fCBJRTExT3JMZXNzID8gJ2Nzc0Zsb2F0JyA6ICdmbG9hdCcsXG4gICAgLy8gVGhpcyB3aWxsIG5vdCBwYXNzIGZvciBJRTksIGJlY2F1c2UgSUU5IERuRCBvbmx5IHdvcmtzIG9uIGFuY2hvcnNcbnN1cHBvcnREcmFnZ2FibGUgPSBkb2N1bWVudEV4aXN0cyAmJiAhQ2hyb21lRm9yQW5kcm9pZCAmJiAhSU9TICYmICdkcmFnZ2FibGUnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgIHN1cHBvcnRDc3NQb2ludGVyRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIWRvY3VtZW50RXhpc3RzKSByZXR1cm47IC8vIGZhbHNlIHdoZW4gPD0gSUUxMVxuXG4gIGlmIChJRTExT3JMZXNzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgneCcpO1xuICBlbC5zdHlsZS5jc3NUZXh0ID0gJ3BvaW50ZXItZXZlbnRzOmF1dG8nO1xuICByZXR1cm4gZWwuc3R5bGUucG9pbnRlckV2ZW50cyA9PT0gJ2F1dG8nO1xufSgpLFxuICAgIF9kZXRlY3REaXJlY3Rpb24gPSBmdW5jdGlvbiBfZGV0ZWN0RGlyZWN0aW9uKGVsLCBvcHRpb25zKSB7XG4gIHZhciBlbENTUyA9IGNzcyhlbCksXG4gICAgICBlbFdpZHRoID0gcGFyc2VJbnQoZWxDU1Mud2lkdGgpIC0gcGFyc2VJbnQoZWxDU1MucGFkZGluZ0xlZnQpIC0gcGFyc2VJbnQoZWxDU1MucGFkZGluZ1JpZ2h0KSAtIHBhcnNlSW50KGVsQ1NTLmJvcmRlckxlZnRXaWR0aCkgLSBwYXJzZUludChlbENTUy5ib3JkZXJSaWdodFdpZHRoKSxcbiAgICAgIGNoaWxkMSA9IGdldENoaWxkKGVsLCAwLCBvcHRpb25zKSxcbiAgICAgIGNoaWxkMiA9IGdldENoaWxkKGVsLCAxLCBvcHRpb25zKSxcbiAgICAgIGZpcnN0Q2hpbGRDU1MgPSBjaGlsZDEgJiYgY3NzKGNoaWxkMSksXG4gICAgICBzZWNvbmRDaGlsZENTUyA9IGNoaWxkMiAmJiBjc3MoY2hpbGQyKSxcbiAgICAgIGZpcnN0Q2hpbGRXaWR0aCA9IGZpcnN0Q2hpbGRDU1MgJiYgcGFyc2VJbnQoZmlyc3RDaGlsZENTUy5tYXJnaW5MZWZ0KSArIHBhcnNlSW50KGZpcnN0Q2hpbGRDU1MubWFyZ2luUmlnaHQpICsgZ2V0UmVjdChjaGlsZDEpLndpZHRoLFxuICAgICAgc2Vjb25kQ2hpbGRXaWR0aCA9IHNlY29uZENoaWxkQ1NTICYmIHBhcnNlSW50KHNlY29uZENoaWxkQ1NTLm1hcmdpbkxlZnQpICsgcGFyc2VJbnQoc2Vjb25kQ2hpbGRDU1MubWFyZ2luUmlnaHQpICsgZ2V0UmVjdChjaGlsZDIpLndpZHRoO1xuXG4gIGlmIChlbENTUy5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICByZXR1cm4gZWxDU1MuZmxleERpcmVjdGlvbiA9PT0gJ2NvbHVtbicgfHwgZWxDU1MuZmxleERpcmVjdGlvbiA9PT0gJ2NvbHVtbi1yZXZlcnNlJyA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gIH1cblxuICBpZiAoZWxDU1MuZGlzcGxheSA9PT0gJ2dyaWQnKSB7XG4gICAgcmV0dXJuIGVsQ1NTLmdyaWRUZW1wbGF0ZUNvbHVtbnMuc3BsaXQoJyAnKS5sZW5ndGggPD0gMSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gIH1cblxuICBpZiAoY2hpbGQxICYmIGZpcnN0Q2hpbGRDU1NbXCJmbG9hdFwiXSAmJiBmaXJzdENoaWxkQ1NTW1wiZmxvYXRcIl0gIT09ICdub25lJykge1xuICAgIHZhciB0b3VjaGluZ1NpZGVDaGlsZDIgPSBmaXJzdENoaWxkQ1NTW1wiZmxvYXRcIl0gPT09ICdsZWZ0JyA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgcmV0dXJuIGNoaWxkMiAmJiAoc2Vjb25kQ2hpbGRDU1MuY2xlYXIgPT09ICdib3RoJyB8fCBzZWNvbmRDaGlsZENTUy5jbGVhciA9PT0gdG91Y2hpbmdTaWRlQ2hpbGQyKSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gIH1cblxuICByZXR1cm4gY2hpbGQxICYmIChmaXJzdENoaWxkQ1NTLmRpc3BsYXkgPT09ICdibG9jaycgfHwgZmlyc3RDaGlsZENTUy5kaXNwbGF5ID09PSAnZmxleCcgfHwgZmlyc3RDaGlsZENTUy5kaXNwbGF5ID09PSAndGFibGUnIHx8IGZpcnN0Q2hpbGRDU1MuZGlzcGxheSA9PT0gJ2dyaWQnIHx8IGZpcnN0Q2hpbGRXaWR0aCA+PSBlbFdpZHRoICYmIGVsQ1NTW0NTU0Zsb2F0UHJvcGVydHldID09PSAnbm9uZScgfHwgY2hpbGQyICYmIGVsQ1NTW0NTU0Zsb2F0UHJvcGVydHldID09PSAnbm9uZScgJiYgZmlyc3RDaGlsZFdpZHRoICsgc2Vjb25kQ2hpbGRXaWR0aCA+IGVsV2lkdGgpID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbn0sXG4gICAgX2RyYWdFbEluUm93Q29sdW1uID0gZnVuY3Rpb24gX2RyYWdFbEluUm93Q29sdW1uKGRyYWdSZWN0LCB0YXJnZXRSZWN0LCB2ZXJ0aWNhbCkge1xuICB2YXIgZHJhZ0VsUzFPcHAgPSB2ZXJ0aWNhbCA/IGRyYWdSZWN0LmxlZnQgOiBkcmFnUmVjdC50b3AsXG4gICAgICBkcmFnRWxTMk9wcCA9IHZlcnRpY2FsID8gZHJhZ1JlY3QucmlnaHQgOiBkcmFnUmVjdC5ib3R0b20sXG4gICAgICBkcmFnRWxPcHBMZW5ndGggPSB2ZXJ0aWNhbCA/IGRyYWdSZWN0LndpZHRoIDogZHJhZ1JlY3QuaGVpZ2h0LFxuICAgICAgdGFyZ2V0UzFPcHAgPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3QubGVmdCA6IHRhcmdldFJlY3QudG9wLFxuICAgICAgdGFyZ2V0UzJPcHAgPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3QucmlnaHQgOiB0YXJnZXRSZWN0LmJvdHRvbSxcbiAgICAgIHRhcmdldE9wcExlbmd0aCA9IHZlcnRpY2FsID8gdGFyZ2V0UmVjdC53aWR0aCA6IHRhcmdldFJlY3QuaGVpZ2h0O1xuICByZXR1cm4gZHJhZ0VsUzFPcHAgPT09IHRhcmdldFMxT3BwIHx8IGRyYWdFbFMyT3BwID09PSB0YXJnZXRTMk9wcCB8fCBkcmFnRWxTMU9wcCArIGRyYWdFbE9wcExlbmd0aCAvIDIgPT09IHRhcmdldFMxT3BwICsgdGFyZ2V0T3BwTGVuZ3RoIC8gMjtcbn0sXG5cbi8qKlxyXG4gKiBEZXRlY3RzIGZpcnN0IG5lYXJlc3QgZW1wdHkgc29ydGFibGUgdG8gWCBhbmQgWSBwb3NpdGlvbiB1c2luZyBlbXB0eUluc2VydFRocmVzaG9sZC5cclxuICogQHBhcmFtICB7TnVtYmVyfSB4ICAgICAgWCBwb3NpdGlvblxyXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHkgICAgICBZIHBvc2l0aW9uXHJcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAgIEVsZW1lbnQgb2YgdGhlIGZpcnN0IGZvdW5kIG5lYXJlc3QgU29ydGFibGVcclxuICovXG5fZGV0ZWN0TmVhcmVzdEVtcHR5U29ydGFibGUgPSBmdW5jdGlvbiBfZGV0ZWN0TmVhcmVzdEVtcHR5U29ydGFibGUoeCwgeSkge1xuICB2YXIgcmV0O1xuICBzb3J0YWJsZXMuc29tZShmdW5jdGlvbiAoc29ydGFibGUpIHtcbiAgICB2YXIgdGhyZXNob2xkID0gc29ydGFibGVbZXhwYW5kb10ub3B0aW9ucy5lbXB0eUluc2VydFRocmVzaG9sZDtcbiAgICBpZiAoIXRocmVzaG9sZCB8fCBsYXN0Q2hpbGQoc29ydGFibGUpKSByZXR1cm47XG4gICAgdmFyIHJlY3QgPSBnZXRSZWN0KHNvcnRhYmxlKSxcbiAgICAgICAgaW5zaWRlSG9yaXpvbnRhbGx5ID0geCA+PSByZWN0LmxlZnQgLSB0aHJlc2hvbGQgJiYgeCA8PSByZWN0LnJpZ2h0ICsgdGhyZXNob2xkLFxuICAgICAgICBpbnNpZGVWZXJ0aWNhbGx5ID0geSA+PSByZWN0LnRvcCAtIHRocmVzaG9sZCAmJiB5IDw9IHJlY3QuYm90dG9tICsgdGhyZXNob2xkO1xuXG4gICAgaWYgKGluc2lkZUhvcml6b250YWxseSAmJiBpbnNpZGVWZXJ0aWNhbGx5KSB7XG4gICAgICByZXR1cm4gcmV0ID0gc29ydGFibGU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldDtcbn0sXG4gICAgX3ByZXBhcmVHcm91cCA9IGZ1bmN0aW9uIF9wcmVwYXJlR3JvdXAob3B0aW9ucykge1xuICBmdW5jdGlvbiB0b0ZuKHZhbHVlLCBwdWxsKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0bywgZnJvbSwgZHJhZ0VsLCBldnQpIHtcbiAgICAgIHZhciBzYW1lR3JvdXAgPSB0by5vcHRpb25zLmdyb3VwLm5hbWUgJiYgZnJvbS5vcHRpb25zLmdyb3VwLm5hbWUgJiYgdG8ub3B0aW9ucy5ncm91cC5uYW1lID09PSBmcm9tLm9wdGlvbnMuZ3JvdXAubmFtZTtcblxuICAgICAgaWYgKHZhbHVlID09IG51bGwgJiYgKHB1bGwgfHwgc2FtZUdyb3VwKSkge1xuICAgICAgICAvLyBEZWZhdWx0IHB1bGwgdmFsdWVcbiAgICAgICAgLy8gRGVmYXVsdCBwdWxsIGFuZCBwdXQgdmFsdWUgaWYgc2FtZSBncm91cFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChwdWxsICYmIHZhbHVlID09PSAnY2xvbmUnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB0b0ZuKHZhbHVlKHRvLCBmcm9tLCBkcmFnRWwsIGV2dCksIHB1bGwpKHRvLCBmcm9tLCBkcmFnRWwsIGV2dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgb3RoZXJHcm91cCA9IChwdWxsID8gdG8gOiBmcm9tKS5vcHRpb25zLmdyb3VwLm5hbWU7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdHJ1ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlID09PSBvdGhlckdyb3VwIHx8IHZhbHVlLmpvaW4gJiYgdmFsdWUuaW5kZXhPZihvdGhlckdyb3VwKSA+IC0xO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB2YXIgZ3JvdXAgPSB7fTtcbiAgdmFyIG9yaWdpbmFsR3JvdXAgPSBvcHRpb25zLmdyb3VwO1xuXG4gIGlmICghb3JpZ2luYWxHcm91cCB8fCBfdHlwZW9mKG9yaWdpbmFsR3JvdXApICE9ICdvYmplY3QnKSB7XG4gICAgb3JpZ2luYWxHcm91cCA9IHtcbiAgICAgIG5hbWU6IG9yaWdpbmFsR3JvdXBcbiAgICB9O1xuICB9XG5cbiAgZ3JvdXAubmFtZSA9IG9yaWdpbmFsR3JvdXAubmFtZTtcbiAgZ3JvdXAuY2hlY2tQdWxsID0gdG9GbihvcmlnaW5hbEdyb3VwLnB1bGwsIHRydWUpO1xuICBncm91cC5jaGVja1B1dCA9IHRvRm4ob3JpZ2luYWxHcm91cC5wdXQpO1xuICBncm91cC5yZXZlcnRDbG9uZSA9IG9yaWdpbmFsR3JvdXAucmV2ZXJ0Q2xvbmU7XG4gIG9wdGlvbnMuZ3JvdXAgPSBncm91cDtcbn0sXG4gICAgX2hpZGVHaG9zdEZvclRhcmdldCA9IGZ1bmN0aW9uIF9oaWRlR2hvc3RGb3JUYXJnZXQoKSB7XG4gIGlmICghc3VwcG9ydENzc1BvaW50ZXJFdmVudHMgJiYgZ2hvc3RFbCkge1xuICAgIGNzcyhnaG9zdEVsLCAnZGlzcGxheScsICdub25lJyk7XG4gIH1cbn0sXG4gICAgX3VuaGlkZUdob3N0Rm9yVGFyZ2V0ID0gZnVuY3Rpb24gX3VuaGlkZUdob3N0Rm9yVGFyZ2V0KCkge1xuICBpZiAoIXN1cHBvcnRDc3NQb2ludGVyRXZlbnRzICYmIGdob3N0RWwpIHtcbiAgICBjc3MoZ2hvc3RFbCwgJ2Rpc3BsYXknLCAnJyk7XG4gIH1cbn07IC8vICMxMTg0IGZpeCAtIFByZXZlbnQgY2xpY2sgZXZlbnQgb24gZmFsbGJhY2sgaWYgZHJhZ2dlZCBidXQgaXRlbSBub3QgY2hhbmdlZCBwb3NpdGlvblxuXG5cbmlmIChkb2N1bWVudEV4aXN0cyAmJiAhQ2hyb21lRm9yQW5kcm9pZCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoaWdub3JlTmV4dENsaWNrKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24gJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZ0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiAmJiBldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICBpZ25vcmVOZXh0Q2xpY2sgPSBmYWxzZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHRydWUpO1xufVxuXG52YXIgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQgPSBmdW5jdGlvbiBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudChldnQpIHtcbiAgaWYgKGRyYWdFbCkge1xuICAgIGV2dCA9IGV2dC50b3VjaGVzID8gZXZ0LnRvdWNoZXNbMF0gOiBldnQ7XG5cbiAgICB2YXIgbmVhcmVzdCA9IF9kZXRlY3ROZWFyZXN0RW1wdHlTb3J0YWJsZShldnQuY2xpZW50WCwgZXZ0LmNsaWVudFkpO1xuXG4gICAgaWYgKG5lYXJlc3QpIHtcbiAgICAgIC8vIENyZWF0ZSBpbWl0YXRpb24gZXZlbnRcbiAgICAgIHZhciBldmVudCA9IHt9O1xuXG4gICAgICBmb3IgKHZhciBpIGluIGV2dCkge1xuICAgICAgICBpZiAoZXZ0Lmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgZXZlbnRbaV0gPSBldnRbaV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZXZlbnQudGFyZ2V0ID0gZXZlbnQucm9vdEVsID0gbmVhcmVzdDtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0ID0gdm9pZCAwO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uID0gdm9pZCAwO1xuXG4gICAgICBuZWFyZXN0W2V4cGFuZG9dLl9vbkRyYWdPdmVyKGV2ZW50KTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBfY2hlY2tPdXRzaWRlVGFyZ2V0RWwgPSBmdW5jdGlvbiBfY2hlY2tPdXRzaWRlVGFyZ2V0RWwoZXZ0KSB7XG4gIGlmIChkcmFnRWwpIHtcbiAgICBkcmFnRWwucGFyZW50Tm9kZVtleHBhbmRvXS5faXNPdXRzaWRlVGhpc0VsKGV2dC50YXJnZXQpO1xuICB9XG59O1xuLyoqXHJcbiAqIEBjbGFzcyAgU29ydGFibGVcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9ICBlbFxyXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgIFtvcHRpb25zXVxyXG4gKi9cblxuXG5mdW5jdGlvbiBTb3J0YWJsZShlbCwgb3B0aW9ucykge1xuICBpZiAoIShlbCAmJiBlbC5ub2RlVHlwZSAmJiBlbC5ub2RlVHlwZSA9PT0gMSkpIHtcbiAgICB0aHJvdyBcIlNvcnRhYmxlOiBgZWxgIG11c3QgYmUgYW4gSFRNTEVsZW1lbnQsIG5vdCBcIi5jb25jYXQoe30udG9TdHJpbmcuY2FsbChlbCkpO1xuICB9XG5cbiAgdGhpcy5lbCA9IGVsOyAvLyByb290IGVsZW1lbnRcblxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zID0gX2V4dGVuZHMoe30sIG9wdGlvbnMpOyAvLyBFeHBvcnQgaW5zdGFuY2VcblxuICBlbFtleHBhbmRvXSA9IHRoaXM7XG4gIHZhciBkZWZhdWx0cyA9IHtcbiAgICBncm91cDogbnVsbCxcbiAgICBzb3J0OiB0cnVlLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBzdG9yZTogbnVsbCxcbiAgICBoYW5kbGU6IG51bGwsXG4gICAgZHJhZ2dhYmxlOiAvXlt1b11sJC9pLnRlc3QoZWwubm9kZU5hbWUpID8gJz5saScgOiAnPionLFxuICAgIHN3YXBUaHJlc2hvbGQ6IDEsXG4gICAgLy8gcGVyY2VudGFnZTsgMCA8PSB4IDw9IDFcbiAgICBpbnZlcnRTd2FwOiBmYWxzZSxcbiAgICAvLyBpbnZlcnQgYWx3YXlzXG4gICAgaW52ZXJ0ZWRTd2FwVGhyZXNob2xkOiBudWxsLFxuICAgIC8vIHdpbGwgYmUgc2V0IHRvIHNhbWUgYXMgc3dhcFRocmVzaG9sZCBpZiBkZWZhdWx0XG4gICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXG4gICAgZGlyZWN0aW9uOiBmdW5jdGlvbiBkaXJlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gX2RldGVjdERpcmVjdGlvbihlbCwgdGhpcy5vcHRpb25zKTtcbiAgICB9LFxuICAgIGdob3N0Q2xhc3M6ICdzb3J0YWJsZS1naG9zdCcsXG4gICAgY2hvc2VuQ2xhc3M6ICdzb3J0YWJsZS1jaG9zZW4nLFxuICAgIGRyYWdDbGFzczogJ3NvcnRhYmxlLWRyYWcnLFxuICAgIGlnbm9yZTogJ2EsIGltZycsXG4gICAgZmlsdGVyOiBudWxsLFxuICAgIHByZXZlbnRPbkZpbHRlcjogdHJ1ZSxcbiAgICBhbmltYXRpb246IDAsXG4gICAgZWFzaW5nOiBudWxsLFxuICAgIHNldERhdGE6IGZ1bmN0aW9uIHNldERhdGEoZGF0YVRyYW5zZmVyLCBkcmFnRWwpIHtcbiAgICAgIGRhdGFUcmFuc2Zlci5zZXREYXRhKCdUZXh0JywgZHJhZ0VsLnRleHRDb250ZW50KTtcbiAgICB9LFxuICAgIGRyb3BCdWJibGU6IGZhbHNlLFxuICAgIGRyYWdvdmVyQnViYmxlOiBmYWxzZSxcbiAgICBkYXRhSWRBdHRyOiAnZGF0YS1pZCcsXG4gICAgZGVsYXk6IDAsXG4gICAgZGVsYXlPblRvdWNoT25seTogZmFsc2UsXG4gICAgdG91Y2hTdGFydFRocmVzaG9sZDogKE51bWJlci5wYXJzZUludCA/IE51bWJlciA6IHdpbmRvdykucGFyc2VJbnQod2luZG93LmRldmljZVBpeGVsUmF0aW8sIDEwKSB8fCAxLFxuICAgIGZvcmNlRmFsbGJhY2s6IGZhbHNlLFxuICAgIGZhbGxiYWNrQ2xhc3M6ICdzb3J0YWJsZS1mYWxsYmFjaycsXG4gICAgZmFsbGJhY2tPbkJvZHk6IGZhbHNlLFxuICAgIGZhbGxiYWNrVG9sZXJhbmNlOiAwLFxuICAgIGZhbGxiYWNrT2Zmc2V0OiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH0sXG4gICAgc3VwcG9ydFBvaW50ZXI6IFNvcnRhYmxlLnN1cHBvcnRQb2ludGVyICE9PSBmYWxzZSAmJiAnUG9pbnRlckV2ZW50JyBpbiB3aW5kb3cgJiYgIVNhZmFyaSxcbiAgICBlbXB0eUluc2VydFRocmVzaG9sZDogNVxuICB9O1xuICBQbHVnaW5NYW5hZ2VyLmluaXRpYWxpemVQbHVnaW5zKHRoaXMsIGVsLCBkZWZhdWx0cyk7IC8vIFNldCBkZWZhdWx0IG9wdGlvbnNcblxuICBmb3IgKHZhciBuYW1lIGluIGRlZmF1bHRzKSB7XG4gICAgIShuYW1lIGluIG9wdGlvbnMpICYmIChvcHRpb25zW25hbWVdID0gZGVmYXVsdHNbbmFtZV0pO1xuICB9XG5cbiAgX3ByZXBhcmVHcm91cChvcHRpb25zKTsgLy8gQmluZCBhbGwgcHJpdmF0ZSBtZXRob2RzXG5cblxuICBmb3IgKHZhciBmbiBpbiB0aGlzKSB7XG4gICAgaWYgKGZuLmNoYXJBdCgwKSA9PT0gJ18nICYmIHR5cGVvZiB0aGlzW2ZuXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpc1tmbl0gPSB0aGlzW2ZuXS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgfSAvLyBTZXR1cCBkcmFnIG1vZGVcblxuXG4gIHRoaXMubmF0aXZlRHJhZ2dhYmxlID0gb3B0aW9ucy5mb3JjZUZhbGxiYWNrID8gZmFsc2UgOiBzdXBwb3J0RHJhZ2dhYmxlO1xuXG4gIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgIC8vIFRvdWNoIHN0YXJ0IHRocmVzaG9sZCBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBuYXRpdmUgZHJhZ3N0YXJ0IHRocmVzaG9sZFxuICAgIHRoaXMub3B0aW9ucy50b3VjaFN0YXJ0VGhyZXNob2xkID0gMTtcbiAgfSAvLyBCaW5kIGV2ZW50c1xuXG5cbiAgaWYgKG9wdGlvbnMuc3VwcG9ydFBvaW50ZXIpIHtcbiAgICBvbihlbCwgJ3BvaW50ZXJkb3duJywgdGhpcy5fb25UYXBTdGFydCk7XG4gIH0gZWxzZSB7XG4gICAgb24oZWwsICdtb3VzZWRvd24nLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgICBvbihlbCwgJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgfVxuXG4gIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgIG9uKGVsLCAnZHJhZ292ZXInLCB0aGlzKTtcbiAgICBvbihlbCwgJ2RyYWdlbnRlcicsIHRoaXMpO1xuICB9XG5cbiAgc29ydGFibGVzLnB1c2godGhpcy5lbCk7IC8vIFJlc3RvcmUgc29ydGluZ1xuXG4gIG9wdGlvbnMuc3RvcmUgJiYgb3B0aW9ucy5zdG9yZS5nZXQgJiYgdGhpcy5zb3J0KG9wdGlvbnMuc3RvcmUuZ2V0KHRoaXMpIHx8IFtdKTsgLy8gQWRkIGFuaW1hdGlvbiBzdGF0ZSBtYW5hZ2VyXG5cbiAgX2V4dGVuZHModGhpcywgQW5pbWF0aW9uU3RhdGVNYW5hZ2VyKCkpO1xufVxuXG5Tb3J0YWJsZS5wcm90b3R5cGUgPVxuLyoqIEBsZW5kcyBTb3J0YWJsZS5wcm90b3R5cGUgKi9cbntcbiAgY29uc3RydWN0b3I6IFNvcnRhYmxlLFxuICBfaXNPdXRzaWRlVGhpc0VsOiBmdW5jdGlvbiBfaXNPdXRzaWRlVGhpc0VsKHRhcmdldCkge1xuICAgIGlmICghdGhpcy5lbC5jb250YWlucyh0YXJnZXQpICYmIHRhcmdldCAhPT0gdGhpcy5lbCkge1xuICAgICAgbGFzdFRhcmdldCA9IG51bGw7XG4gICAgfVxuICB9LFxuICBfZ2V0RGlyZWN0aW9uOiBmdW5jdGlvbiBfZ2V0RGlyZWN0aW9uKGV2dCwgdGFyZ2V0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09PSAnZnVuY3Rpb24nID8gdGhpcy5vcHRpb25zLmRpcmVjdGlvbi5jYWxsKHRoaXMsIGV2dCwgdGFyZ2V0LCBkcmFnRWwpIDogdGhpcy5vcHRpb25zLmRpcmVjdGlvbjtcbiAgfSxcbiAgX29uVGFwU3RhcnQ6IGZ1bmN0aW9uIF9vblRhcFN0YXJ0KFxuICAvKiogRXZlbnR8VG91Y2hFdmVudCAqL1xuICBldnQpIHtcbiAgICBpZiAoIWV2dC5jYW5jZWxhYmxlKSByZXR1cm47XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgICBlbCA9IHRoaXMuZWwsXG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHByZXZlbnRPbkZpbHRlciA9IG9wdGlvbnMucHJldmVudE9uRmlsdGVyLFxuICAgICAgICB0eXBlID0gZXZ0LnR5cGUsXG4gICAgICAgIHRvdWNoID0gZXZ0LnRvdWNoZXMgJiYgZXZ0LnRvdWNoZXNbMF0gfHwgZXZ0LnBvaW50ZXJUeXBlICYmIGV2dC5wb2ludGVyVHlwZSA9PT0gJ3RvdWNoJyAmJiBldnQsXG4gICAgICAgIHRhcmdldCA9ICh0b3VjaCB8fCBldnQpLnRhcmdldCxcbiAgICAgICAgb3JpZ2luYWxUYXJnZXQgPSBldnQudGFyZ2V0LnNoYWRvd1Jvb3QgJiYgKGV2dC5wYXRoICYmIGV2dC5wYXRoWzBdIHx8IGV2dC5jb21wb3NlZFBhdGggJiYgZXZ0LmNvbXBvc2VkUGF0aCgpWzBdKSB8fCB0YXJnZXQsXG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuXG4gICAgX3NhdmVJbnB1dENoZWNrZWRTdGF0ZShlbCk7IC8vIERvbid0IHRyaWdnZXIgc3RhcnQgZXZlbnQgd2hlbiBhbiBlbGVtZW50IGlzIGJlZW4gZHJhZ2dlZCwgb3RoZXJ3aXNlIHRoZSBldnQub2xkaW5kZXggYWx3YXlzIHdyb25nIHdoZW4gc2V0IG9wdGlvbi5ncm91cC5cblxuXG4gICAgaWYgKGRyYWdFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICgvbW91c2Vkb3dufHBvaW50ZXJkb3duLy50ZXN0KHR5cGUpICYmIGV2dC5idXR0b24gIT09IDAgfHwgb3B0aW9ucy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuOyAvLyBvbmx5IGxlZnQgYnV0dG9uIGFuZCBlbmFibGVkXG4gICAgfSAvLyBjYW5jZWwgZG5kIGlmIG9yaWdpbmFsIHRhcmdldCBpcyBjb250ZW50IGVkaXRhYmxlXG5cblxuICAgIGlmIChvcmlnaW5hbFRhcmdldC5pc0NvbnRlbnRFZGl0YWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gU2FmYXJpIGlnbm9yZXMgZnVydGhlciBldmVudCBoYW5kbGluZyBhZnRlciBtb3VzZWRvd25cblxuXG4gICAgaWYgKCF0aGlzLm5hdGl2ZURyYWdnYWJsZSAmJiBTYWZhcmkgJiYgdGFyZ2V0ICYmIHRhcmdldC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTRUxFQ1QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGFyZ2V0ID0gY2xvc2VzdCh0YXJnZXQsIG9wdGlvbnMuZHJhZ2dhYmxlLCBlbCwgZmFsc2UpO1xuXG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuYW5pbWF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobGFzdERvd25FbCA9PT0gdGFyZ2V0KSB7XG4gICAgICAvLyBJZ25vcmluZyBkdXBsaWNhdGUgYGRvd25gXG4gICAgICByZXR1cm47XG4gICAgfSAvLyBHZXQgdGhlIGluZGV4IG9mIHRoZSBkcmFnZ2VkIGVsZW1lbnQgd2l0aGluIGl0cyBwYXJlbnRcblxuXG4gICAgb2xkSW5kZXggPSBpbmRleCh0YXJnZXQpO1xuICAgIG9sZERyYWdnYWJsZUluZGV4ID0gaW5kZXgodGFyZ2V0LCBvcHRpb25zLmRyYWdnYWJsZSk7IC8vIENoZWNrIGZpbHRlclxuXG4gICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChmaWx0ZXIuY2FsbCh0aGlzLCBldnQsIHRhcmdldCwgdGhpcykpIHtcbiAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgIHNvcnRhYmxlOiBfdGhpcyxcbiAgICAgICAgICByb290RWw6IG9yaWdpbmFsVGFyZ2V0LFxuICAgICAgICAgIG5hbWU6ICdmaWx0ZXInLFxuICAgICAgICAgIHRhcmdldEVsOiB0YXJnZXQsXG4gICAgICAgICAgdG9FbDogZWwsXG4gICAgICAgICAgZnJvbUVsOiBlbFxuICAgICAgICB9KTtcblxuICAgICAgICBwbHVnaW5FdmVudCgnZmlsdGVyJywgX3RoaXMsIHtcbiAgICAgICAgICBldnQ6IGV2dFxuICAgICAgICB9KTtcbiAgICAgICAgcHJldmVudE9uRmlsdGVyICYmIGV2dC5jYW5jZWxhYmxlICYmIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47IC8vIGNhbmNlbCBkbmRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZpbHRlcikge1xuICAgICAgZmlsdGVyID0gZmlsdGVyLnNwbGl0KCcsJykuc29tZShmdW5jdGlvbiAoY3JpdGVyaWEpIHtcbiAgICAgICAgY3JpdGVyaWEgPSBjbG9zZXN0KG9yaWdpbmFsVGFyZ2V0LCBjcml0ZXJpYS50cmltKCksIGVsLCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKGNyaXRlcmlhKSB7XG4gICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgc29ydGFibGU6IF90aGlzLFxuICAgICAgICAgICAgcm9vdEVsOiBjcml0ZXJpYSxcbiAgICAgICAgICAgIG5hbWU6ICdmaWx0ZXInLFxuICAgICAgICAgICAgdGFyZ2V0RWw6IHRhcmdldCxcbiAgICAgICAgICAgIGZyb21FbDogZWwsXG4gICAgICAgICAgICB0b0VsOiBlbFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcGx1Z2luRXZlbnQoJ2ZpbHRlcicsIF90aGlzLCB7XG4gICAgICAgICAgICBldnQ6IGV2dFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICBwcmV2ZW50T25GaWx0ZXIgJiYgZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjsgLy8gY2FuY2VsIGRuZFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmhhbmRsZSAmJiAhY2xvc2VzdChvcmlnaW5hbFRhcmdldCwgb3B0aW9ucy5oYW5kbGUsIGVsLCBmYWxzZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFByZXBhcmUgYGRyYWdzdGFydGBcblxuXG4gICAgdGhpcy5fcHJlcGFyZURyYWdTdGFydChldnQsIHRvdWNoLCB0YXJnZXQpO1xuICB9LFxuICBfcHJlcGFyZURyYWdTdGFydDogZnVuY3Rpb24gX3ByZXBhcmVEcmFnU3RhcnQoXG4gIC8qKiBFdmVudCAqL1xuICBldnQsXG4gIC8qKiBUb3VjaCAqL1xuICB0b3VjaCxcbiAgLyoqIEhUTUxFbGVtZW50ICovXG4gIHRhcmdldCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICAgIGVsID0gX3RoaXMuZWwsXG4gICAgICAgIG9wdGlvbnMgPSBfdGhpcy5vcHRpb25zLFxuICAgICAgICBvd25lckRvY3VtZW50ID0gZWwub3duZXJEb2N1bWVudCxcbiAgICAgICAgZHJhZ1N0YXJ0Rm47XG5cbiAgICBpZiAodGFyZ2V0ICYmICFkcmFnRWwgJiYgdGFyZ2V0LnBhcmVudE5vZGUgPT09IGVsKSB7XG4gICAgICB2YXIgZHJhZ1JlY3QgPSBnZXRSZWN0KHRhcmdldCk7XG4gICAgICByb290RWwgPSBlbDtcbiAgICAgIGRyYWdFbCA9IHRhcmdldDtcbiAgICAgIHBhcmVudEVsID0gZHJhZ0VsLnBhcmVudE5vZGU7XG4gICAgICBuZXh0RWwgPSBkcmFnRWwubmV4dFNpYmxpbmc7XG4gICAgICBsYXN0RG93bkVsID0gdGFyZ2V0O1xuICAgICAgYWN0aXZlR3JvdXAgPSBvcHRpb25zLmdyb3VwO1xuICAgICAgU29ydGFibGUuZHJhZ2dlZCA9IGRyYWdFbDtcbiAgICAgIHRhcEV2dCA9IHtcbiAgICAgICAgdGFyZ2V0OiBkcmFnRWwsXG4gICAgICAgIGNsaWVudFg6ICh0b3VjaCB8fCBldnQpLmNsaWVudFgsXG4gICAgICAgIGNsaWVudFk6ICh0b3VjaCB8fCBldnQpLmNsaWVudFlcbiAgICAgIH07XG4gICAgICB0YXBEaXN0YW5jZUxlZnQgPSB0YXBFdnQuY2xpZW50WCAtIGRyYWdSZWN0LmxlZnQ7XG4gICAgICB0YXBEaXN0YW5jZVRvcCA9IHRhcEV2dC5jbGllbnRZIC0gZHJhZ1JlY3QudG9wO1xuICAgICAgdGhpcy5fbGFzdFggPSAodG91Y2ggfHwgZXZ0KS5jbGllbnRYO1xuICAgICAgdGhpcy5fbGFzdFkgPSAodG91Y2ggfHwgZXZ0KS5jbGllbnRZO1xuICAgICAgZHJhZ0VsLnN0eWxlWyd3aWxsLWNoYW5nZSddID0gJ2FsbCc7XG5cbiAgICAgIGRyYWdTdGFydEZuID0gZnVuY3Rpb24gZHJhZ1N0YXJ0Rm4oKSB7XG4gICAgICAgIHBsdWdpbkV2ZW50KCdkZWxheUVuZGVkJywgX3RoaXMsIHtcbiAgICAgICAgICBldnQ6IGV2dFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkge1xuICAgICAgICAgIF90aGlzLl9vbkRyb3AoKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBEZWxheWVkIGRyYWcgaGFzIGJlZW4gdHJpZ2dlcmVkXG4gICAgICAgIC8vIHdlIGNhbiByZS1lbmFibGUgdGhlIGV2ZW50czogdG91Y2htb3ZlL21vdXNlbW92ZVxuXG5cbiAgICAgICAgX3RoaXMuX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50cygpO1xuXG4gICAgICAgIGlmICghRmlyZUZveCAmJiBfdGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgICAgICBkcmFnRWwuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgfSAvLyBCaW5kIHRoZSBldmVudHM6IGRyYWdzdGFydC9kcmFnZW5kXG5cblxuICAgICAgICBfdGhpcy5fdHJpZ2dlckRyYWdTdGFydChldnQsIHRvdWNoKTsgLy8gRHJhZyBzdGFydCBldmVudFxuXG5cbiAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgIHNvcnRhYmxlOiBfdGhpcyxcbiAgICAgICAgICBuYW1lOiAnY2hvb3NlJyxcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgfSk7IC8vIENob3NlbiBpdGVtXG5cblxuICAgICAgICB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuY2hvc2VuQ2xhc3MsIHRydWUpO1xuICAgICAgfTsgLy8gRGlzYWJsZSBcImRyYWdnYWJsZVwiXG5cblxuICAgICAgb3B0aW9ucy5pZ25vcmUuc3BsaXQoJywnKS5mb3JFYWNoKGZ1bmN0aW9uIChjcml0ZXJpYSkge1xuICAgICAgICBmaW5kKGRyYWdFbCwgY3JpdGVyaWEudHJpbSgpLCBfZGlzYWJsZURyYWdnYWJsZSk7XG4gICAgICB9KTtcbiAgICAgIG9uKG93bmVyRG9jdW1lbnQsICdkcmFnb3ZlcicsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcbiAgICAgIG9uKG93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG4gICAgICBvbihvd25lckRvY3VtZW50LCAndG91Y2htb3ZlJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuICAgICAgb24ob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaGVuZCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgX3RoaXMuX29uRHJvcCk7IC8vIE1ha2UgZHJhZ0VsIGRyYWdnYWJsZSAobXVzdCBiZSBiZWZvcmUgZGVsYXkgZm9yIEZpcmVGb3gpXG5cbiAgICAgIGlmIChGaXJlRm94ICYmIHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFN0YXJ0VGhyZXNob2xkID0gNDtcbiAgICAgICAgZHJhZ0VsLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHBsdWdpbkV2ZW50KCdkZWxheVN0YXJ0JywgdGhpcywge1xuICAgICAgICBldnQ6IGV2dFxuICAgICAgfSk7IC8vIERlbGF5IGlzIGltcG9zc2libGUgZm9yIG5hdGl2ZSBEbkQgaW4gRWRnZSBvciBJRVxuXG4gICAgICBpZiAob3B0aW9ucy5kZWxheSAmJiAoIW9wdGlvbnMuZGVsYXlPblRvdWNoT25seSB8fCB0b3VjaCkgJiYgKCF0aGlzLm5hdGl2ZURyYWdnYWJsZSB8fCAhKEVkZ2UgfHwgSUUxMU9yTGVzcykpKSB7XG4gICAgICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICAgICAgdGhpcy5fb25Ecm9wKCk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gSWYgdGhlIHVzZXIgbW92ZXMgdGhlIHBvaW50ZXIgb3IgbGV0IGdvIHRoZSBjbGljayBvciB0b3VjaFxuICAgICAgICAvLyBiZWZvcmUgdGhlIGRlbGF5IGhhcyBiZWVuIHJlYWNoZWQ6XG4gICAgICAgIC8vIGRpc2FibGUgdGhlIGRlbGF5ZWQgZHJhZ1xuXG5cbiAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBfdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgX3RoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyk7XG4gICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIF90aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgICAgICBvbihvd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgX3RoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaG1vdmUnLCBfdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgICAgICAgb3B0aW9ucy5zdXBwb3J0UG9pbnRlciAmJiBvbihvd25lckRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCBfdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgICAgICAgX3RoaXMuX2RyYWdTdGFydFRpbWVyID0gc2V0VGltZW91dChkcmFnU3RhcnRGbiwgb3B0aW9ucy5kZWxheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnU3RhcnRGbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcjogZnVuY3Rpb24gX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcihcbiAgLyoqIFRvdWNoRXZlbnR8UG9pbnRlckV2ZW50ICoqL1xuICBlKSB7XG4gICAgdmFyIHRvdWNoID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdIDogZTtcblxuICAgIGlmIChNYXRoLm1heChNYXRoLmFicyh0b3VjaC5jbGllbnRYIC0gdGhpcy5fbGFzdFgpLCBNYXRoLmFicyh0b3VjaC5jbGllbnRZIC0gdGhpcy5fbGFzdFkpKSA+PSBNYXRoLmZsb29yKHRoaXMub3B0aW9ucy50b3VjaFN0YXJ0VGhyZXNob2xkIC8gKHRoaXMubmF0aXZlRHJhZ2dhYmxlICYmIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpKSkge1xuICAgICAgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKCk7XG4gICAgfVxuICB9LFxuICBfZGlzYWJsZURlbGF5ZWREcmFnOiBmdW5jdGlvbiBfZGlzYWJsZURlbGF5ZWREcmFnKCkge1xuICAgIGRyYWdFbCAmJiBfZGlzYWJsZURyYWdnYWJsZShkcmFnRWwpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9kcmFnU3RhcnRUaW1lcik7XG5cbiAgICB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMoKTtcbiAgfSxcbiAgX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50czogZnVuY3Rpb24gX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50cygpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IHRoaXMuZWwub3duZXJEb2N1bWVudDtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAndG91Y2hlbmQnLCB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAndG91Y2hjYW5jZWwnLCB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3RvdWNobW92ZScsIHRoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdwb2ludGVybW92ZScsIHRoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gIH0sXG4gIF90cmlnZ2VyRHJhZ1N0YXJ0OiBmdW5jdGlvbiBfdHJpZ2dlckRyYWdTdGFydChcbiAgLyoqIEV2ZW50ICovXG4gIGV2dCxcbiAgLyoqIFRvdWNoICovXG4gIHRvdWNoKSB7XG4gICAgdG91Y2ggPSB0b3VjaCB8fCBldnQucG9pbnRlclR5cGUgPT0gJ3RvdWNoJyAmJiBldnQ7XG5cbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ2dhYmxlIHx8IHRvdWNoKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRvdWNoKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uKGRyYWdFbCwgJ2RyYWdlbmQnLCB0aGlzKTtcbiAgICAgIG9uKHJvb3RFbCwgJ2RyYWdzdGFydCcsIHRoaXMuX29uRHJhZ1N0YXJ0KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgaWYgKGRvY3VtZW50LnNlbGVjdGlvbikge1xuICAgICAgICAvLyBUaW1lb3V0IG5lY2Nlc3NhcnkgZm9yIElFOVxuICAgICAgICBfbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRvY3VtZW50LnNlbGVjdGlvbi5lbXB0eSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHt9XG4gIH0sXG4gIF9kcmFnU3RhcnRlZDogZnVuY3Rpb24gX2RyYWdTdGFydGVkKGZhbGxiYWNrLCBldnQpIHtcblxuICAgIGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSBmYWxzZTtcblxuICAgIGlmIChyb290RWwgJiYgZHJhZ0VsKSB7XG4gICAgICBwbHVnaW5FdmVudCgnZHJhZ1N0YXJ0ZWQnLCB0aGlzLCB7XG4gICAgICAgIGV2dDogZXZ0XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAnZHJhZ292ZXInLCBfY2hlY2tPdXRzaWRlVGFyZ2V0RWwpO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9uczsgLy8gQXBwbHkgZWZmZWN0XG5cbiAgICAgICFmYWxsYmFjayAmJiB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZHJhZ0NsYXNzLCBmYWxzZSk7XG4gICAgICB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZ2hvc3RDbGFzcywgdHJ1ZSk7XG4gICAgICBTb3J0YWJsZS5hY3RpdmUgPSB0aGlzO1xuICAgICAgZmFsbGJhY2sgJiYgdGhpcy5fYXBwZW5kR2hvc3QoKTsgLy8gRHJhZyBzdGFydCBldmVudFxuXG4gICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgIHNvcnRhYmxlOiB0aGlzLFxuICAgICAgICBuYW1lOiAnc3RhcnQnLFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9udWxsaW5nKCk7XG4gICAgfVxuICB9LFxuICBfZW11bGF0ZURyYWdPdmVyOiBmdW5jdGlvbiBfZW11bGF0ZURyYWdPdmVyKCkge1xuICAgIGlmICh0b3VjaEV2dCkge1xuICAgICAgdGhpcy5fbGFzdFggPSB0b3VjaEV2dC5jbGllbnRYO1xuICAgICAgdGhpcy5fbGFzdFkgPSB0b3VjaEV2dC5jbGllbnRZO1xuXG4gICAgICBfaGlkZUdob3N0Rm9yVGFyZ2V0KCk7XG5cbiAgICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoRXZ0LmNsaWVudFgsIHRvdWNoRXZ0LmNsaWVudFkpO1xuICAgICAgdmFyIHBhcmVudCA9IHRhcmdldDtcblxuICAgICAgd2hpbGUgKHRhcmdldCAmJiB0YXJnZXQuc2hhZG93Um9vdCkge1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXQuc2hhZG93Um9vdC5lbGVtZW50RnJvbVBvaW50KHRvdWNoRXZ0LmNsaWVudFgsIHRvdWNoRXZ0LmNsaWVudFkpO1xuICAgICAgICBpZiAodGFyZ2V0ID09PSBwYXJlbnQpIGJyZWFrO1xuICAgICAgICBwYXJlbnQgPSB0YXJnZXQ7XG4gICAgICB9XG5cbiAgICAgIGRyYWdFbC5wYXJlbnROb2RlW2V4cGFuZG9dLl9pc091dHNpZGVUaGlzRWwodGFyZ2V0KTtcblxuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgaWYgKHBhcmVudFtleHBhbmRvXSkge1xuICAgICAgICAgICAgdmFyIGluc2VydGVkID0gdm9pZCAwO1xuICAgICAgICAgICAgaW5zZXJ0ZWQgPSBwYXJlbnRbZXhwYW5kb10uX29uRHJhZ092ZXIoe1xuICAgICAgICAgICAgICBjbGllbnRYOiB0b3VjaEV2dC5jbGllbnRYLFxuICAgICAgICAgICAgICBjbGllbnRZOiB0b3VjaEV2dC5jbGllbnRZLFxuICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgcm9vdEVsOiBwYXJlbnRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoaW5zZXJ0ZWQgJiYgIXRoaXMub3B0aW9ucy5kcmFnb3ZlckJ1YmJsZSkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0YXJnZXQgPSBwYXJlbnQ7IC8vIHN0b3JlIGxhc3QgZWxlbWVudFxuICAgICAgICB9XG4gICAgICAgIC8qIGpzaGludCBib3NzOnRydWUgKi9cbiAgICAgICAgd2hpbGUgKHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlKTtcbiAgICAgIH1cblxuICAgICAgX3VuaGlkZUdob3N0Rm9yVGFyZ2V0KCk7XG4gICAgfVxuICB9LFxuICBfb25Ub3VjaE1vdmU6IGZ1bmN0aW9uIF9vblRvdWNoTW92ZShcbiAgLyoqVG91Y2hFdmVudCovXG4gIGV2dCkge1xuICAgIGlmICh0YXBFdnQpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGZhbGxiYWNrVG9sZXJhbmNlID0gb3B0aW9ucy5mYWxsYmFja1RvbGVyYW5jZSxcbiAgICAgICAgICBmYWxsYmFja09mZnNldCA9IG9wdGlvbnMuZmFsbGJhY2tPZmZzZXQsXG4gICAgICAgICAgdG91Y2ggPSBldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0LFxuICAgICAgICAgIGdob3N0TWF0cml4ID0gZ2hvc3RFbCAmJiBtYXRyaXgoZ2hvc3RFbCwgdHJ1ZSksXG4gICAgICAgICAgc2NhbGVYID0gZ2hvc3RFbCAmJiBnaG9zdE1hdHJpeCAmJiBnaG9zdE1hdHJpeC5hLFxuICAgICAgICAgIHNjYWxlWSA9IGdob3N0RWwgJiYgZ2hvc3RNYXRyaXggJiYgZ2hvc3RNYXRyaXguZCxcbiAgICAgICAgICByZWxhdGl2ZVNjcm9sbE9mZnNldCA9IFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5ICYmIGdob3N0UmVsYXRpdmVQYXJlbnQgJiYgZ2V0UmVsYXRpdmVTY3JvbGxPZmZzZXQoZ2hvc3RSZWxhdGl2ZVBhcmVudCksXG4gICAgICAgICAgZHggPSAodG91Y2guY2xpZW50WCAtIHRhcEV2dC5jbGllbnRYICsgZmFsbGJhY2tPZmZzZXQueCkgLyAoc2NhbGVYIHx8IDEpICsgKHJlbGF0aXZlU2Nyb2xsT2Zmc2V0ID8gcmVsYXRpdmVTY3JvbGxPZmZzZXRbMF0gLSBnaG9zdFJlbGF0aXZlUGFyZW50SW5pdGlhbFNjcm9sbFswXSA6IDApIC8gKHNjYWxlWCB8fCAxKSxcbiAgICAgICAgICBkeSA9ICh0b3VjaC5jbGllbnRZIC0gdGFwRXZ0LmNsaWVudFkgKyBmYWxsYmFja09mZnNldC55KSAvIChzY2FsZVkgfHwgMSkgKyAocmVsYXRpdmVTY3JvbGxPZmZzZXQgPyByZWxhdGl2ZVNjcm9sbE9mZnNldFsxXSAtIGdob3N0UmVsYXRpdmVQYXJlbnRJbml0aWFsU2Nyb2xsWzFdIDogMCkgLyAoc2NhbGVZIHx8IDEpOyAvLyBvbmx5IHNldCB0aGUgc3RhdHVzIHRvIGRyYWdnaW5nLCB3aGVuIHdlIGFyZSBhY3R1YWxseSBkcmFnZ2luZ1xuXG4gICAgICBpZiAoIVNvcnRhYmxlLmFjdGl2ZSAmJiAhYXdhaXRpbmdEcmFnU3RhcnRlZCkge1xuICAgICAgICBpZiAoZmFsbGJhY2tUb2xlcmFuY2UgJiYgTWF0aC5tYXgoTWF0aC5hYnModG91Y2guY2xpZW50WCAtIHRoaXMuX2xhc3RYKSwgTWF0aC5hYnModG91Y2guY2xpZW50WSAtIHRoaXMuX2xhc3RZKSkgPCBmYWxsYmFja1RvbGVyYW5jZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX29uRHJhZ1N0YXJ0KGV2dCwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChnaG9zdEVsKSB7XG4gICAgICAgIGlmIChnaG9zdE1hdHJpeCkge1xuICAgICAgICAgIGdob3N0TWF0cml4LmUgKz0gZHggLSAobGFzdER4IHx8IDApO1xuICAgICAgICAgIGdob3N0TWF0cml4LmYgKz0gZHkgLSAobGFzdER5IHx8IDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdob3N0TWF0cml4ID0ge1xuICAgICAgICAgICAgYTogMSxcbiAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICBjOiAwLFxuICAgICAgICAgICAgZDogMSxcbiAgICAgICAgICAgIGU6IGR4LFxuICAgICAgICAgICAgZjogZHlcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNzc01hdHJpeCA9IFwibWF0cml4KFwiLmNvbmNhdChnaG9zdE1hdHJpeC5hLCBcIixcIikuY29uY2F0KGdob3N0TWF0cml4LmIsIFwiLFwiKS5jb25jYXQoZ2hvc3RNYXRyaXguYywgXCIsXCIpLmNvbmNhdChnaG9zdE1hdHJpeC5kLCBcIixcIikuY29uY2F0KGdob3N0TWF0cml4LmUsIFwiLFwiKS5jb25jYXQoZ2hvc3RNYXRyaXguZiwgXCIpXCIpO1xuICAgICAgICBjc3MoZ2hvc3RFbCwgJ3dlYmtpdFRyYW5zZm9ybScsIGNzc01hdHJpeCk7XG4gICAgICAgIGNzcyhnaG9zdEVsLCAnbW96VHJhbnNmb3JtJywgY3NzTWF0cml4KTtcbiAgICAgICAgY3NzKGdob3N0RWwsICdtc1RyYW5zZm9ybScsIGNzc01hdHJpeCk7XG4gICAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNmb3JtJywgY3NzTWF0cml4KTtcbiAgICAgICAgbGFzdER4ID0gZHg7XG4gICAgICAgIGxhc3REeSA9IGR5O1xuICAgICAgICB0b3VjaEV2dCA9IHRvdWNoO1xuICAgICAgfVxuXG4gICAgICBldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0sXG4gIF9hcHBlbmRHaG9zdDogZnVuY3Rpb24gX2FwcGVuZEdob3N0KCkge1xuICAgIC8vIEJ1ZyBpZiB1c2luZyBzY2FsZSgpOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNjM3MDU4XG4gICAgLy8gTm90IGJlaW5nIGFkanVzdGVkIGZvclxuICAgIGlmICghZ2hvc3RFbCkge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5mYWxsYmFja09uQm9keSA/IGRvY3VtZW50LmJvZHkgOiByb290RWwsXG4gICAgICAgICAgcmVjdCA9IGdldFJlY3QoZHJhZ0VsLCB0cnVlLCBQb3NpdGlvbkdob3N0QWJzb2x1dGVseSwgdHJ1ZSwgY29udGFpbmVyKSxcbiAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zOyAvLyBQb3NpdGlvbiBhYnNvbHV0ZWx5XG5cbiAgICAgIGlmIChQb3NpdGlvbkdob3N0QWJzb2x1dGVseSkge1xuICAgICAgICAvLyBHZXQgcmVsYXRpdmVseSBwb3NpdGlvbmVkIHBhcmVudFxuICAgICAgICBnaG9zdFJlbGF0aXZlUGFyZW50ID0gY29udGFpbmVyO1xuXG4gICAgICAgIHdoaWxlIChjc3MoZ2hvc3RSZWxhdGl2ZVBhcmVudCwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnICYmIGNzcyhnaG9zdFJlbGF0aXZlUGFyZW50LCAndHJhbnNmb3JtJykgPT09ICdub25lJyAmJiBnaG9zdFJlbGF0aXZlUGFyZW50ICE9PSBkb2N1bWVudCkge1xuICAgICAgICAgIGdob3N0UmVsYXRpdmVQYXJlbnQgPSBnaG9zdFJlbGF0aXZlUGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2hvc3RSZWxhdGl2ZVBhcmVudCAhPT0gZG9jdW1lbnQuYm9keSAmJiBnaG9zdFJlbGF0aXZlUGFyZW50ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICBpZiAoZ2hvc3RSZWxhdGl2ZVBhcmVudCA9PT0gZG9jdW1lbnQpIGdob3N0UmVsYXRpdmVQYXJlbnQgPSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCk7XG4gICAgICAgICAgcmVjdC50b3AgKz0gZ2hvc3RSZWxhdGl2ZVBhcmVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgcmVjdC5sZWZ0ICs9IGdob3N0UmVsYXRpdmVQYXJlbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnaG9zdFJlbGF0aXZlUGFyZW50ID0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGwgPSBnZXRSZWxhdGl2ZVNjcm9sbE9mZnNldChnaG9zdFJlbGF0aXZlUGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgZ2hvc3RFbCA9IGRyYWdFbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICB0b2dnbGVDbGFzcyhnaG9zdEVsLCBvcHRpb25zLmdob3N0Q2xhc3MsIGZhbHNlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKGdob3N0RWwsIG9wdGlvbnMuZmFsbGJhY2tDbGFzcywgdHJ1ZSk7XG4gICAgICB0b2dnbGVDbGFzcyhnaG9zdEVsLCBvcHRpb25zLmRyYWdDbGFzcywgdHJ1ZSk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3RyYW5zaXRpb24nLCAnJyk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3RyYW5zZm9ybScsICcnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnYm94LXNpemluZycsICdib3JkZXItYm94Jyk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ21hcmdpbicsIDApO1xuICAgICAgY3NzKGdob3N0RWwsICd0b3AnLCByZWN0LnRvcCk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ2xlZnQnLCByZWN0LmxlZnQpO1xuICAgICAgY3NzKGdob3N0RWwsICd3aWR0aCcsIHJlY3Qud2lkdGgpO1xuICAgICAgY3NzKGdob3N0RWwsICdoZWlnaHQnLCByZWN0LmhlaWdodCk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ29wYWNpdHknLCAnMC44Jyk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3Bvc2l0aW9uJywgUG9zaXRpb25HaG9zdEFic29sdXRlbHkgPyAnYWJzb2x1dGUnIDogJ2ZpeGVkJyk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3pJbmRleCcsICcxMDAwMDAnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAncG9pbnRlckV2ZW50cycsICdub25lJyk7XG4gICAgICBTb3J0YWJsZS5naG9zdCA9IGdob3N0RWw7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2hvc3RFbCk7IC8vIFNldCB0cmFuc2Zvcm0tb3JpZ2luXG5cbiAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNmb3JtLW9yaWdpbicsIHRhcERpc3RhbmNlTGVmdCAvIHBhcnNlSW50KGdob3N0RWwuc3R5bGUud2lkdGgpICogMTAwICsgJyUgJyArIHRhcERpc3RhbmNlVG9wIC8gcGFyc2VJbnQoZ2hvc3RFbC5zdHlsZS5oZWlnaHQpICogMTAwICsgJyUnKTtcbiAgICB9XG4gIH0sXG4gIF9vbkRyYWdTdGFydDogZnVuY3Rpb24gX29uRHJhZ1N0YXJ0KFxuICAvKipFdmVudCovXG4gIGV2dCxcbiAgLyoqYm9vbGVhbiovXG4gIGZhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBkYXRhVHJhbnNmZXIgPSBldnQuZGF0YVRyYW5zZmVyO1xuICAgIHZhciBvcHRpb25zID0gX3RoaXMub3B0aW9ucztcbiAgICBwbHVnaW5FdmVudCgnZHJhZ1N0YXJ0JywgdGhpcywge1xuICAgICAgZXZ0OiBldnRcbiAgICB9KTtcblxuICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICB0aGlzLl9vbkRyb3AoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBsdWdpbkV2ZW50KCdzZXR1cENsb25lJywgdGhpcyk7XG5cbiAgICBpZiAoIVNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHtcbiAgICAgIGNsb25lRWwgPSBjbG9uZShkcmFnRWwpO1xuICAgICAgY2xvbmVFbC5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICAgIGNsb25lRWwuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICBjbG9uZUVsLnN0eWxlWyd3aWxsLWNoYW5nZSddID0gJyc7XG5cbiAgICAgIHRoaXMuX2hpZGVDbG9uZSgpO1xuXG4gICAgICB0b2dnbGVDbGFzcyhjbG9uZUVsLCB0aGlzLm9wdGlvbnMuY2hvc2VuQ2xhc3MsIGZhbHNlKTtcbiAgICAgIFNvcnRhYmxlLmNsb25lID0gY2xvbmVFbDtcbiAgICB9IC8vICMxMTQzOiBJRnJhbWUgc3VwcG9ydCB3b3JrYXJvdW5kXG5cblxuICAgIF90aGlzLmNsb25lSWQgPSBfbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgcGx1Z2luRXZlbnQoJ2Nsb25lJywgX3RoaXMpO1xuICAgICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHJldHVybjtcblxuICAgICAgaWYgKCFfdGhpcy5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlKSB7XG4gICAgICAgIHJvb3RFbC5pbnNlcnRCZWZvcmUoY2xvbmVFbCwgZHJhZ0VsKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuX2hpZGVDbG9uZSgpO1xuXG4gICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgIHNvcnRhYmxlOiBfdGhpcyxcbiAgICAgICAgbmFtZTogJ2Nsb25lJ1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgIWZhbGxiYWNrICYmIHRvZ2dsZUNsYXNzKGRyYWdFbCwgb3B0aW9ucy5kcmFnQ2xhc3MsIHRydWUpOyAvLyBTZXQgcHJvcGVyIGRyb3AgZXZlbnRzXG5cbiAgICBpZiAoZmFsbGJhY2spIHtcbiAgICAgIGlnbm9yZU5leHRDbGljayA9IHRydWU7XG4gICAgICBfdGhpcy5fbG9vcElkID0gc2V0SW50ZXJ2YWwoX3RoaXMuX2VtdWxhdGVEcmFnT3ZlciwgNTApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVbmRvIHdoYXQgd2FzIHNldCBpbiBfcHJlcGFyZURyYWdTdGFydCBiZWZvcmUgZHJhZyBzdGFydGVkXG4gICAgICBvZmYoZG9jdW1lbnQsICdtb3VzZXVwJywgX3RoaXMuX29uRHJvcCk7XG4gICAgICBvZmYoZG9jdW1lbnQsICd0b3VjaGVuZCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgb2ZmKGRvY3VtZW50LCAndG91Y2hjYW5jZWwnLCBfdGhpcy5fb25Ecm9wKTtcblxuICAgICAgaWYgKGRhdGFUcmFuc2Zlcikge1xuICAgICAgICBkYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcbiAgICAgICAgb3B0aW9ucy5zZXREYXRhICYmIG9wdGlvbnMuc2V0RGF0YS5jYWxsKF90aGlzLCBkYXRhVHJhbnNmZXIsIGRyYWdFbCk7XG4gICAgICB9XG5cbiAgICAgIG9uKGRvY3VtZW50LCAnZHJvcCcsIF90aGlzKTsgLy8gIzEyNzYgZml4OlxuXG4gICAgICBjc3MoZHJhZ0VsLCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVooMCknKTtcbiAgICB9XG5cbiAgICBhd2FpdGluZ0RyYWdTdGFydGVkID0gdHJ1ZTtcbiAgICBfdGhpcy5fZHJhZ1N0YXJ0SWQgPSBfbmV4dFRpY2soX3RoaXMuX2RyYWdTdGFydGVkLmJpbmQoX3RoaXMsIGZhbGxiYWNrLCBldnQpKTtcbiAgICBvbihkb2N1bWVudCwgJ3NlbGVjdHN0YXJ0JywgX3RoaXMpO1xuICAgIG1vdmVkID0gdHJ1ZTtcblxuICAgIGlmIChTYWZhcmkpIHtcbiAgICAgIGNzcyhkb2N1bWVudC5ib2R5LCAndXNlci1zZWxlY3QnLCAnbm9uZScpO1xuICAgIH1cbiAgfSxcbiAgLy8gUmV0dXJucyB0cnVlIC0gaWYgbm8gZnVydGhlciBhY3Rpb24gaXMgbmVlZGVkIChlaXRoZXIgaW5zZXJ0ZWQgb3IgYW5vdGhlciBjb25kaXRpb24pXG4gIF9vbkRyYWdPdmVyOiBmdW5jdGlvbiBfb25EcmFnT3ZlcihcbiAgLyoqRXZlbnQqL1xuICBldnQpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmVsLFxuICAgICAgICB0YXJnZXQgPSBldnQudGFyZ2V0LFxuICAgICAgICBkcmFnUmVjdCxcbiAgICAgICAgdGFyZ2V0UmVjdCxcbiAgICAgICAgcmV2ZXJ0LFxuICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBncm91cCA9IG9wdGlvbnMuZ3JvdXAsXG4gICAgICAgIGFjdGl2ZVNvcnRhYmxlID0gU29ydGFibGUuYWN0aXZlLFxuICAgICAgICBpc093bmVyID0gYWN0aXZlR3JvdXAgPT09IGdyb3VwLFxuICAgICAgICBjYW5Tb3J0ID0gb3B0aW9ucy5zb3J0LFxuICAgICAgICBmcm9tU29ydGFibGUgPSBwdXRTb3J0YWJsZSB8fCBhY3RpdmVTb3J0YWJsZSxcbiAgICAgICAgdmVydGljYWwsXG4gICAgICAgIF90aGlzID0gdGhpcyxcbiAgICAgICAgY29tcGxldGVkRmlyZWQgPSBmYWxzZTtcblxuICAgIGlmIChfc2lsZW50KSByZXR1cm47XG5cbiAgICBmdW5jdGlvbiBkcmFnT3ZlckV2ZW50KG5hbWUsIGV4dHJhKSB7XG4gICAgICBwbHVnaW5FdmVudChuYW1lLCBfdGhpcywgX29iamVjdFNwcmVhZDIoe1xuICAgICAgICBldnQ6IGV2dCxcbiAgICAgICAgaXNPd25lcjogaXNPd25lcixcbiAgICAgICAgYXhpczogdmVydGljYWwgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnLFxuICAgICAgICByZXZlcnQ6IHJldmVydCxcbiAgICAgICAgZHJhZ1JlY3Q6IGRyYWdSZWN0LFxuICAgICAgICB0YXJnZXRSZWN0OiB0YXJnZXRSZWN0LFxuICAgICAgICBjYW5Tb3J0OiBjYW5Tb3J0LFxuICAgICAgICBmcm9tU29ydGFibGU6IGZyb21Tb3J0YWJsZSxcbiAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgIGNvbXBsZXRlZDogY29tcGxldGVkLFxuICAgICAgICBvbk1vdmU6IGZ1bmN0aW9uIG9uTW92ZSh0YXJnZXQsIGFmdGVyKSB7XG4gICAgICAgICAgcmV0dXJuIF9vbk1vdmUocm9vdEVsLCBlbCwgZHJhZ0VsLCBkcmFnUmVjdCwgdGFyZ2V0LCBnZXRSZWN0KHRhcmdldCksIGV2dCwgYWZ0ZXIpO1xuICAgICAgICB9LFxuICAgICAgICBjaGFuZ2VkOiBjaGFuZ2VkXG4gICAgICB9LCBleHRyYSkpO1xuICAgIH0gLy8gQ2FwdHVyZSBhbmltYXRpb24gc3RhdGVcblxuXG4gICAgZnVuY3Rpb24gY2FwdHVyZSgpIHtcbiAgICAgIGRyYWdPdmVyRXZlbnQoJ2RyYWdPdmVyQW5pbWF0aW9uQ2FwdHVyZScpO1xuXG4gICAgICBfdGhpcy5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcblxuICAgICAgaWYgKF90aGlzICE9PSBmcm9tU29ydGFibGUpIHtcbiAgICAgICAgZnJvbVNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgICAgfVxuICAgIH0gLy8gUmV0dXJuIGludm9jYXRpb24gd2hlbiBkcmFnRWwgaXMgaW5zZXJ0ZWQgKG9yIGNvbXBsZXRlZClcblxuXG4gICAgZnVuY3Rpb24gY29tcGxldGVkKGluc2VydGlvbikge1xuICAgICAgZHJhZ092ZXJFdmVudCgnZHJhZ092ZXJDb21wbGV0ZWQnLCB7XG4gICAgICAgIGluc2VydGlvbjogaW5zZXJ0aW9uXG4gICAgICB9KTtcblxuICAgICAgaWYgKGluc2VydGlvbikge1xuICAgICAgICAvLyBDbG9uZXMgbXVzdCBiZSBoaWRkZW4gYmVmb3JlIGZvbGRpbmcgYW5pbWF0aW9uIHRvIGNhcHR1cmUgZHJhZ1JlY3RBYnNvbHV0ZSBwcm9wZXJseVxuICAgICAgICBpZiAoaXNPd25lcikge1xuICAgICAgICAgIGFjdGl2ZVNvcnRhYmxlLl9oaWRlQ2xvbmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhY3RpdmVTb3J0YWJsZS5fc2hvd0Nsb25lKF90aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfdGhpcyAhPT0gZnJvbVNvcnRhYmxlKSB7XG4gICAgICAgICAgLy8gU2V0IGdob3N0IGNsYXNzIHRvIG5ldyBzb3J0YWJsZSdzIGdob3N0IGNsYXNzXG4gICAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBwdXRTb3J0YWJsZSA/IHB1dFNvcnRhYmxlLm9wdGlvbnMuZ2hvc3RDbGFzcyA6IGFjdGl2ZVNvcnRhYmxlLm9wdGlvbnMuZ2hvc3RDbGFzcywgZmFsc2UpO1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgb3B0aW9ucy5naG9zdENsYXNzLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwdXRTb3J0YWJsZSAhPT0gX3RoaXMgJiYgX3RoaXMgIT09IFNvcnRhYmxlLmFjdGl2ZSkge1xuICAgICAgICAgIHB1dFNvcnRhYmxlID0gX3RoaXM7XG4gICAgICAgIH0gZWxzZSBpZiAoX3RoaXMgPT09IFNvcnRhYmxlLmFjdGl2ZSAmJiBwdXRTb3J0YWJsZSkge1xuICAgICAgICAgIHB1dFNvcnRhYmxlID0gbnVsbDtcbiAgICAgICAgfSAvLyBBbmltYXRpb25cblxuXG4gICAgICAgIGlmIChmcm9tU29ydGFibGUgPT09IF90aGlzKSB7XG4gICAgICAgICAgX3RoaXMuX2lnbm9yZVdoaWxlQW5pbWF0aW5nID0gdGFyZ2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuYW5pbWF0ZUFsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZHJhZ092ZXJFdmVudCgnZHJhZ092ZXJBbmltYXRpb25Db21wbGV0ZScpO1xuICAgICAgICAgIF90aGlzLl9pZ25vcmVXaGlsZUFuaW1hdGluZyA9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChfdGhpcyAhPT0gZnJvbVNvcnRhYmxlKSB7XG4gICAgICAgICAgZnJvbVNvcnRhYmxlLmFuaW1hdGVBbGwoKTtcbiAgICAgICAgICBmcm9tU29ydGFibGUuX2lnbm9yZVdoaWxlQW5pbWF0aW5nID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSAvLyBOdWxsIGxhc3RUYXJnZXQgaWYgaXQgaXMgbm90IGluc2lkZSBhIHByZXZpb3VzbHkgc3dhcHBlZCBlbGVtZW50XG5cblxuICAgICAgaWYgKHRhcmdldCA9PT0gZHJhZ0VsICYmICFkcmFnRWwuYW5pbWF0ZWQgfHwgdGFyZ2V0ID09PSBlbCAmJiAhdGFyZ2V0LmFuaW1hdGVkKSB7XG4gICAgICAgIGxhc3RUYXJnZXQgPSBudWxsO1xuICAgICAgfSAvLyBubyBidWJibGluZyBhbmQgbm90IGZhbGxiYWNrXG5cblxuICAgICAgaWYgKCFvcHRpb25zLmRyYWdvdmVyQnViYmxlICYmICFldnQucm9vdEVsICYmIHRhcmdldCAhPT0gZG9jdW1lbnQpIHtcbiAgICAgICAgZHJhZ0VsLnBhcmVudE5vZGVbZXhwYW5kb10uX2lzT3V0c2lkZVRoaXNFbChldnQudGFyZ2V0KTsgLy8gRG8gbm90IGRldGVjdCBmb3IgZW1wdHkgaW5zZXJ0IGlmIGFscmVhZHkgaW5zZXJ0ZWRcblxuXG4gICAgICAgICFpbnNlcnRpb24gJiYgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQoZXZ0KTtcbiAgICAgIH1cblxuICAgICAgIW9wdGlvbnMuZHJhZ292ZXJCdWJibGUgJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbiAmJiBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm4gY29tcGxldGVkRmlyZWQgPSB0cnVlO1xuICAgIH0gLy8gQ2FsbCB3aGVuIGRyYWdFbCBoYXMgYmVlbiBpbnNlcnRlZFxuXG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VkKCkge1xuICAgICAgbmV3SW5kZXggPSBpbmRleChkcmFnRWwpO1xuICAgICAgbmV3RHJhZ2dhYmxlSW5kZXggPSBpbmRleChkcmFnRWwsIG9wdGlvbnMuZHJhZ2dhYmxlKTtcblxuICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICBzb3J0YWJsZTogX3RoaXMsXG4gICAgICAgIG5hbWU6ICdjaGFuZ2UnLFxuICAgICAgICB0b0VsOiBlbCxcbiAgICAgICAgbmV3SW5kZXg6IG5ld0luZGV4LFxuICAgICAgICBuZXdEcmFnZ2FibGVJbmRleDogbmV3RHJhZ2dhYmxlSW5kZXgsXG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGV2dC5wcmV2ZW50RGVmYXVsdCAhPT0gdm9pZCAwKSB7XG4gICAgICBldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB0YXJnZXQgPSBjbG9zZXN0KHRhcmdldCwgb3B0aW9ucy5kcmFnZ2FibGUsIGVsLCB0cnVlKTtcbiAgICBkcmFnT3ZlckV2ZW50KCdkcmFnT3ZlcicpO1xuICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSByZXR1cm4gY29tcGxldGVkRmlyZWQ7XG5cbiAgICBpZiAoZHJhZ0VsLmNvbnRhaW5zKGV2dC50YXJnZXQpIHx8IHRhcmdldC5hbmltYXRlZCAmJiB0YXJnZXQuYW5pbWF0aW5nWCAmJiB0YXJnZXQuYW5pbWF0aW5nWSB8fCBfdGhpcy5faWdub3JlV2hpbGVBbmltYXRpbmcgPT09IHRhcmdldCkge1xuICAgICAgcmV0dXJuIGNvbXBsZXRlZChmYWxzZSk7XG4gICAgfVxuXG4gICAgaWdub3JlTmV4dENsaWNrID0gZmFsc2U7XG5cbiAgICBpZiAoYWN0aXZlU29ydGFibGUgJiYgIW9wdGlvbnMuZGlzYWJsZWQgJiYgKGlzT3duZXIgPyBjYW5Tb3J0IHx8IChyZXZlcnQgPSBwYXJlbnRFbCAhPT0gcm9vdEVsKSAvLyBSZXZlcnRpbmcgaXRlbSBpbnRvIHRoZSBvcmlnaW5hbCBsaXN0XG4gICAgOiBwdXRTb3J0YWJsZSA9PT0gdGhpcyB8fCAodGhpcy5sYXN0UHV0TW9kZSA9IGFjdGl2ZUdyb3VwLmNoZWNrUHVsbCh0aGlzLCBhY3RpdmVTb3J0YWJsZSwgZHJhZ0VsLCBldnQpKSAmJiBncm91cC5jaGVja1B1dCh0aGlzLCBhY3RpdmVTb3J0YWJsZSwgZHJhZ0VsLCBldnQpKSkge1xuICAgICAgdmVydGljYWwgPSB0aGlzLl9nZXREaXJlY3Rpb24oZXZ0LCB0YXJnZXQpID09PSAndmVydGljYWwnO1xuICAgICAgZHJhZ1JlY3QgPSBnZXRSZWN0KGRyYWdFbCk7XG4gICAgICBkcmFnT3ZlckV2ZW50KCdkcmFnT3ZlclZhbGlkJyk7XG4gICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkgcmV0dXJuIGNvbXBsZXRlZEZpcmVkO1xuXG4gICAgICBpZiAocmV2ZXJ0KSB7XG4gICAgICAgIHBhcmVudEVsID0gcm9vdEVsOyAvLyBhY3R1YWxpemF0aW9uXG5cbiAgICAgICAgY2FwdHVyZSgpO1xuXG4gICAgICAgIHRoaXMuX2hpZGVDbG9uZSgpO1xuXG4gICAgICAgIGRyYWdPdmVyRXZlbnQoJ3JldmVydCcpO1xuXG4gICAgICAgIGlmICghU29ydGFibGUuZXZlbnRDYW5jZWxlZCkge1xuICAgICAgICAgIGlmIChuZXh0RWwpIHtcbiAgICAgICAgICAgIHJvb3RFbC5pbnNlcnRCZWZvcmUoZHJhZ0VsLCBuZXh0RWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb290RWwuYXBwZW5kQ2hpbGQoZHJhZ0VsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcGxldGVkKHRydWUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWxMYXN0Q2hpbGQgPSBsYXN0Q2hpbGQoZWwsIG9wdGlvbnMuZHJhZ2dhYmxlKTtcblxuICAgICAgaWYgKCFlbExhc3RDaGlsZCB8fCBfZ2hvc3RJc0xhc3QoZXZ0LCB2ZXJ0aWNhbCwgdGhpcykgJiYgIWVsTGFzdENoaWxkLmFuaW1hdGVkKSB7XG4gICAgICAgIC8vIEluc2VydCB0byBlbmQgb2YgbGlzdFxuICAgICAgICAvLyBJZiBhbHJlYWR5IGF0IGVuZCBvZiBsaXN0OiBEbyBub3QgaW5zZXJ0XG4gICAgICAgIGlmIChlbExhc3RDaGlsZCA9PT0gZHJhZ0VsKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbXBsZXRlZChmYWxzZSk7XG4gICAgICAgIH0gLy8gaWYgdGhlcmUgaXMgYSBsYXN0IGVsZW1lbnQsIGl0IGlzIHRoZSB0YXJnZXRcblxuXG4gICAgICAgIGlmIChlbExhc3RDaGlsZCAmJiBlbCA9PT0gZXZ0LnRhcmdldCkge1xuICAgICAgICAgIHRhcmdldCA9IGVsTGFzdENoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIHRhcmdldFJlY3QgPSBnZXRSZWN0KHRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX29uTW92ZShyb290RWwsIGVsLCBkcmFnRWwsIGRyYWdSZWN0LCB0YXJnZXQsIHRhcmdldFJlY3QsIGV2dCwgISF0YXJnZXQpICE9PSBmYWxzZSkge1xuICAgICAgICAgIGNhcHR1cmUoKTtcblxuICAgICAgICAgIGlmIChlbExhc3RDaGlsZCAmJiBlbExhc3RDaGlsZC5uZXh0U2libGluZykge1xuICAgICAgICAgICAgLy8gdGhlIGxhc3QgZHJhZ2dhYmxlIGVsZW1lbnQgaXMgbm90IHRoZSBsYXN0IG5vZGVcbiAgICAgICAgICAgIGVsLmluc2VydEJlZm9yZShkcmFnRWwsIGVsTGFzdENoaWxkLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZHJhZ0VsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXJlbnRFbCA9IGVsOyAvLyBhY3R1YWxpemF0aW9uXG5cbiAgICAgICAgICBjaGFuZ2VkKCk7XG4gICAgICAgICAgcmV0dXJuIGNvbXBsZXRlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbExhc3RDaGlsZCAmJiBfZ2hvc3RJc0ZpcnN0KGV2dCwgdmVydGljYWwsIHRoaXMpKSB7XG4gICAgICAgIC8vIEluc2VydCB0byBzdGFydCBvZiBsaXN0XG4gICAgICAgIHZhciBmaXJzdENoaWxkID0gZ2V0Q2hpbGQoZWwsIDAsIG9wdGlvbnMsIHRydWUpO1xuXG4gICAgICAgIGlmIChmaXJzdENoaWxkID09PSBkcmFnRWwpIHtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldCA9IGZpcnN0Q2hpbGQ7XG4gICAgICAgIHRhcmdldFJlY3QgPSBnZXRSZWN0KHRhcmdldCk7XG5cbiAgICAgICAgaWYgKF9vbk1vdmUocm9vdEVsLCBlbCwgZHJhZ0VsLCBkcmFnUmVjdCwgdGFyZ2V0LCB0YXJnZXRSZWN0LCBldnQsIGZhbHNlKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBjYXB0dXJlKCk7XG4gICAgICAgICAgZWwuaW5zZXJ0QmVmb3JlKGRyYWdFbCwgZmlyc3RDaGlsZCk7XG4gICAgICAgICAgcGFyZW50RWwgPSBlbDsgLy8gYWN0dWFsaXphdGlvblxuXG4gICAgICAgICAgY2hhbmdlZCgpO1xuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LnBhcmVudE5vZGUgPT09IGVsKSB7XG4gICAgICAgIHRhcmdldFJlY3QgPSBnZXRSZWN0KHRhcmdldCk7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSAwLFxuICAgICAgICAgICAgdGFyZ2V0QmVmb3JlRmlyc3RTd2FwLFxuICAgICAgICAgICAgZGlmZmVyZW50TGV2ZWwgPSBkcmFnRWwucGFyZW50Tm9kZSAhPT0gZWwsXG4gICAgICAgICAgICBkaWZmZXJlbnRSb3dDb2wgPSAhX2RyYWdFbEluUm93Q29sdW1uKGRyYWdFbC5hbmltYXRlZCAmJiBkcmFnRWwudG9SZWN0IHx8IGRyYWdSZWN0LCB0YXJnZXQuYW5pbWF0ZWQgJiYgdGFyZ2V0LnRvUmVjdCB8fCB0YXJnZXRSZWN0LCB2ZXJ0aWNhbCksXG4gICAgICAgICAgICBzaWRlMSA9IHZlcnRpY2FsID8gJ3RvcCcgOiAnbGVmdCcsXG4gICAgICAgICAgICBzY3JvbGxlZFBhc3RUb3AgPSBpc1Njcm9sbGVkUGFzdCh0YXJnZXQsICd0b3AnLCAndG9wJykgfHwgaXNTY3JvbGxlZFBhc3QoZHJhZ0VsLCAndG9wJywgJ3RvcCcpLFxuICAgICAgICAgICAgc2Nyb2xsQmVmb3JlID0gc2Nyb2xsZWRQYXN0VG9wID8gc2Nyb2xsZWRQYXN0VG9wLnNjcm9sbFRvcCA6IHZvaWQgMDtcblxuICAgICAgICBpZiAobGFzdFRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgdGFyZ2V0QmVmb3JlRmlyc3RTd2FwID0gdGFyZ2V0UmVjdFtzaWRlMV07XG4gICAgICAgICAgcGFzdEZpcnN0SW52ZXJ0VGhyZXNoID0gZmFsc2U7XG4gICAgICAgICAgaXNDaXJjdW1zdGFudGlhbEludmVydCA9ICFkaWZmZXJlbnRSb3dDb2wgJiYgb3B0aW9ucy5pbnZlcnRTd2FwIHx8IGRpZmZlcmVudExldmVsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlyZWN0aW9uID0gX2dldFN3YXBEaXJlY3Rpb24oZXZ0LCB0YXJnZXQsIHRhcmdldFJlY3QsIHZlcnRpY2FsLCBkaWZmZXJlbnRSb3dDb2wgPyAxIDogb3B0aW9ucy5zd2FwVGhyZXNob2xkLCBvcHRpb25zLmludmVydGVkU3dhcFRocmVzaG9sZCA9PSBudWxsID8gb3B0aW9ucy5zd2FwVGhyZXNob2xkIDogb3B0aW9ucy5pbnZlcnRlZFN3YXBUaHJlc2hvbGQsIGlzQ2lyY3Vtc3RhbnRpYWxJbnZlcnQsIGxhc3RUYXJnZXQgPT09IHRhcmdldCk7XG4gICAgICAgIHZhciBzaWJsaW5nO1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gIT09IDApIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiB0YXJnZXQgaXMgYmVzaWRlIGRyYWdFbCBpbiByZXNwZWN0aXZlIGRpcmVjdGlvbiAoaWdub3JpbmcgaGlkZGVuIGVsZW1lbnRzKVxuICAgICAgICAgIHZhciBkcmFnSW5kZXggPSBpbmRleChkcmFnRWwpO1xuXG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgZHJhZ0luZGV4IC09IGRpcmVjdGlvbjtcbiAgICAgICAgICAgIHNpYmxpbmcgPSBwYXJlbnRFbC5jaGlsZHJlbltkcmFnSW5kZXhdO1xuICAgICAgICAgIH0gd2hpbGUgKHNpYmxpbmcgJiYgKGNzcyhzaWJsaW5nLCAnZGlzcGxheScpID09PSAnbm9uZScgfHwgc2libGluZyA9PT0gZ2hvc3RFbCkpO1xuICAgICAgICB9IC8vIElmIGRyYWdFbCBpcyBhbHJlYWR5IGJlc2lkZSB0YXJnZXQ6IERvIG5vdCBpbnNlcnRcblxuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDAgfHwgc2libGluZyA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIGNvbXBsZXRlZChmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0VGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICBsYXN0RGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB2YXIgbmV4dFNpYmxpbmcgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLFxuICAgICAgICAgICAgYWZ0ZXIgPSBmYWxzZTtcbiAgICAgICAgYWZ0ZXIgPSBkaXJlY3Rpb24gPT09IDE7XG5cbiAgICAgICAgdmFyIG1vdmVWZWN0b3IgPSBfb25Nb3ZlKHJvb3RFbCwgZWwsIGRyYWdFbCwgZHJhZ1JlY3QsIHRhcmdldCwgdGFyZ2V0UmVjdCwgZXZ0LCBhZnRlcik7XG5cbiAgICAgICAgaWYgKG1vdmVWZWN0b3IgIT09IGZhbHNlKSB7XG4gICAgICAgICAgaWYgKG1vdmVWZWN0b3IgPT09IDEgfHwgbW92ZVZlY3RvciA9PT0gLTEpIHtcbiAgICAgICAgICAgIGFmdGVyID0gbW92ZVZlY3RvciA9PT0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfc2lsZW50ID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KF91bnNpbGVudCwgMzApO1xuICAgICAgICAgIGNhcHR1cmUoKTtcblxuICAgICAgICAgIGlmIChhZnRlciAmJiAhbmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGRyYWdFbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkcmFnRWwsIGFmdGVyID8gbmV4dFNpYmxpbmcgOiB0YXJnZXQpO1xuICAgICAgICAgIH0gLy8gVW5kbyBjaHJvbWUncyBzY3JvbGwgYWRqdXN0bWVudCAoaGFzIG5vIGVmZmVjdCBvbiBvdGhlciBicm93c2VycylcblxuXG4gICAgICAgICAgaWYgKHNjcm9sbGVkUGFzdFRvcCkge1xuICAgICAgICAgICAgc2Nyb2xsQnkoc2Nyb2xsZWRQYXN0VG9wLCAwLCBzY3JvbGxCZWZvcmUgLSBzY3JvbGxlZFBhc3RUb3Auc2Nyb2xsVG9wKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXJlbnRFbCA9IGRyYWdFbC5wYXJlbnROb2RlOyAvLyBhY3R1YWxpemF0aW9uXG4gICAgICAgICAgLy8gbXVzdCBiZSBkb25lIGJlZm9yZSBhbmltYXRpb25cblxuICAgICAgICAgIGlmICh0YXJnZXRCZWZvcmVGaXJzdFN3YXAgIT09IHVuZGVmaW5lZCAmJiAhaXNDaXJjdW1zdGFudGlhbEludmVydCkge1xuICAgICAgICAgICAgdGFyZ2V0TW92ZURpc3RhbmNlID0gTWF0aC5hYnModGFyZ2V0QmVmb3JlRmlyc3RTd2FwIC0gZ2V0UmVjdCh0YXJnZXQpW3NpZGUxXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hhbmdlZCgpO1xuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGVsLmNvbnRhaW5zKGRyYWdFbCkpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZChmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuICBfaWdub3JlV2hpbGVBbmltYXRpbmc6IG51bGwsXG4gIF9vZmZNb3ZlRXZlbnRzOiBmdW5jdGlvbiBfb2ZmTW92ZUV2ZW50cygpIHtcbiAgICBvZmYoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgb2ZmKGRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgIG9mZihkb2N1bWVudCwgJ3BvaW50ZXJtb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgIG9mZihkb2N1bWVudCwgJ2RyYWdvdmVyJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuICAgIG9mZihkb2N1bWVudCwgJ21vdXNlbW92ZScsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcbiAgICBvZmYoZG9jdW1lbnQsICd0b3VjaG1vdmUnLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG4gIH0sXG4gIF9vZmZVcEV2ZW50czogZnVuY3Rpb24gX29mZlVwRXZlbnRzKCkge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gdGhpcy5lbC5vd25lckRvY3VtZW50O1xuICAgIG9mZihvd25lckRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMuX29uRHJvcCk7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICd0b3VjaGVuZCcsIHRoaXMuX29uRHJvcCk7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdwb2ludGVydXAnLCB0aGlzLl9vbkRyb3ApO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAndG91Y2hjYW5jZWwnLCB0aGlzLl9vbkRyb3ApO1xuICAgIG9mZihkb2N1bWVudCwgJ3NlbGVjdHN0YXJ0JywgdGhpcyk7XG4gIH0sXG4gIF9vbkRyb3A6IGZ1bmN0aW9uIF9vbkRyb3AoXG4gIC8qKkV2ZW50Ki9cbiAgZXZ0KSB7XG4gICAgdmFyIGVsID0gdGhpcy5lbCxcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9uczsgLy8gR2V0IHRoZSBpbmRleCBvZiB0aGUgZHJhZ2dlZCBlbGVtZW50IHdpdGhpbiBpdHMgcGFyZW50XG5cbiAgICBuZXdJbmRleCA9IGluZGV4KGRyYWdFbCk7XG4gICAgbmV3RHJhZ2dhYmxlSW5kZXggPSBpbmRleChkcmFnRWwsIG9wdGlvbnMuZHJhZ2dhYmxlKTtcbiAgICBwbHVnaW5FdmVudCgnZHJvcCcsIHRoaXMsIHtcbiAgICAgIGV2dDogZXZ0XG4gICAgfSk7XG4gICAgcGFyZW50RWwgPSBkcmFnRWwgJiYgZHJhZ0VsLnBhcmVudE5vZGU7IC8vIEdldCBhZ2FpbiBhZnRlciBwbHVnaW4gZXZlbnRcblxuICAgIG5ld0luZGV4ID0gaW5kZXgoZHJhZ0VsKTtcbiAgICBuZXdEcmFnZ2FibGVJbmRleCA9IGluZGV4KGRyYWdFbCwgb3B0aW9ucy5kcmFnZ2FibGUpO1xuXG4gICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHtcbiAgICAgIHRoaXMuX251bGxpbmcoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICBpc0NpcmN1bXN0YW50aWFsSW52ZXJ0ID0gZmFsc2U7XG4gICAgcGFzdEZpcnN0SW52ZXJ0VGhyZXNoID0gZmFsc2U7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9sb29wSWQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9kcmFnU3RhcnRUaW1lcik7XG5cbiAgICBfY2FuY2VsTmV4dFRpY2sodGhpcy5jbG9uZUlkKTtcblxuICAgIF9jYW5jZWxOZXh0VGljayh0aGlzLl9kcmFnU3RhcnRJZCk7IC8vIFVuYmluZCBldmVudHNcblxuXG4gICAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICBvZmYoZG9jdW1lbnQsICdkcm9wJywgdGhpcyk7XG4gICAgICBvZmYoZWwsICdkcmFnc3RhcnQnLCB0aGlzLl9vbkRyYWdTdGFydCk7XG4gICAgfVxuXG4gICAgdGhpcy5fb2ZmTW92ZUV2ZW50cygpO1xuXG4gICAgdGhpcy5fb2ZmVXBFdmVudHMoKTtcblxuICAgIGlmIChTYWZhcmkpIHtcbiAgICAgIGNzcyhkb2N1bWVudC5ib2R5LCAndXNlci1zZWxlY3QnLCAnJyk7XG4gICAgfVxuXG4gICAgY3NzKGRyYWdFbCwgJ3RyYW5zZm9ybScsICcnKTtcblxuICAgIGlmIChldnQpIHtcbiAgICAgIGlmIChtb3ZlZCkge1xuICAgICAgICBldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgIW9wdGlvbnMuZHJvcEJ1YmJsZSAmJiBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGdob3N0RWwgJiYgZ2hvc3RFbC5wYXJlbnROb2RlICYmIGdob3N0RWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnaG9zdEVsKTtcblxuICAgICAgaWYgKHJvb3RFbCA9PT0gcGFyZW50RWwgfHwgcHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUubGFzdFB1dE1vZGUgIT09ICdjbG9uZScpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGNsb25lKHMpXG4gICAgICAgIGNsb25lRWwgJiYgY2xvbmVFbC5wYXJlbnROb2RlICYmIGNsb25lRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9uZUVsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdFbCkge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgICAgICBvZmYoZHJhZ0VsLCAnZHJhZ2VuZCcsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgX2Rpc2FibGVEcmFnZ2FibGUoZHJhZ0VsKTtcblxuICAgICAgICBkcmFnRWwuc3R5bGVbJ3dpbGwtY2hhbmdlJ10gPSAnJzsgLy8gUmVtb3ZlIGNsYXNzZXNcbiAgICAgICAgLy8gZ2hvc3RDbGFzcyBpcyBhZGRlZCBpbiBkcmFnU3RhcnRlZFxuXG4gICAgICAgIGlmIChtb3ZlZCAmJiAhYXdhaXRpbmdEcmFnU3RhcnRlZCkge1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgcHV0U29ydGFibGUgPyBwdXRTb3J0YWJsZS5vcHRpb25zLmdob3N0Q2xhc3MgOiB0aGlzLm9wdGlvbnMuZ2hvc3RDbGFzcywgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCB0aGlzLm9wdGlvbnMuY2hvc2VuQ2xhc3MsIGZhbHNlKTsgLy8gRHJhZyBzdG9wIGV2ZW50XG5cbiAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgIHNvcnRhYmxlOiB0aGlzLFxuICAgICAgICAgIG5hbWU6ICd1bmNob29zZScsXG4gICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgbmV3SW5kZXg6IG51bGwsXG4gICAgICAgICAgbmV3RHJhZ2dhYmxlSW5kZXg6IG51bGwsXG4gICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyb290RWwgIT09IHBhcmVudEVsKSB7XG4gICAgICAgICAgaWYgKG5ld0luZGV4ID49IDApIHtcbiAgICAgICAgICAgIC8vIEFkZCBldmVudFxuICAgICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICByb290RWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICBuYW1lOiAnYWRkJyxcbiAgICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIGZyb21FbDogcm9vdEVsLFxuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgIH0pOyAvLyBSZW1vdmUgZXZlbnRcblxuXG4gICAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgIHNvcnRhYmxlOiB0aGlzLFxuICAgICAgICAgICAgICBuYW1lOiAncmVtb3ZlJyxcbiAgICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgICAgfSk7IC8vIGRyYWcgZnJvbSBvbmUgbGlzdCBhbmQgZHJvcCBpbnRvIGFub3RoZXJcblxuXG4gICAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgIHJvb3RFbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIG5hbWU6ICdzb3J0JyxcbiAgICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIGZyb21FbDogcm9vdEVsLFxuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgIHNvcnRhYmxlOiB0aGlzLFxuICAgICAgICAgICAgICBuYW1lOiAnc29ydCcsXG4gICAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHB1dFNvcnRhYmxlICYmIHB1dFNvcnRhYmxlLnNhdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAobmV3SW5kZXggIT09IG9sZEluZGV4KSB7XG4gICAgICAgICAgICBpZiAobmV3SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAvLyBkcmFnICYgZHJvcCB3aXRoaW4gdGhlIHNhbWUgbGlzdFxuICAgICAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgICAgc29ydGFibGU6IHRoaXMsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3VwZGF0ZScsXG4gICAgICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnc29ydCcsXG4gICAgICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChTb3J0YWJsZS5hY3RpdmUpIHtcbiAgICAgICAgICAvKiBqc2hpbnQgZXFudWxsOnRydWUgKi9cbiAgICAgICAgICBpZiAobmV3SW5kZXggPT0gbnVsbCB8fCBuZXdJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIG5ld0luZGV4ID0gb2xkSW5kZXg7XG4gICAgICAgICAgICBuZXdEcmFnZ2FibGVJbmRleCA9IG9sZERyYWdnYWJsZUluZGV4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0aGlzLFxuICAgICAgICAgICAgbmFtZTogJ2VuZCcsXG4gICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgIH0pOyAvLyBTYXZlIHNvcnRpbmdcblxuXG4gICAgICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9udWxsaW5nKCk7XG4gIH0sXG4gIF9udWxsaW5nOiBmdW5jdGlvbiBfbnVsbGluZygpIHtcbiAgICBwbHVnaW5FdmVudCgnbnVsbGluZycsIHRoaXMpO1xuICAgIHJvb3RFbCA9IGRyYWdFbCA9IHBhcmVudEVsID0gZ2hvc3RFbCA9IG5leHRFbCA9IGNsb25lRWwgPSBsYXN0RG93bkVsID0gY2xvbmVIaWRkZW4gPSB0YXBFdnQgPSB0b3VjaEV2dCA9IG1vdmVkID0gbmV3SW5kZXggPSBuZXdEcmFnZ2FibGVJbmRleCA9IG9sZEluZGV4ID0gb2xkRHJhZ2dhYmxlSW5kZXggPSBsYXN0VGFyZ2V0ID0gbGFzdERpcmVjdGlvbiA9IHB1dFNvcnRhYmxlID0gYWN0aXZlR3JvdXAgPSBTb3J0YWJsZS5kcmFnZ2VkID0gU29ydGFibGUuZ2hvc3QgPSBTb3J0YWJsZS5jbG9uZSA9IFNvcnRhYmxlLmFjdGl2ZSA9IG51bGw7XG4gICAgc2F2ZWRJbnB1dENoZWNrZWQuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGVsLmNoZWNrZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIHNhdmVkSW5wdXRDaGVja2VkLmxlbmd0aCA9IGxhc3REeCA9IGxhc3REeSA9IDA7XG4gIH0sXG4gIGhhbmRsZUV2ZW50OiBmdW5jdGlvbiBoYW5kbGVFdmVudChcbiAgLyoqRXZlbnQqL1xuICBldnQpIHtcbiAgICBzd2l0Y2ggKGV2dC50eXBlKSB7XG4gICAgICBjYXNlICdkcm9wJzpcbiAgICAgIGNhc2UgJ2RyYWdlbmQnOlxuICAgICAgICB0aGlzLl9vbkRyb3AoZXZ0KTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZHJhZ2VudGVyJzpcbiAgICAgIGNhc2UgJ2RyYWdvdmVyJzpcbiAgICAgICAgaWYgKGRyYWdFbCkge1xuICAgICAgICAgIHRoaXMuX29uRHJhZ092ZXIoZXZ0KTtcblxuICAgICAgICAgIF9nbG9iYWxEcmFnT3ZlcihldnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3NlbGVjdHN0YXJ0JzpcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSxcblxuICAvKipcclxuICAgKiBTZXJpYWxpemVzIHRoZSBpdGVtIGludG8gYW4gYXJyYXkgb2Ygc3RyaW5nLlxyXG4gICAqIEByZXR1cm5zIHtTdHJpbmdbXX1cclxuICAgKi9cbiAgdG9BcnJheTogZnVuY3Rpb24gdG9BcnJheSgpIHtcbiAgICB2YXIgb3JkZXIgPSBbXSxcbiAgICAgICAgZWwsXG4gICAgICAgIGNoaWxkcmVuID0gdGhpcy5lbC5jaGlsZHJlbixcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIG4gPSBjaGlsZHJlbi5sZW5ndGgsXG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgZWwgPSBjaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNsb3Nlc3QoZWwsIG9wdGlvbnMuZHJhZ2dhYmxlLCB0aGlzLmVsLCBmYWxzZSkpIHtcbiAgICAgICAgb3JkZXIucHVzaChlbC5nZXRBdHRyaWJ1dGUob3B0aW9ucy5kYXRhSWRBdHRyKSB8fCBfZ2VuZXJhdGVJZChlbCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvcmRlcjtcbiAgfSxcblxuICAvKipcclxuICAgKiBTb3J0cyB0aGUgZWxlbWVudHMgYWNjb3JkaW5nIHRvIHRoZSBhcnJheS5cclxuICAgKiBAcGFyYW0gIHtTdHJpbmdbXX0gIG9yZGVyICBvcmRlciBvZiB0aGUgaXRlbXNcclxuICAgKi9cbiAgc29ydDogZnVuY3Rpb24gc29ydChvcmRlciwgdXNlQW5pbWF0aW9uKSB7XG4gICAgdmFyIGl0ZW1zID0ge30sXG4gICAgICAgIHJvb3RFbCA9IHRoaXMuZWw7XG4gICAgdGhpcy50b0FycmF5KCkuZm9yRWFjaChmdW5jdGlvbiAoaWQsIGkpIHtcbiAgICAgIHZhciBlbCA9IHJvb3RFbC5jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNsb3Nlc3QoZWwsIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUsIHJvb3RFbCwgZmFsc2UpKSB7XG4gICAgICAgIGl0ZW1zW2lkXSA9IGVsO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICAgIHVzZUFuaW1hdGlvbiAmJiB0aGlzLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgIG9yZGVyLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICBpZiAoaXRlbXNbaWRdKSB7XG4gICAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChpdGVtc1tpZF0pO1xuICAgICAgICByb290RWwuYXBwZW5kQ2hpbGQoaXRlbXNbaWRdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB1c2VBbmltYXRpb24gJiYgdGhpcy5hbmltYXRlQWxsKCk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogU2F2ZSB0aGUgY3VycmVudCBzb3J0aW5nXHJcbiAgICovXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUoKSB7XG4gICAgdmFyIHN0b3JlID0gdGhpcy5vcHRpb25zLnN0b3JlO1xuICAgIHN0b3JlICYmIHN0b3JlLnNldCAmJiBzdG9yZS5zZXQodGhpcyk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogRm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgc2V0LCBnZXQgdGhlIGZpcnN0IGVsZW1lbnQgdGhhdCBtYXRjaGVzIHRoZSBzZWxlY3RvciBieSB0ZXN0aW5nIHRoZSBlbGVtZW50IGl0c2VsZiBhbmQgdHJhdmVyc2luZyB1cCB0aHJvdWdoIGl0cyBhbmNlc3RvcnMgaW4gdGhlIERPTSB0cmVlLlxyXG4gICAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gIGVsXHJcbiAgICogQHBhcmFtICAge1N0cmluZ30gICAgICAgW3NlbGVjdG9yXSAgZGVmYXVsdDogYG9wdGlvbnMuZHJhZ2dhYmxlYFxyXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudHxudWxsfVxyXG4gICAqL1xuICBjbG9zZXN0OiBmdW5jdGlvbiBjbG9zZXN0JDEoZWwsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGNsb3Nlc3QoZWwsIHNlbGVjdG9yIHx8IHRoaXMub3B0aW9ucy5kcmFnZ2FibGUsIHRoaXMuZWwsIGZhbHNlKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBTZXQvZ2V0IG9wdGlvblxyXG4gICAqIEBwYXJhbSAgIHtzdHJpbmd9IG5hbWVcclxuICAgKiBAcGFyYW0gICB7Kn0gICAgICBbdmFsdWVdXHJcbiAgICogQHJldHVybnMgeyp9XHJcbiAgICovXG4gIG9wdGlvbjogZnVuY3Rpb24gb3B0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIG9wdGlvbnNbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtb2RpZmllZFZhbHVlID0gUGx1Z2luTWFuYWdlci5tb2RpZnlPcHRpb24odGhpcywgbmFtZSwgdmFsdWUpO1xuXG4gICAgICBpZiAodHlwZW9mIG1vZGlmaWVkVmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnNbbmFtZV0gPSBtb2RpZmllZFZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9uc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmFtZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICBfcHJlcGFyZUdyb3VwKG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcclxuICAgKiBEZXN0cm95XHJcbiAgICovXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgcGx1Z2luRXZlbnQoJ2Rlc3Ryb3knLCB0aGlzKTtcbiAgICB2YXIgZWwgPSB0aGlzLmVsO1xuICAgIGVsW2V4cGFuZG9dID0gbnVsbDtcbiAgICBvZmYoZWwsICdtb3VzZWRvd24nLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgICBvZmYoZWwsICd0b3VjaHN0YXJ0JywgdGhpcy5fb25UYXBTdGFydCk7XG4gICAgb2ZmKGVsLCAncG9pbnRlcmRvd24nLCB0aGlzLl9vblRhcFN0YXJ0KTtcblxuICAgIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgb2ZmKGVsLCAnZHJhZ292ZXInLCB0aGlzKTtcbiAgICAgIG9mZihlbCwgJ2RyYWdlbnRlcicsIHRoaXMpO1xuICAgIH0gLy8gUmVtb3ZlIGRyYWdnYWJsZSBhdHRyaWJ1dGVzXG5cblxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWwucXVlcnlTZWxlY3RvckFsbCgnW2RyYWdnYWJsZV0nKSwgZnVuY3Rpb24gKGVsKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fb25Ecm9wKCk7XG5cbiAgICB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMoKTtcblxuICAgIHNvcnRhYmxlcy5zcGxpY2Uoc29ydGFibGVzLmluZGV4T2YodGhpcy5lbCksIDEpO1xuICAgIHRoaXMuZWwgPSBlbCA9IG51bGw7XG4gIH0sXG4gIF9oaWRlQ2xvbmU6IGZ1bmN0aW9uIF9oaWRlQ2xvbmUoKSB7XG4gICAgaWYgKCFjbG9uZUhpZGRlbikge1xuICAgICAgcGx1Z2luRXZlbnQoJ2hpZGVDbG9uZScsIHRoaXMpO1xuICAgICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHJldHVybjtcbiAgICAgIGNzcyhjbG9uZUVsLCAnZGlzcGxheScsICdub25lJyk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZlQ2xvbmVPbkhpZGUgJiYgY2xvbmVFbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGNsb25lRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9uZUVsKTtcbiAgICAgIH1cblxuICAgICAgY2xvbmVIaWRkZW4gPSB0cnVlO1xuICAgIH1cbiAgfSxcbiAgX3Nob3dDbG9uZTogZnVuY3Rpb24gX3Nob3dDbG9uZShwdXRTb3J0YWJsZSkge1xuICAgIGlmIChwdXRTb3J0YWJsZS5sYXN0UHV0TW9kZSAhPT0gJ2Nsb25lJykge1xuICAgICAgdGhpcy5faGlkZUNsb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2xvbmVIaWRkZW4pIHtcbiAgICAgIHBsdWdpbkV2ZW50KCdzaG93Q2xvbmUnLCB0aGlzKTtcbiAgICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSByZXR1cm47IC8vIHNob3cgY2xvbmUgYXQgZHJhZ0VsIG9yIG9yaWdpbmFsIHBvc2l0aW9uXG5cbiAgICAgIGlmIChkcmFnRWwucGFyZW50Tm9kZSA9PSByb290RWwgJiYgIXRoaXMub3B0aW9ucy5ncm91cC5yZXZlcnRDbG9uZSkge1xuICAgICAgICByb290RWwuaW5zZXJ0QmVmb3JlKGNsb25lRWwsIGRyYWdFbCk7XG4gICAgICB9IGVsc2UgaWYgKG5leHRFbCkge1xuICAgICAgICByb290RWwuaW5zZXJ0QmVmb3JlKGNsb25lRWwsIG5leHRFbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb290RWwuYXBwZW5kQ2hpbGQoY2xvbmVFbCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZ3JvdXAucmV2ZXJ0Q2xvbmUpIHtcbiAgICAgICAgdGhpcy5hbmltYXRlKGRyYWdFbCwgY2xvbmVFbCk7XG4gICAgICB9XG5cbiAgICAgIGNzcyhjbG9uZUVsLCAnZGlzcGxheScsICcnKTtcbiAgICAgIGNsb25lSGlkZGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBfZ2xvYmFsRHJhZ092ZXIoXG4vKipFdmVudCovXG5ldnQpIHtcbiAgaWYgKGV2dC5kYXRhVHJhbnNmZXIpIHtcbiAgICBldnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG4gIH1cblxuICBldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gX29uTW92ZShmcm9tRWwsIHRvRWwsIGRyYWdFbCwgZHJhZ1JlY3QsIHRhcmdldEVsLCB0YXJnZXRSZWN0LCBvcmlnaW5hbEV2ZW50LCB3aWxsSW5zZXJ0QWZ0ZXIpIHtcbiAgdmFyIGV2dCxcbiAgICAgIHNvcnRhYmxlID0gZnJvbUVsW2V4cGFuZG9dLFxuICAgICAgb25Nb3ZlRm4gPSBzb3J0YWJsZS5vcHRpb25zLm9uTW92ZSxcbiAgICAgIHJldFZhbDsgLy8gU3VwcG9ydCBmb3IgbmV3IEN1c3RvbUV2ZW50IGZlYXR1cmVcblxuICBpZiAod2luZG93LkN1c3RvbUV2ZW50ICYmICFJRTExT3JMZXNzICYmICFFZGdlKSB7XG4gICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KCdtb3ZlJywge1xuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldnQuaW5pdEV2ZW50KCdtb3ZlJywgdHJ1ZSwgdHJ1ZSk7XG4gIH1cblxuICBldnQudG8gPSB0b0VsO1xuICBldnQuZnJvbSA9IGZyb21FbDtcbiAgZXZ0LmRyYWdnZWQgPSBkcmFnRWw7XG4gIGV2dC5kcmFnZ2VkUmVjdCA9IGRyYWdSZWN0O1xuICBldnQucmVsYXRlZCA9IHRhcmdldEVsIHx8IHRvRWw7XG4gIGV2dC5yZWxhdGVkUmVjdCA9IHRhcmdldFJlY3QgfHwgZ2V0UmVjdCh0b0VsKTtcbiAgZXZ0LndpbGxJbnNlcnRBZnRlciA9IHdpbGxJbnNlcnRBZnRlcjtcbiAgZXZ0Lm9yaWdpbmFsRXZlbnQgPSBvcmlnaW5hbEV2ZW50O1xuICBmcm9tRWwuZGlzcGF0Y2hFdmVudChldnQpO1xuXG4gIGlmIChvbk1vdmVGbikge1xuICAgIHJldFZhbCA9IG9uTW92ZUZuLmNhbGwoc29ydGFibGUsIGV2dCwgb3JpZ2luYWxFdmVudCk7XG4gIH1cblxuICByZXR1cm4gcmV0VmFsO1xufVxuXG5mdW5jdGlvbiBfZGlzYWJsZURyYWdnYWJsZShlbCkge1xuICBlbC5kcmFnZ2FibGUgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gX3Vuc2lsZW50KCkge1xuICBfc2lsZW50ID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIF9naG9zdElzRmlyc3QoZXZ0LCB2ZXJ0aWNhbCwgc29ydGFibGUpIHtcbiAgdmFyIHJlY3QgPSBnZXRSZWN0KGdldENoaWxkKHNvcnRhYmxlLmVsLCAwLCBzb3J0YWJsZS5vcHRpb25zLCB0cnVlKSk7XG4gIHZhciBzcGFjZXIgPSAxMDtcbiAgcmV0dXJuIHZlcnRpY2FsID8gZXZ0LmNsaWVudFggPCByZWN0LmxlZnQgLSBzcGFjZXIgfHwgZXZ0LmNsaWVudFkgPCByZWN0LnRvcCAmJiBldnQuY2xpZW50WCA8IHJlY3QucmlnaHQgOiBldnQuY2xpZW50WSA8IHJlY3QudG9wIC0gc3BhY2VyIHx8IGV2dC5jbGllbnRZIDwgcmVjdC5ib3R0b20gJiYgZXZ0LmNsaWVudFggPCByZWN0LmxlZnQ7XG59XG5cbmZ1bmN0aW9uIF9naG9zdElzTGFzdChldnQsIHZlcnRpY2FsLCBzb3J0YWJsZSkge1xuICB2YXIgcmVjdCA9IGdldFJlY3QobGFzdENoaWxkKHNvcnRhYmxlLmVsLCBzb3J0YWJsZS5vcHRpb25zLmRyYWdnYWJsZSkpO1xuICB2YXIgc3BhY2VyID0gMTA7XG4gIHJldHVybiB2ZXJ0aWNhbCA/IGV2dC5jbGllbnRYID4gcmVjdC5yaWdodCArIHNwYWNlciB8fCBldnQuY2xpZW50WCA8PSByZWN0LnJpZ2h0ICYmIGV2dC5jbGllbnRZID4gcmVjdC5ib3R0b20gJiYgZXZ0LmNsaWVudFggPj0gcmVjdC5sZWZ0IDogZXZ0LmNsaWVudFggPiByZWN0LnJpZ2h0ICYmIGV2dC5jbGllbnRZID4gcmVjdC50b3AgfHwgZXZ0LmNsaWVudFggPD0gcmVjdC5yaWdodCAmJiBldnQuY2xpZW50WSA+IHJlY3QuYm90dG9tICsgc3BhY2VyO1xufVxuXG5mdW5jdGlvbiBfZ2V0U3dhcERpcmVjdGlvbihldnQsIHRhcmdldCwgdGFyZ2V0UmVjdCwgdmVydGljYWwsIHN3YXBUaHJlc2hvbGQsIGludmVydGVkU3dhcFRocmVzaG9sZCwgaW52ZXJ0U3dhcCwgaXNMYXN0VGFyZ2V0KSB7XG4gIHZhciBtb3VzZU9uQXhpcyA9IHZlcnRpY2FsID8gZXZ0LmNsaWVudFkgOiBldnQuY2xpZW50WCxcbiAgICAgIHRhcmdldExlbmd0aCA9IHZlcnRpY2FsID8gdGFyZ2V0UmVjdC5oZWlnaHQgOiB0YXJnZXRSZWN0LndpZHRoLFxuICAgICAgdGFyZ2V0UzEgPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3QudG9wIDogdGFyZ2V0UmVjdC5sZWZ0LFxuICAgICAgdGFyZ2V0UzIgPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3QuYm90dG9tIDogdGFyZ2V0UmVjdC5yaWdodCxcbiAgICAgIGludmVydCA9IGZhbHNlO1xuXG4gIGlmICghaW52ZXJ0U3dhcCkge1xuICAgIC8vIE5ldmVyIGludmVydCBvciBjcmVhdGUgZHJhZ0VsIHNoYWRvdyB3aGVuIHRhcmdldCBtb3ZlbWVuZXQgY2F1c2VzIG1vdXNlIHRvIG1vdmUgcGFzdCB0aGUgZW5kIG9mIHJlZ3VsYXIgc3dhcFRocmVzaG9sZFxuICAgIGlmIChpc0xhc3RUYXJnZXQgJiYgdGFyZ2V0TW92ZURpc3RhbmNlIDwgdGFyZ2V0TGVuZ3RoICogc3dhcFRocmVzaG9sZCkge1xuICAgICAgLy8gbXVsdGlwbGllZCBvbmx5IGJ5IHN3YXBUaHJlc2hvbGQgYmVjYXVzZSBtb3VzZSB3aWxsIGFscmVhZHkgYmUgaW5zaWRlIHRhcmdldCBieSAoMSAtIHRocmVzaG9sZCkgKiB0YXJnZXRMZW5ndGggLyAyXG4gICAgICAvLyBjaGVjayBpZiBwYXN0IGZpcnN0IGludmVydCB0aHJlc2hvbGQgb24gc2lkZSBvcHBvc2l0ZSBvZiBsYXN0RGlyZWN0aW9uXG4gICAgICBpZiAoIXBhc3RGaXJzdEludmVydFRocmVzaCAmJiAobGFzdERpcmVjdGlvbiA9PT0gMSA/IG1vdXNlT25BeGlzID4gdGFyZ2V0UzEgKyB0YXJnZXRMZW5ndGggKiBpbnZlcnRlZFN3YXBUaHJlc2hvbGQgLyAyIDogbW91c2VPbkF4aXMgPCB0YXJnZXRTMiAtIHRhcmdldExlbmd0aCAqIGludmVydGVkU3dhcFRocmVzaG9sZCAvIDIpKSB7XG4gICAgICAgIC8vIHBhc3QgZmlyc3QgaW52ZXJ0IHRocmVzaG9sZCwgZG8gbm90IHJlc3RyaWN0IGludmVydGVkIHRocmVzaG9sZCB0byBkcmFnRWwgc2hhZG93XG4gICAgICAgIHBhc3RGaXJzdEludmVydFRocmVzaCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghcGFzdEZpcnN0SW52ZXJ0VGhyZXNoKSB7XG4gICAgICAgIC8vIGRyYWdFbCBzaGFkb3cgKHRhcmdldCBtb3ZlIGRpc3RhbmNlIHNoYWRvdylcbiAgICAgICAgaWYgKGxhc3REaXJlY3Rpb24gPT09IDEgPyBtb3VzZU9uQXhpcyA8IHRhcmdldFMxICsgdGFyZ2V0TW92ZURpc3RhbmNlIC8vIG92ZXIgZHJhZ0VsIHNoYWRvd1xuICAgICAgICA6IG1vdXNlT25BeGlzID4gdGFyZ2V0UzIgLSB0YXJnZXRNb3ZlRGlzdGFuY2UpIHtcbiAgICAgICAgICByZXR1cm4gLWxhc3REaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludmVydCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlZ3VsYXJcbiAgICAgIGlmIChtb3VzZU9uQXhpcyA+IHRhcmdldFMxICsgdGFyZ2V0TGVuZ3RoICogKDEgLSBzd2FwVGhyZXNob2xkKSAvIDIgJiYgbW91c2VPbkF4aXMgPCB0YXJnZXRTMiAtIHRhcmdldExlbmd0aCAqICgxIC0gc3dhcFRocmVzaG9sZCkgLyAyKSB7XG4gICAgICAgIHJldHVybiBfZ2V0SW5zZXJ0RGlyZWN0aW9uKHRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW52ZXJ0ID0gaW52ZXJ0IHx8IGludmVydFN3YXA7XG5cbiAgaWYgKGludmVydCkge1xuICAgIC8vIEludmVydCBvZiByZWd1bGFyXG4gICAgaWYgKG1vdXNlT25BeGlzIDwgdGFyZ2V0UzEgKyB0YXJnZXRMZW5ndGggKiBpbnZlcnRlZFN3YXBUaHJlc2hvbGQgLyAyIHx8IG1vdXNlT25BeGlzID4gdGFyZ2V0UzIgLSB0YXJnZXRMZW5ndGggKiBpbnZlcnRlZFN3YXBUaHJlc2hvbGQgLyAyKSB7XG4gICAgICByZXR1cm4gbW91c2VPbkF4aXMgPiB0YXJnZXRTMSArIHRhcmdldExlbmd0aCAvIDIgPyAxIDogLTE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG4vKipcclxuICogR2V0cyB0aGUgZGlyZWN0aW9uIGRyYWdFbCBtdXN0IGJlIHN3YXBwZWQgcmVsYXRpdmUgdG8gdGFyZ2V0IGluIG9yZGVyIHRvIG1ha2UgaXRcclxuICogc2VlbSB0aGF0IGRyYWdFbCBoYXMgYmVlbiBcImluc2VydGVkXCIgaW50byB0aGF0IGVsZW1lbnQncyBwb3NpdGlvblxyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gdGFyZ2V0ICAgICAgIFRoZSB0YXJnZXQgd2hvc2UgcG9zaXRpb24gZHJhZ0VsIGlzIGJlaW5nIGluc2VydGVkIGF0XHJcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgRGlyZWN0aW9uIGRyYWdFbCBtdXN0IGJlIHN3YXBwZWRcclxuICovXG5cblxuZnVuY3Rpb24gX2dldEluc2VydERpcmVjdGlvbih0YXJnZXQpIHtcbiAgaWYgKGluZGV4KGRyYWdFbCkgPCBpbmRleCh0YXJnZXQpKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG59XG4vKipcclxuICogR2VuZXJhdGUgaWRcclxuICogQHBhcmFtICAge0hUTUxFbGVtZW50fSBlbFxyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cblxuXG5mdW5jdGlvbiBfZ2VuZXJhdGVJZChlbCkge1xuICB2YXIgc3RyID0gZWwudGFnTmFtZSArIGVsLmNsYXNzTmFtZSArIGVsLnNyYyArIGVsLmhyZWYgKyBlbC50ZXh0Q29udGVudCxcbiAgICAgIGkgPSBzdHIubGVuZ3RoLFxuICAgICAgc3VtID0gMDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgc3VtICs9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICB9XG5cbiAgcmV0dXJuIHN1bS50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIF9zYXZlSW5wdXRDaGVja2VkU3RhdGUocm9vdCkge1xuICBzYXZlZElucHV0Q2hlY2tlZC5sZW5ndGggPSAwO1xuICB2YXIgaW5wdXRzID0gcm9vdC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcbiAgdmFyIGlkeCA9IGlucHV0cy5sZW5ndGg7XG5cbiAgd2hpbGUgKGlkeC0tKSB7XG4gICAgdmFyIGVsID0gaW5wdXRzW2lkeF07XG4gICAgZWwuY2hlY2tlZCAmJiBzYXZlZElucHV0Q2hlY2tlZC5wdXNoKGVsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfbmV4dFRpY2soZm4pIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDApO1xufVxuXG5mdW5jdGlvbiBfY2FuY2VsTmV4dFRpY2soaWQpIHtcbiAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59IC8vIEZpeGVkICM5NzM6XG5cblxuaWYgKGRvY3VtZW50RXhpc3RzKSB7XG4gIG9uKGRvY3VtZW50LCAndG91Y2htb3ZlJywgZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmICgoU29ydGFibGUuYWN0aXZlIHx8IGF3YWl0aW5nRHJhZ1N0YXJ0ZWQpICYmIGV2dC5jYW5jZWxhYmxlKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufSAvLyBFeHBvcnQgdXRpbHNcblxuXG5Tb3J0YWJsZS51dGlscyA9IHtcbiAgb246IG9uLFxuICBvZmY6IG9mZixcbiAgY3NzOiBjc3MsXG4gIGZpbmQ6IGZpbmQsXG4gIGlzOiBmdW5jdGlvbiBpcyhlbCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gISFjbG9zZXN0KGVsLCBzZWxlY3RvciwgZWwsIGZhbHNlKTtcbiAgfSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRocm90dGxlOiB0aHJvdHRsZSxcbiAgY2xvc2VzdDogY2xvc2VzdCxcbiAgdG9nZ2xlQ2xhc3M6IHRvZ2dsZUNsYXNzLFxuICBjbG9uZTogY2xvbmUsXG4gIGluZGV4OiBpbmRleCxcbiAgbmV4dFRpY2s6IF9uZXh0VGljayxcbiAgY2FuY2VsTmV4dFRpY2s6IF9jYW5jZWxOZXh0VGljayxcbiAgZGV0ZWN0RGlyZWN0aW9uOiBfZGV0ZWN0RGlyZWN0aW9uLFxuICBnZXRDaGlsZDogZ2V0Q2hpbGRcbn07XG4vKipcclxuICogR2V0IHRoZSBTb3J0YWJsZSBpbnN0YW5jZSBvZiBhbiBlbGVtZW50XHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50XHJcbiAqIEByZXR1cm4ge1NvcnRhYmxlfHVuZGVmaW5lZH0gICAgICAgICBUaGUgaW5zdGFuY2Ugb2YgU29ydGFibGVcclxuICovXG5cblNvcnRhYmxlLmdldCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50W2V4cGFuZG9dO1xufTtcbi8qKlxyXG4gKiBNb3VudCBhIHBsdWdpbiB0byBTb3J0YWJsZVxyXG4gKiBAcGFyYW0gIHsuLi5Tb3J0YWJsZVBsdWdpbnxTb3J0YWJsZVBsdWdpbltdfSBwbHVnaW5zICAgICAgIFBsdWdpbnMgYmVpbmcgbW91bnRlZFxyXG4gKi9cblxuXG5Tb3J0YWJsZS5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBsdWdpbnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcGx1Z2luc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChwbHVnaW5zWzBdLmNvbnN0cnVjdG9yID09PSBBcnJheSkgcGx1Z2lucyA9IHBsdWdpbnNbMF07XG4gIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgaWYgKCFwbHVnaW4ucHJvdG90eXBlIHx8ICFwbHVnaW4ucHJvdG90eXBlLmNvbnN0cnVjdG9yKSB7XG4gICAgICB0aHJvdyBcIlNvcnRhYmxlOiBNb3VudGVkIHBsdWdpbiBtdXN0IGJlIGEgY29uc3RydWN0b3IgZnVuY3Rpb24sIG5vdCBcIi5jb25jYXQoe30udG9TdHJpbmcuY2FsbChwbHVnaW4pKTtcbiAgICB9XG5cbiAgICBpZiAocGx1Z2luLnV0aWxzKSBTb3J0YWJsZS51dGlscyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBTb3J0YWJsZS51dGlscyksIHBsdWdpbi51dGlscyk7XG4gICAgUGx1Z2luTWFuYWdlci5tb3VudChwbHVnaW4pO1xuICB9KTtcbn07XG4vKipcclxuICogQ3JlYXRlIHNvcnRhYmxlIGluc3RhbmNlXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9ICBlbFxyXG4gKiBAcGFyYW0ge09iamVjdH0gICAgICBbb3B0aW9uc11cclxuICovXG5cblxuU29ydGFibGUuY3JlYXRlID0gZnVuY3Rpb24gKGVsLCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgU29ydGFibGUoZWwsIG9wdGlvbnMpO1xufTsgLy8gRXhwb3J0XG5cblxuU29ydGFibGUudmVyc2lvbiA9IHZlcnNpb247XG5cbnZhciBhdXRvU2Nyb2xscyA9IFtdLFxuICAgIHNjcm9sbEVsLFxuICAgIHNjcm9sbFJvb3RFbCxcbiAgICBzY3JvbGxpbmcgPSBmYWxzZSxcbiAgICBsYXN0QXV0b1Njcm9sbFgsXG4gICAgbGFzdEF1dG9TY3JvbGxZLFxuICAgIHRvdWNoRXZ0JDEsXG4gICAgcG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWw7XG5cbmZ1bmN0aW9uIEF1dG9TY3JvbGxQbHVnaW4oKSB7XG4gIGZ1bmN0aW9uIEF1dG9TY3JvbGwoKSB7XG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIGZvcmNlQXV0b1Njcm9sbEZhbGxiYWNrOiBmYWxzZSxcbiAgICAgIHNjcm9sbFNlbnNpdGl2aXR5OiAzMCxcbiAgICAgIHNjcm9sbFNwZWVkOiAxMCxcbiAgICAgIGJ1YmJsZVNjcm9sbDogdHJ1ZVxuICAgIH07IC8vIEJpbmQgYWxsIHByaXZhdGUgbWV0aG9kc1xuXG4gICAgZm9yICh2YXIgZm4gaW4gdGhpcykge1xuICAgICAgaWYgKGZuLmNoYXJBdCgwKSA9PT0gJ18nICYmIHR5cGVvZiB0aGlzW2ZuXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzW2ZuXSA9IHRoaXNbZm5dLmJpbmQodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQXV0b1Njcm9sbC5wcm90b3R5cGUgPSB7XG4gICAgZHJhZ1N0YXJ0ZWQ6IGZ1bmN0aW9uIGRyYWdTdGFydGVkKF9yZWYpIHtcbiAgICAgIHZhciBvcmlnaW5hbEV2ZW50ID0gX3JlZi5vcmlnaW5hbEV2ZW50O1xuXG4gICAgICBpZiAodGhpcy5zb3J0YWJsZS5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICdkcmFnb3ZlcicsIHRoaXMuX2hhbmRsZUF1dG9TY3JvbGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdXBwb3J0UG9pbnRlcikge1xuICAgICAgICAgIG9uKGRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpO1xuICAgICAgICB9IGVsc2UgaWYgKG9yaWdpbmFsRXZlbnQudG91Y2hlcykge1xuICAgICAgICAgIG9uKGRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5faGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbihkb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGRyYWdPdmVyQ29tcGxldGVkOiBmdW5jdGlvbiBkcmFnT3ZlckNvbXBsZXRlZChfcmVmMikge1xuICAgICAgdmFyIG9yaWdpbmFsRXZlbnQgPSBfcmVmMi5vcmlnaW5hbEV2ZW50O1xuXG4gICAgICAvLyBGb3Igd2hlbiBidWJibGluZyBpcyBjYW5jZWxlZCBhbmQgdXNpbmcgZmFsbGJhY2sgKGZhbGxiYWNrICd0b3VjaG1vdmUnIGFsd2F5cyByZWFjaGVkKVxuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZHJhZ092ZXJCdWJibGUgJiYgIW9yaWdpbmFsRXZlbnQucm9vdEVsKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUF1dG9TY3JvbGwob3JpZ2luYWxFdmVudCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkcm9wOiBmdW5jdGlvbiBkcm9wKCkge1xuICAgICAgaWYgKHRoaXMuc29ydGFibGUubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgIG9mZihkb2N1bWVudCwgJ2RyYWdvdmVyJywgdGhpcy5faGFuZGxlQXV0b1Njcm9sbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZmYoZG9jdW1lbnQsICdwb2ludGVybW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICAgIG9mZihkb2N1bWVudCwgJ3RvdWNobW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICAgIG9mZihkb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICB9XG5cbiAgICAgIGNsZWFyUG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwoKTtcbiAgICAgIGNsZWFyQXV0b1Njcm9sbHMoKTtcbiAgICAgIGNhbmNlbFRocm90dGxlKCk7XG4gICAgfSxcbiAgICBudWxsaW5nOiBmdW5jdGlvbiBudWxsaW5nKCkge1xuICAgICAgdG91Y2hFdnQkMSA9IHNjcm9sbFJvb3RFbCA9IHNjcm9sbEVsID0gc2Nyb2xsaW5nID0gcG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwgPSBsYXN0QXV0b1Njcm9sbFggPSBsYXN0QXV0b1Njcm9sbFkgPSBudWxsO1xuICAgICAgYXV0b1Njcm9sbHMubGVuZ3RoID0gMDtcbiAgICB9LFxuICAgIF9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGw6IGZ1bmN0aW9uIF9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwoZXZ0KSB7XG4gICAgICB0aGlzLl9oYW5kbGVBdXRvU2Nyb2xsKGV2dCwgdHJ1ZSk7XG4gICAgfSxcbiAgICBfaGFuZGxlQXV0b1Njcm9sbDogZnVuY3Rpb24gX2hhbmRsZUF1dG9TY3JvbGwoZXZ0LCBmYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIHggPSAoZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1swXSA6IGV2dCkuY2xpZW50WCxcbiAgICAgICAgICB5ID0gKGV2dC50b3VjaGVzID8gZXZ0LnRvdWNoZXNbMF0gOiBldnQpLmNsaWVudFksXG4gICAgICAgICAgZWxlbSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XG4gICAgICB0b3VjaEV2dCQxID0gZXZ0OyAvLyBJRSBkb2VzIG5vdCBzZWVtIHRvIGhhdmUgbmF0aXZlIGF1dG9zY3JvbGwsXG4gICAgICAvLyBFZGdlJ3MgYXV0b3Njcm9sbCBzZWVtcyB0b28gY29uZGl0aW9uYWwsXG4gICAgICAvLyBNQUNPUyBTYWZhcmkgZG9lcyBub3QgaGF2ZSBhdXRvc2Nyb2xsLFxuICAgICAgLy8gRmlyZWZveCBhbmQgQ2hyb21lIGFyZSBnb29kXG5cbiAgICAgIGlmIChmYWxsYmFjayB8fCB0aGlzLm9wdGlvbnMuZm9yY2VBdXRvU2Nyb2xsRmFsbGJhY2sgfHwgRWRnZSB8fCBJRTExT3JMZXNzIHx8IFNhZmFyaSkge1xuICAgICAgICBhdXRvU2Nyb2xsKGV2dCwgdGhpcy5vcHRpb25zLCBlbGVtLCBmYWxsYmFjayk7IC8vIExpc3RlbmVyIGZvciBwb2ludGVyIGVsZW1lbnQgY2hhbmdlXG5cbiAgICAgICAgdmFyIG9nRWxlbVNjcm9sbGVyID0gZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoZWxlbSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHNjcm9sbGluZyAmJiAoIXBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsIHx8IHggIT09IGxhc3RBdXRvU2Nyb2xsWCB8fCB5ICE9PSBsYXN0QXV0b1Njcm9sbFkpKSB7XG4gICAgICAgICAgcG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwgJiYgY2xlYXJQb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCgpOyAvLyBEZXRlY3QgZm9yIHBvaW50ZXIgZWxlbSBjaGFuZ2UsIGVtdWxhdGluZyBuYXRpdmUgRG5EIGJlaGF2aW91clxuXG4gICAgICAgICAgcG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbmV3RWxlbSA9IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSksIHRydWUpO1xuXG4gICAgICAgICAgICBpZiAobmV3RWxlbSAhPT0gb2dFbGVtU2Nyb2xsZXIpIHtcbiAgICAgICAgICAgICAgb2dFbGVtU2Nyb2xsZXIgPSBuZXdFbGVtO1xuICAgICAgICAgICAgICBjbGVhckF1dG9TY3JvbGxzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF1dG9TY3JvbGwoZXZ0LCBfdGhpcy5vcHRpb25zLCBuZXdFbGVtLCBmYWxsYmFjayk7XG4gICAgICAgICAgfSwgMTApO1xuICAgICAgICAgIGxhc3RBdXRvU2Nyb2xsWCA9IHg7XG4gICAgICAgICAgbGFzdEF1dG9TY3JvbGxZID0geTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgRG5EIGlzIGVuYWJsZWQgKGFuZCBicm93c2VyIGhhcyBnb29kIGF1dG9zY3JvbGxpbmcpLCBmaXJzdCBhdXRvc2Nyb2xsIHdpbGwgYWxyZWFkeSBzY3JvbGwsIHNvIGdldCBwYXJlbnQgYXV0b3Njcm9sbCBvZiBmaXJzdCBhdXRvc2Nyb2xsXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmJ1YmJsZVNjcm9sbCB8fCBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbGVtLCB0cnVlKSA9PT0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpKSB7XG4gICAgICAgICAgY2xlYXJBdXRvU2Nyb2xscygpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGF1dG9TY3JvbGwoZXZ0LCB0aGlzLm9wdGlvbnMsIGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGVsZW0sIGZhbHNlKSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzKEF1dG9TY3JvbGwsIHtcbiAgICBwbHVnaW5OYW1lOiAnc2Nyb2xsJyxcbiAgICBpbml0aWFsaXplQnlEZWZhdWx0OiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhckF1dG9TY3JvbGxzKCkge1xuICBhdXRvU2Nyb2xscy5mb3JFYWNoKGZ1bmN0aW9uIChhdXRvU2Nyb2xsKSB7XG4gICAgY2xlYXJJbnRlcnZhbChhdXRvU2Nyb2xsLnBpZCk7XG4gIH0pO1xuICBhdXRvU2Nyb2xscyA9IFtdO1xufVxuXG5mdW5jdGlvbiBjbGVhclBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsKCkge1xuICBjbGVhckludGVydmFsKHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsKTtcbn1cblxudmFyIGF1dG9TY3JvbGwgPSB0aHJvdHRsZShmdW5jdGlvbiAoZXZ0LCBvcHRpb25zLCByb290RWwsIGlzRmFsbGJhY2spIHtcbiAgLy8gQnVnOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01MDU1MjFcbiAgaWYgKCFvcHRpb25zLnNjcm9sbCkgcmV0dXJuO1xuICB2YXIgeCA9IChldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0KS5jbGllbnRYLFxuICAgICAgeSA9IChldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0KS5jbGllbnRZLFxuICAgICAgc2VucyA9IG9wdGlvbnMuc2Nyb2xsU2Vuc2l0aXZpdHksXG4gICAgICBzcGVlZCA9IG9wdGlvbnMuc2Nyb2xsU3BlZWQsXG4gICAgICB3aW5TY3JvbGxlciA9IGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbiAgdmFyIHNjcm9sbFRoaXNJbnN0YW5jZSA9IGZhbHNlLFxuICAgICAgc2Nyb2xsQ3VzdG9tRm47IC8vIE5ldyBzY3JvbGwgcm9vdCwgc2V0IHNjcm9sbEVsXG5cbiAgaWYgKHNjcm9sbFJvb3RFbCAhPT0gcm9vdEVsKSB7XG4gICAgc2Nyb2xsUm9vdEVsID0gcm9vdEVsO1xuICAgIGNsZWFyQXV0b1Njcm9sbHMoKTtcbiAgICBzY3JvbGxFbCA9IG9wdGlvbnMuc2Nyb2xsO1xuICAgIHNjcm9sbEN1c3RvbUZuID0gb3B0aW9ucy5zY3JvbGxGbjtcblxuICAgIGlmIChzY3JvbGxFbCA9PT0gdHJ1ZSkge1xuICAgICAgc2Nyb2xsRWwgPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChyb290RWwsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBsYXllcnNPdXQgPSAwO1xuICB2YXIgY3VycmVudFBhcmVudCA9IHNjcm9sbEVsO1xuXG4gIGRvIHtcbiAgICB2YXIgZWwgPSBjdXJyZW50UGFyZW50LFxuICAgICAgICByZWN0ID0gZ2V0UmVjdChlbCksXG4gICAgICAgIHRvcCA9IHJlY3QudG9wLFxuICAgICAgICBib3R0b20gPSByZWN0LmJvdHRvbSxcbiAgICAgICAgbGVmdCA9IHJlY3QubGVmdCxcbiAgICAgICAgcmlnaHQgPSByZWN0LnJpZ2h0LFxuICAgICAgICB3aWR0aCA9IHJlY3Qud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IHJlY3QuaGVpZ2h0LFxuICAgICAgICBjYW5TY3JvbGxYID0gdm9pZCAwLFxuICAgICAgICBjYW5TY3JvbGxZID0gdm9pZCAwLFxuICAgICAgICBzY3JvbGxXaWR0aCA9IGVsLnNjcm9sbFdpZHRoLFxuICAgICAgICBzY3JvbGxIZWlnaHQgPSBlbC5zY3JvbGxIZWlnaHQsXG4gICAgICAgIGVsQ1NTID0gY3NzKGVsKSxcbiAgICAgICAgc2Nyb2xsUG9zWCA9IGVsLnNjcm9sbExlZnQsXG4gICAgICAgIHNjcm9sbFBvc1kgPSBlbC5zY3JvbGxUb3A7XG5cbiAgICBpZiAoZWwgPT09IHdpblNjcm9sbGVyKSB7XG4gICAgICBjYW5TY3JvbGxYID0gd2lkdGggPCBzY3JvbGxXaWR0aCAmJiAoZWxDU1Mub3ZlcmZsb3dYID09PSAnYXV0bycgfHwgZWxDU1Mub3ZlcmZsb3dYID09PSAnc2Nyb2xsJyB8fCBlbENTUy5vdmVyZmxvd1ggPT09ICd2aXNpYmxlJyk7XG4gICAgICBjYW5TY3JvbGxZID0gaGVpZ2h0IDwgc2Nyb2xsSGVpZ2h0ICYmIChlbENTUy5vdmVyZmxvd1kgPT09ICdhdXRvJyB8fCBlbENTUy5vdmVyZmxvd1kgPT09ICdzY3JvbGwnIHx8IGVsQ1NTLm92ZXJmbG93WSA9PT0gJ3Zpc2libGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FuU2Nyb2xsWCA9IHdpZHRoIDwgc2Nyb2xsV2lkdGggJiYgKGVsQ1NTLm92ZXJmbG93WCA9PT0gJ2F1dG8nIHx8IGVsQ1NTLm92ZXJmbG93WCA9PT0gJ3Njcm9sbCcpO1xuICAgICAgY2FuU2Nyb2xsWSA9IGhlaWdodCA8IHNjcm9sbEhlaWdodCAmJiAoZWxDU1Mub3ZlcmZsb3dZID09PSAnYXV0bycgfHwgZWxDU1Mub3ZlcmZsb3dZID09PSAnc2Nyb2xsJyk7XG4gICAgfVxuXG4gICAgdmFyIHZ4ID0gY2FuU2Nyb2xsWCAmJiAoTWF0aC5hYnMocmlnaHQgLSB4KSA8PSBzZW5zICYmIHNjcm9sbFBvc1ggKyB3aWR0aCA8IHNjcm9sbFdpZHRoKSAtIChNYXRoLmFicyhsZWZ0IC0geCkgPD0gc2VucyAmJiAhIXNjcm9sbFBvc1gpO1xuICAgIHZhciB2eSA9IGNhblNjcm9sbFkgJiYgKE1hdGguYWJzKGJvdHRvbSAtIHkpIDw9IHNlbnMgJiYgc2Nyb2xsUG9zWSArIGhlaWdodCA8IHNjcm9sbEhlaWdodCkgLSAoTWF0aC5hYnModG9wIC0geSkgPD0gc2VucyAmJiAhIXNjcm9sbFBvc1kpO1xuXG4gICAgaWYgKCFhdXRvU2Nyb2xsc1tsYXllcnNPdXRdKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBsYXllcnNPdXQ7IGkrKykge1xuICAgICAgICBpZiAoIWF1dG9TY3JvbGxzW2ldKSB7XG4gICAgICAgICAgYXV0b1Njcm9sbHNbaV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLnZ4ICE9IHZ4IHx8IGF1dG9TY3JvbGxzW2xheWVyc091dF0udnkgIT0gdnkgfHwgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS5lbCAhPT0gZWwpIHtcbiAgICAgIGF1dG9TY3JvbGxzW2xheWVyc091dF0uZWwgPSBlbDtcbiAgICAgIGF1dG9TY3JvbGxzW2xheWVyc091dF0udnggPSB2eDtcbiAgICAgIGF1dG9TY3JvbGxzW2xheWVyc091dF0udnkgPSB2eTtcbiAgICAgIGNsZWFySW50ZXJ2YWwoYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS5waWQpO1xuXG4gICAgICBpZiAodnggIT0gMCB8fCB2eSAhPSAwKSB7XG4gICAgICAgIHNjcm9sbFRoaXNJbnN0YW5jZSA9IHRydWU7XG4gICAgICAgIC8qIGpzaGludCBsb29wZnVuYzp0cnVlICovXG5cbiAgICAgICAgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS5waWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gZW11bGF0ZSBkcmFnIG92ZXIgZHVyaW5nIGF1dG9zY3JvbGwgKGZhbGxiYWNrKSwgZW11bGF0aW5nIG5hdGl2ZSBEbkQgYmVoYXZpb3VyXG4gICAgICAgICAgaWYgKGlzRmFsbGJhY2sgJiYgdGhpcy5sYXllciA9PT0gMCkge1xuICAgICAgICAgICAgU29ydGFibGUuYWN0aXZlLl9vblRvdWNoTW92ZSh0b3VjaEV2dCQxKTsgLy8gVG8gbW92ZSBnaG9zdCBpZiBpdCBpcyBwb3NpdGlvbmVkIGFic29sdXRlbHlcblxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzY3JvbGxPZmZzZXRZID0gYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0udnkgPyBhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS52eSAqIHNwZWVkIDogMDtcbiAgICAgICAgICB2YXIgc2Nyb2xsT2Zmc2V0WCA9IGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLnZ4ID8gYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0udnggKiBzcGVlZCA6IDA7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHNjcm9sbEN1c3RvbUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsQ3VzdG9tRm4uY2FsbChTb3J0YWJsZS5kcmFnZ2VkLnBhcmVudE5vZGVbZXhwYW5kb10sIHNjcm9sbE9mZnNldFgsIHNjcm9sbE9mZnNldFksIGV2dCwgdG91Y2hFdnQkMSwgYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0uZWwpICE9PSAnY29udGludWUnKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzY3JvbGxCeShhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS5lbCwgc2Nyb2xsT2Zmc2V0WCwgc2Nyb2xsT2Zmc2V0WSk7XG4gICAgICAgIH0uYmluZCh7XG4gICAgICAgICAgbGF5ZXI6IGxheWVyc091dFxuICAgICAgICB9KSwgMjQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxheWVyc091dCsrO1xuICB9IHdoaWxlIChvcHRpb25zLmJ1YmJsZVNjcm9sbCAmJiBjdXJyZW50UGFyZW50ICE9PSB3aW5TY3JvbGxlciAmJiAoY3VycmVudFBhcmVudCA9IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGN1cnJlbnRQYXJlbnQsIGZhbHNlKSkpO1xuXG4gIHNjcm9sbGluZyA9IHNjcm9sbFRoaXNJbnN0YW5jZTsgLy8gaW4gY2FzZSBhbm90aGVyIGZ1bmN0aW9uIGNhdGNoZXMgc2Nyb2xsaW5nIGFzIGZhbHNlIGluIGJldHdlZW4gd2hlbiBpdCBpcyBub3Rcbn0sIDMwKTtcblxudmFyIGRyb3AgPSBmdW5jdGlvbiBkcm9wKF9yZWYpIHtcbiAgdmFyIG9yaWdpbmFsRXZlbnQgPSBfcmVmLm9yaWdpbmFsRXZlbnQsXG4gICAgICBwdXRTb3J0YWJsZSA9IF9yZWYucHV0U29ydGFibGUsXG4gICAgICBkcmFnRWwgPSBfcmVmLmRyYWdFbCxcbiAgICAgIGFjdGl2ZVNvcnRhYmxlID0gX3JlZi5hY3RpdmVTb3J0YWJsZSxcbiAgICAgIGRpc3BhdGNoU29ydGFibGVFdmVudCA9IF9yZWYuZGlzcGF0Y2hTb3J0YWJsZUV2ZW50LFxuICAgICAgaGlkZUdob3N0Rm9yVGFyZ2V0ID0gX3JlZi5oaWRlR2hvc3RGb3JUYXJnZXQsXG4gICAgICB1bmhpZGVHaG9zdEZvclRhcmdldCA9IF9yZWYudW5oaWRlR2hvc3RGb3JUYXJnZXQ7XG4gIGlmICghb3JpZ2luYWxFdmVudCkgcmV0dXJuO1xuICB2YXIgdG9Tb3J0YWJsZSA9IHB1dFNvcnRhYmxlIHx8IGFjdGl2ZVNvcnRhYmxlO1xuICBoaWRlR2hvc3RGb3JUYXJnZXQoKTtcbiAgdmFyIHRvdWNoID0gb3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBvcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA/IG9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBvcmlnaW5hbEV2ZW50O1xuICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh0b3VjaC5jbGllbnRYLCB0b3VjaC5jbGllbnRZKTtcbiAgdW5oaWRlR2hvc3RGb3JUYXJnZXQoKTtcblxuICBpZiAodG9Tb3J0YWJsZSAmJiAhdG9Tb3J0YWJsZS5lbC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KCdzcGlsbCcpO1xuICAgIHRoaXMub25TcGlsbCh7XG4gICAgICBkcmFnRWw6IGRyYWdFbCxcbiAgICAgIHB1dFNvcnRhYmxlOiBwdXRTb3J0YWJsZVxuICAgIH0pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBSZXZlcnQoKSB7fVxuXG5SZXZlcnQucHJvdG90eXBlID0ge1xuICBzdGFydEluZGV4OiBudWxsLFxuICBkcmFnU3RhcnQ6IGZ1bmN0aW9uIGRyYWdTdGFydChfcmVmMikge1xuICAgIHZhciBvbGREcmFnZ2FibGVJbmRleCA9IF9yZWYyLm9sZERyYWdnYWJsZUluZGV4O1xuICAgIHRoaXMuc3RhcnRJbmRleCA9IG9sZERyYWdnYWJsZUluZGV4O1xuICB9LFxuICBvblNwaWxsOiBmdW5jdGlvbiBvblNwaWxsKF9yZWYzKSB7XG4gICAgdmFyIGRyYWdFbCA9IF9yZWYzLmRyYWdFbCxcbiAgICAgICAgcHV0U29ydGFibGUgPSBfcmVmMy5wdXRTb3J0YWJsZTtcbiAgICB0aGlzLnNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuXG4gICAgaWYgKHB1dFNvcnRhYmxlKSB7XG4gICAgICBwdXRTb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICB9XG5cbiAgICB2YXIgbmV4dFNpYmxpbmcgPSBnZXRDaGlsZCh0aGlzLnNvcnRhYmxlLmVsLCB0aGlzLnN0YXJ0SW5kZXgsIHRoaXMub3B0aW9ucyk7XG5cbiAgICBpZiAobmV4dFNpYmxpbmcpIHtcbiAgICAgIHRoaXMuc29ydGFibGUuZWwuaW5zZXJ0QmVmb3JlKGRyYWdFbCwgbmV4dFNpYmxpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNvcnRhYmxlLmVsLmFwcGVuZENoaWxkKGRyYWdFbCk7XG4gICAgfVxuXG4gICAgdGhpcy5zb3J0YWJsZS5hbmltYXRlQWxsKCk7XG5cbiAgICBpZiAocHV0U29ydGFibGUpIHtcbiAgICAgIHB1dFNvcnRhYmxlLmFuaW1hdGVBbGwoKTtcbiAgICB9XG4gIH0sXG4gIGRyb3A6IGRyb3Bcbn07XG5cbl9leHRlbmRzKFJldmVydCwge1xuICBwbHVnaW5OYW1lOiAncmV2ZXJ0T25TcGlsbCdcbn0pO1xuXG5mdW5jdGlvbiBSZW1vdmUoKSB7fVxuXG5SZW1vdmUucHJvdG90eXBlID0ge1xuICBvblNwaWxsOiBmdW5jdGlvbiBvblNwaWxsKF9yZWY0KSB7XG4gICAgdmFyIGRyYWdFbCA9IF9yZWY0LmRyYWdFbCxcbiAgICAgICAgcHV0U29ydGFibGUgPSBfcmVmNC5wdXRTb3J0YWJsZTtcbiAgICB2YXIgcGFyZW50U29ydGFibGUgPSBwdXRTb3J0YWJsZSB8fCB0aGlzLnNvcnRhYmxlO1xuICAgIHBhcmVudFNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgIGRyYWdFbC5wYXJlbnROb2RlICYmIGRyYWdFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdFbCk7XG4gICAgcGFyZW50U29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICB9LFxuICBkcm9wOiBkcm9wXG59O1xuXG5fZXh0ZW5kcyhSZW1vdmUsIHtcbiAgcGx1Z2luTmFtZTogJ3JlbW92ZU9uU3BpbGwnXG59KTtcblxudmFyIGxhc3RTd2FwRWw7XG5cbmZ1bmN0aW9uIFN3YXBQbHVnaW4oKSB7XG4gIGZ1bmN0aW9uIFN3YXAoKSB7XG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHN3YXBDbGFzczogJ3NvcnRhYmxlLXN3YXAtaGlnaGxpZ2h0J1xuICAgIH07XG4gIH1cblxuICBTd2FwLnByb3RvdHlwZSA9IHtcbiAgICBkcmFnU3RhcnQ6IGZ1bmN0aW9uIGRyYWdTdGFydChfcmVmKSB7XG4gICAgICB2YXIgZHJhZ0VsID0gX3JlZi5kcmFnRWw7XG4gICAgICBsYXN0U3dhcEVsID0gZHJhZ0VsO1xuICAgIH0sXG4gICAgZHJhZ092ZXJWYWxpZDogZnVuY3Rpb24gZHJhZ092ZXJWYWxpZChfcmVmMikge1xuICAgICAgdmFyIGNvbXBsZXRlZCA9IF9yZWYyLmNvbXBsZXRlZCxcbiAgICAgICAgICB0YXJnZXQgPSBfcmVmMi50YXJnZXQsXG4gICAgICAgICAgb25Nb3ZlID0gX3JlZjIub25Nb3ZlLFxuICAgICAgICAgIGFjdGl2ZVNvcnRhYmxlID0gX3JlZjIuYWN0aXZlU29ydGFibGUsXG4gICAgICAgICAgY2hhbmdlZCA9IF9yZWYyLmNoYW5nZWQsXG4gICAgICAgICAgY2FuY2VsID0gX3JlZjIuY2FuY2VsO1xuICAgICAgaWYgKCFhY3RpdmVTb3J0YWJsZS5vcHRpb25zLnN3YXApIHJldHVybjtcbiAgICAgIHZhciBlbCA9IHRoaXMuc29ydGFibGUuZWwsXG4gICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgIT09IGVsKSB7XG4gICAgICAgIHZhciBwcmV2U3dhcEVsID0gbGFzdFN3YXBFbDtcblxuICAgICAgICBpZiAob25Nb3ZlKHRhcmdldCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgdG9nZ2xlQ2xhc3ModGFyZ2V0LCBvcHRpb25zLnN3YXBDbGFzcywgdHJ1ZSk7XG4gICAgICAgICAgbGFzdFN3YXBFbCA9IHRhcmdldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXN0U3dhcEVsID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmV2U3dhcEVsICYmIHByZXZTd2FwRWwgIT09IGxhc3RTd2FwRWwpIHtcbiAgICAgICAgICB0b2dnbGVDbGFzcyhwcmV2U3dhcEVsLCBvcHRpb25zLnN3YXBDbGFzcywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNoYW5nZWQoKTtcbiAgICAgIGNvbXBsZXRlZCh0cnVlKTtcbiAgICAgIGNhbmNlbCgpO1xuICAgIH0sXG4gICAgZHJvcDogZnVuY3Rpb24gZHJvcChfcmVmMykge1xuICAgICAgdmFyIGFjdGl2ZVNvcnRhYmxlID0gX3JlZjMuYWN0aXZlU29ydGFibGUsXG4gICAgICAgICAgcHV0U29ydGFibGUgPSBfcmVmMy5wdXRTb3J0YWJsZSxcbiAgICAgICAgICBkcmFnRWwgPSBfcmVmMy5kcmFnRWw7XG4gICAgICB2YXIgdG9Tb3J0YWJsZSA9IHB1dFNvcnRhYmxlIHx8IHRoaXMuc29ydGFibGU7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIGxhc3RTd2FwRWwgJiYgdG9nZ2xlQ2xhc3MobGFzdFN3YXBFbCwgb3B0aW9ucy5zd2FwQ2xhc3MsIGZhbHNlKTtcblxuICAgICAgaWYgKGxhc3RTd2FwRWwgJiYgKG9wdGlvbnMuc3dhcCB8fCBwdXRTb3J0YWJsZSAmJiBwdXRTb3J0YWJsZS5vcHRpb25zLnN3YXApKSB7XG4gICAgICAgIGlmIChkcmFnRWwgIT09IGxhc3RTd2FwRWwpIHtcbiAgICAgICAgICB0b1NvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgICAgICAgIGlmICh0b1NvcnRhYmxlICE9PSBhY3RpdmVTb3J0YWJsZSkgYWN0aXZlU29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgICAgICAgc3dhcE5vZGVzKGRyYWdFbCwgbGFzdFN3YXBFbCk7XG4gICAgICAgICAgdG9Tb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgICAgICAgaWYgKHRvU29ydGFibGUgIT09IGFjdGl2ZVNvcnRhYmxlKSBhY3RpdmVTb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG51bGxpbmc6IGZ1bmN0aW9uIG51bGxpbmcoKSB7XG4gICAgICBsYXN0U3dhcEVsID0gbnVsbDtcbiAgICB9XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcyhTd2FwLCB7XG4gICAgcGx1Z2luTmFtZTogJ3N3YXAnLFxuICAgIGV2ZW50UHJvcGVydGllczogZnVuY3Rpb24gZXZlbnRQcm9wZXJ0aWVzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3dhcEl0ZW06IGxhc3RTd2FwRWxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc3dhcE5vZGVzKG4xLCBuMikge1xuICB2YXIgcDEgPSBuMS5wYXJlbnROb2RlLFxuICAgICAgcDIgPSBuMi5wYXJlbnROb2RlLFxuICAgICAgaTEsXG4gICAgICBpMjtcbiAgaWYgKCFwMSB8fCAhcDIgfHwgcDEuaXNFcXVhbE5vZGUobjIpIHx8IHAyLmlzRXF1YWxOb2RlKG4xKSkgcmV0dXJuO1xuICBpMSA9IGluZGV4KG4xKTtcbiAgaTIgPSBpbmRleChuMik7XG5cbiAgaWYgKHAxLmlzRXF1YWxOb2RlKHAyKSAmJiBpMSA8IGkyKSB7XG4gICAgaTIrKztcbiAgfVxuXG4gIHAxLmluc2VydEJlZm9yZShuMiwgcDEuY2hpbGRyZW5baTFdKTtcbiAgcDIuaW5zZXJ0QmVmb3JlKG4xLCBwMi5jaGlsZHJlbltpMl0pO1xufVxuXG52YXIgbXVsdGlEcmFnRWxlbWVudHMgPSBbXSxcbiAgICBtdWx0aURyYWdDbG9uZXMgPSBbXSxcbiAgICBsYXN0TXVsdGlEcmFnU2VsZWN0LFxuICAgIC8vIGZvciBzZWxlY3Rpb24gd2l0aCBtb2RpZmllciBrZXkgZG93biAoU0hJRlQpXG5tdWx0aURyYWdTb3J0YWJsZSxcbiAgICBpbml0aWFsRm9sZGluZyA9IGZhbHNlLFxuICAgIC8vIEluaXRpYWwgbXVsdGktZHJhZyBmb2xkIHdoZW4gZHJhZyBzdGFydGVkXG5mb2xkaW5nID0gZmFsc2UsXG4gICAgLy8gRm9sZGluZyBhbnkgb3RoZXIgdGltZVxuZHJhZ1N0YXJ0ZWQgPSBmYWxzZSxcbiAgICBkcmFnRWwkMSxcbiAgICBjbG9uZXNGcm9tUmVjdCxcbiAgICBjbG9uZXNIaWRkZW47XG5cbmZ1bmN0aW9uIE11bHRpRHJhZ1BsdWdpbigpIHtcbiAgZnVuY3Rpb24gTXVsdGlEcmFnKHNvcnRhYmxlKSB7XG4gICAgLy8gQmluZCBhbGwgcHJpdmF0ZSBtZXRob2RzXG4gICAgZm9yICh2YXIgZm4gaW4gdGhpcykge1xuICAgICAgaWYgKGZuLmNoYXJBdCgwKSA9PT0gJ18nICYmIHR5cGVvZiB0aGlzW2ZuXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzW2ZuXSA9IHRoaXNbZm5dLmJpbmQodGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFzb3J0YWJsZS5vcHRpb25zLmF2b2lkSW1wbGljaXREZXNlbGVjdCkge1xuICAgICAgaWYgKHNvcnRhYmxlLm9wdGlvbnMuc3VwcG9ydFBvaW50ZXIpIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICdwb2ludGVydXAnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbihkb2N1bWVudCwgJ21vdXNldXAnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICAgIG9uKGRvY3VtZW50LCAndG91Y2hlbmQnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb24oZG9jdW1lbnQsICdrZXlkb3duJywgdGhpcy5fY2hlY2tLZXlEb3duKTtcbiAgICBvbihkb2N1bWVudCwgJ2tleXVwJywgdGhpcy5fY2hlY2tLZXlVcCk7XG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHNlbGVjdGVkQ2xhc3M6ICdzb3J0YWJsZS1zZWxlY3RlZCcsXG4gICAgICBtdWx0aURyYWdLZXk6IG51bGwsXG4gICAgICBhdm9pZEltcGxpY2l0RGVzZWxlY3Q6IGZhbHNlLFxuICAgICAgc2V0RGF0YTogZnVuY3Rpb24gc2V0RGF0YShkYXRhVHJhbnNmZXIsIGRyYWdFbCkge1xuICAgICAgICB2YXIgZGF0YSA9ICcnO1xuXG4gICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggJiYgbXVsdGlEcmFnU29ydGFibGUgPT09IHNvcnRhYmxlKSB7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCwgaSkge1xuICAgICAgICAgICAgZGF0YSArPSAoIWkgPyAnJyA6ICcsICcpICsgbXVsdGlEcmFnRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhID0gZHJhZ0VsLnRleHRDb250ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVRyYW5zZmVyLnNldERhdGEoJ1RleHQnLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgTXVsdGlEcmFnLnByb3RvdHlwZSA9IHtcbiAgICBtdWx0aURyYWdLZXlEb3duOiBmYWxzZSxcbiAgICBpc011bHRpRHJhZzogZmFsc2UsXG4gICAgZGVsYXlTdGFydEdsb2JhbDogZnVuY3Rpb24gZGVsYXlTdGFydEdsb2JhbChfcmVmKSB7XG4gICAgICB2YXIgZHJhZ2dlZCA9IF9yZWYuZHJhZ0VsO1xuICAgICAgZHJhZ0VsJDEgPSBkcmFnZ2VkO1xuICAgIH0sXG4gICAgZGVsYXlFbmRlZDogZnVuY3Rpb24gZGVsYXlFbmRlZCgpIHtcbiAgICAgIHRoaXMuaXNNdWx0aURyYWcgPSB+bXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihkcmFnRWwkMSk7XG4gICAgfSxcbiAgICBzZXR1cENsb25lOiBmdW5jdGlvbiBzZXR1cENsb25lKF9yZWYyKSB7XG4gICAgICB2YXIgc29ydGFibGUgPSBfcmVmMi5zb3J0YWJsZSxcbiAgICAgICAgICBjYW5jZWwgPSBfcmVmMi5jYW5jZWw7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aURyYWcpIHJldHVybjtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtdWx0aURyYWdFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBtdWx0aURyYWdDbG9uZXMucHVzaChjbG9uZShtdWx0aURyYWdFbGVtZW50c1tpXSkpO1xuICAgICAgICBtdWx0aURyYWdDbG9uZXNbaV0uc29ydGFibGVJbmRleCA9IG11bHRpRHJhZ0VsZW1lbnRzW2ldLnNvcnRhYmxlSW5kZXg7XG4gICAgICAgIG11bHRpRHJhZ0Nsb25lc1tpXS5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgbXVsdGlEcmFnQ2xvbmVzW2ldLnN0eWxlWyd3aWxsLWNoYW5nZSddID0gJyc7XG4gICAgICAgIHRvZ2dsZUNsYXNzKG11bHRpRHJhZ0Nsb25lc1tpXSwgdGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MsIGZhbHNlKTtcbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudHNbaV0gPT09IGRyYWdFbCQxICYmIHRvZ2dsZUNsYXNzKG11bHRpRHJhZ0Nsb25lc1tpXSwgdGhpcy5vcHRpb25zLmNob3NlbkNsYXNzLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIHNvcnRhYmxlLl9oaWRlQ2xvbmUoKTtcblxuICAgICAgY2FuY2VsKCk7XG4gICAgfSxcbiAgICBjbG9uZTogZnVuY3Rpb24gY2xvbmUoX3JlZjMpIHtcbiAgICAgIHZhciBzb3J0YWJsZSA9IF9yZWYzLnNvcnRhYmxlLFxuICAgICAgICAgIHJvb3RFbCA9IF9yZWYzLnJvb3RFbCxcbiAgICAgICAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQgPSBfcmVmMy5kaXNwYXRjaFNvcnRhYmxlRXZlbnQsXG4gICAgICAgICAgY2FuY2VsID0gX3JlZjMuY2FuY2VsO1xuICAgICAgaWYgKCF0aGlzLmlzTXVsdGlEcmFnKSByZXR1cm47XG5cbiAgICAgIGlmICghdGhpcy5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlKSB7XG4gICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggJiYgbXVsdGlEcmFnU29ydGFibGUgPT09IHNvcnRhYmxlKSB7XG4gICAgICAgICAgaW5zZXJ0TXVsdGlEcmFnQ2xvbmVzKHRydWUsIHJvb3RFbCk7XG4gICAgICAgICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KCdjbG9uZScpO1xuICAgICAgICAgIGNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93Q2xvbmU6IGZ1bmN0aW9uIHNob3dDbG9uZShfcmVmNCkge1xuICAgICAgdmFyIGNsb25lTm93U2hvd24gPSBfcmVmNC5jbG9uZU5vd1Nob3duLFxuICAgICAgICAgIHJvb3RFbCA9IF9yZWY0LnJvb3RFbCxcbiAgICAgICAgICBjYW5jZWwgPSBfcmVmNC5jYW5jZWw7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aURyYWcpIHJldHVybjtcbiAgICAgIGluc2VydE11bHRpRHJhZ0Nsb25lcyhmYWxzZSwgcm9vdEVsKTtcbiAgICAgIG11bHRpRHJhZ0Nsb25lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbG9uZSkge1xuICAgICAgICBjc3MoY2xvbmUsICdkaXNwbGF5JywgJycpO1xuICAgICAgfSk7XG4gICAgICBjbG9uZU5vd1Nob3duKCk7XG4gICAgICBjbG9uZXNIaWRkZW4gPSBmYWxzZTtcbiAgICAgIGNhbmNlbCgpO1xuICAgIH0sXG4gICAgaGlkZUNsb25lOiBmdW5jdGlvbiBoaWRlQ2xvbmUoX3JlZjUpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBzb3J0YWJsZSA9IF9yZWY1LnNvcnRhYmxlLFxuICAgICAgICAgIGNsb25lTm93SGlkZGVuID0gX3JlZjUuY2xvbmVOb3dIaWRkZW4sXG4gICAgICAgICAgY2FuY2VsID0gX3JlZjUuY2FuY2VsO1xuICAgICAgaWYgKCF0aGlzLmlzTXVsdGlEcmFnKSByZXR1cm47XG4gICAgICBtdWx0aURyYWdDbG9uZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xvbmUpIHtcbiAgICAgICAgY3NzKGNsb25lLCAnZGlzcGxheScsICdub25lJyk7XG5cbiAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMucmVtb3ZlQ2xvbmVPbkhpZGUgJiYgY2xvbmUucGFyZW50Tm9kZSkge1xuICAgICAgICAgIGNsb25lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2xvbmUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNsb25lTm93SGlkZGVuKCk7XG4gICAgICBjbG9uZXNIaWRkZW4gPSB0cnVlO1xuICAgICAgY2FuY2VsKCk7XG4gICAgfSxcbiAgICBkcmFnU3RhcnRHbG9iYWw6IGZ1bmN0aW9uIGRyYWdTdGFydEdsb2JhbChfcmVmNikge1xuICAgICAgdmFyIHNvcnRhYmxlID0gX3JlZjYuc29ydGFibGU7XG5cbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZyAmJiBtdWx0aURyYWdTb3J0YWJsZSkge1xuICAgICAgICBtdWx0aURyYWdTb3J0YWJsZS5tdWx0aURyYWcuX2Rlc2VsZWN0TXVsdGlEcmFnKCk7XG4gICAgICB9XG5cbiAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudC5zb3J0YWJsZUluZGV4ID0gaW5kZXgobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICB9KTsgLy8gU29ydCBtdWx0aS1kcmFnIGVsZW1lbnRzXG5cbiAgICAgIG11bHRpRHJhZ0VsZW1lbnRzID0gbXVsdGlEcmFnRWxlbWVudHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5zb3J0YWJsZUluZGV4IC0gYi5zb3J0YWJsZUluZGV4O1xuICAgICAgfSk7XG4gICAgICBkcmFnU3RhcnRlZCA9IHRydWU7XG4gICAgfSxcbiAgICBkcmFnU3RhcnRlZDogZnVuY3Rpb24gZHJhZ1N0YXJ0ZWQoX3JlZjcpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgc29ydGFibGUgPSBfcmVmNy5zb3J0YWJsZTtcbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZykgcmV0dXJuO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnNvcnQpIHtcbiAgICAgICAgLy8gQ2FwdHVyZSByZWN0cyxcbiAgICAgICAgLy8gaGlkZSBtdWx0aSBkcmFnIGVsZW1lbnRzIChieSBwb3NpdGlvbmluZyB0aGVtIGFic29sdXRlKSxcbiAgICAgICAgLy8gc2V0IG11bHRpIGRyYWcgZWxlbWVudHMgcmVjdHMgdG8gZHJhZ1JlY3QsXG4gICAgICAgIC8vIHNob3cgbXVsdGkgZHJhZyBlbGVtZW50cyxcbiAgICAgICAgLy8gYW5pbWF0ZSB0byByZWN0cyxcbiAgICAgICAgLy8gdW5zZXQgcmVjdHMgJiByZW1vdmUgZnJvbSBET01cbiAgICAgICAgc29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRpb24pIHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudCA9PT0gZHJhZ0VsJDEpIHJldHVybjtcbiAgICAgICAgICAgIGNzcyhtdWx0aURyYWdFbGVtZW50LCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgZHJhZ1JlY3QgPSBnZXRSZWN0KGRyYWdFbCQxLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQgPT09IGRyYWdFbCQxKSByZXR1cm47XG4gICAgICAgICAgICBzZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQsIGRyYWdSZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmb2xkaW5nID0gdHJ1ZTtcbiAgICAgICAgICBpbml0aWFsRm9sZGluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc29ydGFibGUuYW5pbWF0ZUFsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgaW5pdGlhbEZvbGRpbmcgPSBmYWxzZTtcblxuICAgICAgICBpZiAoX3RoaXMyLm9wdGlvbnMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgdW5zZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IC8vIFJlbW92ZSBhbGwgYXV4aWxpYXJ5IG11bHRpZHJhZyBpdGVtcyBmcm9tIGVsLCBpZiBzb3J0aW5nIGVuYWJsZWRcblxuXG4gICAgICAgIGlmIChfdGhpczIub3B0aW9ucy5zb3J0KSB7XG4gICAgICAgICAgcmVtb3ZlTXVsdGlEcmFnRWxlbWVudHMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBkcmFnT3ZlcjogZnVuY3Rpb24gZHJhZ092ZXIoX3JlZjgpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBfcmVmOC50YXJnZXQsXG4gICAgICAgICAgY29tcGxldGVkID0gX3JlZjguY29tcGxldGVkLFxuICAgICAgICAgIGNhbmNlbCA9IF9yZWY4LmNhbmNlbDtcblxuICAgICAgaWYgKGZvbGRpbmcgJiYgfm11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YodGFyZ2V0KSkge1xuICAgICAgICBjb21wbGV0ZWQoZmFsc2UpO1xuICAgICAgICBjYW5jZWwoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJldmVydDogZnVuY3Rpb24gcmV2ZXJ0KF9yZWY5KSB7XG4gICAgICB2YXIgZnJvbVNvcnRhYmxlID0gX3JlZjkuZnJvbVNvcnRhYmxlLFxuICAgICAgICAgIHJvb3RFbCA9IF9yZWY5LnJvb3RFbCxcbiAgICAgICAgICBzb3J0YWJsZSA9IF9yZWY5LnNvcnRhYmxlLFxuICAgICAgICAgIGRyYWdSZWN0ID0gX3JlZjkuZHJhZ1JlY3Q7XG5cbiAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIFNldHVwIHVuZm9sZCBhbmltYXRpb25cbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgIHNvcnRhYmxlLmFkZEFuaW1hdGlvblN0YXRlKHtcbiAgICAgICAgICAgIHRhcmdldDogbXVsdGlEcmFnRWxlbWVudCxcbiAgICAgICAgICAgIHJlY3Q6IGZvbGRpbmcgPyBnZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQpIDogZHJhZ1JlY3RcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB1bnNldFJlY3QobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudC5mcm9tUmVjdCA9IGRyYWdSZWN0O1xuICAgICAgICAgIGZyb21Tb3J0YWJsZS5yZW1vdmVBbmltYXRpb25TdGF0ZShtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgaW5zZXJ0TXVsdGlEcmFnRWxlbWVudHMoIXRoaXMub3B0aW9ucy5yZW1vdmVDbG9uZU9uSGlkZSwgcm9vdEVsKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRyYWdPdmVyQ29tcGxldGVkOiBmdW5jdGlvbiBkcmFnT3ZlckNvbXBsZXRlZChfcmVmMTApIHtcbiAgICAgIHZhciBzb3J0YWJsZSA9IF9yZWYxMC5zb3J0YWJsZSxcbiAgICAgICAgICBpc093bmVyID0gX3JlZjEwLmlzT3duZXIsXG4gICAgICAgICAgaW5zZXJ0aW9uID0gX3JlZjEwLmluc2VydGlvbixcbiAgICAgICAgICBhY3RpdmVTb3J0YWJsZSA9IF9yZWYxMC5hY3RpdmVTb3J0YWJsZSxcbiAgICAgICAgICBwYXJlbnRFbCA9IF9yZWYxMC5wYXJlbnRFbCxcbiAgICAgICAgICBwdXRTb3J0YWJsZSA9IF9yZWYxMC5wdXRTb3J0YWJsZTtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICBpZiAoaW5zZXJ0aW9uKSB7XG4gICAgICAgIC8vIENsb25lcyBtdXN0IGJlIGhpZGRlbiBiZWZvcmUgZm9sZGluZyBhbmltYXRpb24gdG8gY2FwdHVyZSBkcmFnUmVjdEFic29sdXRlIHByb3Blcmx5XG4gICAgICAgIGlmIChpc093bmVyKSB7XG4gICAgICAgICAgYWN0aXZlU29ydGFibGUuX2hpZGVDbG9uZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5pdGlhbEZvbGRpbmcgPSBmYWxzZTsgLy8gSWYgbGVhdmluZyBzb3J0OmZhbHNlIHJvb3QsIG9yIGFscmVhZHkgZm9sZGluZyAtIEZvbGQgdG8gbmV3IGxvY2F0aW9uXG5cbiAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0aW9uICYmIG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCA+IDEgJiYgKGZvbGRpbmcgfHwgIWlzT3duZXIgJiYgIWFjdGl2ZVNvcnRhYmxlLm9wdGlvbnMuc29ydCAmJiAhcHV0U29ydGFibGUpKSB7XG4gICAgICAgICAgLy8gRm9sZDogU2V0IGFsbCBtdWx0aSBkcmFnIGVsZW1lbnRzJ3MgcmVjdHMgdG8gZHJhZ0VsJ3MgcmVjdCB3aGVuIG11bHRpLWRyYWcgZWxlbWVudHMgYXJlIGludmlzaWJsZVxuICAgICAgICAgIHZhciBkcmFnUmVjdEFic29sdXRlID0gZ2V0UmVjdChkcmFnRWwkMSwgZmFsc2UsIHRydWUsIHRydWUpO1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50ID09PSBkcmFnRWwkMSkgcmV0dXJuO1xuICAgICAgICAgICAgc2V0UmVjdChtdWx0aURyYWdFbGVtZW50LCBkcmFnUmVjdEFic29sdXRlKTsgLy8gTW92ZSBlbGVtZW50KHMpIHRvIGVuZCBvZiBwYXJlbnRFbCBzbyB0aGF0IGl0IGRvZXMgbm90IGludGVyZmVyZSB3aXRoIG11bHRpLWRyYWcgY2xvbmVzIGluc2VydGlvbiBpZiB0aGV5IGFyZSBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gd2hpbGUgZm9sZGluZywgYW5kIHNvIHRoYXQgd2UgY2FuIGNhcHR1cmUgdGhlbSBhZ2FpbiBiZWNhdXNlIG9sZCBzb3J0YWJsZSB3aWxsIG5vIGxvbmdlciBiZSBmcm9tU29ydGFibGVcblxuICAgICAgICAgICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZm9sZGluZyA9IHRydWU7XG4gICAgICAgIH0gLy8gQ2xvbmVzIG11c3QgYmUgc2hvd24gKGFuZCBjaGVjayB0byByZW1vdmUgbXVsdGkgZHJhZ3MpIGFmdGVyIGZvbGRpbmcgd2hlbiBpbnRlcmZlcmluZyBtdWx0aURyYWdFbGVtZW50cyBhcmUgbW92ZWQgb3V0XG5cblxuICAgICAgICBpZiAoIWlzT3duZXIpIHtcbiAgICAgICAgICAvLyBPbmx5IHJlbW92ZSBpZiBub3QgZm9sZGluZyAoZm9sZGluZyB3aWxsIHJlbW92ZSB0aGVtIGFueXdheXMpXG4gICAgICAgICAgaWYgKCFmb2xkaW5nKSB7XG4gICAgICAgICAgICByZW1vdmVNdWx0aURyYWdFbGVtZW50cygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgY2xvbmVzSGlkZGVuQmVmb3JlID0gY2xvbmVzSGlkZGVuO1xuXG4gICAgICAgICAgICBhY3RpdmVTb3J0YWJsZS5fc2hvd0Nsb25lKHNvcnRhYmxlKTsgLy8gVW5mb2xkIGFuaW1hdGlvbiBmb3IgY2xvbmVzIGlmIHNob3dpbmcgZnJvbSBoaWRkZW5cblxuXG4gICAgICAgICAgICBpZiAoYWN0aXZlU29ydGFibGUub3B0aW9ucy5hbmltYXRpb24gJiYgIWNsb25lc0hpZGRlbiAmJiBjbG9uZXNIaWRkZW5CZWZvcmUpIHtcbiAgICAgICAgICAgICAgbXVsdGlEcmFnQ2xvbmVzLmZvckVhY2goZnVuY3Rpb24gKGNsb25lKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlU29ydGFibGUuYWRkQW5pbWF0aW9uU3RhdGUoe1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBjbG9uZSxcbiAgICAgICAgICAgICAgICAgIHJlY3Q6IGNsb25lc0Zyb21SZWN0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2xvbmUuZnJvbVJlY3QgPSBjbG9uZXNGcm9tUmVjdDtcbiAgICAgICAgICAgICAgICBjbG9uZS50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlU29ydGFibGUuX3Nob3dDbG9uZShzb3J0YWJsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBkcmFnT3ZlckFuaW1hdGlvbkNhcHR1cmU6IGZ1bmN0aW9uIGRyYWdPdmVyQW5pbWF0aW9uQ2FwdHVyZShfcmVmMTEpIHtcbiAgICAgIHZhciBkcmFnUmVjdCA9IF9yZWYxMS5kcmFnUmVjdCxcbiAgICAgICAgICBpc093bmVyID0gX3JlZjExLmlzT3duZXIsXG4gICAgICAgICAgYWN0aXZlU29ydGFibGUgPSBfcmVmMTEuYWN0aXZlU29ydGFibGU7XG4gICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnQudGhpc0FuaW1hdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYWN0aXZlU29ydGFibGUub3B0aW9ucy5hbmltYXRpb24gJiYgIWlzT3duZXIgJiYgYWN0aXZlU29ydGFibGUubXVsdGlEcmFnLmlzTXVsdGlEcmFnKSB7XG4gICAgICAgIGNsb25lc0Zyb21SZWN0ID0gX2V4dGVuZHMoe30sIGRyYWdSZWN0KTtcbiAgICAgICAgdmFyIGRyYWdNYXRyaXggPSBtYXRyaXgoZHJhZ0VsJDEsIHRydWUpO1xuICAgICAgICBjbG9uZXNGcm9tUmVjdC50b3AgLT0gZHJhZ01hdHJpeC5mO1xuICAgICAgICBjbG9uZXNGcm9tUmVjdC5sZWZ0IC09IGRyYWdNYXRyaXguZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRyYWdPdmVyQW5pbWF0aW9uQ29tcGxldGU6IGZ1bmN0aW9uIGRyYWdPdmVyQW5pbWF0aW9uQ29tcGxldGUoKSB7XG4gICAgICBpZiAoZm9sZGluZykge1xuICAgICAgICBmb2xkaW5nID0gZmFsc2U7XG4gICAgICAgIHJlbW92ZU11bHRpRHJhZ0VsZW1lbnRzKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkcm9wOiBmdW5jdGlvbiBkcm9wKF9yZWYxMikge1xuICAgICAgdmFyIGV2dCA9IF9yZWYxMi5vcmlnaW5hbEV2ZW50LFxuICAgICAgICAgIHJvb3RFbCA9IF9yZWYxMi5yb290RWwsXG4gICAgICAgICAgcGFyZW50RWwgPSBfcmVmMTIucGFyZW50RWwsXG4gICAgICAgICAgc29ydGFibGUgPSBfcmVmMTIuc29ydGFibGUsXG4gICAgICAgICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50ID0gX3JlZjEyLmRpc3BhdGNoU29ydGFibGVFdmVudCxcbiAgICAgICAgICBvbGRJbmRleCA9IF9yZWYxMi5vbGRJbmRleCxcbiAgICAgICAgICBwdXRTb3J0YWJsZSA9IF9yZWYxMi5wdXRTb3J0YWJsZTtcbiAgICAgIHZhciB0b1NvcnRhYmxlID0gcHV0U29ydGFibGUgfHwgdGhpcy5zb3J0YWJsZTtcbiAgICAgIGlmICghZXZ0KSByZXR1cm47XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBjaGlsZHJlbiA9IHBhcmVudEVsLmNoaWxkcmVuOyAvLyBNdWx0aS1kcmFnIHNlbGVjdGlvblxuXG4gICAgICBpZiAoIWRyYWdTdGFydGVkKSB7XG4gICAgICAgIGlmIChvcHRpb25zLm11bHRpRHJhZ0tleSAmJiAhdGhpcy5tdWx0aURyYWdLZXlEb3duKSB7XG4gICAgICAgICAgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCQxLCBvcHRpb25zLnNlbGVjdGVkQ2xhc3MsICF+bXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihkcmFnRWwkMSkpO1xuXG4gICAgICAgIGlmICghfm11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoZHJhZ0VsJDEpKSB7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMucHVzaChkcmFnRWwkMSk7XG4gICAgICAgICAgZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICBzb3J0YWJsZTogc29ydGFibGUsXG4gICAgICAgICAgICByb290RWw6IHJvb3RFbCxcbiAgICAgICAgICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgdGFyZ2V0RWw6IGRyYWdFbCQxLFxuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgfSk7IC8vIE1vZGlmaWVyIGFjdGl2YXRlZCwgc2VsZWN0IGZyb20gbGFzdCB0byBkcmFnRWxcblxuICAgICAgICAgIGlmIChldnQuc2hpZnRLZXkgJiYgbGFzdE11bHRpRHJhZ1NlbGVjdCAmJiBzb3J0YWJsZS5lbC5jb250YWlucyhsYXN0TXVsdGlEcmFnU2VsZWN0KSkge1xuICAgICAgICAgICAgdmFyIGxhc3RJbmRleCA9IGluZGV4KGxhc3RNdWx0aURyYWdTZWxlY3QpLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4KGRyYWdFbCQxKTtcblxuICAgICAgICAgICAgaWYgKH5sYXN0SW5kZXggJiYgfmN1cnJlbnRJbmRleCAmJiBsYXN0SW5kZXggIT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgICAgICAgICAvLyBNdXN0IGluY2x1ZGUgbGFzdE11bHRpRHJhZ1NlbGVjdCAoc2VsZWN0IGl0KSwgaW4gY2FzZSBtb2RpZmllZCBzZWxlY3Rpb24gZnJvbSBubyBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgLy8gKGJ1dCBwcmV2aW91cyBzZWxlY3Rpb24gZXhpc3RlZClcbiAgICAgICAgICAgICAgdmFyIG4sIGk7XG5cbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgIGkgPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICAgICAgbiA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpID0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgICAgIG4gPSBsYXN0SW5kZXggKyAxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZm9yICg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAofm11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoY2hpbGRyZW5baV0pKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhjaGlsZHJlbltpXSwgb3B0aW9ucy5zZWxlY3RlZENsYXNzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5wdXNoKGNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBzb3J0YWJsZSxcbiAgICAgICAgICAgICAgICAgIHJvb3RFbDogcm9vdEVsLFxuICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICB0YXJnZXRFbDogY2hpbGRyZW5baV0sXG4gICAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXN0TXVsdGlEcmFnU2VsZWN0ID0gZHJhZ0VsJDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbXVsdGlEcmFnU29ydGFibGUgPSB0b1NvcnRhYmxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnNwbGljZShtdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGRyYWdFbCQxKSwgMSk7XG4gICAgICAgICAgbGFzdE11bHRpRHJhZ1NlbGVjdCA9IG51bGw7XG4gICAgICAgICAgZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICBzb3J0YWJsZTogc29ydGFibGUsXG4gICAgICAgICAgICByb290RWw6IHJvb3RFbCxcbiAgICAgICAgICAgIG5hbWU6ICdkZXNlbGVjdCcsXG4gICAgICAgICAgICB0YXJnZXRFbDogZHJhZ0VsJDEsXG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBNdWx0aS1kcmFnIGRyb3BcblxuXG4gICAgICBpZiAoZHJhZ1N0YXJ0ZWQgJiYgdGhpcy5pc011bHRpRHJhZykge1xuICAgICAgICBmb2xkaW5nID0gZmFsc2U7IC8vIERvIG5vdCBcInVuZm9sZFwiIGFmdGVyIGFyb3VuZCBkcmFnRWwgaWYgcmV2ZXJ0ZWRcblxuICAgICAgICBpZiAoKHBhcmVudEVsW2V4cGFuZG9dLm9wdGlvbnMuc29ydCB8fCBwYXJlbnRFbCAhPT0gcm9vdEVsKSAmJiBtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdmFyIGRyYWdSZWN0ID0gZ2V0UmVjdChkcmFnRWwkMSksXG4gICAgICAgICAgICAgIG11bHRpRHJhZ0luZGV4ID0gaW5kZXgoZHJhZ0VsJDEsICc6bm90KC4nICsgdGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MgKyAnKScpO1xuICAgICAgICAgIGlmICghaW5pdGlhbEZvbGRpbmcgJiYgb3B0aW9ucy5hbmltYXRpb24pIGRyYWdFbCQxLnRoaXNBbmltYXRpb25EdXJhdGlvbiA9IG51bGw7XG4gICAgICAgICAgdG9Tb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcblxuICAgICAgICAgIGlmICghaW5pdGlhbEZvbGRpbmcpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgICBkcmFnRWwkMS5mcm9tUmVjdCA9IGRyYWdSZWN0O1xuICAgICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbXVsdGlEcmFnRWxlbWVudC50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQgIT09IGRyYWdFbCQxKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgcmVjdCA9IGZvbGRpbmcgPyBnZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQpIDogZHJhZ1JlY3Q7XG4gICAgICAgICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50LmZyb21SZWN0ID0gcmVjdDsgLy8gUHJlcGFyZSB1bmZvbGQgYW5pbWF0aW9uXG5cbiAgICAgICAgICAgICAgICAgIHRvU29ydGFibGUuYWRkQW5pbWF0aW9uU3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IG11bHRpRHJhZ0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIHJlY3Q6IHJlY3RcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IC8vIE11bHRpIGRyYWcgZWxlbWVudHMgYXJlIG5vdCBuZWNlc3NhcmlseSByZW1vdmVkIGZyb20gdGhlIERPTSBvbiBkcm9wLCBzbyB0byByZWluc2VydFxuICAgICAgICAgICAgLy8gcHJvcGVybHkgdGhleSBtdXN0IGFsbCBiZSByZW1vdmVkXG5cblxuICAgICAgICAgICAgcmVtb3ZlTXVsdGlEcmFnRWxlbWVudHMoKTtcbiAgICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuW211bHRpRHJhZ0luZGV4XSkge1xuICAgICAgICAgICAgICAgIHBhcmVudEVsLmluc2VydEJlZm9yZShtdWx0aURyYWdFbGVtZW50LCBjaGlsZHJlblttdWx0aURyYWdJbmRleF0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbXVsdGlEcmFnSW5kZXgrKztcbiAgICAgICAgICAgIH0pOyAvLyBJZiBpbml0aWFsIGZvbGRpbmcgaXMgZG9uZSwgdGhlIGVsZW1lbnRzIG1heSBoYXZlIGNoYW5nZWQgcG9zaXRpb24gYmVjYXVzZSB0aGV5IGFyZSBub3dcbiAgICAgICAgICAgIC8vIHVuZm9sZGluZyBhcm91bmQgZHJhZ0VsLCBldmVuIHRob3VnaCBkcmFnRWwgbWF5IG5vdCBoYXZlIGhpcyBpbmRleCBjaGFuZ2VkLCBzbyB1cGRhdGUgZXZlbnRcbiAgICAgICAgICAgIC8vIG11c3QgYmUgZmlyZWQgaGVyZSBhcyBTb3J0YWJsZSB3aWxsIG5vdC5cblxuICAgICAgICAgICAgaWYgKG9sZEluZGV4ID09PSBpbmRleChkcmFnRWwkMSkpIHtcbiAgICAgICAgICAgICAgdmFyIHVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQuc29ydGFibGVJbmRleCAhPT0gaW5kZXgobXVsdGlEcmFnRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpZiAodXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KCd1cGRhdGUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gTXVzdCBiZSBkb25lIGFmdGVyIGNhcHR1cmluZyBpbmRpdmlkdWFsIHJlY3RzIChzY3JvbGwgYmFyKVxuXG5cbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICB1bnNldFJlY3QobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdG9Tb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBtdWx0aURyYWdTb3J0YWJsZSA9IHRvU29ydGFibGU7XG4gICAgICB9IC8vIFJlbW92ZSBjbG9uZXMgaWYgbmVjZXNzYXJ5XG5cblxuICAgICAgaWYgKHJvb3RFbCA9PT0gcGFyZW50RWwgfHwgcHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUubGFzdFB1dE1vZGUgIT09ICdjbG9uZScpIHtcbiAgICAgICAgbXVsdGlEcmFnQ2xvbmVzLmZvckVhY2goZnVuY3Rpb24gKGNsb25lKSB7XG4gICAgICAgICAgY2xvbmUucGFyZW50Tm9kZSAmJiBjbG9uZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBudWxsaW5nR2xvYmFsOiBmdW5jdGlvbiBudWxsaW5nR2xvYmFsKCkge1xuICAgICAgdGhpcy5pc011bHRpRHJhZyA9IGRyYWdTdGFydGVkID0gZmFsc2U7XG4gICAgICBtdWx0aURyYWdDbG9uZXMubGVuZ3RoID0gMDtcbiAgICB9LFxuICAgIGRlc3Ryb3lHbG9iYWw6IGZ1bmN0aW9uIGRlc3Ryb3lHbG9iYWwoKSB7XG4gICAgICB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZygpO1xuXG4gICAgICBvZmYoZG9jdW1lbnQsICdwb2ludGVydXAnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICBvZmYoZG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpO1xuICAgICAgb2ZmKGRvY3VtZW50LCAndG91Y2hlbmQnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICBvZmYoZG9jdW1lbnQsICdrZXlkb3duJywgdGhpcy5fY2hlY2tLZXlEb3duKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ2tleXVwJywgdGhpcy5fY2hlY2tLZXlVcCk7XG4gICAgfSxcbiAgICBfZGVzZWxlY3RNdWx0aURyYWc6IGZ1bmN0aW9uIF9kZXNlbGVjdE11bHRpRHJhZyhldnQpIHtcbiAgICAgIGlmICh0eXBlb2YgZHJhZ1N0YXJ0ZWQgIT09IFwidW5kZWZpbmVkXCIgJiYgZHJhZ1N0YXJ0ZWQpIHJldHVybjsgLy8gT25seSBkZXNlbGVjdCBpZiBzZWxlY3Rpb24gaXMgaW4gdGhpcyBzb3J0YWJsZVxuXG4gICAgICBpZiAobXVsdGlEcmFnU29ydGFibGUgIT09IHRoaXMuc29ydGFibGUpIHJldHVybjsgLy8gT25seSBkZXNlbGVjdCBpZiB0YXJnZXQgaXMgbm90IGl0ZW0gaW4gdGhpcyBzb3J0YWJsZVxuXG4gICAgICBpZiAoZXZ0ICYmIGNsb3Nlc3QoZXZ0LnRhcmdldCwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSwgdGhpcy5zb3J0YWJsZS5lbCwgZmFsc2UpKSByZXR1cm47IC8vIE9ubHkgZGVzZWxlY3QgaWYgbGVmdCBjbGlja1xuXG4gICAgICBpZiAoZXZ0ICYmIGV2dC5idXR0b24gIT09IDApIHJldHVybjtcblxuICAgICAgd2hpbGUgKG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB2YXIgZWwgPSBtdWx0aURyYWdFbGVtZW50c1swXTtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoZWwsIHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzLCBmYWxzZSk7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnNoaWZ0KCk7XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgIHNvcnRhYmxlOiB0aGlzLnNvcnRhYmxlLFxuICAgICAgICAgIHJvb3RFbDogdGhpcy5zb3J0YWJsZS5lbCxcbiAgICAgICAgICBuYW1lOiAnZGVzZWxlY3QnLFxuICAgICAgICAgIHRhcmdldEVsOiBlbCxcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBfY2hlY2tLZXlEb3duOiBmdW5jdGlvbiBfY2hlY2tLZXlEb3duKGV2dCkge1xuICAgICAgaWYgKGV2dC5rZXkgPT09IHRoaXMub3B0aW9ucy5tdWx0aURyYWdLZXkpIHtcbiAgICAgICAgdGhpcy5tdWx0aURyYWdLZXlEb3duID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9jaGVja0tleVVwOiBmdW5jdGlvbiBfY2hlY2tLZXlVcChldnQpIHtcbiAgICAgIGlmIChldnQua2V5ID09PSB0aGlzLm9wdGlvbnMubXVsdGlEcmFnS2V5KSB7XG4gICAgICAgIHRoaXMubXVsdGlEcmFnS2V5RG93biA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzKE11bHRpRHJhZywge1xuICAgIC8vIFN0YXRpYyBtZXRob2RzICYgcHJvcGVydGllc1xuICAgIHBsdWdpbk5hbWU6ICdtdWx0aURyYWcnLFxuICAgIHV0aWxzOiB7XG4gICAgICAvKipcclxuICAgICAgICogU2VsZWN0cyB0aGUgcHJvdmlkZWQgbXVsdGktZHJhZyBpdGVtXHJcbiAgICAgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAgICBUaGUgZWxlbWVudCB0byBiZSBzZWxlY3RlZFxyXG4gICAgICAgKi9cbiAgICAgIHNlbGVjdDogZnVuY3Rpb24gc2VsZWN0KGVsKSB7XG4gICAgICAgIHZhciBzb3J0YWJsZSA9IGVsLnBhcmVudE5vZGVbZXhwYW5kb107XG4gICAgICAgIGlmICghc29ydGFibGUgfHwgIXNvcnRhYmxlLm9wdGlvbnMubXVsdGlEcmFnIHx8IH5tdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGVsKSkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChtdWx0aURyYWdTb3J0YWJsZSAmJiBtdWx0aURyYWdTb3J0YWJsZSAhPT0gc29ydGFibGUpIHtcbiAgICAgICAgICBtdWx0aURyYWdTb3J0YWJsZS5tdWx0aURyYWcuX2Rlc2VsZWN0TXVsdGlEcmFnKCk7XG5cbiAgICAgICAgICBtdWx0aURyYWdTb3J0YWJsZSA9IHNvcnRhYmxlO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9nZ2xlQ2xhc3MoZWwsIHNvcnRhYmxlLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcywgdHJ1ZSk7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnB1c2goZWwpO1xuICAgICAgfSxcblxuICAgICAgLyoqXHJcbiAgICAgICAqIERlc2VsZWN0cyB0aGUgcHJvdmlkZWQgbXVsdGktZHJhZyBpdGVtXHJcbiAgICAgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAgICBUaGUgZWxlbWVudCB0byBiZSBkZXNlbGVjdGVkXHJcbiAgICAgICAqL1xuICAgICAgZGVzZWxlY3Q6IGZ1bmN0aW9uIGRlc2VsZWN0KGVsKSB7XG4gICAgICAgIHZhciBzb3J0YWJsZSA9IGVsLnBhcmVudE5vZGVbZXhwYW5kb10sXG4gICAgICAgICAgICBpbmRleCA9IG11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoZWwpO1xuICAgICAgICBpZiAoIXNvcnRhYmxlIHx8ICFzb3J0YWJsZS5vcHRpb25zLm11bHRpRHJhZyB8fCAhfmluZGV4KSByZXR1cm47XG4gICAgICAgIHRvZ2dsZUNsYXNzKGVsLCBzb3J0YWJsZS5vcHRpb25zLnNlbGVjdGVkQ2xhc3MsIGZhbHNlKTtcbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGV2ZW50UHJvcGVydGllczogZnVuY3Rpb24gZXZlbnRQcm9wZXJ0aWVzKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBvbGRJbmRpY2llcyA9IFtdLFxuICAgICAgICAgIG5ld0luZGljaWVzID0gW107XG4gICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgIG9sZEluZGljaWVzLnB1c2goe1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnQ6IG11bHRpRHJhZ0VsZW1lbnQsXG4gICAgICAgICAgaW5kZXg6IG11bHRpRHJhZ0VsZW1lbnQuc29ydGFibGVJbmRleFxuICAgICAgICB9KTsgLy8gbXVsdGlEcmFnRWxlbWVudHMgd2lsbCBhbHJlYWR5IGJlIHNvcnRlZCBpZiBmb2xkaW5nXG5cbiAgICAgICAgdmFyIG5ld0luZGV4O1xuXG4gICAgICAgIGlmIChmb2xkaW5nICYmIG11bHRpRHJhZ0VsZW1lbnQgIT09IGRyYWdFbCQxKSB7XG4gICAgICAgICAgbmV3SW5kZXggPSAtMTtcbiAgICAgICAgfSBlbHNlIGlmIChmb2xkaW5nKSB7XG4gICAgICAgICAgbmV3SW5kZXggPSBpbmRleChtdWx0aURyYWdFbGVtZW50LCAnOm5vdCguJyArIF90aGlzMy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MgKyAnKScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0luZGV4ID0gaW5kZXgobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdJbmRpY2llcy5wdXNoKHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50OiBtdWx0aURyYWdFbGVtZW50LFxuICAgICAgICAgIGluZGV4OiBuZXdJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXRlbXM6IF90b0NvbnN1bWFibGVBcnJheShtdWx0aURyYWdFbGVtZW50cyksXG4gICAgICAgIGNsb25lczogW10uY29uY2F0KG11bHRpRHJhZ0Nsb25lcyksXG4gICAgICAgIG9sZEluZGljaWVzOiBvbGRJbmRpY2llcyxcbiAgICAgICAgbmV3SW5kaWNpZXM6IG5ld0luZGljaWVzXG4gICAgICB9O1xuICAgIH0sXG4gICAgb3B0aW9uTGlzdGVuZXJzOiB7XG4gICAgICBtdWx0aURyYWdLZXk6IGZ1bmN0aW9uIG11bHRpRHJhZ0tleShrZXkpIHtcbiAgICAgICAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ2N0cmwnKSB7XG4gICAgICAgICAga2V5ID0gJ0NvbnRyb2wnO1xuICAgICAgICB9IGVsc2UgaWYgKGtleS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAga2V5ID0ga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cigxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0TXVsdGlEcmFnRWxlbWVudHMoY2xvbmVzSW5zZXJ0ZWQsIHJvb3RFbCkge1xuICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50LCBpKSB7XG4gICAgdmFyIHRhcmdldCA9IHJvb3RFbC5jaGlsZHJlblttdWx0aURyYWdFbGVtZW50LnNvcnRhYmxlSW5kZXggKyAoY2xvbmVzSW5zZXJ0ZWQgPyBOdW1iZXIoaSkgOiAwKV07XG5cbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICByb290RWwuaW5zZXJ0QmVmb3JlKG11bHRpRHJhZ0VsZW1lbnQsIHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChtdWx0aURyYWdFbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuLyoqXHJcbiAqIEluc2VydCBtdWx0aS1kcmFnIGNsb25lc1xyXG4gKiBAcGFyYW0gIHtbQm9vbGVhbl19IGVsZW1lbnRzSW5zZXJ0ZWQgIFdoZXRoZXIgdGhlIG11bHRpLWRyYWcgZWxlbWVudHMgYXJlIGluc2VydGVkXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSByb290RWxcclxuICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0TXVsdGlEcmFnQ2xvbmVzKGVsZW1lbnRzSW5zZXJ0ZWQsIHJvb3RFbCkge1xuICBtdWx0aURyYWdDbG9uZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xvbmUsIGkpIHtcbiAgICB2YXIgdGFyZ2V0ID0gcm9vdEVsLmNoaWxkcmVuW2Nsb25lLnNvcnRhYmxlSW5kZXggKyAoZWxlbWVudHNJbnNlcnRlZCA/IE51bWJlcihpKSA6IDApXTtcblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHJvb3RFbC5pbnNlcnRCZWZvcmUoY2xvbmUsIHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTXVsdGlEcmFnRWxlbWVudHMoKSB7XG4gIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICBpZiAobXVsdGlEcmFnRWxlbWVudCA9PT0gZHJhZ0VsJDEpIHJldHVybjtcbiAgICBtdWx0aURyYWdFbGVtZW50LnBhcmVudE5vZGUgJiYgbXVsdGlEcmFnRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG11bHRpRHJhZ0VsZW1lbnQpO1xuICB9KTtcbn1cblxuU29ydGFibGUubW91bnQobmV3IEF1dG9TY3JvbGxQbHVnaW4oKSk7XG5Tb3J0YWJsZS5tb3VudChSZW1vdmUsIFJldmVydCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRhYmxlO1xuZXhwb3J0IHsgTXVsdGlEcmFnUGx1Z2luIGFzIE11bHRpRHJhZywgU29ydGFibGUsIFN3YXBQbHVnaW4gYXMgU3dhcCB9O1xuIiwiLyohIFBpY2tyIDEuOC4yIE1JVCB8IGh0dHBzOi8vZ2l0aHViLmNvbS9TaW1vbndlcC9waWNrciAqL1xuIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5QaWNrcj1lKCk6dC5QaWNrcj1lKCl9KHNlbGYsKGZ1bmN0aW9uKCl7cmV0dXJuKCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9e2Q6KGUsbyk9Pntmb3IodmFyIG4gaW4gbyl0Lm8obyxuKSYmIXQubyhlLG4pJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLHtlbnVtZXJhYmxlOiEwLGdldDpvW25dfSl9LG86KHQsZSk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpLHI6dD0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9fSxlPXt9O3QuZChlLHtkZWZhdWx0OigpPT5MfSk7dmFyIG89e307ZnVuY3Rpb24gbih0LGUsbyxuLGk9e30pe2UgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbnx8ZSBpbnN0YW5jZW9mIE5vZGVMaXN0P2U9QXJyYXkuZnJvbShlKTpBcnJheS5pc0FycmF5KGUpfHwoZT1bZV0pLEFycmF5LmlzQXJyYXkobyl8fChvPVtvXSk7Zm9yKGNvbnN0IHMgb2YgZSlmb3IoY29uc3QgZSBvZiBvKXNbdF0oZSxuLHtjYXB0dXJlOiExLC4uLml9KTtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpfXQucihvKSx0LmQobyx7YWRqdXN0YWJsZUlucHV0TnVtYmVyczooKT0+cCxjcmVhdGVFbGVtZW50RnJvbVN0cmluZzooKT0+cixjcmVhdGVGcm9tVGVtcGxhdGU6KCk9PmEsZXZlbnRQYXRoOigpPT5sLG9mZjooKT0+cyxvbjooKT0+aSxyZXNvbHZlRWxlbWVudDooKT0+Y30pO2NvbnN0IGk9bi5iaW5kKG51bGwsXCJhZGRFdmVudExpc3RlbmVyXCIpLHM9bi5iaW5kKG51bGwsXCJyZW1vdmVFdmVudExpc3RlbmVyXCIpO2Z1bmN0aW9uIHIodCl7Y29uc3QgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLmlubmVySFRNTD10LnRyaW0oKSxlLmZpcnN0RWxlbWVudENoaWxkfWZ1bmN0aW9uIGEodCl7Y29uc3QgZT0odCxlKT0+e2NvbnN0IG89dC5nZXRBdHRyaWJ1dGUoZSk7cmV0dXJuIHQucmVtb3ZlQXR0cmlidXRlKGUpLG99LG89KHQsbj17fSk9Pntjb25zdCBpPWUodCxcIjpvYmpcIikscz1lKHQsXCI6cmVmXCIpLHI9aT9uW2ldPXt9Om47cyYmKG5bc109dCk7Zm9yKGNvbnN0IG4gb2YgQXJyYXkuZnJvbSh0LmNoaWxkcmVuKSl7Y29uc3QgdD1lKG4sXCI6YXJyXCIpLGk9byhuLHQ/e306cik7dCYmKHJbdF18fChyW3RdPVtdKSkucHVzaChPYmplY3Qua2V5cyhpKS5sZW5ndGg/aTpuKX1yZXR1cm4gbn07cmV0dXJuIG8ocih0KSl9ZnVuY3Rpb24gbCh0KXtsZXQgZT10LnBhdGh8fHQuY29tcG9zZWRQYXRoJiZ0LmNvbXBvc2VkUGF0aCgpO2lmKGUpcmV0dXJuIGU7bGV0IG89dC50YXJnZXQucGFyZW50RWxlbWVudDtmb3IoZT1bdC50YXJnZXQsb107bz1vLnBhcmVudEVsZW1lbnQ7KWUucHVzaChvKTtyZXR1cm4gZS5wdXNoKGRvY3VtZW50LHdpbmRvdyksZX1mdW5jdGlvbiBjKHQpe3JldHVybiB0IGluc3RhbmNlb2YgRWxlbWVudD90Olwic3RyaW5nXCI9PXR5cGVvZiB0P3Quc3BsaXQoLz4+L2cpLnJlZHVjZSgoKHQsZSxvLG4pPT4odD10LnF1ZXJ5U2VsZWN0b3IoZSksbzxuLmxlbmd0aC0xP3Quc2hhZG93Um9vdDp0KSksZG9jdW1lbnQpOm51bGx9ZnVuY3Rpb24gcCh0LGU9KHQ9PnQpKXtmdW5jdGlvbiBvKG8pe2NvbnN0IG49Wy4wMDEsLjAxLC4xXVtOdW1iZXIoby5zaGlmdEtleXx8MipvLmN0cmxLZXkpXSooby5kZWx0YVk8MD8xOi0xKTtsZXQgaT0wLHM9dC5zZWxlY3Rpb25TdGFydDt0LnZhbHVlPXQudmFsdWUucmVwbGFjZSgvW1xcZC5dKy9nLCgodCxvKT0+bzw9cyYmbyt0Lmxlbmd0aD49cz8ocz1vLGUoTnVtYmVyKHQpLG4saSkpOihpKyssdCkpKSx0LmZvY3VzKCksdC5zZXRTZWxlY3Rpb25SYW5nZShzLHMpLG8ucHJldmVudERlZmF1bHQoKSx0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIikpfWkodCxcImZvY3VzXCIsKCgpPT5pKHdpbmRvdyxcIndoZWVsXCIsbyx7cGFzc2l2ZTohMX0pKSksaSh0LFwiYmx1clwiLCgoKT0+cyh3aW5kb3csXCJ3aGVlbFwiLG8pKSl9Y29uc3R7bWluOnUsbWF4OmgsZmxvb3I6ZCxyb3VuZDptfT1NYXRoO2Z1bmN0aW9uIGYodCxlLG8pe2UvPTEwMCxvLz0xMDA7Y29uc3Qgbj1kKHQ9dC8zNjAqNiksaT10LW4scz1vKigxLWUpLHI9byooMS1pKmUpLGE9byooMS0oMS1pKSplKSxsPW4lNjtyZXR1cm5bMjU1KltvLHIscyxzLGEsb11bbF0sMjU1KlthLG8sbyxyLHMsc11bbF0sMjU1KltzLHMsYSxvLG8scl1bbF1dfWZ1bmN0aW9uIHYodCxlLG8pe2NvbnN0IG49KDItKGUvPTEwMCkpKihvLz0xMDApLzI7cmV0dXJuIDAhPT1uJiYoZT0xPT09bj8wOm48LjU/ZSpvLygyKm4pOmUqby8oMi0yKm4pKSxbdCwxMDAqZSwxMDAqbl19ZnVuY3Rpb24gYih0LGUsbyl7Y29uc3Qgbj11KHQvPTI1NSxlLz0yNTUsby89MjU1KSxpPWgodCxlLG8pLHM9aS1uO2xldCByLGE7aWYoMD09PXMpcj1hPTA7ZWxzZXthPXMvaTtjb25zdCBuPSgoaS10KS82K3MvMikvcyxsPSgoaS1lKS82K3MvMikvcyxjPSgoaS1vKS82K3MvMikvczt0PT09aT9yPWMtbDplPT09aT9yPTEvMytuLWM6bz09PWkmJihyPTIvMytsLW4pLHI8MD9yKz0xOnI+MSYmKHItPTEpfXJldHVyblszNjAqciwxMDAqYSwxMDAqaV19ZnVuY3Rpb24geSh0LGUsbyxuKXtlLz0xMDAsby89MTAwO3JldHVyblsuLi5iKDI1NSooMS11KDEsKHQvPTEwMCkqKDEtKG4vPTEwMCkpK24pKSwyNTUqKDEtdSgxLGUqKDEtbikrbikpLDI1NSooMS11KDEsbyooMS1uKStuKSkpXX1mdW5jdGlvbiBnKHQsZSxvKXtlLz0xMDA7Y29uc3Qgbj0yKihlKj0oby89MTAwKTwuNT9vOjEtbykvKG8rZSkqMTAwLGk9MTAwKihvK2UpO3JldHVyblt0LGlzTmFOKG4pPzA6bixpXX1mdW5jdGlvbiBfKHQpe3JldHVybiBiKC4uLnQubWF0Y2goLy57Mn0vZykubWFwKCh0PT5wYXJzZUludCh0LDE2KSkpKX1mdW5jdGlvbiB3KHQpe3Q9dC5tYXRjaCgvXlthLXpBLVpdKyQvKT9mdW5jdGlvbih0KXtpZihcImJsYWNrXCI9PT10LnRvTG93ZXJDYXNlKCkpcmV0dXJuXCIjMDAwXCI7Y29uc3QgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKTtyZXR1cm4gZS5maWxsU3R5bGU9dCxcIiMwMDBcIj09PWUuZmlsbFN0eWxlP251bGw6ZS5maWxsU3R5bGV9KHQpOnQ7Y29uc3QgZT17Y215azovXmNteWtbXFxEXSsoW1xcZC5dKylbXFxEXSsoW1xcZC5dKylbXFxEXSsoW1xcZC5dKylbXFxEXSsoW1xcZC5dKykvaSxyZ2JhOi9eKChyZ2JhKXxyZ2IpW1xcRF0rKFtcXGQuXSspW1xcRF0rKFtcXGQuXSspW1xcRF0rKFtcXGQuXSspW1xcRF0qPyhbXFxkLl0rfCQpL2ksaHNsYTovXigoaHNsYSl8aHNsKVtcXERdKyhbXFxkLl0rKVtcXERdKyhbXFxkLl0rKVtcXERdKyhbXFxkLl0rKVtcXERdKj8oW1xcZC5dK3wkKS9pLGhzdmE6L14oKGhzdmEpfGhzdilbXFxEXSsoW1xcZC5dKylbXFxEXSsoW1xcZC5dKylbXFxEXSsoW1xcZC5dKylbXFxEXSo/KFtcXGQuXSt8JCkvaSxoZXhhOi9eIz8oKFtcXGRBLUZhLWZdezMsNH0pfChbXFxkQS1GYS1mXXs2fSl8KFtcXGRBLUZhLWZdezh9KSkkL2l9LG89dD0+dC5tYXAoKHQ9Pi9eKHxcXGQrKVxcLlxcZCt8XFxkKyQvLnRlc3QodCk/TnVtYmVyKHQpOnZvaWQgMCkpO2xldCBuO3Q6Zm9yKGNvbnN0IGkgaW4gZSl7aWYoIShuPWVbaV0uZXhlYyh0KSkpY29udGludWU7Y29uc3Qgcz10PT4hIW5bMl09PShcIm51bWJlclwiPT10eXBlb2YgdCk7c3dpdGNoKGkpe2Nhc2VcImNteWtcIjp7Y29uc3RbLHQsZSxzLHJdPW8obik7aWYodD4xMDB8fGU+MTAwfHxzPjEwMHx8cj4xMDApYnJlYWsgdDtyZXR1cm57dmFsdWVzOnkodCxlLHMsciksdHlwZTppfX1jYXNlXCJyZ2JhXCI6e2NvbnN0WywsLHQsZSxyLGFdPW8obik7aWYodD4yNTV8fGU+MjU1fHxyPjI1NXx8YTwwfHxhPjF8fCFzKGEpKWJyZWFrIHQ7cmV0dXJue3ZhbHVlczpbLi4uYih0LGUsciksYV0sYSx0eXBlOml9fWNhc2VcImhleGFcIjp7bGV0Wyx0XT1uOzQhPT10Lmxlbmd0aCYmMyE9PXQubGVuZ3RofHwodD10LnNwbGl0KFwiXCIpLm1hcCgodD0+dCt0KSkuam9pbihcIlwiKSk7Y29uc3QgZT10LnN1YnN0cmluZygwLDYpO2xldCBvPXQuc3Vic3RyaW5nKDYpO3JldHVybiBvPW8/cGFyc2VJbnQobywxNikvMjU1OnZvaWQgMCx7dmFsdWVzOlsuLi5fKGUpLG9dLGE6byx0eXBlOml9fWNhc2VcImhzbGFcIjp7Y29uc3RbLCwsdCxlLHIsYV09byhuKTtpZih0PjM2MHx8ZT4xMDB8fHI+MTAwfHxhPDB8fGE+MXx8IXMoYSkpYnJlYWsgdDtyZXR1cm57dmFsdWVzOlsuLi5nKHQsZSxyKSxhXSxhLHR5cGU6aX19Y2FzZVwiaHN2YVwiOntjb25zdFssLCx0LGUscixhXT1vKG4pO2lmKHQ+MzYwfHxlPjEwMHx8cj4xMDB8fGE8MHx8YT4xfHwhcyhhKSlicmVhayB0O3JldHVybnt2YWx1ZXM6W3QsZSxyLGFdLGEsdHlwZTppfX19fXJldHVybnt2YWx1ZXM6bnVsbCx0eXBlOm51bGx9fWZ1bmN0aW9uIEEodD0wLGU9MCxvPTAsbj0xKXtjb25zdCBpPSh0LGUpPT4obz0tMSk9PmUofm8/dC5tYXAoKHQ9Pk51bWJlcih0LnRvRml4ZWQobykpKSk6dCkscz17aDp0LHM6ZSx2Om8sYTpuLHRvSFNWQSgpe2NvbnN0IHQ9W3MuaCxzLnMscy52LHMuYV07cmV0dXJuIHQudG9TdHJpbmc9aSh0LCh0PT5gaHN2YSgke3RbMF19LCAke3RbMV19JSwgJHt0WzJdfSUsICR7cy5hfSlgKSksdH0sdG9IU0xBKCl7Y29uc3QgdD1bLi4udihzLmgscy5zLHMudikscy5hXTtyZXR1cm4gdC50b1N0cmluZz1pKHQsKHQ9PmBoc2xhKCR7dFswXX0sICR7dFsxXX0lLCAke3RbMl19JSwgJHtzLmF9KWApKSx0fSx0b1JHQkEoKXtjb25zdCB0PVsuLi5mKHMuaCxzLnMscy52KSxzLmFdO3JldHVybiB0LnRvU3RyaW5nPWkodCwodD0+YHJnYmEoJHt0WzBdfSwgJHt0WzFdfSwgJHt0WzJdfSwgJHtzLmF9KWApKSx0fSx0b0NNWUsoKXtjb25zdCB0PWZ1bmN0aW9uKHQsZSxvKXtjb25zdCBuPWYodCxlLG8pLGk9blswXS8yNTUscz1uWzFdLzI1NSxyPW5bMl0vMjU1LGE9dSgxLWksMS1zLDEtcik7cmV0dXJuWzEwMCooMT09PWE/MDooMS1pLWEpLygxLWEpKSwxMDAqKDE9PT1hPzA6KDEtcy1hKS8oMS1hKSksMTAwKigxPT09YT8wOigxLXItYSkvKDEtYSkpLDEwMCphXX0ocy5oLHMucyxzLnYpO3JldHVybiB0LnRvU3RyaW5nPWkodCwodD0+YGNteWsoJHt0WzBdfSUsICR7dFsxXX0lLCAke3RbMl19JSwgJHt0WzNdfSUpYCkpLHR9LHRvSEVYQSgpe2NvbnN0IHQ9ZnVuY3Rpb24odCxlLG8pe3JldHVybiBmKHQsZSxvKS5tYXAoKHQ9Pm0odCkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsXCIwXCIpKSl9KHMuaCxzLnMscy52KSxlPXMuYT49MT9cIlwiOk51bWJlcigoMjU1KnMuYSkudG9GaXhlZCgwKSkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkucGFkU3RhcnQoMixcIjBcIik7cmV0dXJuIGUmJnQucHVzaChlKSx0LnRvU3RyaW5nPSgpPT5gIyR7dC5qb2luKFwiXCIpLnRvVXBwZXJDYXNlKCl9YCx0fSxjbG9uZTooKT0+QShzLmgscy5zLHMudixzLmEpfTtyZXR1cm4gc31jb25zdCBDPXQ9Pk1hdGgubWF4KE1hdGgubWluKHQsMSksMCk7ZnVuY3Rpb24gJCh0KXtjb25zdCBlPXtvcHRpb25zOk9iamVjdC5hc3NpZ24oe2xvY2s6bnVsbCxvbmNoYW5nZTooKT0+MCxvbnN0b3A6KCk9PjB9LHQpLF9rZXlib2FyZCh0KXtjb25zdHtvcHRpb25zOm99PWUse3R5cGU6bixrZXk6aX09dDtpZihkb2N1bWVudC5hY3RpdmVFbGVtZW50PT09by53cmFwcGVyKXtjb25zdHtsb2NrOm99PWUub3B0aW9ucyxzPVwiQXJyb3dVcFwiPT09aSxyPVwiQXJyb3dSaWdodFwiPT09aSxhPVwiQXJyb3dEb3duXCI9PT1pLGw9XCJBcnJvd0xlZnRcIj09PWk7aWYoXCJrZXlkb3duXCI9PT1uJiYoc3x8cnx8YXx8bCkpe2xldCBuPTAsaT0wO1widlwiPT09bz9uPXN8fHI/MTotMTpcImhcIj09PW8/bj1zfHxyPy0xOjE6KGk9cz8tMTphPzE6MCxuPWw/LTE6cj8xOjApLGUudXBkYXRlKEMoZS5jYWNoZS54Ky4wMSpuKSxDKGUuY2FjaGUueSsuMDEqaSkpLHQucHJldmVudERlZmF1bHQoKX1lbHNlIGkuc3RhcnRzV2l0aChcIkFycm93XCIpJiYoZS5vcHRpb25zLm9uc3RvcCgpLHQucHJldmVudERlZmF1bHQoKSl9fSxfdGFwc3RhcnQodCl7aShkb2N1bWVudCxbXCJtb3VzZXVwXCIsXCJ0b3VjaGVuZFwiLFwidG91Y2hjYW5jZWxcIl0sZS5fdGFwc3RvcCksaShkb2N1bWVudCxbXCJtb3VzZW1vdmVcIixcInRvdWNobW92ZVwiXSxlLl90YXBtb3ZlKSx0LmNhbmNlbGFibGUmJnQucHJldmVudERlZmF1bHQoKSxlLl90YXBtb3ZlKHQpfSxfdGFwbW92ZSh0KXtjb25zdHtvcHRpb25zOm8sY2FjaGU6bn09ZSx7bG9jazppLGVsZW1lbnQ6cyx3cmFwcGVyOnJ9PW8sYT1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2xldCBsPTAsYz0wO2lmKHQpe2NvbnN0IGU9dCYmdC50b3VjaGVzJiZ0LnRvdWNoZXNbMF07bD10PyhlfHx0KS5jbGllbnRYOjAsYz10PyhlfHx0KS5jbGllbnRZOjAsbDxhLmxlZnQ/bD1hLmxlZnQ6bD5hLmxlZnQrYS53aWR0aCYmKGw9YS5sZWZ0K2Eud2lkdGgpLGM8YS50b3A/Yz1hLnRvcDpjPmEudG9wK2EuaGVpZ2h0JiYoYz1hLnRvcCthLmhlaWdodCksbC09YS5sZWZ0LGMtPWEudG9wfWVsc2UgbiYmKGw9bi54KmEud2lkdGgsYz1uLnkqYS5oZWlnaHQpO1wiaFwiIT09aSYmKHMuc3R5bGUubGVmdD1gY2FsYygke2wvYS53aWR0aCoxMDB9JSAtICR7cy5vZmZzZXRXaWR0aC8yfXB4KWApLFwidlwiIT09aSYmKHMuc3R5bGUudG9wPWBjYWxjKCR7Yy9hLmhlaWdodCoxMDB9JSAtICR7cy5vZmZzZXRIZWlnaHQvMn1weClgKSxlLmNhY2hlPXt4OmwvYS53aWR0aCx5OmMvYS5oZWlnaHR9O2NvbnN0IHA9QyhsL2Eud2lkdGgpLHU9QyhjL2EuaGVpZ2h0KTtzd2l0Y2goaSl7Y2FzZVwidlwiOnJldHVybiBvLm9uY2hhbmdlKHApO2Nhc2VcImhcIjpyZXR1cm4gby5vbmNoYW5nZSh1KTtkZWZhdWx0OnJldHVybiBvLm9uY2hhbmdlKHAsdSl9fSxfdGFwc3RvcCgpe2Uub3B0aW9ucy5vbnN0b3AoKSxzKGRvY3VtZW50LFtcIm1vdXNldXBcIixcInRvdWNoZW5kXCIsXCJ0b3VjaGNhbmNlbFwiXSxlLl90YXBzdG9wKSxzKGRvY3VtZW50LFtcIm1vdXNlbW92ZVwiLFwidG91Y2htb3ZlXCJdLGUuX3RhcG1vdmUpfSx0cmlnZ2VyKCl7ZS5fdGFwbW92ZSgpfSx1cGRhdGUodD0wLG89MCl7Y29uc3R7bGVmdDpuLHRvcDppLHdpZHRoOnMsaGVpZ2h0OnJ9PWUub3B0aW9ucy53cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1wiaFwiPT09ZS5vcHRpb25zLmxvY2smJihvPXQpLGUuX3RhcG1vdmUoe2NsaWVudFg6bitzKnQsY2xpZW50WTppK3Iqb30pfSxkZXN0cm95KCl7Y29uc3R7b3B0aW9uczp0LF90YXBzdGFydDpvLF9rZXlib2FyZDpufT1lO3MoZG9jdW1lbnQsW1wia2V5ZG93blwiLFwia2V5dXBcIl0sbikscyhbdC53cmFwcGVyLHQuZWxlbWVudF0sXCJtb3VzZWRvd25cIixvKSxzKFt0LndyYXBwZXIsdC5lbGVtZW50XSxcInRvdWNoc3RhcnRcIixvLHtwYXNzaXZlOiExfSl9fSx7b3B0aW9uczpvLF90YXBzdGFydDpuLF9rZXlib2FyZDpyfT1lO3JldHVybiBpKFtvLndyYXBwZXIsby5lbGVtZW50XSxcIm1vdXNlZG93blwiLG4pLGkoW28ud3JhcHBlcixvLmVsZW1lbnRdLFwidG91Y2hzdGFydFwiLG4se3Bhc3NpdmU6ITF9KSxpKGRvY3VtZW50LFtcImtleWRvd25cIixcImtleXVwXCJdLHIpLGV9ZnVuY3Rpb24gayh0PXt9KXt0PU9iamVjdC5hc3NpZ24oe29uY2hhbmdlOigpPT4wLGNsYXNzTmFtZTpcIlwiLGVsZW1lbnRzOltdfSx0KTtjb25zdCBlPWkodC5lbGVtZW50cyxcImNsaWNrXCIsKGU9Pnt0LmVsZW1lbnRzLmZvckVhY2goKG89Pm8uY2xhc3NMaXN0W2UudGFyZ2V0PT09bz9cImFkZFwiOlwicmVtb3ZlXCJdKHQuY2xhc3NOYW1lKSkpLHQub25jaGFuZ2UoZSksZS5zdG9wUHJvcGFnYXRpb24oKX0pKTtyZXR1cm57ZGVzdHJveTooKT0+cyguLi5lKX19Y29uc3QgUz17dmFyaWFudEZsaXBPcmRlcjp7c3RhcnQ6XCJzbWVcIixtaWRkbGU6XCJtc2VcIixlbmQ6XCJlbXNcIn0scG9zaXRpb25GbGlwT3JkZXI6e3RvcDpcInRicmxcIixyaWdodDpcInJsdGJcIixib3R0b206XCJidHJsXCIsbGVmdDpcImxyYnRcIn0scG9zaXRpb246XCJib3R0b21cIixtYXJnaW46OH0sTz0odCxlLG8pPT57Y29uc3R7Y29udGFpbmVyOm4sbWFyZ2luOmkscG9zaXRpb246cyx2YXJpYW50RmxpcE9yZGVyOnIscG9zaXRpb25GbGlwT3JkZXI6YX09e2NvbnRhaW5lcjpkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksLi4uUywuLi5vfSx7bGVmdDpsLHRvcDpjfT1lLnN0eWxlO2Uuc3R5bGUubGVmdD1cIjBcIixlLnN0eWxlLnRvcD1cIjBcIjtjb25zdCBwPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksdT1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGg9e3Q6cC50b3AtdS5oZWlnaHQtaSxiOnAuYm90dG9tK2kscjpwLnJpZ2h0K2ksbDpwLmxlZnQtdS53aWR0aC1pfSxkPXt2czpwLmxlZnQsdm06cC5sZWZ0K3Aud2lkdGgvMistdS53aWR0aC8yLHZlOnAubGVmdCtwLndpZHRoLXUud2lkdGgsaHM6cC50b3AsaG06cC5ib3R0b20tcC5oZWlnaHQvMi11LmhlaWdodC8yLGhlOnAuYm90dG9tLXUuaGVpZ2h0fSxbbSxmPVwibWlkZGxlXCJdPXMuc3BsaXQoXCItXCIpLHY9YVttXSxiPXJbZl0se3RvcDp5LGxlZnQ6Zyxib3R0b206XyxyaWdodDp3fT1uO2Zvcihjb25zdCB0IG9mIHYpe2NvbnN0IG89XCJ0XCI9PT10fHxcImJcIj09PXQsbj1oW3RdLFtpLHNdPW8/W1widG9wXCIsXCJsZWZ0XCJdOltcImxlZnRcIixcInRvcFwiXSxbcixhXT1vP1t1LmhlaWdodCx1LndpZHRoXTpbdS53aWR0aCx1LmhlaWdodF0sW2wsY109bz9bXyx3XTpbdyxfXSxbcCxtXT1vP1t5LGddOltnLHldO2lmKCEobjxwfHxuK3I+bCkpZm9yKGNvbnN0IHIgb2YgYil7Y29uc3QgbD1kWyhvP1widlwiOlwiaFwiKStyXTtpZighKGw8bXx8bCthPmMpKXJldHVybiBlLnN0eWxlW3NdPWwtdVtzXStcInB4XCIsZS5zdHlsZVtpXT1uLXVbaV0rXCJweFwiLHQrcn19cmV0dXJuIGUuc3R5bGUubGVmdD1sLGUuc3R5bGUudG9wPWMsbnVsbH07ZnVuY3Rpb24gRSh0LGUsbyl7cmV0dXJuIGUgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHt2YWx1ZTpvLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtlXT1vLHR9Y2xhc3MgTHtjb25zdHJ1Y3Rvcih0KXtFKHRoaXMsXCJfaW5pdGlhbGl6aW5nQWN0aXZlXCIsITApLEUodGhpcyxcIl9yZWNhbGNcIiwhMCksRSh0aGlzLFwiX25hbm9wb3BcIixudWxsKSxFKHRoaXMsXCJfcm9vdFwiLG51bGwpLEUodGhpcyxcIl9jb2xvclwiLEEoKSksRSh0aGlzLFwiX2xhc3RDb2xvclwiLEEoKSksRSh0aGlzLFwiX3N3YXRjaENvbG9yc1wiLFtdKSxFKHRoaXMsXCJfc2V0dXBBbmltYXRpb25GcmFtZVwiLG51bGwpLEUodGhpcyxcIl9ldmVudExpc3RlbmVyXCIse2luaXQ6W10sc2F2ZTpbXSxoaWRlOltdLHNob3c6W10sY2xlYXI6W10sY2hhbmdlOltdLGNoYW5nZXN0b3A6W10sY2FuY2VsOltdLHN3YXRjaHNlbGVjdDpbXX0pLHRoaXMub3B0aW9ucz10PU9iamVjdC5hc3NpZ24oey4uLkwuREVGQVVMVF9PUFRJT05TfSx0KTtjb25zdHtzd2F0Y2hlczplLGNvbXBvbmVudHM6byx0aGVtZTpuLHNsaWRlcnM6aSxsb2NrT3BhY2l0eTpzLHBhZGRpbmc6cn09dDtbXCJuYW5vXCIsXCJtb25vbGl0aFwiXS5pbmNsdWRlcyhuKSYmIWkmJih0LnNsaWRlcnM9XCJoXCIpLG8uaW50ZXJhY3Rpb258fChvLmludGVyYWN0aW9uPXt9KTtjb25zdHtwcmV2aWV3OmEsb3BhY2l0eTpsLGh1ZTpjLHBhbGV0dGU6cH09bztvLm9wYWNpdHk9IXMmJmwsby5wYWxldHRlPXB8fGF8fGx8fGMsdGhpcy5fcHJlQnVpbGQoKSx0aGlzLl9idWlsZENvbXBvbmVudHMoKSx0aGlzLl9iaW5kRXZlbnRzKCksdGhpcy5fZmluYWxCdWlsZCgpLGUmJmUubGVuZ3RoJiZlLmZvckVhY2goKHQ9PnRoaXMuYWRkU3dhdGNoKHQpKSk7Y29uc3R7YnV0dG9uOnUsYXBwOmh9PXRoaXMuX3Jvb3Q7dGhpcy5fbmFub3BvcD0oKHQsZSxvKT0+e2NvbnN0IG49XCJvYmplY3RcIiE9dHlwZW9mIHR8fHQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudD97cmVmZXJlbmNlOnQscG9wcGVyOmUsLi4ub306dDtyZXR1cm57dXBkYXRlKHQ9bil7Y29uc3R7cmVmZXJlbmNlOmUscG9wcGVyOm99PU9iamVjdC5hc3NpZ24obix0KTtpZighb3x8IWUpdGhyb3cgbmV3IEVycm9yKFwiUG9wcGVyLSBvciByZWZlcmVuY2UtZWxlbWVudCBtaXNzaW5nLlwiKTtyZXR1cm4gTyhlLG8sbil9fX0pKHUsaCx7bWFyZ2luOnJ9KSx1LnNldEF0dHJpYnV0ZShcInJvbGVcIixcImJ1dHRvblwiKSx1LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIix0aGlzLl90KFwiYnRuOnRvZ2dsZVwiKSk7Y29uc3QgZD10aGlzO3RoaXMuX3NldHVwQW5pbWF0aW9uRnJhbWU9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmdW5jdGlvbiBlKCl7aWYoIWgub2Zmc2V0V2lkdGgpcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZShlKTtkLnNldENvbG9yKHQuZGVmYXVsdCksZC5fcmVQb3NpdGlvbmluZ1BpY2tlcigpLHQuZGVmYXVsdFJlcHJlc2VudGF0aW9uJiYoZC5fcmVwcmVzZW50YXRpb249dC5kZWZhdWx0UmVwcmVzZW50YXRpb24sZC5zZXRDb2xvclJlcHJlc2VudGF0aW9uKGQuX3JlcHJlc2VudGF0aW9uKSksdC5zaG93QWx3YXlzJiZkLnNob3coKSxkLl9pbml0aWFsaXppbmdBY3RpdmU9ITEsZC5fZW1pdChcImluaXRcIil9KSl9X3ByZUJ1aWxkKCl7Y29uc3R7b3B0aW9uczp0fT10aGlzO2Zvcihjb25zdCBlIG9mW1wiZWxcIixcImNvbnRhaW5lclwiXSl0W2VdPWModFtlXSk7dGhpcy5fcm9vdD0odD0+e2NvbnN0e2NvbXBvbmVudHM6ZSx1c2VBc0J1dHRvbjpvLGlubGluZTpuLGFwcENsYXNzOmksdGhlbWU6cyxsb2NrT3BhY2l0eTpyfT10Lm9wdGlvbnMsbD10PT50P1wiXCI6J3N0eWxlPVwiZGlzcGxheTpub25lXCIgaGlkZGVuJyxjPWU9PnQuX3QoZSkscD1hKGBcXG4gICAgICA8ZGl2IDpyZWY9XCJyb290XCIgY2xhc3M9XCJwaWNrclwiPlxcblxcbiAgICAgICAgJHtvP1wiXCI6JzxidXR0b24gdHlwZT1cImJ1dHRvblwiIDpyZWY9XCJidXR0b25cIiBjbGFzcz1cInBjci1idXR0b25cIj48L2J1dHRvbj4nfVxcblxcbiAgICAgICAgPGRpdiA6cmVmPVwiYXBwXCIgY2xhc3M9XCJwY3ItYXBwICR7aXx8XCJcIn1cIiBkYXRhLXRoZW1lPVwiJHtzfVwiICR7bj8nc3R5bGU9XCJwb3NpdGlvbjogdW5zZXRcIic6XCJcIn0gYXJpYS1sYWJlbD1cIiR7YyhcInVpOmRpYWxvZ1wiKX1cIiByb2xlPVwid2luZG93XCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwY3Itc2VsZWN0aW9uXCIgJHtsKGUucGFsZXR0ZSl9PlxcbiAgICAgICAgICAgIDxkaXYgOm9iaj1cInByZXZpZXdcIiBjbGFzcz1cInBjci1jb2xvci1wcmV2aWV3XCIgJHtsKGUucHJldmlldyl9PlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgOnJlZj1cImxhc3RDb2xvclwiIGNsYXNzPVwicGNyLWxhc3QtY29sb3JcIiBhcmlhLWxhYmVsPVwiJHtjKFwiYnRuOmxhc3QtY29sb3JcIil9XCI+PC9idXR0b24+XFxuICAgICAgICAgICAgICA8ZGl2IDpyZWY9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cInBjci1jdXJyZW50LWNvbG9yXCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiA6b2JqPVwicGFsZXR0ZVwiIGNsYXNzPVwicGNyLWNvbG9yLXBhbGV0dGVcIj5cXG4gICAgICAgICAgICAgIDxkaXYgOnJlZj1cInBpY2tlclwiIGNsYXNzPVwicGNyLXBpY2tlclwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiA6cmVmPVwicGFsZXR0ZVwiIGNsYXNzPVwicGNyLXBhbGV0dGVcIiB0YWJpbmRleD1cIjBcIiBhcmlhLWxhYmVsPVwiJHtjKFwiYXJpYTpwYWxldHRlXCIpfVwiIHJvbGU9XCJsaXN0Ym94XCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiA6b2JqPVwiaHVlXCIgY2xhc3M9XCJwY3ItY29sb3ItY2hvb3NlclwiICR7bChlLmh1ZSl9PlxcbiAgICAgICAgICAgICAgPGRpdiA6cmVmPVwicGlja2VyXCIgY2xhc3M9XCJwY3ItcGlja2VyXCI+PC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IDpyZWY9XCJzbGlkZXJcIiBjbGFzcz1cInBjci1odWUgcGNyLXNsaWRlclwiIHRhYmluZGV4PVwiMFwiIGFyaWEtbGFiZWw9XCIke2MoXCJhcmlhOmh1ZVwiKX1cIiByb2xlPVwic2xpZGVyXCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiA6b2JqPVwib3BhY2l0eVwiIGNsYXNzPVwicGNyLWNvbG9yLW9wYWNpdHlcIiAke2woZS5vcGFjaXR5KX0+XFxuICAgICAgICAgICAgICA8ZGl2IDpyZWY9XCJwaWNrZXJcIiBjbGFzcz1cInBjci1waWNrZXJcIj48L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgOnJlZj1cInNsaWRlclwiIGNsYXNzPVwicGNyLW9wYWNpdHkgcGNyLXNsaWRlclwiIHRhYmluZGV4PVwiMFwiIGFyaWEtbGFiZWw9XCIke2MoXCJhcmlhOm9wYWNpdHlcIil9XCIgcm9sZT1cInNsaWRlclwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBjci1zd2F0Y2hlcyAke2UucGFsZXR0ZT9cIlwiOlwicGNyLWxhc3RcIn1cIiA6cmVmPVwic3dhdGNoZXNcIj48L2Rpdj5cXG5cXG4gICAgICAgICAgPGRpdiA6b2JqPVwiaW50ZXJhY3Rpb25cIiBjbGFzcz1cInBjci1pbnRlcmFjdGlvblwiICR7bChPYmplY3Qua2V5cyhlLmludGVyYWN0aW9uKS5sZW5ndGgpfT5cXG4gICAgICAgICAgICA8aW5wdXQgOnJlZj1cInJlc3VsdFwiIGNsYXNzPVwicGNyLXJlc3VsdFwiIHR5cGU9XCJ0ZXh0XCIgc3BlbGxjaGVjaz1cImZhbHNlXCIgJHtsKGUuaW50ZXJhY3Rpb24uaW5wdXQpfSBhcmlhLWxhYmVsPVwiJHtjKFwiYXJpYTppbnB1dFwiKX1cIj5cXG5cXG4gICAgICAgICAgICA8aW5wdXQgOmFycj1cIm9wdGlvbnNcIiBjbGFzcz1cInBjci10eXBlXCIgZGF0YS10eXBlPVwiSEVYQVwiIHZhbHVlPVwiJHtyP1wiSEVYXCI6XCJIRVhBXCJ9XCIgdHlwZT1cImJ1dHRvblwiICR7bChlLmludGVyYWN0aW9uLmhleCl9PlxcbiAgICAgICAgICAgIDxpbnB1dCA6YXJyPVwib3B0aW9uc1wiIGNsYXNzPVwicGNyLXR5cGVcIiBkYXRhLXR5cGU9XCJSR0JBXCIgdmFsdWU9XCIke3I/XCJSR0JcIjpcIlJHQkFcIn1cIiB0eXBlPVwiYnV0dG9uXCIgJHtsKGUuaW50ZXJhY3Rpb24ucmdiYSl9PlxcbiAgICAgICAgICAgIDxpbnB1dCA6YXJyPVwib3B0aW9uc1wiIGNsYXNzPVwicGNyLXR5cGVcIiBkYXRhLXR5cGU9XCJIU0xBXCIgdmFsdWU9XCIke3I/XCJIU0xcIjpcIkhTTEFcIn1cIiB0eXBlPVwiYnV0dG9uXCIgJHtsKGUuaW50ZXJhY3Rpb24uaHNsYSl9PlxcbiAgICAgICAgICAgIDxpbnB1dCA6YXJyPVwib3B0aW9uc1wiIGNsYXNzPVwicGNyLXR5cGVcIiBkYXRhLXR5cGU9XCJIU1ZBXCIgdmFsdWU9XCIke3I/XCJIU1ZcIjpcIkhTVkFcIn1cIiB0eXBlPVwiYnV0dG9uXCIgJHtsKGUuaW50ZXJhY3Rpb24uaHN2YSl9PlxcbiAgICAgICAgICAgIDxpbnB1dCA6YXJyPVwib3B0aW9uc1wiIGNsYXNzPVwicGNyLXR5cGVcIiBkYXRhLXR5cGU9XCJDTVlLXCIgdmFsdWU9XCJDTVlLXCIgdHlwZT1cImJ1dHRvblwiICR7bChlLmludGVyYWN0aW9uLmNteWspfT5cXG5cXG4gICAgICAgICAgICA8aW5wdXQgOnJlZj1cInNhdmVcIiBjbGFzcz1cInBjci1zYXZlXCIgdmFsdWU9XCIke2MoXCJidG46c2F2ZVwiKX1cIiB0eXBlPVwiYnV0dG9uXCIgJHtsKGUuaW50ZXJhY3Rpb24uc2F2ZSl9IGFyaWEtbGFiZWw9XCIke2MoXCJhcmlhOmJ0bjpzYXZlXCIpfVwiPlxcbiAgICAgICAgICAgIDxpbnB1dCA6cmVmPVwiY2FuY2VsXCIgY2xhc3M9XCJwY3ItY2FuY2VsXCIgdmFsdWU9XCIke2MoXCJidG46Y2FuY2VsXCIpfVwiIHR5cGU9XCJidXR0b25cIiAke2woZS5pbnRlcmFjdGlvbi5jYW5jZWwpfSBhcmlhLWxhYmVsPVwiJHtjKFwiYXJpYTpidG46Y2FuY2VsXCIpfVwiPlxcbiAgICAgICAgICAgIDxpbnB1dCA6cmVmPVwiY2xlYXJcIiBjbGFzcz1cInBjci1jbGVhclwiIHZhbHVlPVwiJHtjKFwiYnRuOmNsZWFyXCIpfVwiIHR5cGU9XCJidXR0b25cIiAke2woZS5pbnRlcmFjdGlvbi5jbGVhcil9IGFyaWEtbGFiZWw9XCIke2MoXCJhcmlhOmJ0bjpjbGVhclwiKX1cIj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgYCksdT1wLmludGVyYWN0aW9uO3JldHVybiB1Lm9wdGlvbnMuZmluZCgodD0+IXQuaGlkZGVuJiYhdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpKSksdS50eXBlPSgpPT51Lm9wdGlvbnMuZmluZCgodD0+dC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpKSxwfSkodGhpcyksdC51c2VBc0J1dHRvbiYmKHRoaXMuX3Jvb3QuYnV0dG9uPXQuZWwpLHQuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX3Jvb3Qucm9vdCl9X2ZpbmFsQnVpbGQoKXtjb25zdCB0PXRoaXMub3B0aW9ucyxlPXRoaXMuX3Jvb3Q7aWYodC5jb250YWluZXIucmVtb3ZlQ2hpbGQoZS5yb290KSx0LmlubGluZSl7Y29uc3Qgbz10LmVsLnBhcmVudEVsZW1lbnQ7dC5lbC5uZXh0U2libGluZz9vLmluc2VydEJlZm9yZShlLmFwcCx0LmVsLm5leHRTaWJsaW5nKTpvLmFwcGVuZENoaWxkKGUuYXBwKX1lbHNlIHQuY29udGFpbmVyLmFwcGVuZENoaWxkKGUuYXBwKTt0LnVzZUFzQnV0dG9uP3QuaW5saW5lJiZ0LmVsLnJlbW92ZSgpOnQuZWwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZS5yb290LHQuZWwpLHQuZGlzYWJsZWQmJnRoaXMuZGlzYWJsZSgpLHQuY29tcGFyaXNvbnx8KGUuYnV0dG9uLnN0eWxlLnRyYW5zaXRpb249XCJub25lXCIsdC51c2VBc0J1dHRvbnx8KGUucHJldmlldy5sYXN0Q29sb3Iuc3R5bGUudHJhbnNpdGlvbj1cIm5vbmVcIikpLHRoaXMuaGlkZSgpfV9idWlsZENvbXBvbmVudHMoKXtjb25zdCB0PXRoaXMsZT10aGlzLm9wdGlvbnMuY29tcG9uZW50cyxvPSh0Lm9wdGlvbnMuc2xpZGVyc3x8XCJ2XCIpLnJlcGVhdCgyKSxbbixpXT1vLm1hdGNoKC9eW3ZoXSskL2cpP286W10scz0oKT0+dGhpcy5fY29sb3J8fCh0aGlzLl9jb2xvcj10aGlzLl9sYXN0Q29sb3IuY2xvbmUoKSkscj17cGFsZXR0ZTokKHtlbGVtZW50OnQuX3Jvb3QucGFsZXR0ZS5waWNrZXIsd3JhcHBlcjp0Ll9yb290LnBhbGV0dGUucGFsZXR0ZSxvbnN0b3A6KCk9PnQuX2VtaXQoXCJjaGFuZ2VzdG9wXCIsXCJzbGlkZXJcIix0KSxvbmNoYW5nZShvLG4pe2lmKCFlLnBhbGV0dGUpcmV0dXJuO2NvbnN0IGk9cygpLHtfcm9vdDpyLG9wdGlvbnM6YX09dCx7bGFzdENvbG9yOmwsY3VycmVudENvbG9yOmN9PXIucHJldmlldzt0Ll9yZWNhbGMmJihpLnM9MTAwKm8saS52PTEwMC0xMDAqbixpLnY8MCYmKGkudj0wKSx0Ll91cGRhdGVPdXRwdXQoXCJzbGlkZXJcIikpO2NvbnN0IHA9aS50b1JHQkEoKS50b1N0cmluZygwKTt0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZD1wLHRoaXMud3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kPWBcXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsICR7aS5hfSksIHRyYW5zcGFyZW50KSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgaHNsYSgke2kuaH0sIDEwMCUsIDUwJSwgJHtpLmF9KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAke2kuYX0pKVxcbiAgICAgICAgICAgICAgICAgICAgYCxhLmNvbXBhcmlzb24/YS51c2VBc0J1dHRvbnx8dC5fbGFzdENvbG9yfHxsLnN0eWxlLnNldFByb3BlcnR5KFwiLS1wY3ItY29sb3JcIixwKTooci5idXR0b24uc3R5bGUuc2V0UHJvcGVydHkoXCItLXBjci1jb2xvclwiLHApLHIuYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGVhclwiKSk7Y29uc3QgdT1pLnRvSEVYQSgpLnRvU3RyaW5nKCk7Zm9yKGNvbnN0e2VsOmUsY29sb3I6b31vZiB0Ll9zd2F0Y2hDb2xvcnMpZS5jbGFzc0xpc3RbdT09PW8udG9IRVhBKCkudG9TdHJpbmcoKT9cImFkZFwiOlwicmVtb3ZlXCJdKFwicGNyLWFjdGl2ZVwiKTtjLnN0eWxlLnNldFByb3BlcnR5KFwiLS1wY3ItY29sb3JcIixwKX19KSxodWU6JCh7bG9jazpcInZcIj09PWk/XCJoXCI6XCJ2XCIsZWxlbWVudDp0Ll9yb290Lmh1ZS5waWNrZXIsd3JhcHBlcjp0Ll9yb290Lmh1ZS5zbGlkZXIsb25zdG9wOigpPT50Ll9lbWl0KFwiY2hhbmdlc3RvcFwiLFwic2xpZGVyXCIsdCksb25jaGFuZ2Uobyl7aWYoIWUuaHVlfHwhZS5wYWxldHRlKXJldHVybjtjb25zdCBuPXMoKTt0Ll9yZWNhbGMmJihuLmg9MzYwKm8pLHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9YGhzbCgke24uaH0sIDEwMCUsIDUwJSlgLHIucGFsZXR0ZS50cmlnZ2VyKCl9fSksb3BhY2l0eTokKHtsb2NrOlwidlwiPT09bj9cImhcIjpcInZcIixlbGVtZW50OnQuX3Jvb3Qub3BhY2l0eS5waWNrZXIsd3JhcHBlcjp0Ll9yb290Lm9wYWNpdHkuc2xpZGVyLG9uc3RvcDooKT0+dC5fZW1pdChcImNoYW5nZXN0b3BcIixcInNsaWRlclwiLHQpLG9uY2hhbmdlKG8pe2lmKCFlLm9wYWNpdHl8fCFlLnBhbGV0dGUpcmV0dXJuO2NvbnN0IG49cygpO3QuX3JlY2FsYyYmKG4uYT1NYXRoLnJvdW5kKDEwMCpvKS8xMDApLHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kPWByZ2JhKDAsIDAsIDAsICR7bi5hfSlgLHIucGFsZXR0ZS50cmlnZ2VyKCl9fSksc2VsZWN0YWJsZTprKHtlbGVtZW50czp0Ll9yb290LmludGVyYWN0aW9uLm9wdGlvbnMsY2xhc3NOYW1lOlwiYWN0aXZlXCIsb25jaGFuZ2UoZSl7dC5fcmVwcmVzZW50YXRpb249ZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpLnRvVXBwZXJDYXNlKCksdC5fcmVjYWxjJiZ0Ll91cGRhdGVPdXRwdXQoXCJzd2F0Y2hcIil9fSl9O3RoaXMuX2NvbXBvbmVudHM9cn1fYmluZEV2ZW50cygpe2NvbnN0e19yb290OnQsb3B0aW9uczplfT10aGlzLG89W2kodC5pbnRlcmFjdGlvbi5jbGVhcixcImNsaWNrXCIsKCgpPT50aGlzLl9jbGVhckNvbG9yKCkpKSxpKFt0LmludGVyYWN0aW9uLmNhbmNlbCx0LnByZXZpZXcubGFzdENvbG9yXSxcImNsaWNrXCIsKCgpPT57dGhpcy5zZXRIU1ZBKC4uLih0aGlzLl9sYXN0Q29sb3J8fHRoaXMuX2NvbG9yKS50b0hTVkEoKSwhMCksdGhpcy5fZW1pdChcImNhbmNlbFwiKX0pKSxpKHQuaW50ZXJhY3Rpb24uc2F2ZSxcImNsaWNrXCIsKCgpPT57IXRoaXMuYXBwbHlDb2xvcigpJiYhZS5zaG93QWx3YXlzJiZ0aGlzLmhpZGUoKX0pKSxpKHQuaW50ZXJhY3Rpb24ucmVzdWx0LFtcImtleXVwXCIsXCJpbnB1dFwiXSwodD0+e3RoaXMuc2V0Q29sb3IodC50YXJnZXQudmFsdWUsITApJiYhdGhpcy5faW5pdGlhbGl6aW5nQWN0aXZlJiYodGhpcy5fZW1pdChcImNoYW5nZVwiLHRoaXMuX2NvbG9yLFwiaW5wdXRcIix0aGlzKSx0aGlzLl9lbWl0KFwiY2hhbmdlc3RvcFwiLFwiaW5wdXRcIix0aGlzKSksdC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKX0pKSxpKHQuaW50ZXJhY3Rpb24ucmVzdWx0LFtcImZvY3VzXCIsXCJibHVyXCJdLCh0PT57dGhpcy5fcmVjYWxjPVwiYmx1clwiPT09dC50eXBlLHRoaXMuX3JlY2FsYyYmdGhpcy5fdXBkYXRlT3V0cHV0KG51bGwpfSkpLGkoW3QucGFsZXR0ZS5wYWxldHRlLHQucGFsZXR0ZS5waWNrZXIsdC5odWUuc2xpZGVyLHQuaHVlLnBpY2tlcix0Lm9wYWNpdHkuc2xpZGVyLHQub3BhY2l0eS5waWNrZXJdLFtcIm1vdXNlZG93blwiLFwidG91Y2hzdGFydFwiXSwoKCk9PnRoaXMuX3JlY2FsYz0hMCkse3Bhc3NpdmU6ITB9KV07aWYoIWUuc2hvd0Fsd2F5cyl7Y29uc3Qgbj1lLmNsb3NlV2l0aEtleTtvLnB1c2goaSh0LmJ1dHRvbixcImNsaWNrXCIsKCgpPT50aGlzLmlzT3BlbigpP3RoaXMuaGlkZSgpOnRoaXMuc2hvdygpKSksaShkb2N1bWVudCxcImtleXVwXCIsKHQ9PnRoaXMuaXNPcGVuKCkmJih0LmtleT09PW58fHQuY29kZT09PW4pJiZ0aGlzLmhpZGUoKSkpLGkoZG9jdW1lbnQsW1widG91Y2hzdGFydFwiLFwibW91c2Vkb3duXCJdLChlPT57dGhpcy5pc09wZW4oKSYmIWwoZSkuc29tZSgoZT0+ZT09PXQuYXBwfHxlPT09dC5idXR0b24pKSYmdGhpcy5oaWRlKCl9KSx7Y2FwdHVyZTohMH0pKX1pZihlLmFkanVzdGFibGVOdW1iZXJzKXtjb25zdCBlPXtyZ2JhOlsyNTUsMjU1LDI1NSwxXSxoc3ZhOlszNjAsMTAwLDEwMCwxXSxoc2xhOlszNjAsMTAwLDEwMCwxXSxjbXlrOlsxMDAsMTAwLDEwMCwxMDBdfTtwKHQuaW50ZXJhY3Rpb24ucmVzdWx0LCgodCxvLG4pPT57Y29uc3QgaT1lW3RoaXMuZ2V0Q29sb3JSZXByZXNlbnRhdGlvbigpLnRvTG93ZXJDYXNlKCldO2lmKGkpe2NvbnN0IGU9aVtuXSxzPXQrKGU+PTEwMD8xZTMqbzpvKTtyZXR1cm4gczw9MD8wOk51bWJlcigoczxlP3M6ZSkudG9QcmVjaXNpb24oMykpfXJldHVybiB0fSkpfWlmKGUuYXV0b1JlcG9zaXRpb24mJiFlLmlubGluZSl7bGV0IHQ9bnVsbDtjb25zdCBuPXRoaXM7by5wdXNoKGkod2luZG93LFtcInNjcm9sbFwiLFwicmVzaXplXCJdLCgoKT0+e24uaXNPcGVuKCkmJihlLmNsb3NlT25TY3JvbGwmJm4uaGlkZSgpLG51bGw9PT10Pyh0PXNldFRpbWVvdXQoKCgpPT50PW51bGwpLDEwMCkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmdW5jdGlvbiBlKCl7bi5fcmVQb3NpdGlvbmluZ1BpY2tlcigpLG51bGwhPT10JiZyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZSl9KSkpOihjbGVhclRpbWVvdXQodCksdD1zZXRUaW1lb3V0KCgoKT0+dD1udWxsKSwxMDApKSl9KSx7Y2FwdHVyZTohMH0pKX10aGlzLl9ldmVudEJpbmRpbmdzPW99X3JlUG9zaXRpb25pbmdQaWNrZXIoKXtjb25zdHtvcHRpb25zOnR9PXRoaXM7aWYoIXQuaW5saW5lKXtpZighdGhpcy5fbmFub3BvcC51cGRhdGUoe2NvbnRhaW5lcjpkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHBvc2l0aW9uOnQucG9zaXRpb259KSl7Y29uc3QgdD10aGlzLl9yb290LmFwcCxlPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7dC5zdHlsZS50b3A9KHdpbmRvdy5pbm5lckhlaWdodC1lLmhlaWdodCkvMitcInB4XCIsdC5zdHlsZS5sZWZ0PSh3aW5kb3cuaW5uZXJXaWR0aC1lLndpZHRoKS8yK1wicHhcIn19fV91cGRhdGVPdXRwdXQodCl7Y29uc3R7X3Jvb3Q6ZSxfY29sb3I6byxvcHRpb25zOm59PXRoaXM7aWYoZS5pbnRlcmFjdGlvbi50eXBlKCkpe2NvbnN0IHQ9YHRvJHtlLmludGVyYWN0aW9uLnR5cGUoKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIil9YDtlLmludGVyYWN0aW9uLnJlc3VsdC52YWx1ZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBvW3RdP29bdF0oKS50b1N0cmluZyhuLm91dHB1dFByZWNpc2lvbik6XCJcIn0hdGhpcy5faW5pdGlhbGl6aW5nQWN0aXZlJiZ0aGlzLl9yZWNhbGMmJnRoaXMuX2VtaXQoXCJjaGFuZ2VcIixvLHQsdGhpcyl9X2NsZWFyQ29sb3IodD0hMSl7Y29uc3R7X3Jvb3Q6ZSxvcHRpb25zOm99PXRoaXM7by51c2VBc0J1dHRvbnx8ZS5idXR0b24uc3R5bGUuc2V0UHJvcGVydHkoXCItLXBjci1jb2xvclwiLFwicmdiYSgwLCAwLCAwLCAwLjE1KVwiKSxlLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xlYXJcIiksby5zaG93QWx3YXlzfHx0aGlzLmhpZGUoKSx0aGlzLl9sYXN0Q29sb3I9bnVsbCx0aGlzLl9pbml0aWFsaXppbmdBY3RpdmV8fHR8fCh0aGlzLl9lbWl0KFwic2F2ZVwiLG51bGwpLHRoaXMuX2VtaXQoXCJjbGVhclwiKSl9X3BhcnNlTG9jYWxDb2xvcih0KXtjb25zdHt2YWx1ZXM6ZSx0eXBlOm8sYTpufT13KHQpLHtsb2NrT3BhY2l0eTppfT10aGlzLm9wdGlvbnMscz12b2lkIDAhPT1uJiYxIT09bjtyZXR1cm4gZSYmMz09PWUubGVuZ3RoJiYoZVszXT12b2lkIDApLHt2YWx1ZXM6IWV8fGkmJnM/bnVsbDplLHR5cGU6b319X3QodCl7cmV0dXJuIHRoaXMub3B0aW9ucy5pMThuW3RdfHxMLkkxOE5fREVGQVVMVFNbdF19X2VtaXQodCwuLi5lKXt0aGlzLl9ldmVudExpc3RlbmVyW3RdLmZvckVhY2goKHQ9PnQoLi4uZSx0aGlzKSkpfW9uKHQsZSl7cmV0dXJuIHRoaXMuX2V2ZW50TGlzdGVuZXJbdF0ucHVzaChlKSx0aGlzfW9mZih0LGUpe2NvbnN0IG89dGhpcy5fZXZlbnRMaXN0ZW5lclt0XXx8W10sbj1vLmluZGV4T2YoZSk7cmV0dXJufm4mJm8uc3BsaWNlKG4sMSksdGhpc31hZGRTd2F0Y2godCl7Y29uc3R7dmFsdWVzOmV9PXRoaXMuX3BhcnNlTG9jYWxDb2xvcih0KTtpZihlKXtjb25zdHtfc3dhdGNoQ29sb3JzOnQsX3Jvb3Q6b309dGhpcyxuPUEoLi4uZSkscz1yKGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIi0tcGNyLWNvbG9yOiAke24udG9SR0JBKCkudG9TdHJpbmcoMCl9XCIgYXJpYS1sYWJlbD1cIiR7dGhpcy5fdChcImJ0bjpzd2F0Y2hcIil9XCIvPmApO3JldHVybiBvLnN3YXRjaGVzLmFwcGVuZENoaWxkKHMpLHQucHVzaCh7ZWw6cyxjb2xvcjpufSksdGhpcy5fZXZlbnRCaW5kaW5ncy5wdXNoKGkocyxcImNsaWNrXCIsKCgpPT57dGhpcy5zZXRIU1ZBKC4uLm4udG9IU1ZBKCksITApLHRoaXMuX2VtaXQoXCJzd2F0Y2hzZWxlY3RcIixuKSx0aGlzLl9lbWl0KFwiY2hhbmdlXCIsbixcInN3YXRjaFwiLHRoaXMpfSkpKSwhMH1yZXR1cm4hMX1yZW1vdmVTd2F0Y2godCl7Y29uc3QgZT10aGlzLl9zd2F0Y2hDb2xvcnNbdF07aWYoZSl7Y29uc3R7ZWw6b309ZTtyZXR1cm4gdGhpcy5fcm9vdC5zd2F0Y2hlcy5yZW1vdmVDaGlsZChvKSx0aGlzLl9zd2F0Y2hDb2xvcnMuc3BsaWNlKHQsMSksITB9cmV0dXJuITF9YXBwbHlDb2xvcih0PSExKXtjb25zdHtwcmV2aWV3OmUsYnV0dG9uOm99PXRoaXMuX3Jvb3Qsbj10aGlzLl9jb2xvci50b1JHQkEoKS50b1N0cmluZygwKTtyZXR1cm4gZS5sYXN0Q29sb3Iuc3R5bGUuc2V0UHJvcGVydHkoXCItLXBjci1jb2xvclwiLG4pLHRoaXMub3B0aW9ucy51c2VBc0J1dHRvbnx8by5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcGNyLWNvbG9yXCIsbiksby5jbGFzc0xpc3QucmVtb3ZlKFwiY2xlYXJcIiksdGhpcy5fbGFzdENvbG9yPXRoaXMuX2NvbG9yLmNsb25lKCksdGhpcy5faW5pdGlhbGl6aW5nQWN0aXZlfHx0fHx0aGlzLl9lbWl0KFwic2F2ZVwiLHRoaXMuX2NvbG9yKSx0aGlzfWRlc3Ryb3koKXtjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9zZXR1cEFuaW1hdGlvbkZyYW1lKSx0aGlzLl9ldmVudEJpbmRpbmdzLmZvckVhY2goKHQ9PnMoLi4udCkpKSxPYmplY3Qua2V5cyh0aGlzLl9jb21wb25lbnRzKS5mb3JFYWNoKCh0PT50aGlzLl9jb21wb25lbnRzW3RdLmRlc3Ryb3koKSkpfWRlc3Ryb3lBbmRSZW1vdmUoKXt0aGlzLmRlc3Ryb3koKTtjb25zdHtyb290OnQsYXBwOmV9PXRoaXMuX3Jvb3Q7dC5wYXJlbnRFbGVtZW50JiZ0LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodCksZS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGUpLE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKHQ9PnRoaXNbdF09bnVsbCkpfWhpZGUoKXtyZXR1cm4hIXRoaXMuaXNPcGVuKCkmJih0aGlzLl9yb290LmFwcC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKSx0aGlzLl9lbWl0KFwiaGlkZVwiKSwhMCl9c2hvdygpe3JldHVybiF0aGlzLm9wdGlvbnMuZGlzYWJsZWQmJiF0aGlzLmlzT3BlbigpJiYodGhpcy5fcm9vdC5hcHAuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIiksdGhpcy5fcmVQb3NpdGlvbmluZ1BpY2tlcigpLHRoaXMuX2VtaXQoXCJzaG93XCIsdGhpcy5fY29sb3IpLHRoaXMpfWlzT3Blbigpe3JldHVybiB0aGlzLl9yb290LmFwcC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aXNpYmxlXCIpfXNldEhTVkEodD0zNjAsZT0wLG89MCxuPTEsaT0hMSl7Y29uc3Qgcz10aGlzLl9yZWNhbGM7aWYodGhpcy5fcmVjYWxjPSExLHQ8MHx8dD4zNjB8fGU8MHx8ZT4xMDB8fG88MHx8bz4xMDB8fG48MHx8bj4xKXJldHVybiExO3RoaXMuX2NvbG9yPUEodCxlLG8sbik7Y29uc3R7aHVlOnIsb3BhY2l0eTphLHBhbGV0dGU6bH09dGhpcy5fY29tcG9uZW50cztyZXR1cm4gci51cGRhdGUodC8zNjApLGEudXBkYXRlKG4pLGwudXBkYXRlKGUvMTAwLDEtby8xMDApLGl8fHRoaXMuYXBwbHlDb2xvcigpLHMmJnRoaXMuX3VwZGF0ZU91dHB1dCgpLHRoaXMuX3JlY2FsYz1zLCEwfXNldENvbG9yKHQsZT0hMSl7aWYobnVsbD09PXQpcmV0dXJuIHRoaXMuX2NsZWFyQ29sb3IoZSksITA7Y29uc3R7dmFsdWVzOm8sdHlwZTpufT10aGlzLl9wYXJzZUxvY2FsQ29sb3IodCk7aWYobyl7Y29uc3QgdD1uLnRvVXBwZXJDYXNlKCkse29wdGlvbnM6aX09dGhpcy5fcm9vdC5pbnRlcmFjdGlvbixzPWkuZmluZCgoZT0+ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIik9PT10KSk7aWYocyYmIXMuaGlkZGVuKWZvcihjb25zdCB0IG9mIGkpdC5jbGFzc0xpc3RbdD09PXM/XCJhZGRcIjpcInJlbW92ZVwiXShcImFjdGl2ZVwiKTtyZXR1cm4hIXRoaXMuc2V0SFNWQSguLi5vLGUpJiZ0aGlzLnNldENvbG9yUmVwcmVzZW50YXRpb24odCl9cmV0dXJuITF9c2V0Q29sb3JSZXByZXNlbnRhdGlvbih0KXtyZXR1cm4gdD10LnRvVXBwZXJDYXNlKCksISF0aGlzLl9yb290LmludGVyYWN0aW9uLm9wdGlvbnMuZmluZCgoZT0+ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIikuc3RhcnRzV2l0aCh0KSYmIWUuY2xpY2soKSkpfWdldENvbG9yUmVwcmVzZW50YXRpb24oKXtyZXR1cm4gdGhpcy5fcmVwcmVzZW50YXRpb259Z2V0Q29sb3IoKXtyZXR1cm4gdGhpcy5fY29sb3J9Z2V0U2VsZWN0ZWRDb2xvcigpe3JldHVybiB0aGlzLl9sYXN0Q29sb3J9Z2V0Um9vdCgpe3JldHVybiB0aGlzLl9yb290fWRpc2FibGUoKXtyZXR1cm4gdGhpcy5oaWRlKCksdGhpcy5vcHRpb25zLmRpc2FibGVkPSEwLHRoaXMuX3Jvb3QuYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKSx0aGlzfWVuYWJsZSgpe3JldHVybiB0aGlzLm9wdGlvbnMuZGlzYWJsZWQ9ITEsdGhpcy5fcm9vdC5idXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpLHRoaXN9fXJldHVybiBFKEwsXCJ1dGlsc1wiLG8pLEUoTCxcInZlcnNpb25cIixcIjEuOC4yXCIpLEUoTCxcIkkxOE5fREVGQVVMVFNcIix7XCJ1aTpkaWFsb2dcIjpcImNvbG9yIHBpY2tlciBkaWFsb2dcIixcImJ0bjp0b2dnbGVcIjpcInRvZ2dsZSBjb2xvciBwaWNrZXIgZGlhbG9nXCIsXCJidG46c3dhdGNoXCI6XCJjb2xvciBzd2F0Y2hcIixcImJ0bjpsYXN0LWNvbG9yXCI6XCJ1c2UgcHJldmlvdXMgY29sb3JcIixcImJ0bjpzYXZlXCI6XCJTYXZlXCIsXCJidG46Y2FuY2VsXCI6XCJDYW5jZWxcIixcImJ0bjpjbGVhclwiOlwiQ2xlYXJcIixcImFyaWE6YnRuOnNhdmVcIjpcInNhdmUgYW5kIGNsb3NlXCIsXCJhcmlhOmJ0bjpjYW5jZWxcIjpcImNhbmNlbCBhbmQgY2xvc2VcIixcImFyaWE6YnRuOmNsZWFyXCI6XCJjbGVhciBhbmQgY2xvc2VcIixcImFyaWE6aW5wdXRcIjpcImNvbG9yIGlucHV0IGZpZWxkXCIsXCJhcmlhOnBhbGV0dGVcIjpcImNvbG9yIHNlbGVjdGlvbiBhcmVhXCIsXCJhcmlhOmh1ZVwiOlwiaHVlIHNlbGVjdGlvbiBzbGlkZXJcIixcImFyaWE6b3BhY2l0eVwiOlwic2VsZWN0aW9uIHNsaWRlclwifSksRShMLFwiREVGQVVMVF9PUFRJT05TXCIse2FwcENsYXNzOm51bGwsdGhlbWU6XCJjbGFzc2ljXCIsdXNlQXNCdXR0b246ITEscGFkZGluZzo4LGRpc2FibGVkOiExLGNvbXBhcmlzb246ITAsY2xvc2VPblNjcm9sbDohMSxvdXRwdXRQcmVjaXNpb246MCxsb2NrT3BhY2l0eTohMSxhdXRvUmVwb3NpdGlvbjohMCxjb250YWluZXI6XCJib2R5XCIsY29tcG9uZW50czp7aW50ZXJhY3Rpb246e319LGkxOG46e30sc3dhdGNoZXM6bnVsbCxpbmxpbmU6ITEsc2xpZGVyczpudWxsLGRlZmF1bHQ6XCIjNDI0NDVhXCIsZGVmYXVsdFJlcHJlc2VudGF0aW9uOm51bGwscG9zaXRpb246XCJib3R0b20tbWlkZGxlXCIsYWRqdXN0YWJsZU51bWJlcnM6ITAsc2hvd0Fsd2F5czohMSxjbG9zZVdpdGhLZXk6XCJFc2NhcGVcIn0pLEUoTCxcImNyZWF0ZVwiLCh0PT5uZXcgTCh0KSkpLGU9ZS5kZWZhdWx0fSkoKX0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBpY2tyLm1pbi5qcy5tYXAiLCJpbXBvcnQgdHlwZSBjTWVudVRvb2xiYXJQbHVnaW4gZnJvbSBcInNyYy9wbHVnaW4vbWFpblwiO1xyXG5pbXBvcnQgeyBDb21tYW5kUGlja2VyLCBDaG9vc2VGcm9tSWNvbkxpc3QsIENoYW5nZUNtZG5hbWUgfSBmcm9tIFwic3JjL21vZGFscy9zdWdnZXN0ZXJNb2RhbHNcIjtcclxuaW1wb3J0IHsgQXBwLCBTZXR0aW5nLCBQbHVnaW5TZXR0aW5nVGFiLCBDb21tYW5kIH0gZnJvbSBcIm9ic2lkaWFuXCI7XHJcbmltcG9ydCB7IEFQUEVORF9NRVRIT0RTLCBBRVNUSEVUSUNfU1RZTEVTLCBQT1NJVElPTl9TVFlMRVMgfSBmcm9tIFwic3JjL3NldHRpbmdzL3NldHRpbmdzRGF0YVwiO1xyXG5pbXBvcnQgeyBzZWxmRGVzdHJ1Y3QsIGNNZW51VG9vbGJhclBvcG92ZXIsIGNoZWNrSHRtbCB9IGZyb20gXCJzcmMvbW9kYWxzL2NNZW51VG9vbGJhck1vZGFsXCI7XHJcbmltcG9ydCBTb3J0YWJsZSBmcm9tIFwic29ydGFibGVqc1wiO1xyXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5pbXBvcnQgeyBHZW5Ob25EdXBsaWNhdGVJRCB9IGZyb20gXCJzcmMvdXRpbC91dGlsXCI7XHJcbmltcG9ydCB7IHQgfSBmcm9tICdzcmMvdHJhbnNsYXRpb25zL2hlbHBlcic7XHJcblxyXG5pbXBvcnQgUGlja3IgZnJvbSBcIkBzaW1vbndlcC9waWNrclwiO1xyXG5pbXBvcnQgeyBzZXR0aW5ncyB9IGZyb20gXCJjbHVzdGVyXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0UGlja3JTZXR0aW5ncyhvcHRzOiB7XHJcbiAgaXNWaWV3OiBib29sZWFuO1xyXG4gIGVsOiBIVE1MRWxlbWVudDtcclxuICBjb250YWluZXJFbDogSFRNTEVsZW1lbnQ7XHJcbiAgc3dhdGNoZXM6IHN0cmluZ1tdO1xyXG4gIG9wYWNpdHk6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgZGVmYXVsdENvbG9yOiBzdHJpbmc7XHJcbn0pOiBQaWNrci5PcHRpb25zIHtcclxuICBjb25zdCB7IGVsLCBpc1ZpZXcsIGNvbnRhaW5lckVsLCBzd2F0Y2hlcywgb3BhY2l0eSwgZGVmYXVsdENvbG9yIH0gPSBvcHRzO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZWwsXHJcbiAgICBjb250YWluZXI6IGlzVmlldyA/IGRvY3VtZW50LmJvZHkgOiBjb250YWluZXJFbCxcclxuICAgIHRoZW1lOiBcIm5hbm9cIixcclxuICAgIHN3YXRjaGVzLFxyXG4gICAgbG9ja09wYWNpdHk6ICFvcGFjaXR5LFxyXG4gICAgZGVmYXVsdDogZGVmYXVsdENvbG9yLFxyXG4gICAgcG9zaXRpb246IFwibGVmdC1taWRkbGVcIixcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgcHJldmlldzogdHJ1ZSxcclxuICAgICAgaHVlOiB0cnVlLFxyXG4gICAgICBvcGFjaXR5OiAhIW9wYWNpdHksXHJcbiAgICAgIGludGVyYWN0aW9uOiB7XHJcbiAgICAgICAgaGV4OiB0cnVlLFxyXG4gICAgICAgIHJnYmE6IHRydWUsXHJcbiAgICAgICAgaHNsYTogdHJ1ZSxcclxuICAgICAgICBpbnB1dDogdHJ1ZSxcclxuICAgICAgICBjYW5jZWw6IHRydWUsXHJcbiAgICAgICAgc2F2ZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25QaWNrckNhbmNlbChpbnN0YW5jZTogUGlja3IpIHtcclxuICBpbnN0YW5jZS5oaWRlKCk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbWFuZGluZGV4KGl0ZW06IGFueSwgYXJyOiBhbnlbXSk6IG51bWJlciB7XHJcbiAgbGV0IGlkeDtcclxuICBhcnIuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICBpZiAoZWwuaWQgPT09IGl0ZW0pIHtcclxuICAgICAgaWR4ID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGlkeDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIGNNZW51VG9vbGJhclNldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcclxuICBwbHVnaW46IGNNZW51VG9vbGJhclBsdWdpbjtcclxuICBhcHBlbmRNZXRob2Q6IHN0cmluZztcclxuICBwaWNrcjpQaWNrcjtcclxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBjTWVudVRvb2xiYXJQbHVnaW4pIHtcclxuICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcclxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcihcImNNZW51VG9vbGJhci1OZXdDb21tYW5kXCIsICgpID0+IHtcclxuICAgICAgc2VsZkRlc3RydWN0KCk7XHJcbiAgICAgIGNNZW51VG9vbGJhclBvcG92ZXIoYXBwLCB0aGlzLnBsdWdpbik7XHJcbiAgICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5KCk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBjb250YWluZXJFbCB9ID0gdGhpcztcclxuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XHJcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImgxXCIsIHsgdGV4dDogXCJPYnNpZGlhbiBFZGl0aW5nIFRvb2xiYXJcIiB9KTtcclxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IFwiIOWOn+WIm++8miBcIiB9KS5jcmVhdGVFbChcImFcIiwge1xyXG4gICAgICB0ZXh0OiBcIkNoZXRhY2hpIPCfkanwn4+94oCN8J+Su1wiLFxyXG4gICAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jaGV0YWNoaWV6aWtldXpvclwiLFxyXG4gICAgfSk7XHJcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBcIiAgICAg5L+u5pS56ICF77yaIFwiIH0pLmNyZWF0ZUVsKFwiYVwiLCB7XHJcbiAgICAgIHRleHQ6IFwiQ3VtYW4g4pyoXCIsXHJcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2N1bWFueVwiLFxyXG4gICAgfSk7XHJcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImgyXCIsIHsgdGV4dDogdChcIlBsdWdpbiBTZXR0aW5nc1wiKSB9KTtcclxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAuc2V0TmFtZSh0KCdFZGl0aW5nIFRvb2xiYXIgYXBwZW5kIG1ldGhvZCcpKVxyXG4gICAgICAuc2V0RGVzYyhcclxuICAgICAgICB0KCdDaG9vc2Ugd2hlcmUgRWRpdGluZyBUb29sYmFyIHdpbGwgYXBwZW5kIHVwb24gcmVnZW5lcmF0aW9uLiBUbyBzZWUgdGhlIGNoYW5nZSwgaGl0IHRoZSByZWZyZXNoIGJ1dHRvbiBiZWxvdywgb3IgaW4gdGhlIHN0YXR1cyBiYXIgbWVudS4nKVxyXG4gICAgICApXHJcbiAgICAgIC5hZGREcm9wZG93bigoZHJvcGRvd24pID0+IHtcclxuICAgICAgICBsZXQgbWV0aG9kczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xyXG4gICAgICAgIEFQUEVORF9NRVRIT0RTLm1hcCgobWV0aG9kKSA9PiAobWV0aG9kc1ttZXRob2RdID0gbWV0aG9kKSk7XHJcbiAgICAgICAgZHJvcGRvd24uYWRkT3B0aW9ucyhtZXRob2RzKTtcclxuICAgICAgICBkcm9wZG93blxyXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmFwcGVuZE1ldGhvZClcclxuICAgICAgICAgIC5vbkNoYW5nZSgoYXBwZW5kTWV0aG9kKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFwcGVuZE1ldGhvZCA9IGFwcGVuZE1ldGhvZDtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgLnNldE5hbWUodCgnRWRpdGluZyBUb29sYmFyIGFlc3RoZXRpYycpXHJcbiAgICAgIClcclxuICAgICAgLnNldERlc2MoXHJcbiAgICAgICAgdCgnQ2hvb3NlIGJldHdlZW4gYSBnbGFzcyBtb3JwaGlzbSAsdGlueSBhbmQgZGVmYXVsdCBzdHlsZSBmb3IgRWRpdGluZyBUb29sYmFyLiBUbyBzZWUgdGhlIGNoYW5nZSwgaGl0IHRoZSByZWZyZXNoIGJ1dHRvbiBiZWxvdywgb3IgaW4gdGhlIHN0YXR1cyBiYXIgbWVudS4nKVxyXG4gICAgICApXHJcbiAgICAgIC5hZGREcm9wZG93bigoZHJvcGRvd24pID0+IHtcclxuICAgICAgICBsZXQgYWVzdGhldGljczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xyXG4gICAgICAgIEFFU1RIRVRJQ19TVFlMRVMubWFwKFxyXG4gICAgICAgICAgKGFlc3RoZXRpYykgPT4gKGFlc3RoZXRpY3NbYWVzdGhldGljXSA9IGFlc3RoZXRpYylcclxuICAgICAgICApO1xyXG4gICAgICAgIGRyb3Bkb3duLmFkZE9wdGlvbnMoYWVzdGhldGljcyk7XHJcbiAgICAgICAgZHJvcGRvd25cclxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5hZXN0aGV0aWNTdHlsZSlcclxuICAgICAgICAgIC5vbkNoYW5nZSgoYWVzdGhldGljU3R5bGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hZXN0aGV0aWNTdHlsZSA9IGFlc3RoZXRpY1N0eWxlO1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjTWVudVRvb2xiYXItTmV3Q29tbWFuZFwiKSk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgLnNldE5hbWUodCgnRWRpdGluZyBUb29sYmFyIHBvc2l0aW9uJylcclxuICAgICAgKVxyXG4gICAgICAuc2V0RGVzYyh0KCdDaG9vc2UgYmV0d2VlbiBmaXhlZCBwb3NpdGlvbiBvciBjdXJzb3IgZm9sbG93aW5nIG1vZGUuJylcclxuICAgICAgKVxyXG4gICAgICAuYWRkRHJvcGRvd24oKGRyb3Bkb3duKSA9PiB7XHJcbiAgICAgICAgbGV0IHBvc290aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xyXG4gICAgICAgIFBPU0lUSU9OX1NUWUxFUy5tYXAoKHBvc290aW9uOiBzdHJpbmcpID0+IChwb3NvdGlvbnNbcG9zb3Rpb25dID0gcG9zb3Rpb24pKTtcclxuICAgICAgICBkcm9wZG93bi5hZGRPcHRpb25zKHBvc290aW9ucyk7XHJcbiAgICAgICAgZHJvcGRvd25cclxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5wb3NpdGlvblN0eWxlKVxyXG4gICAgICAgICAgLm9uQ2hhbmdlKChwb3NpdGlvblN0eWxlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucG9zaXRpb25TdHlsZSA9IHBvc2l0aW9uU3R5bGU7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNNZW51VG9vbGJhci1OZXdDb21tYW5kXCIpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5wb3NpdGlvblN0eWxlID09IFwidG9wXCIpIHtcclxuICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgLnNldE5hbWUodCgnRWRpdGluZyBUb29sYmFyIEF1dG8taGlkZScpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zZXREZXNjKFxyXG4gICAgICAgICAgdCgnVGhlIHRvb2xiYXIgaXMgZGlzcGxheWVkIHdoZW4gdGhlIG1vdXNlIG1vdmVzIG92ZXIgaXQsIG90aGVyd2lzZSBpdCBpcyBhdXRvbWF0aWNhbGx5IGhpZGRlbicpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5hZGRUb2dnbGUodG9nZ2xlID0+IHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncz8uYXV0b2hpZGUpXHJcbiAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmF1dG9oaWRlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcclxuICAgICAgICAgICAgICBkaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNNZW51VG9vbGJhci1OZXdDb21tYW5kXCIpKTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5wb3NpdGlvblN0eWxlID09IFwiZml4ZWRcIikge1xyXG4gICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAuc2V0TmFtZSh0KCdFZGl0aW5nIFRvb2xiYXIgY29sdW1ucycpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zZXREZXNjKFxyXG4gICAgICAgICAgdCgnQ2hvb3NlIHRoZSBudW1iZXIgb2YgY29sdW1ucyBwZXIgcm93IHRvIGRpc3BsYXkgb24gRWRpdGluZyBUb29sYmFyLiBUbyBzZWUgdGhlIGNoYW5nZSwgaGl0IHRoZSByZWZyZXNoIGJ1dHRvbiBiZWxvdywgb3IgaW4gdGhlIHN0YXR1cyBiYXIgbWVudS4nKVxyXG4gICAgICAgIClcclxuICAgICAgICAuYWRkU2xpZGVyKChzbGlkZXIpID0+IHtcclxuICAgICAgICAgIHNsaWRlclxyXG4gICAgICAgICAgICAuc2V0TGltaXRzKDEsIDMyLCAxKVxyXG4gICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuY01lbnVOdW1Sb3dzKVxyXG4gICAgICAgICAgICAub25DaGFuZ2UoXHJcbiAgICAgICAgICAgICAgZGVib3VuY2UoXHJcbiAgICAgICAgICAgICAgICBhc3luYyAodmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jTWVudU51bVJvd3MgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuc2V0RHluYW1pY1Rvb2x0aXAoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAuc2V0TmFtZSh0KCdFZGl0aW5nIFRvb2xiYXIgcmVmcmVzaCcpXHJcbiAgICAgIClcclxuICAgICAgLnNldERlc2MoXHJcbiAgICAgICAgdChcIkVkaXRpbmcgVG9vbGJhciB3aWxsIG9ubHkgcmVmcmVzaCBhdXRvbWF0aWNhbGx5IGFmdGVyIHlvdSBoYXZlIGVpdGhlciBhZGRlZCBvciBkZWxldGVkIGEgY29tbWFuZCBmcm9tIGl0LiBUbyBzZWUgVUkgY2hhbmdlcyB0byBjTWVudVRvb2xiYXIgKGFib3ZlIHNldHRpbmdzIGNoYW5nZXMpIHVzZSB0aGUgcmVmcmVzaCBidXR0b24uIElmIHlvdSBmb3JnZXQgdG8gcmVmcmVzaCBpbiBzZXR0aW5ncywgbm8gd29ycmllcy4gVGhlcmUgaXMgYWxzbyBhIHJlZnJlc2ggYnV0dG9uIGluIHRoZSBjTWVudVRvb2xiYXIgc3RhdHVzIGJhciBtZW51LlwiKVxyXG4gICAgICApXHJcbiAgICAgIC5hZGRCdXR0b24oKHJlbG9hZEJ1dHRvbikgPT4ge1xyXG4gICAgICAgIHJlbG9hZEJ1dHRvblxyXG4gICAgICAgICAgLnNldEljb24oXCJjTWVudVRvb2xiYXJSZWxvYWRcIilcclxuICAgICAgICAgIC5zZXRDbGFzcyhcImNNZW51VG9vbGJhclNldHRpbmdzQnV0dG9uXCIpXHJcbiAgICAgICAgICAuc2V0Q2xhc3MoXCJjTWVudVRvb2xiYXJTZXR0aW5nc0J1dHRvblJlZnJlc2hcIilcclxuICAgICAgICAgIC5zZXRUb29sdGlwKHQoXCJSZWZyZXNoXCIpKVxyXG4gICAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNNZW51VG9vbGJhci1OZXdDb21tYW5kXCIpKTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCVjY01lbnVUb29sYmFyIHJlZnJlc2hlZGAsIFwiY29sb3I6IFZpb2xldFwiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBsZXQgaXNWaWV3OiB0cnVlO1xyXG4gICBcclxuICAgXHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgLnNldE5hbWUodCgn8J+OqCBTZXQgY3VzdG9tIGJhY2tncm91bmQnKSlcclxuICAgICAgLnNldERlc2ModCgnQ2xpY2sgb24gdGhlIHBpY2tlciB0byBhZGp1c3QgdGhlIGNvbG91cicpKVxyXG4gICAgICAuc2V0Q2xhc3MoJ2N1c3RvbV9iZycpXHJcbiAgICAgIC50aGVuKChzZXR0aW5nKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICB0aGlzLnBpY2tyID0gUGlja3IuY3JlYXRlKFxyXG4gICAgICAgICAgICBnZXRQaWNrclNldHRpbmdzKHtcclxuICAgICAgICAgICAgICBpc1ZpZXcsXHJcbiAgICAgICAgICAgICAgZWw6IHNldHRpbmcuY29udHJvbEVsLmNyZWF0ZURpdih7IGNsczogXCJwaWNrZXJcIiB9KSxcclxuICAgICAgICAgICAgICBjb250YWluZXJFbCxcclxuICAgICAgICAgICAgICBzd2F0Y2hlczogbnVsbCxcclxuICAgICAgICAgICAgICBvcGFjaXR5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRDb2xvcjogdGhpcy5wbHVnaW4uc2V0dGluZ3NbYGN1c3RvbV9iZyR7aSArIDF9YF0gLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgICAub24oXCJzYXZlXCIsIGFzeW5jIChjb2xvcjogUGlja3IuSFNWYUNvbG9yLCBpbnN0YW5jZTogUGlja3IpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIWNvbG9yKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3NbYGN1c3RvbV9iZyR7aSArIDF9YF0gPSBjb2xvci50b0hFWEEoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgIGluc3RhbmNlLmhpZGUoKTtcclxuICAgICAgICAgICAgICBpbnN0YW5jZS5hZGRTd2F0Y2goY29sb3IudG9IRVhBKCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbihcInNob3dcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSAodGhpcy5waWNrci5nZXRSb290KCkgYXMgYW55KS5pbnRlcmFjdGlvbjtcclxuICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiByZXN1bHQuc2VsZWN0KCkpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKFwiY2FuY2VsXCIsIG9uUGlja3JDYW5jZWwpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgXHJcbiAgICAgIH0pXHJcbiAgICBcclxuXHJcblxyXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgIC5zZXROYW1lKHQoJ/CflozvuI8gU2V0IGN1c3RvbSBmb250IGNvbG9yJykpXHJcbiAgICAgIC5zZXREZXNjKHQoJ0NsaWNrIG9uIHRoZSBwaWNrZXIgdG8gYWRqdXN0IHRoZSBjb2xvdXInKSlcclxuICAgICAgLnNldENsYXNzKCdjdXN0b21fZm9udCcpXHJcbiAgICAgIC50aGVuKChzZXR0aW5nKSA9PiB7XHJcbiAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgIHRoaXMucGlja3IgPSBQaWNrci5jcmVhdGUoXHJcbiAgICAgICAgICAgIGdldFBpY2tyU2V0dGluZ3Moe1xyXG4gICAgICAgICAgICAgIGlzVmlldyxcclxuICAgICAgICAgICAgICBlbDogc2V0dGluZy5jb250cm9sRWwuY3JlYXRlRGl2KHsgY2xzOiBcInBpY2tlclwiIH0pLFxyXG4gICAgICAgICAgICAgIGNvbnRhaW5lckVsLFxyXG4gICAgICAgICAgICAgIHN3YXRjaGVzOiBudWxsLFxyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdENvbG9yOiB0aGlzLnBsdWdpbi5zZXR0aW5nc1tgY3VzdG9tX2ZjJHtpICsgMX1gXSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIClcclxuICAgICAgICAgICAgLm9uKFwic2F2ZVwiLCBhc3luYyAoY29sb3I6IFBpY2tyLkhTVmFDb2xvciwgaW5zdGFuY2U6IFBpY2tyKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCFjb2xvcikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzW2BjdXN0b21fZmMke2kgKyAxfWBdID0gY29sb3IudG9IRVhBKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICBpbnN0YW5jZS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgaW5zdGFuY2UuYWRkU3dhdGNoKGNvbG9yLnRvSEVYQSgpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oXCJzaG93XCIsICgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCB7IHJlc3VsdCB9ID0gKHRoaXMucGlja3IuZ2V0Um9vdCgpIGFzIGFueSkuaW50ZXJhY3Rpb247XHJcbiAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcmVzdWx0LnNlbGVjdCgpKVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbihcImNhbmNlbFwiLCBvblBpY2tyQ2FuY2VsKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIH0pXHJcblxyXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgIC5zZXROYW1lKHQoJ0VkaXRpbmcgVG9vbGJhciBjb21tYW5kcycpXHJcbiAgICAgIClcclxuICAgICAgLnNldERlc2MoXHJcbiAgICAgICAgdChcIkFkZCBhIGNvbW1hbmQgb250byBFZGl0aW5nIFRvb2xiYXIgZnJvbSBPYnNpZGlhbidzIGNvbW1hbmRzIGxpYnJhcnkuIFRvIHJlb3JkZXIgdGhlIGNvbW1hbmRzLCBkcmFnIGFuZCBkcm9wIHRoZSBjb21tYW5kIGl0ZW1zLiBUbyBkZWxldGUgdGhlbSwgdXNlIHRoZSBkZWxldGUgYnV0dG9tIHRvIHRoZSByaWdodCBvZiB0aGUgY29tbWFuZCBpdGVtLiBFZGl0aW5nIFRvb2xiYXIgd2lsbCBub3QgYXV0b21hdGljYWx5IHJlZnJlc2ggYWZ0ZXIgcmVvcmRlcmluZyBjb21tYW5kcy4gVXNlIHRoZSByZWZyZXNoIGJ1dHRvbiBhYm92ZS5cIilcclxuICAgICAgKVxyXG4gICAgICAuYWRkQnV0dG9uKChhZGRCdXR0b24pID0+IHtcclxuICAgICAgICBhZGRCdXR0b25cclxuICAgICAgICAgIC5zZXRJY29uKFwiY01lbnVUb29sYmFyQWRkXCIpXHJcbiAgICAgICAgICAuc2V0VG9vbHRpcCh0KFwiQWRkXCIpKVxyXG4gICAgICAgICAgLnNldENsYXNzKFwiY01lbnVUb29sYmFyU2V0dGluZ3NCdXR0b25cIilcclxuICAgICAgICAgIC5zZXRDbGFzcyhcImNNZW51VG9vbGJhclNldHRpbmdzQnV0dG9uQWRkXCIpXHJcbiAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgIG5ldyBDb21tYW5kUGlja2VyKHRoaXMucGx1Z2luKS5vcGVuKCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY01lbnVUb29sYmFyLU5ld0NvbW1hbmRcIikpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgY29uc3QgY01lbnVUb29sYmFyQ29tbWFuZHNDb250YWluZXIgPSBjb250YWluZXJFbC5jcmVhdGVFbChcImRpdlwiLCB7XHJcbiAgICAgIGNsczogXCJjTWVudVRvb2xiYXJTZXR0aW5nc1RhYnNDb250YWluZXJcIixcclxuICAgIH0pO1xyXG4gICAgbGV0IGRyYWdlbGUgPSBcIlwiO1xyXG4gICAgU29ydGFibGUuY3JlYXRlKGNNZW51VG9vbGJhckNvbW1hbmRzQ29udGFpbmVyLCB7XHJcbiAgICAgIGdyb3VwOiBcIml0ZW1cIixcclxuICAgICAgYW5pbWF0aW9uOiA1MDAsXHJcbiAgICAgIGRyYWdnYWJsZTogXCIuc2V0dGluZy1pdGVtXCIsXHJcbiAgICAgIGdob3N0Q2xhc3M6IFwic29ydGFibGUtZ2hvc3RcIixcclxuICAgICAgY2hvc2VuQ2xhc3M6IFwic29ydGFibGUtY2hvc2VuXCIsXHJcbiAgICAgIGRyYWdDbGFzczogXCJzb3J0YWJsZS1kcmFnXCIsXHJcbiAgICAgIGRyYWdvdmVyQnViYmxlOiBmYWxzZSxcclxuICAgICAgZm9yY2VGYWxsYmFjazogdHJ1ZSxcclxuICAgICAgZmFsbGJhY2tPbkJvZHk6IHRydWUsXHJcbiAgICAgIHN3YXBUaHJlc2hvbGQ6IDAuNyxcclxuICAgICAgZmFsbGJhY2tDbGFzczogXCJzb3J0YWJsZS1mYWxsYmFja1wiLFxyXG4gICAgICBlYXNpbmc6IFwiY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDEpXCIsXHJcbiAgICAgIG9uU29ydDogKGNvbW1hbmQpID0+IHtcclxuICAgICAgICBpZiAoY29tbWFuZC5mcm9tLmNsYXNzTmFtZSA9PT0gY29tbWFuZC50by5jbGFzc05hbWUpIHtcclxuICAgICAgICAgIGNvbnN0IGFycmF5UmVzdWx0ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MubWVudUNvbW1hbmRzO1xyXG4gICAgICAgICAgY29uc3QgW3JlbW92ZWRdID0gYXJyYXlSZXN1bHQuc3BsaWNlKGNvbW1hbmQub2xkSW5kZXgsIDEpXHJcbiAgICAgICAgICBhcnJheVJlc3VsdC5zcGxpY2UoY29tbWFuZC5uZXdJbmRleCwgMCwgcmVtb3ZlZCk7XHJcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNNZW51VG9vbGJhci1OZXdDb21tYW5kXCIpKTtcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgICB9LFxyXG4gICAgICBvblN0YXJ0OiBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZHJhZ2VsZSA9IGV2dC5pdGVtLmNsYXNzTmFtZTtcclxuICAgICAgfSxcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubWVudUNvbW1hbmRzLmZvckVhY2goKG5ld0NvbW1hbmQ6IENvbW1hbmQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgY29uc3Qgc2V0dGluZyA9IG5ldyBTZXR0aW5nKGNNZW51VG9vbGJhckNvbW1hbmRzQ29udGFpbmVyKVxyXG5cclxuICAgICAgaWYgKFwiU3VibWVudUNvbW1hbmRzXCIgaW4gbmV3Q29tbWFuZCkge1xyXG5cclxuICAgICAgICBzZXR0aW5nLnNldHRpbmdFbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIG5ld0NvbW1hbmQuaWQpXHJcbiAgICAgICAgc2V0dGluZ1xyXG4gICAgICAgICAgLnNldENsYXNzKFwiY01lbnVUb29sYmFyQ29tbWFuZEl0ZW1cIilcclxuICAgICAgICAgIC5zZXRDbGFzcyhcImNNZW51VG9vbGJhckNvbW1hbmRzdWJJdGVtXCIpXHJcbiAgICAgICAgICAuc2V0TmFtZShuZXdDb21tYW5kLm5hbWUpXHJcbiAgICAgICAgICAuYWRkQnV0dG9uKChhZGRpY29uKSA9PiB7XHJcbiAgICAgICAgICAgIGFkZGljb25cclxuICAgICAgICAgICAgICAuc2V0Q2xhc3MoXCJjTWVudVRvb2xiYXJTZXR0aW5nc0ljb25cIilcclxuICAgICAgICAgICAgICAub25DbGljayhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXcgQ2hvb3NlRnJvbUljb25MaXN0KHRoaXMucGx1Z2luLCBuZXdDb21tYW5kLCBmYWxzZSkub3BlbigpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjaGVja0h0bWwobmV3Q29tbWFuZC5pY29uKSA/IGFkZGljb24uYnV0dG9uRWwuaW5uZXJIVE1MID0gbmV3Q29tbWFuZC5pY29uIDogYWRkaWNvbi5zZXRJY29uKG5ld0NvbW1hbmQuaWNvbilcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuYWRkQnV0dG9uKChkZWxldGVCdXR0b24pID0+IHtcclxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uXHJcbiAgICAgICAgICAgICAgLnNldEljb24oXCJjTWVudVRvb2xiYXJEZWxldGVcIilcclxuICAgICAgICAgICAgICAuc2V0VG9vbHRpcCh0KFwiRGVsZXRlXCIpKVxyXG4gICAgICAgICAgICAgIC5zZXRDbGFzcyhcImNNZW51VG9vbGJhclNldHRpbmdzQnV0dG9uXCIpXHJcbiAgICAgICAgICAgICAgLnNldENsYXNzKFwiY01lbnVUb29sYmFyU2V0dGluZ3NCdXR0b25EZWxldGVcIilcclxuICAgICAgICAgICAgICAub25DbGljayhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tZW51Q29tbWFuZHMucmVtb3ZlKG5ld0NvbW1hbmQpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNNZW51VG9vbGJhci1OZXdDb21tYW5kXCIpKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNDb21tYW5kICcke25ld0NvbW1hbmQubmFtZX0nIHdhcyByZW1vdmVkIGZyb20gY01lbnVUb29sYmFyYCwgXCJjb2xvcjogIzk4OWNhYlwiKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKG5ld0NvbW1hbmQuaWQgPT0gXCJjTWVudVRvb2xiYXItcGx1Z2luOmNoYW5nZS1mb250LWNvbG9yXCIpIHJldHVybjsgIC8v5L+u5pS55a2X5L2T6aKc6Imy5oyH5Luk5Y2V54us5aSE55CGXHJcbiAgICAgICAgaWYgKG5ld0NvbW1hbmQuaWQgPT0gXCJjTWVudVRvb2xiYXItcGx1Z2luOmNoYW5nZS1iYWNrZ3JvdW5kLWNvbG9yXCIpIHJldHVybjsgIC8v5L+u5pS55a2X5L2T6aKc6Imy5oyH5Luk5Y2V54us5aSE55CGXHJcblxyXG4gICAgICAgIGNvbnN0IGNNZW51VG9vbGJhckNvbW1hbmRzQ29udGFpbmVyX3N1YiA9IHNldHRpbmcuc2V0dGluZ0VsLmNyZWF0ZUVsKFwiZGl2XCIsIHtcclxuICAgICAgICAgIGNsczogXCJjTWVudVRvb2xiYXJTZXR0aW5nc1RhYnNDb250YWluZXJfc3ViXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgU29ydGFibGUuY3JlYXRlKGNNZW51VG9vbGJhckNvbW1hbmRzQ29udGFpbmVyX3N1Yiwge1xyXG4gICAgICAgICAgZ3JvdXA6IHtcclxuICAgICAgICAgICAgbmFtZTogXCJpdGVtXCIsXHJcbiAgICAgICAgICAgIHB1bGw6IHRydWUsXHJcbiAgICAgICAgICAgIHB1dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIGlmIChkcmFnZWxlLmluY2x1ZGVzKFwiY01lbnVUb29sYmFyQ29tbWFuZHN1Ykl0ZW1cIikpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkcmFnZ2FibGU6IFwiLnNldHRpbmctaXRlbVwiLFxyXG4gICAgICAgICAgYW5pbWF0aW9uOiAxNTAsXHJcbiAgICAgICAgICBnaG9zdENsYXNzOiBcInNvcnRhYmxlLWdob3N0XCIsXHJcbiAgICAgICAgICBjaG9zZW5DbGFzczogXCJzb3J0YWJsZS1jaG9zZW5cIixcclxuICAgICAgICAgIGRyYWdDbGFzczogXCJzb3J0YWJsZS1kcmFnXCIsXHJcbiAgICAgICAgICBkcmFnb3ZlckJ1YmJsZTogZmFsc2UsXHJcbiAgICAgICAgICBmYWxsYmFja09uQm9keTogdHJ1ZSxcclxuICAgICAgICAgIHN3YXBUaHJlc2hvbGQ6IDAuNyxcclxuICAgICAgICAgIGZvcmNlRmFsbGJhY2s6IHRydWUsXHJcbiAgICAgICAgICBmYWxsYmFja0NsYXNzOiBcInNvcnRhYmxlLWZhbGxiYWNrXCIsXHJcbiAgICAgICAgICBlYXNpbmc6IFwiY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDEpXCIsXHJcbiAgICAgICAgICBvblN0YXJ0OiBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coZXZ0KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBvblNvcnQ6IChjb21tYW5kKSA9PiB7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbW1hbmQuZnJvbS5jbGFzc05hbWUgPT09IGNvbW1hbmQudG8uY2xhc3NOYW1lKSB7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IGFycmF5UmVzdWx0ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MubWVudUNvbW1hbmRzO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHN1YnJlc3VsdCA9IGFycmF5UmVzdWx0W2luZGV4XT8uU3VibWVudUNvbW1hbmRzO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgaWYgKHN1YnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IFtyZW1vdmVkXSA9IHN1YnJlc3VsdC5zcGxpY2UoY29tbWFuZC5vbGRJbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICBzdWJyZXN1bHQuc3BsaWNlKGNvbW1hbmQubmV3SW5kZXgsIDAsIHJlbW92ZWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICBpZiAoY29tbWFuZC50by5jbGFzc05hbWUgPT09IFwiY01lbnVUb29sYmFyU2V0dGluZ3NUYWJzQ29udGFpbmVyXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcnJheVJlc3VsdCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLm1lbnVDb21tYW5kcztcclxuICAgICAgICAgICAgICAgIGxldCBjbWRpbmRleCA9IGdldENvbWFuZGluZGV4KGNvbW1hbmQucGF0aFsxXS5kYXRhc2V0W1wiaWRcIl0sIGFycmF5UmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJyZXN1bHQgPSBhcnJheVJlc3VsdFtjbWRpbmRleF0/LlN1Ym1lbnVDb21tYW5kcztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgW3JlbW92ZWRdID0gc3VicmVzdWx0LnNwbGljZShjb21tYW5kLm9sZEluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIGFycmF5UmVzdWx0LnNwbGljZShjb21tYW5kLm5ld0luZGV4LCAwLCByZW1vdmVkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbW1hbmQuZnJvbS5jbGFzc05hbWUgPT09IFwiY01lbnVUb29sYmFyU2V0dGluZ3NUYWJzQ29udGFpbmVyXCIpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICBjb25zdCBhcnJheVJlc3VsdCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLm1lbnVDb21tYW5kcztcclxuXHJcbiAgICAgICAgICAgICAgICAgIGxldCBjbWRpbmRleCA9IGdldENvbWFuZGluZGV4KGNvbW1hbmQucGF0aFsxXS5kYXRhc2V0W1wiaWRcIl0sIGFycmF5UmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YnJlc3VsdCA9IGFycmF5UmVzdWx0W2NtZGluZGV4XT8uU3VibWVudUNvbW1hbmRzO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBbcmVtb3ZlZF0gPSBhcnJheVJlc3VsdC5zcGxpY2UoY29tbWFuZC5vbGRJbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgIHN1YnJlc3VsdC5zcGxpY2UoY29tbWFuZC5uZXdJbmRleCwgMCwgcmVtb3ZlZCk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNNZW51VG9vbGJhci1OZXdDb21tYW5kXCIpKTtcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICBuZXdDb21tYW5kLlN1Ym1lbnVDb21tYW5kcy5mb3JFYWNoKChzdWJDb21tYW5kOiBDb21tYW5kKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBzdWJzZXR0aW5nID0gbmV3IFNldHRpbmcoY01lbnVUb29sYmFyQ29tbWFuZHNDb250YWluZXJfc3ViKVxyXG5cclxuICAgICAgICAgIHN1YnNldHRpbmdcclxuICAgICAgICAgICAgLnNldENsYXNzKFwiY01lbnVUb29sYmFyQ29tbWFuZEl0ZW1cIilcclxuICAgICAgICAgICAgLmFkZEJ1dHRvbigoYWRkaWNvbikgPT4ge1xyXG4gICAgICAgICAgICAgIGFkZGljb25cclxuICAgICAgICAgICAgICAgIC5zZXRDbGFzcyhcImNNZW51VG9vbGJhclNldHRpbmdzSWNvblwiKVxyXG4gICAgICAgICAgICAgICAgLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBuZXcgQ2hvb3NlRnJvbUljb25MaXN0KHRoaXMucGx1Z2luLCBzdWJDb21tYW5kLCB0cnVlKS5vcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgY2hlY2tIdG1sKHN1YkNvbW1hbmQ/Lmljb24pID8gYWRkaWNvbi5idXR0b25FbC5pbm5lckhUTUwgPSBzdWJDb21tYW5kLmljb24gOiBhZGRpY29uLnNldEljb24oc3ViQ29tbWFuZC5pY29uKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc2V0TmFtZShzdWJDb21tYW5kLm5hbWUpXHJcbiAgICAgICAgICAgIC5hZGRCdXR0b24oKGNoYW5nZW5hbWUpID0+IHtcclxuICAgICAgICAgICAgICBjaGFuZ2VuYW1lXHJcbiAgICAgICAgICAgICAgICAuc2V0SWNvbihcInBlbmNpbFwiKVxyXG4gICAgICAgICAgICAgICAgLnNldFRvb2x0aXAodChcIkNoYW5nZSBDb21tYW5kIG5hbWVcIikpXHJcbiAgICAgICAgICAgICAgICAuc2V0Q2xhc3MoXCJjTWVudVRvb2xiYXJTZXR0aW5nc0J1dHRvblwiKVxyXG4gICAgICAgICAgICAgICAgLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBuZXcgQ2hhbmdlQ21kbmFtZSh0aGlzLmFwcCwgdGhpcy5wbHVnaW4sIHN1YkNvbW1hbmQsIHRydWUpLm9wZW4oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuYWRkQnV0dG9uKChkZWxldGVCdXR0b24pID0+IHtcclxuICAgICAgICAgICAgICBkZWxldGVCdXR0b25cclxuICAgICAgICAgICAgICAgIC5zZXRJY29uKFwiY01lbnVUb29sYmFyRGVsZXRlXCIpXHJcbiAgICAgICAgICAgICAgICAuc2V0VG9vbHRpcCh0KFwiRGVsZXRlXCIpKVxyXG4gICAgICAgICAgICAgICAgLnNldENsYXNzKFwiY01lbnVUb29sYmFyU2V0dGluZ3NCdXR0b25cIilcclxuICAgICAgICAgICAgICAgIC5zZXRDbGFzcyhcImNNZW51VG9vbGJhclNldHRpbmdzQnV0dG9uRGVsZXRlXCIpXHJcbiAgICAgICAgICAgICAgICAub25DbGljayhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIG5ld0NvbW1hbmQuU3VibWVudUNvbW1hbmRzLnJlbW92ZShzdWJDb21tYW5kKTtcclxuICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNNZW51VG9vbGJhci1OZXdDb21tYW5kXCIpKTtcclxuICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjQ29tbWFuZCAnJHtuZXdDb21tYW5kLm5hbWV9JyB3YXMgcmVtb3ZlZCBmcm9tIGNNZW51VG9vbGJhcmAsIFwiY29sb3I6ICM5ODljYWJcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBzdWJzZXR0aW5nLm5hbWVFbDtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXR0aW5nXHJcbiAgICAgICAgICAuYWRkQnV0dG9uKChhZGRpY29uKSA9PiB7XHJcbiAgICAgICAgICAgIGFkZGljb25cclxuICAgICAgICAgICAgICAvLyAgICAuc2V0SWNvbihuZXdDb21tYW5kLmljb24pXHJcbiAgICAgICAgICAgICAgLnNldENsYXNzKFwiY01lbnVUb29sYmFyU2V0dGluZ3NJY29uXCIpXHJcbiAgICAgICAgICAgICAgLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3IENob29zZUZyb21JY29uTGlzdCh0aGlzLnBsdWdpbiwgbmV3Q29tbWFuZCwgZmFsc2UpLm9wZW4oKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2hlY2tIdG1sKG5ld0NvbW1hbmQuaWNvbikgPyBhZGRpY29uLmJ1dHRvbkVsLmlubmVySFRNTCA9IG5ld0NvbW1hbmQuaWNvbiA6IGFkZGljb24uc2V0SWNvbihuZXdDb21tYW5kLmljb24pXHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAobmV3Q29tbWFuZC5pZCA9PSBcImNNZW51VG9vbGJhci1EaXZpZGVyLUxpbmVcIikgc2V0dGluZy5zZXRDbGFzcyhcImNNZW51VG9vbGJhci1EaXZpZGVyLUxpbmVcIilcclxuICAgICAgICBzZXR0aW5nXHJcbiAgICAgICAgICAuc2V0Q2xhc3MoXCJjTWVudVRvb2xiYXJDb21tYW5kSXRlbVwiKVxyXG4gICAgICAgICAgLnNldE5hbWUobmV3Q29tbWFuZC5uYW1lKVxyXG4gICAgICAgICAgLmFkZEJ1dHRvbigoY2hhbmdlbmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBjaGFuZ2VuYW1lXHJcbiAgICAgICAgICAgICAgLnNldEljb24oXCJwZW5jaWxcIilcclxuICAgICAgICAgICAgICAuc2V0VG9vbHRpcCh0KFwiQ2hhbmdlIENvbW1hbmQgbmFtZVwiKSlcclxuICAgICAgICAgICAgICAuc2V0Q2xhc3MoXCJjTWVudVRvb2xiYXJTZXR0aW5nc0J1dHRvblwiKVxyXG4gICAgICAgICAgICAgIC5vbkNsaWNrKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5ldyBDaGFuZ2VDbWRuYW1lKHRoaXMuYXBwLCB0aGlzLnBsdWdpbiwgbmV3Q29tbWFuZCwgZmFsc2UpLm9wZW4oKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuYWRkQnV0dG9uKChhZGRzdWJCdXR0b24pID0+IHtcclxuICAgICAgICAgICAgYWRkc3ViQnV0dG9uXHJcbiAgICAgICAgICAgICAgLnNldEljb24oXCJjTWVudVRvb2xiYXJTdWJcIilcclxuICAgICAgICAgICAgICAuc2V0VG9vbHRpcCh0KFwiQWRkIHN1Ym1lbnVcIikpXHJcbiAgICAgICAgICAgICAgLnNldENsYXNzKFwiY01lbnVUb29sYmFyU2V0dGluZ3NCdXR0b25cIilcclxuICAgICAgICAgICAgICAuc2V0Q2xhc3MoXCJjTWVudVRvb2xiYXJTZXR0aW5nc0J1dHRvbmFkZHN1YlwiKVxyXG4gICAgICAgICAgICAgIC5vbkNsaWNrKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1lbnUgPVxyXG4gICAgICAgICAgICAgICAgICB7IGlkOiBcIlN1Ym1lbnVDb21tYW5kcy1cIiArIEdlbk5vbkR1cGxpY2F0ZUlEKDEpLCBuYW1lOiBcInN1Ym1lbnVcIiwgaWNvbjogXCJyZW1peC1GaWx0ZXIzTGluZVwiLCBTdWJtZW51Q29tbWFuZHM6IFtdIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tZW51Q29tbWFuZHMuc3BsaWNlKGluZGV4ICsgMSwgMCwgc3VibWVudSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY01lbnVUb29sYmFyLU5ld0NvbW1hbmRcIikpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY0NvbW1hbmQgJyR7c3VibWVudS5pZH0nIGFkZCBgLCBcImNvbG9yOiAjOTg5Y2FiXCIpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5hZGRCdXR0b24oKGFkZHN1YkJ1dHRvbikgPT4ge1xyXG4gICAgICAgICAgICBhZGRzdWJCdXR0b25cclxuICAgICAgICAgICAgICAuc2V0SWNvbihcInZlcnRpY2FsLXNwbGl0XCIpXHJcbiAgICAgICAgICAgICAgLnNldFRvb2x0aXAodChcImFkZCBoclwiKSlcclxuICAgICAgICAgICAgICAuc2V0Q2xhc3MoXCJjTWVudVRvb2xiYXJTZXR0aW5nc0J1dHRvblwiKVxyXG4gICAgICAgICAgICAgIC5zZXRDbGFzcyhcImNNZW51VG9vbGJhclNldHRpbmdzQnV0dG9uYWRkc3ViXCIpXHJcbiAgICAgICAgICAgICAgLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGl2aWRlcm1lbnUgPVxyXG4gICAgICAgICAgICAgICAgICB7IGlkOiBcImNNZW51VG9vbGJhci1EaXZpZGVyLUxpbmVcIiwgbmFtZTogXCJIUlwiLCBpY29uOiBcInZlcnRpY2FsLXNwbGl0XCIgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm1lbnVDb21tYW5kcy5zcGxpY2UoaW5kZXggKyAxLCAwLCBkaXZpZGVybWVudSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY01lbnVUb29sYmFyLU5ld0NvbW1hbmRcIikpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmFkZEJ1dHRvbigoZGVsZXRlQnV0dG9uKSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvblxyXG4gICAgICAgICAgICAgIC5zZXRJY29uKFwiY01lbnVUb29sYmFyRGVsZXRlXCIpXHJcbiAgICAgICAgICAgICAgLnNldFRvb2x0aXAodChcIkRlbGV0ZVwiKSlcclxuICAgICAgICAgICAgICAuc2V0Q2xhc3MoXCJjTWVudVRvb2xiYXJTZXR0aW5nc0J1dHRvblwiKVxyXG4gICAgICAgICAgICAgIC5zZXRDbGFzcyhcImNNZW51VG9vbGJhclNldHRpbmdzQnV0dG9uRGVsZXRlXCIpXHJcbiAgICAgICAgICAgICAgLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubWVudUNvbW1hbmRzLnJlbW92ZShuZXdDb21tYW5kKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjTWVudVRvb2xiYXItTmV3Q29tbWFuZFwiKSk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjQ29tbWFuZCAnJHtuZXdDb21tYW5kLm5hbWV9JyB3YXMgcmVtb3ZlZCBmcm9tIGNNZW51VG9vbGJhcmAsIFwiY29sb3I6ICM5ODljYWJcIik7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICB9XHJcbiAgICAgIC8vICAgIHNldHRpbmcubmFtZUVsO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY0RvbmF0aW9uRGl2ID0gY29udGFpbmVyRWwuY3JlYXRlRWwoXCJkaXZcIiwge1xyXG4gICAgICBjbHM6IFwiY0RvbmF0aW9uU2VjdGlvblwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY3JlZGl0ID0gY3JlYXRlRWwoXCJwXCIpO1xyXG4gICAgY29uc3QgZG9uYXRlVGV4dCA9IGNyZWF0ZUVsKFwicFwiKTtcclxuICAgIGRvbmF0ZVRleHQuYXBwZW5kVGV4dChcclxuICAgICAgXCJJZiB5b3UgbGlrZSB0aGlzIFBsdWdpbiBhbmQgYXJlIGNvbnNpZGVyaW5nIGRvbmF0aW5nIHRvIHN1cHBvcnQgY29udGludWVkIGRldmVsb3BtZW50LCB1c2UgdGhlIGJ1dHRvbiBiZWxvdyFcIlxyXG4gICAgKTtcclxuICAgIGNyZWRpdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKVwiKTtcclxuICAgIGNEb25hdGlvbkRpdi5hcHBlbmRDaGlsZChkb25hdGVUZXh0KTtcclxuICAgIGNEb25hdGlvbkRpdi5hcHBlbmRDaGlsZChjcmVkaXQpO1xyXG5cclxuICAgIGNEb25hdGlvbkRpdi5hcHBlbmRDaGlsZChcclxuICAgICAgY3JlYXRlRG9uYXRlQnV0dG9uKFwiaHR0cHM6Ly93d3cuYnV5bWVhY29mZmVlLmNvbS9jdW1hblwiKVxyXG4gICAgKTtcclxuICB9XHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNNZW51VG9vbGJhci1OZXdDb21tYW5kXCIpKTtcclxuICAgIH0sIDEwMCk7XHJcbiAgICB0aGlzLnBpY2tyLmRlc3Ryb3lBbmRSZW1vdmUoKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZURvbmF0ZUJ1dHRvbiA9IChsaW5rOiBzdHJpbmcpOiBIVE1MRWxlbWVudCA9PiB7XHJcbiAgY29uc3QgYSA9IGNyZWF0ZUVsKFwiYVwiKTtcclxuICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgbGluayk7XHJcbiAgYS5hZGRDbGFzcyhcImJ1eW1lYWNvZmZlZS1pbWdcIik7XHJcbiAgYS5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCJodHRwczovL2ltZy5idXltZWFjb2ZmZWUuY29tL2J1dHRvbi1hcGkvP3RleHQ9QnV5IG1lIGEgY29mZmVlICZlbW9qaT0mc2x1Zz1DdW1hbiZidXR0b25fY29sb3VyPUJENUZGRiZmb250X2NvbG91cj1mZmZmZmYmZm9udF9mYW1pbHk9UG9wcGlucyZvdXRsaW5lX2NvbG91cj0wMDAwMDAmY29mZmVlX2NvbG91cj1GRkREMDBcIiAvPmA7XHJcbiAgcmV0dXJuIGE7XHJcbn07XHJcblxyXG5cclxuXHJcbiIsIi8vIGltcG9ydCAqIGFzIHJlbWl4aWNvbnMgZnJvbSBcInJlYWN0LWljb25zL3JpL1wiO1xyXG4vLyAvL2ltcG9ydCAqIGFzIGJveGljb25zIGZyb20gXCJyZWFjdC1pY29ucy9iaS9cIjtcclxuLy8gaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xyXG5pbXBvcnQgeyBhZGRJY29uIH0gZnJvbSBcIm9ic2lkaWFuXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEljb24ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBpY29uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcclxuICBjTWVudVRvb2xiYXI6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjxwYXRoIGQ9XCJNMTkgMTBINWMtMS4xMDMgMC0yIC44OTctMiAydjhjMCAxLjEwMy44OTcgMiAyIDJoMTRjMS4xMDMgMCAyLS44OTcgMi0ydi04YzAtMS4xMDMtLjg5Ny0yLTItMnpNNSAyMHYtOGgxNGwuMDAyIDhINXpNNSA2aDE0djJINXptMi00aDEwdjJIN3pcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjwvc3ZnPmAsXHJcbiAgY01lbnVUb29sYmFyU3ViOmA8c3ZnIHQ9XCIxNjYxNTI2MzQ2NDg4XCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHAtaWQ9XCIxNjg4MFwiICA+PHBhdGggZD1cIk01OTcuMzMzMzMzIDg1LjMzMzMzM2gtMzQxLjMzMzMzM0MxODcuNzMzMzMzIDg1LjMzMzMzMyAxMjggMTQwLjggMTI4IDIxMy4zMzMzMzN2NTk3LjMzMzMzNGMwIDcyLjUzMzMzMyA1OS43MzMzMzMgMTI4IDEyOCAxMjhoNDI2LjY2NjY2N2M3Mi41MzMzMzMgMCAxMjgtNTUuNDY2NjY3IDEyOC0xMjhWMjk4LjY2NjY2N2wtMjEzLjMzMzMzNC0yMTMuMzMzMzM0eiBtMTcwLjY2NjY2NyA3MjUuMzMzMzM0YzAgNDYuOTMzMzMzLTM4LjQgODUuMzMzMzMzLTg1LjMzMzMzMyA4NS4zMzMzMzNIMjU2Yy00Ni45MzMzMzMgMC04NS4zMzMzMzMtMzguNC04NS4zMzMzMzMtODUuMzMzMzMzVjIxMy4zMzMzMzNjMC00Ni45MzMzMzMgMzguNC04NS4zMzMzMzMgODUuMzMzMzMzLTg1LjMzMzMzM2gyOTguNjY2NjY3djIxMy4zMzMzMzNoMjEzLjMzMzMzM3Y0NjkuMzMzMzM0eiBtLTMyMC0yMzQuNjY2NjY3aDEyOGMxMi44IDAgMjEuMzMzMzMzIDguNTMzMzMzIDIxLjMzMzMzMyAyMS4zMzMzMzNzLTguNTMzMzMzIDIxLjMzMzMzMy0yMS4zMzMzMzMgMjEuMzMzMzM0aC0xMjh2MTI4YzAgMTIuOC04LjUzMzMzMyAyMS4zMzMzMzMtMjEuMzMzMzMzIDIxLjMzMzMzM3MtMjEuMzMzMzMzLTguNTMzMzMzLTIxLjMzMzMzNC0yMS4zMzMzMzN2LTEyOGgtMTI4Yy0xMi44IDAtMjEuMzMzMzMzLTguNTMzMzMzLTIxLjMzMzMzMy0yMS4zMzMzMzRzOC41MzMzMzMtMjEuMzMzMzMzIDIxLjMzMzMzMy0yMS4zMzMzMzNoMTI4di0xMjhjMC0xMi44IDguNTMzMzMzLTIxLjMzMzMzMyAyMS4zMzMzMzQtMjEuMzMzMzMzczIxLjMzMzMzMyA4LjUzMzMzMyAyMS4zMzMzMzMgMjEuMzMzMzMzdjEyOHpcIiBmaWxsPVwiIzhhOGE4YVwiIHAtaWQ9XCIxNjg4MVwiPjwvcGF0aD48L3N2Zz5gLFxyXG4gIGNNZW51VG9vbGJhckFkZDogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjBcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48cGF0aCBkPVwiTTEzIDdoLTJ2NEg3djJoNHY0aDJ2LTRoNHYtMmgtNHpcIiBmaWxsPVwid2hpdGVcIi8+PHBhdGggZD1cIk0xMiAyQzYuNDg2IDIgMiA2LjQ4NiAyIDEyczQuNDg2IDEwIDEwIDEwczEwLTQuNDg2IDEwLTEwUzE3LjUxNCAyIDEyIDJ6bTAgMThjLTQuNDExIDAtOC0zLjU4OS04LThzMy41ODktOCA4LThzOCAzLjU4OSA4IDhzLTMuNTg5IDgtOCA4elwiIGZpbGw9XCJ3aGl0ZVwiLz48L3N2Zz5gLFxyXG4gIGNNZW51VG9vbGJhckRlbGV0ZTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjBcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48cGF0aCBkPVwiTTUgMjBhMiAyIDAgMCAwIDIgMmgxMGEyIDIgMCAwIDAgMi0yVjhoMlY2aC00VjRhMiAyIDAgMCAwLTItMkg5YTIgMiAwIDAgMC0yIDJ2MkgzdjJoMnpNOSA0aDZ2Mkg5ek04IDhoOXYxMkg3Vjh6XCIgZmlsbD1cIndoaXRlXCIvPjxwYXRoIGQ9XCJNOSAxMGgydjhIOXptNCAwaDJ2OGgtMnpcIiBmaWxsPVwid2hpdGVcIi8+PC9zdmc+YCxcclxuICBjTWVudVRvb2xiYXJSZWxvYWQ6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIwXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIk0xOSAxMEg1Yy0xLjEwMyAwLTIgLjg5Ny0yIDJ2OGMwIDEuMTAzLjg5NyAyIDIgMmgxNGMxLjEwMyAwIDItLjg5NyAyLTJ2LThjMC0xLjEwMy0uODk3LTItMi0yek01IDIwdi04aDE0bC4wMDIgOEg1ek01IDZoMTR2Mkg1em0yLTRoMTB2Mkg3elwiIGZpbGw9XCJ3aGl0ZVwiLz48L3N2Zz5gLFxyXG4gIFwiY29kZWJsb2NrLWdseXBoXCI6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjAgM0g0Yy0xLjEwMyAwLTIgLjg5Ny0yIDJ2MTRjMCAxLjEwMy44OTcgMiAyIDJoMTZjMS4xMDMgMCAyLS44OTcgMi0yVjVjMC0xLjEwMy0uODk3LTItMi0yek00IDE5VjdoMTZsLjAwMiAxMkg0elwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PHBhdGggZD1cIk05LjI5MyA5LjI5M0w1LjU4NiAxM2wzLjcwNyAzLjcwN2wxLjQxNC0xLjQxNEw4LjQxNCAxM2wyLjI5My0yLjI5M3ptNS40MTQgMGwtMS40MTQgMS40MTRMMTUuNTg2IDEzbC0yLjI5MyAyLjI5M2wxLjQxNCAxLjQxNEwxOC40MTQgMTN6XCIvPjwvc3ZnPmAsXHJcbiAgXCJ1bmRlcmxpbmUtZ2x5cGhcIjogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNODI0IDgwNEgyMDBjLTQuNCAwLTggMy40LTggNy42djYwLjhjMCA0LjIgMy42IDcuNiA4IDcuNmg2MjRjNC40IDAgOC0zLjQgOC03LjZ2LTYwLjhjMC00LjItMy42LTcuNi04LTcuNnptLTMxMi03NmM2OS40IDAgMTM0LjYtMjcuMSAxODMuOC03Ni4yQzc0NSA2MDIuNyA3NzIgNTM3LjQgNzcyIDQ2OFYxNTZjMC02LjYtNS40LTEyLTEyLTEyaC02MGMtNi42IDAtMTIgNS40LTEyIDEydjMxMmMwIDk3LTc5IDE3Ni0xNzYgMTc2cy0xNzYtNzktMTc2LTE3NlYxNTZjMC02LjYtNS40LTEyLTEyLTEyaC02MGMtNi42IDAtMTIgNS40LTEyIDEydjMxMmMwIDY5LjQgMjcuMSAxMzQuNiA3Ni4yIDE4My44QzM3Ny4zIDcwMSA0NDIuNiA3MjggNTEyIDcyOHpcIi8+PC9zdmc+YCxcclxuICBcInN1cGVyc2NyaXB0LWdseXBoXCI6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiZD1cIk0xNiA3LjQxTDExLjQxIDEyTDE2IDE2LjU5TDE0LjU5IDE4TDEwIDEzLjQxTDUuNDEgMThMNCAxNi41OUw4LjU5IDEyTDQgNy40MUw1LjQxIDZMMTAgMTAuNTlMMTQuNTkgNkwxNiA3LjQxTTIxLjg1IDloLTQuODhWOGwuODktLjgyYy43Ni0uNjQgMS4zMi0xLjE4IDEuNy0xLjYzYy4zNy0uNDQuNTYtLjg1LjU3LTEuMjNhLjg4NC44ODQgMCAwIDAtLjI3LS43Yy0uMTgtLjE5LS40Ny0uMjgtLjg2LS4yOWMtLjMxLjAxLS41OC4wNy0uODQuMTdsLS42Ni4zOWwtLjQ1LTEuMTdjLjI3LS4yMi41OS0uMzkuOTgtLjUzUzE4Ljg1IDIgMTkuMzIgMmMuNzggMCAxLjM4LjIgMS43OC42MWMuNC4zOS42Mi45My42MiAxLjU3Yy0uMDEuNTYtLjE5IDEuMDgtLjU0IDEuNTVjLS4zNC40OC0uNzYuOTMtMS4yNyAxLjM2bC0uNjQuNTJ2LjAyaDIuNThWOXpcIi8+PC9zdmc+YCxcclxuICBcInN1YnNjcmlwdC1nbHlwaFwiOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE2IDcuNDFMMTEuNDEgMTJMMTYgMTYuNTlMMTQuNTkgMThMMTAgMTMuNDFMNS40MSAxOEw0IDE2LjU5TDguNTkgMTJMNCA3LjQxTDUuNDEgNkwxMCAxMC41OUwxNC41OSA2TDE2IDcuNDFtNS44NSAxMy42MmgtNC44OHYtMWwuODktLjhjLjc2LS42NSAxLjMyLTEuMTkgMS43LTEuNjNjLjM3LS40NC41Ni0uODUuNTctMS4yNGEuODk4Ljg5OCAwIDAgMC0uMjctLjdjLS4xOC0uMTYtLjQ3LS4yOC0uODYtLjI4Yy0uMzEgMC0uNTguMDYtLjg0LjE4bC0uNjYuMzhsLS40NS0xLjE3Yy4yNy0uMjEuNTktLjM5Ljk4LS41M3MuODItLjI0IDEuMjktLjI0Yy43OC4wNCAxLjM4LjI1IDEuNzguNjZjLjQuNDEuNjIuOTMuNjIgMS41N2MtLjAxLjU2LS4xOSAxLjA4LS41NCAxLjU1Yy0uMzQuNDctLjc2LjkyLTEuMjcgMS4zNmwtLjY0LjUydi4wMmgyLjU4djEuMzV6XCIvPjwvc3ZnPmAsXHJcbiAgXCJib3QtZ2x5cGhcIjogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMS45MjggMTEuNjA3Yy0uMjAyLS40ODgtLjYzNS0uNjA1LS45MjgtLjYzM1Y4YzAtMS4xMDMtLjg5Ny0yLTItMmgtNlY0LjYxYy4zMDUtLjI3NC41LS42NjguNS0xLjExYTEuNSAxLjUgMCAwIDAtMyAwYzAgLjQ0Mi4xOTUuODM2LjUgMS4xMVY2SDVjLTEuMTAzIDAtMiAuODk3LTIgMnYyLjk5N2wtLjA4Mi4wMDZBMSAxIDAgMCAwIDEuOTkgMTJ2MmExIDEgMCAwIDAgMSAxSDN2NWMwIDEuMTAzLjg5NyAyIDIgMmgxNGMxLjEwMyAwIDItLjg5NyAyLTJ2LTVhMSAxIDAgMCAwIDEtMXYtMS45MzhhMS4wMDYgMS4wMDYgMCAwIDAtLjA3Mi0uNDU1ek01IDIwVjhoMTRsLjAwMSAzLjk5NkwxOSAxMnYybC4wMDEuMDA1bC4wMDEgNS45OTVINXpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjxlbGxpcHNlIGN4PVwiOC41XCIgY3k9XCIxMlwiIHJ4PVwiMS41XCIgcnk9XCIyXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48ZWxsaXBzZSBjeD1cIjE1LjVcIiBjeT1cIjEyXCIgcng9XCIxLjVcIiByeT1cIjJcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjxwYXRoIGQ9XCJNOCAxNmg4djJIOHpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjwvc3ZnPmAsXHJcbiAgXCJoZWFkZXItMVwiOmA8c3ZnIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiICBkPVwiTTgzNS42MjY2NjcgMzQ5LjM5NzMzM0E0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAxIDg1My4zMzMzMzMgMzg0djQyNi42NjY2NjdhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMS04NS4zMzMzMzMgMHYtMzY3LjQ4OGwtNzEuODUwNjY3IDIzLjk3ODY2NmE0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAxLTI2Ljk2NTMzMy04MC45ODEzMzNsMTI4LTQyLjY2NjY2N2E0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAxIDM4LjQgNS44ODh6TTEyOCAxNzAuNjY2NjY3YTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAwIDEgNDIuNjY2NjY3IDQyLjY2NjY2NnYyNTZoMjU2VjIxMy4zMzMzMzNhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDEgMSA4NS4zMzMzMzMgMHY1OTcuMzMzMzM0YTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAxIDEtODUuMzMzMzMzIDB2LTI1NkgxNzAuNjY2NjY3djI1NmE0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMSAxLTg1LjMzMzMzNCAwVjIxMy4zMzMzMzNhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMSA0Mi42NjY2NjctNDIuNjY2NjY2elwiIHAtaWQ9XCIxNjM1XCI+PC9wYXRoPjwvc3ZnPmAsXHJcbiAgXCJoZWFkZXItMlwiOmA8c3ZnIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PHBhdGggZD1cIk03NjggNDI2LjY2NjY2N2E4NS4zMzMzMzMgODUuMzMzMzMzIDAgMCAwLTg1LjMzMzMzMyA4NS4zMzMzMzN2MjEuMzMzMzMzYTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAxIDEtODUuMzMzMzM0IDBWNTEyYTE3MC42NjY2NjcgMTcwLjY2NjY2NyAwIDAgMSAxNzAuNjY2NjY3LTE3MC42NjY2NjdoNy4zMzg2NjdhMTYzLjMyOCAxNjMuMzI4IDAgMCAxIDExNS40OTg2NjYgMjc4Ljg2OTMzNEw3NDIuOTk3MzMzIDc2OEg4OTZhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDEgMSAwIDg1LjMzMzMzM2gtMjU2YTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAwIDEtMzAuMTY1MzMzLTcyLjgzMmwyMjAuNjcyLTIyMC42NzJBNzcuOTk0NjY3IDc3Ljk5NDY2NyAwIDAgMCA3NzUuMzM4NjY3IDQyNi42NjY2NjdINzY4ek0xMjggMTcwLjY2NjY2N2E0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAxIDQyLjY2NjY2NyA0Mi42NjY2NjZ2MjU2aDI1NlYyMTMuMzMzMzMzYTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAxIDEgODUuMzMzMzMzIDB2NTk3LjMzMzMzNGE0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMSAxLTg1LjMzMzMzMyAwdi0yNTZIMTcwLjY2NjY2N3YyNTZhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDEgMS04NS4zMzMzMzQgMFYyMTMuMzMzMzMzYTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAwIDEgNDIuNjY2NjY3LTQyLjY2NjY2NnpcIiBwLWlkPVwiMTc5MVwiPjwvcGF0aD48L3N2Zz5gLFxyXG4gIFwiaGVhZGVyLTNcIjpgPHN2ZyBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPjxwYXRoIGQ9XCJNNTk3LjMzMzMzMyAzODRhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMSA0Mi42NjY2NjctNDIuNjY2NjY3aDI1NmE0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAxIDMwLjE2NTMzMyA3Mi44MzJsLTEwNS45NDEzMzMgMTA1Ljk4NEExNzAuNzUyIDE3MC43NTIgMCAwIDEgNzY4IDg1My4zMzMzMzNhMTcwLjY2NjY2NyAxNzAuNjY2NjY3IDAgMCAxLTE2MC45Mzg2NjctMTEzLjg3NzMzMyA0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAxIDgwLjQ2OTMzNC0yOC4zNzMzMzNBODUuMzMzMzMzIDg1LjMzMzMzMyAwIDEgMCA3NjggNTk3LjMzMzMzM2gtNDIuNjY2NjY3YTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAwIDEtMzAuMTY1MzMzLTcyLjgzMkw3OTMuMDAyNjY3IDQyNi42NjY2NjdINjQwYTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAwIDEtNDIuNjY2NjY3LTQyLjY2NjY2N3pNMTI4IDE3MC42NjY2NjdhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMSA0Mi42NjY2NjcgNDIuNjY2NjY2djI1NmgyNTZWMjEzLjMzMzMzM2E0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMSAxIDg1LjMzMzMzMyAwdjU5Ny4zMzMzMzRhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDEgMS04NS4zMzMzMzMgMHYtMjU2SDE3MC42NjY2Njd2MjU2YTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAxIDEtODUuMzMzMzM0IDBWMjEzLjMzMzMzM2E0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAxIDQyLjY2NjY2Ny00Mi42NjY2NjZ6XCIgcC1pZD1cIjE5NDlcIj48L3BhdGg+PC9zdmc+YCxcclxuICBcImhlYWRlci00XCI6YDxzdmcgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj48cGF0aCBkPVwiTTc4MC43MTQ2NjcgMzQzLjI5NmE0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAxIDI4LjAzMiA1My40MTg2NjdMNzE5LjM2IDY4Mi42NjY2NjdIODk2YTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAxIDEgMCA4NS4zMzMzMzNoLTIzNC42NjY2NjdhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMS00MC43MDQtNTUuMzgxMzMzbDEwNi42NjY2NjctMzQxLjMzMzMzNGE0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAxIDUzLjQxODY2Ny0yNy45ODkzMzN6XCIgcC1pZD1cIjIxMDdcIj48L3BhdGg+PHBhdGggZD1cIk04NTMuMzMzMzMzIDU1NC42NjY2NjdhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMSA0Mi42NjY2NjcgNDIuNjY2NjY2djIxMy4zMzMzMzRhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDEgMS04NS4zMzMzMzMgMHYtMjEzLjMzMzMzNGE0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAxIDQyLjY2NjY2Ni00Mi42NjY2NjZ6TTEyOCAxNzAuNjY2NjY3YTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAwIDEgNDIuNjY2NjY3IDQyLjY2NjY2NnYyNTZoMjU2VjIxMy4zMzMzMzNhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDEgMSA4NS4zMzMzMzMgMHY1OTcuMzMzMzM0YTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAxIDEtODUuMzMzMzMzIDB2LTI1NkgxNzAuNjY2NjY3djI1NmE0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMSAxLTg1LjMzMzMzNCAwVjIxMy4zMzMzMzNhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMSA0Mi42NjY2NjctNDIuNjY2NjY2elwiIHAtaWQ9XCIyMTA4XCI+PC9wYXRoPjwvc3ZnPmAsXHJcbiAgXCJoZWFkZXItNVwiOmBcclxuICA8c3ZnIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PHBhdGggZD1cIk02ODMuOTQ2NjY3IDM3My42NzQ2NjdBNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMSA3MjUuMzMzMzMzIDM0MS4zMzMzMzNoMTcwLjY2NjY2N2E0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMSAxIDAgODUuMzMzMzM0aC0xMzcuMzAxMzMzbC0yMi4wMTYgODguMjM0NjY2QTE3MC42NjY2NjcgMTcwLjY2NjY2NyAwIDEgMSA2NDAgNzk1LjU2MjY2N2E0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMSAxIDY0LTU2LjQ0OCA4NS4zMzMzMzMgODUuMzMzMzMzIDAgMSAwIDAtMTEyLjg5NiA0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAxLTczLjM4NjY2Ny0zOC41MjhsNTMuMzMzMzM0LTIxNC4wMTZ6TTEyOCAxNzAuNjY2NjY3YTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAwIDEgNDIuNjY2NjY3IDQyLjY2NjY2NnYyNTZoMjU2VjIxMy4zMzMzMzNhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDEgMSA4NS4zMzMzMzMgMHY1OTcuMzMzMzM0YTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAxIDEtODUuMzMzMzMzIDB2LTI1NkgxNzAuNjY2NjY3djI1NmE0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMSAxLTg1LjMzMzMzNCAwVjIxMy4zMzMzMzNhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMSA0Mi42NjY2NjctNDIuNjY2NjY2elwiIHAtaWQ9XCIyMjY0XCI+PC9wYXRoPjwvc3ZnPmAsXHJcbiAgXCJoZWFkZXItNlwiOmA8c3ZnIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PHBhdGggZD1cIk04MzEuMjc0NjY3IDMwMy45NTczMzNhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMSAxNi43MjUzMzMgNTcuOTg0bC04My40OTg2NjcgMTUxLjQ2NjY2N2ExNzAuNDUzMzMzIDE3MC40NTMzMzMgMCAwIDEgODguNzQ2NjY3IDIyLjc0MTMzMyAxNjkuNTU3MzMzIDE2OS41NTczMzMgMCAwIDEgNjIuNTA2NjY3IDIzMi4yNzczMzQgMTcxLjA5MzMzMyAxNzEuMDkzMzMzIDAgMCAxLTIzMi45NiA2Mi4xNjUzMzMgMTY5LjU1NzMzMyAxNjkuNTU3MzMzIDAgMCAxLTYyLjgwNTMzNC0yMzEuODUwNjY3bDE1My4zMDEzMzQtMjc4LjAxNmE0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAxIDU3Ljk4NC0xNi43Njh6IG0tMjAuNDggMzA2LjE3NmE4NS43NiA4NS43NiAwIDAgMC0xMTYuNzM2IDMxLjAxODY2NyA4NC4yMjQgODQuMjI0IDAgMCAwIDMxLjE4OTMzMyAxMTUuNDU2IDg1Ljc2IDg1Ljc2IDAgMCAwIDExNi43MzYtMzEuMDE4NjY3IDg0LjIyNCA4NC4yMjQgMCAwIDAtMzEuMjMyLTExNS40NTZ6TTEyOCAxNzAuNjY2NjY3YTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAwIDEgNDIuNjY2NjY3IDQyLjY2NjY2NnYyNTZoMjU2VjIxMy4zMzMzMzNhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDEgMSA4NS4zMzMzMzMgMHY1OTcuMzMzMzM0YTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAxIDEtODUuMzMzMzMzIDB2LTI1NkgxNzAuNjY2NjY3djI1NmE0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMSAxLTg1LjMzMzMzNCAwVjIxMy4zMzMzMzNhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMSA0Mi42NjY2NjctNDIuNjY2NjY2elwiIHAtaWQ9XCIyNDIyXCI+PC9wYXRoPjwvc3ZnPmAsXHJcbiAgXCJoZWFkZXItblwiOmA8c3ZnICB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgPjxwYXRoIGQ9XCJNMiAzYTEgMSAwIDAgMC0xIDF2MTZhMSAxIDAgMSAwIDIgMHYtN2g5djdhMSAxIDAgMSAwIDIgMFY0YTEgMSAwIDEgMC0yIDB2N0gzVjRhMSAxIDAgMCAwLTEtMVptMTQgOWExIDEgMCAwIDEgMS45ODQtLjE3NyA0LjA5OSA0LjA5OSAwIDAgMSAxLjc1Ny0uNTc2IDMuNDQ3IDMuNDQ3IDAgMCAxIDMuNzU5IDMuNDMyVjIwYTEgMSAwIDEgMS0yIDB2LTUuMzJjMC0uODUxLS43My0xLjUxOS0xLjU3OC0xLjQ0MkEyLjExNCAyLjExNCAwIDAgMCAxOCAxNS4zNDRWMjBhMSAxIDAgMSAxLTIgMHYtOFpcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PC9wYXRoPjwvc3ZnPmAsXHJcbiAgXCJvYnNpZGlhblwiOmA8c3ZnIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiNFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwibG9nby13aXJlZnJhbWVcIj48cGF0aCBkPVwiTSAzMC45MSAxNy41MiBMIDM0LjQzIDM1LjcgTSA2MS40NCAxNC40MSBMIDYyLjYxIDAgTSAzNC40MyAzNS43IEwgMzcuNTcgOTAuNDcgTSA4MSAyNi4zOSBMIDYxLjQ0IDE0LjQxIEwgMzQuNDMgMzUuNyBMIDY1LjM1IDEwMCBNIDYyLjYxIDAgTCAzMC45MSAxNy41MiBMIDE4IDQ1LjQ1IEwgMzcuNTcgOTAuNDcgTCA2NS4zNSAxMDAgTCA3MC40NCA4OS44IEwgODEgMjYuMzkgTCA2Mi42MSAwIFpcIj48L3BhdGg+PC9zdmc+YCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEljb25zKCkge1xyXG4gIE9iamVjdC5rZXlzKGljb25zKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgIGFkZEljb24oa2V5LCBpY29uc1trZXldKTtcclxuICB9KTtcclxufVxyXG5cclxuXHJcbi8qIGV4cG9ydCBmdW5jdGlvbiBhZGRSZW1peEljb25zKGFwcEljb25zOiBzdHJpbmdbXSkge1xyXG4gIGNvbnN0IGljb25LZXlzOiBJY29uW10gPSBbXTtcclxuICBmb3IgKGNvbnN0IGljb24gaW4gcmVtaXhpY29ucykge1xyXG4gICAgaWNvbktleXMucHVzaCh7XHJcbiAgICAgIGlkOiBpY29uLFxyXG4gICAgICBuYW1lOiBpY29uLnN1YnN0cmluZygyKSxcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc3ZnID0gcmVuZGVyVG9TdHJpbmcoXHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgcmVtaXhpY29uc1tpY29uXSh7XHJcbiAgICAgICAgc2l6ZTogXCIxMDBcIixcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgICBhZGRJY29uKFwicmVtaXgtXCIgKyBpY29uLnN1YnN0cmluZygyKSwgc3ZnKTtcclxuICAgIGFwcEljb25zLnB1c2goXCJyZW1peC1cIiArIGljb24uc3Vic3RyaW5nKDIpKTtcclxuICB9XHJcbn0gKi9cclxuXHJcbi8qIGV4cG9ydCBmdW5jdGlvbiBhZGRCb3hJY29ucyhhcHBJY29uczogc3RyaW5nW10pIHtcclxuICBjb25zdCBpY29uS2V5czogSWNvbltdID0gW107XHJcbiAgZm9yIChjb25zdCBpY29uIGluIGJveGljb25zKSB7XHJcbiAgICBpY29uS2V5cy5wdXNoKHtcclxuICAgICAgaWQ6IGljb24sXHJcbiAgICAgIG5hbWU6IGljb24uc3Vic3RyaW5nKDIpLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzdmcgPSByZW5kZXJUb1N0cmluZyhcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICBib3hpY29uc1tpY29uXSh7XHJcbiAgICAgICAgc2l6ZTogXCIxMDBcIixcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgICBhZGRJY29uKFwiYngtXCIgKyBpY29uLnN1YnN0cmluZygyKSwgc3ZnKTtcclxuICAgIGFwcEljb25zLnB1c2goXCJieC1cIiArIGljb24uc3Vic3RyaW5nKDIpKTtcclxuICB9XHJcbn1cclxuICovXHJcbiIsImltcG9ydCB7IEFwcCxNYXJrZG93blZpZXcscmVxdWlyZUFwaVZlcnNpb24gfSBmcm9tIFwib2JzaWRpYW5cIjtcclxubGV0IGFjdGl2ZURvY3VtZW50OiBEb2N1bWVudDtcclxuZXhwb3J0IGZ1bmN0aW9uIHdvcmtwbGFjZWZ1bGxzY3JlZW5Nb2RlKGFwcDogQXBwKVxyXG57XHJcbiAgICByZXF1aXJlQXBpVmVyc2lvbihcIjAuMTUuMFwiKT9hY3RpdmVEb2N1bWVudD1hY3RpdmVXaW5kb3cuZG9jdW1lbnQ6YWN0aXZlRG9jdW1lbnQ9d2luZG93LmRvY3VtZW50O1xyXG4gbGV0IHJpZ2h0bGVhZj0gYWN0aXZlRG9jdW1lbnQuYm9keT8ucXVlcnlTZWxlY3RvcihcIiAubW9kLXJpZ2h0LXNwbGl0LmlzLWNvbGxhcHNlZFwiKTsgICAgICBcclxuIGxldCBsZWZ0bGVhZj0gYWN0aXZlRG9jdW1lbnQuYm9keT8ucXVlcnlTZWxlY3RvcihcIiAubW9kLWxlZnQtc3BsaXQuaXMtY29sbGFwc2VkXCIpOyAgICBcclxuIGlmKHJpZ2h0bGVhZiYmIWxlZnRsZWFmKSAgIC8vQHRzLWlnbm9yZSBcclxuIGFwcC5jb21tYW5kcy5leGVjdXRlQ29tbWFuZEJ5SWQoXCJhcHA6dG9nZ2xlLWxlZnQtc2lkZWJhclwiKTsgIFxyXG4gaWYoIXJpZ2h0bGVhZiYmbGVmdGxlYWYpICAgLy9AdHMtaWdub3JlIFxyXG4gYXBwLmNvbW1hbmRzLmV4ZWN1dGVDb21tYW5kQnlJZChcImFwcDp0b2dnbGUtcmlnaHQtc2lkZWJhclwiKTsgIFxyXG4gaWYoIXJpZ2h0bGVhZiYmIWxlZnRsZWFmfHxyaWdodGxlYWYmJmxlZnRsZWFmKSB7XHJcblxyXG4gLy9AdHMtaWdub3JlXHJcbiAgYXBwLmNvbW1hbmRzLmV4ZWN1dGVDb21tYW5kQnlJZChcImFwcDp0b2dnbGUtbGVmdC1zaWRlYmFyXCIpO1xyXG4gICAvL0B0cy1pZ25vcmVcclxuIGFwcC5jb21tYW5kcy5leGVjdXRlQ29tbWFuZEJ5SWQoXCJhcHA6dG9nZ2xlLXJpZ2h0LXNpZGViYXJcIil9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbi8vZnVsbCBzY3JlZW4gbW9kZVxyXG5leHBvcnQgZnVuY3Rpb24gZnVsbHNjcmVlbk1vZGUoYXBwOiBBcHApIHtcclxuICBjb25zdCBsZWFmID0gYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldylcclxuICAgICAgICBpZiAoIWxlYWYpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgZWwgPSBsZWFmLmNvbnRhaW5lckVsIDtcclxuICAgICAgICBsZXQgbW9kcm9vdD0gZG9jdW1lbnQuYm9keT8ucXVlcnlTZWxlY3RvcihcIi5tb2QtdmVydGljYWwubW9kLXJvb3RcIikgYXMgSFRNTEVsZW1lbnRcclxuICAgICAgICBsZXQgZnVsbHNjcmVlbk11dGF0aW9uT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XHJcbiAgICAgICAgZnVsbHNjcmVlbk11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25SZWNvcmRzKSB7XHJcbiAgICAgICAgICBtdXRhdGlvblJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb25SZWNvcmQpIHtcclxuICAgICAgICAgICAgICBtdXRhdGlvblJlY29yZC5hZGRlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmKGlzRnVsbChtb2Ryb290KSl7XHJcbiAgICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgIH1jYXRjaCAoZXJyb3IpIFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgXHJcbiAgICAgIH0pO1xyXG4gICAgICBtb2Ryb290LmFkZEV2ZW50TGlzdGVuZXIoXCJmdWxsc2NyZWVuY2hhbmdlXCIsIGZ1bmN0aW9uIChldmVudDogYW55KSB7XHJcbiAgICAgICAgaWYgKCFpc0Z1bGwobW9kcm9vdCkpIHtcclxuICAgICAgICAgICAgZnVsbHNjcmVlbk11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICB9KTtcclxuICAgICBpZihpc0Z1bGwobW9kcm9vdCkpXHJcbiAgICAge1xyXG4gICAgICBmdWxsc2NyZWVuTXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiBcclxuICAgICBleGl0RnVsbCgpXHJcbiBcclxuICAgICB9ZWxzZVxyXG4gICAgIHtcclxuICAgIFxyXG4gICAgYmVGdWxsKG1vZHJvb3QpXHJcbiAgZnVsbHNjcmVlbk11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTtcclxuXHJcbiB9XHJcbn1cclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy50b2dnbGVGdWxsID0gZXhwb3J0cy5pc0Z1bGwgPSBleHBvcnRzLmV4aXRGdWxsID0gZXhwb3J0cy5iZUZ1bGwgPSB2b2lkIDA7XHJcbmxldCBET0NfRUwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbmxldCBoZWFkRWwgPSBET0NfRUwucXVlcnlTZWxlY3RvcignaGVhZCcpO1xyXG5sZXQgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbmxldCBUWVBFX1JFUVVFU1RfRlVMTF9TQ1JFRU4gPSAncmVxdWVzdEZ1bGxzY3JlZW4nO1xyXG5sZXQgVFlQRV9FWElUX0ZVTExfU0NSRUVOID0gJ2V4aXRGdWxsc2NyZWVuJztcclxubGV0IFRZUEVfRlVMTF9TQ1JFRU5fRUxFTUVOVCA9ICdmdWxsc2NyZWVuRWxlbWVudCc7XHJcbmxldCBUWVBFX09OX0ZVTExfU0NSRUVOX0NIQU5HRSA9ICdvbmZ1bGxzY3JlZW5jaGFuZ2UnO1xyXG5pZiAoXCJ3ZWJraXRSZXF1ZXN0RnVsbFNjcmVlblwiIGluIERPQ19FTCkge1xyXG4gICAgVFlQRV9SRVFVRVNUX0ZVTExfU0NSRUVOID0gJ3dlYmtpdFJlcXVlc3RGdWxsU2NyZWVuJztcclxuICAgIFRZUEVfRVhJVF9GVUxMX1NDUkVFTiA9ICd3ZWJraXRFeGl0RnVsbHNjcmVlbic7XHJcbiAgICBUWVBFX0ZVTExfU0NSRUVOX0VMRU1FTlQgPSAnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnO1xyXG4gICAgVFlQRV9PTl9GVUxMX1NDUkVFTl9DSEFOR0UgPSAnb253ZWJraXRmdWxsc2NyZWVuY2hhbmdlJztcclxufVxyXG5lbHNlIGlmIChcIm1zUmVxdWVzdEZ1bGxzY3JlZW5cIiBpbiBET0NfRUwpIHtcclxuICAgIFRZUEVfUkVRVUVTVF9GVUxMX1NDUkVFTiA9ICdtc1JlcXVlc3RGdWxsc2NyZWVuJztcclxuICAgIFRZUEVfRVhJVF9GVUxMX1NDUkVFTiA9ICdtc0V4aXRGdWxsc2NyZWVuJztcclxuICAgIFRZUEVfRlVMTF9TQ1JFRU5fRUxFTUVOVCA9ICdtc0Z1bGxzY3JlZW5FbGVtZW50JztcclxuICAgIFRZUEVfT05fRlVMTF9TQ1JFRU5fQ0hBTkdFID0gJ01TRnVsbHNjcmVlbkNoYW5nZSc7XHJcbn1cclxuZWxzZSBpZiAoXCJtb3pSZXF1ZXN0RnVsbFNjcmVlblwiIGluIERPQ19FTCkge1xyXG4gICAgVFlQRV9SRVFVRVNUX0ZVTExfU0NSRUVOID0gJ21velJlcXVlc3RGdWxsU2NyZWVuJztcclxuICAgIFRZUEVfRVhJVF9GVUxMX1NDUkVFTiA9ICdtb3pDYW5jZWxGdWxsU2NyZWVuJztcclxuICAgIFRZUEVfRlVMTF9TQ1JFRU5fRUxFTUVOVCA9ICdtb3pGdWxsU2NyZWVuRWxlbWVudCc7XHJcbiAgICBUWVBFX09OX0ZVTExfU0NSRUVOX0NIQU5HRSA9ICdvbm1vemZ1bGxzY3JlZW5jaGFuZ2UnO1xyXG59XHJcbmVsc2UgaWYgKCEoXCJyZXF1ZXN0RnVsbHNjcmVlblwiIGluIERPQ19FTCkpIHtcclxuICAgIHRocm93IFwiXFx1NUY1M1xcdTUyNERcXHU2RDRGXFx1ODlDOFxcdTU2NjhcXHU0RTBEXFx1NjUyRlxcdTYzMDFGdWxsc2NyZWVuIEFQSSAhXCI7XHJcbn1cclxuZnVuY3Rpb24gZ2V0Q3VycmVudEVsZW1lbnQoZWw6IEhUTUxFbGVtZW50KSB7XHJcbiAgICByZXR1cm4gZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGVsIDogRE9DX0VMO1xyXG59XHJcbmZ1bmN0aW9uIGJlRnVsbChlbDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICByZXR1cm4gZ2V0Q3VycmVudEVsZW1lbnQoZWwpW1RZUEVfUkVRVUVTVF9GVUxMX1NDUkVFTl0oKTtcclxufVxyXG5leHBvcnRzLmJlRnVsbCA9IGJlRnVsbDtcclxuZnVuY3Rpb24gZXhpdEZ1bGwoKSB7XHJcbiAgICBpZiAoRE9DX0VMLmNvbnRhaW5zKHN0eWxlRWwpKSB7XHJcbiAgICAgICAgaGVhZEVsID09PSBudWxsIHx8IGhlYWRFbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVhZEVsLnJlbW92ZUNoaWxkKHN0eWxlRWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRvY3VtZW50W1RZUEVfRVhJVF9GVUxMX1NDUkVFTl0oKTtcclxufVxyXG5leHBvcnRzLmV4aXRGdWxsID0gZXhpdEZ1bGw7XHJcbmZ1bmN0aW9uIGlzRnVsbChlbDogYW55KSB7XHJcbiAgICByZXR1cm4gZ2V0Q3VycmVudEVsZW1lbnQoZWwpID09PSBkb2N1bWVudFtUWVBFX0ZVTExfU0NSRUVOX0VMRU1FTlRdO1xyXG59XHJcbmV4cG9ydHMuaXNGdWxsID0gaXNGdWxsO1xyXG5mdW5jdGlvbiB0b2dnbGVGdWxsKGVsOiBhbnkpIHtcclxuICAgIGlmIChpc0Z1bGwoZWwpKSB7XHJcbiAgICAgICAgZXhpdEZ1bGwoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBiZUZ1bGwoZWwpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMudG9nZ2xlRnVsbCA9IHRvZ2dsZUZ1bGw7XHJcblxyXG5cclxuIiwiaW1wb3J0IHtcclxuICBNZW51LFxyXG4gIFBsdWdpbixcclxuICBOb3RpY2UsXHJcbiAgQ29tbWFuZCxcclxuICBzZXRJY29uLFxyXG4gIGRlYm91bmNlLFxyXG4gIEVkaXRvcixcclxuICBNYXJrZG93blZpZXcsXHJcbiAgSXRlbVZpZXcsXHJcbiAgU2xpZGVyQ29tcG9uZW50LFxyXG4gIFRvZ2dsZUNvbXBvbmVudCxcclxuICBCdXR0b25Db21wb25lbnQsXHJcbiAgcmVxdWlyZUFwaVZlcnNpb24sXHRcclxuICBBcHAsXHJcbn0gZnJvbSBcIm9ic2lkaWFuXCI7XHJcbmltcG9ydCB7IHdhaXQgfSBmcm9tIFwic3JjL3V0aWwvdXRpbFwiO1xyXG5pbXBvcnQgeyBhcHBJY29ucyB9IGZyb20gXCJzcmMvaWNvbnMvYXBwSWNvbnNcIjtcclxuaW1wb3J0IHsgQ29tbWFuZFBpY2tlciwgb3BlblNsaWRlciB9IGZyb20gXCJzcmMvbW9kYWxzL3N1Z2dlc3Rlck1vZGFsc1wiO1xyXG5pbXBvcnQgeyBjTWVudVRvb2xiYXJTZXR0aW5nVGFiIH0gZnJvbSBcInNyYy9zZXR0aW5ncy9zZXR0aW5nc1RhYlwiO1xyXG5pbXBvcnQgeyBzZWxmRGVzdHJ1Y3QsIGNNZW51VG9vbGJhclBvcG92ZXIsIGdldE1vZGVzdGF0ZSwgcXVpdGVGb3JtYXRicnVzaGVzLCBzZXRGb250Y29sb3IsIHNldEJhY2tncm91bmRjb2xvciwgc2V0SGVhZGVyLCBjcmVhdGVGb2xsb3dpbmdiYXIsIHNldEZvcm1hdGVyYXNlciwgaXNFeGlzdG9vbGJhciwgcmVzZXRUb29sYmFyIH0gZnJvbSBcInNyYy9tb2RhbHMvY01lbnVUb29sYmFyTW9kYWxcIjtcclxuaW1wb3J0IHsgY01lbnVUb29sYmFyU2V0dGluZ3MsIERFRkFVTFRfU0VUVElOR1MgfSBmcm9tIFwic3JjL3NldHRpbmdzL3NldHRpbmdzRGF0YVwiO1xyXG5pbXBvcnQgYWRkSWNvbnMsIHtcclxuICAvLyBhZGRGZWF0aGVySWNvbnMsXHJcbiAvLyBhZGRSZW1peEljb25zXHJcbiAgLy8gYWRkQm94SWNvbnNcclxufSBmcm9tIFwic3JjL2ljb25zL2N1c3RvbUljb25zXCI7XHJcblxyXG5pbXBvcnQgeyBzZXRNZW51VmlzaWJpbGl0eSwgc2V0Qm90dG9tVmFsdWUgfSBmcm9tIFwic3JjL3V0aWwvc3RhdHVzQmFyQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGZ1bGxzY3JlZW5Nb2RlLCB3b3JrcGxhY2VmdWxsc2NyZWVuTW9kZSB9IGZyb20gXCJzcmMvdXRpbC9mdWxsc2NyZWVuXCI7XHJcbmltcG9ydCB7IHQgfSBmcm9tIFwic3JjL3RyYW5zbGF0aW9ucy9oZWxwZXJcIjtcclxuXHJcblxyXG5cclxuXHJcbmxldCBhY3RpdmVEb2N1bWVudDogRG9jdW1lbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjTWVudVRvb2xiYXJQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xyXG4gIGFwcDogQXBwO1xyXG4gIHNldHRpbmdzOiBjTWVudVRvb2xiYXJTZXR0aW5ncztcclxuICBzdGF0dXNCYXJJY29uOiBIVE1MRWxlbWVudDtcclxuICBjTWVudVRvb2xiYXI6IEhUTUxFbGVtZW50O1xyXG4gIG1vZENvbW1hbmRzOiBDb21tYW5kW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcImVkaXRvcjppbnNlcnQtZW1iZWRcIixcclxuICAgICAgbmFtZTogXCJBZGQgZW1iZWRcIixcclxuICAgICAgaWNvbjogXCJub3RlLWdseXBoXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCJlZGl0b3I6aW5zZXJ0LWxpbmtcIixcclxuICAgICAgbmFtZTogXCJJbnNlcnQgbWFya2Rvd24gbGlua1wiLFxyXG4gICAgICBpY29uOiBcImxpbmstZ2x5cGhcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcImVkaXRvcjppbnNlcnQtdGFnXCIsXHJcbiAgICAgIG5hbWU6IFwiQWRkIHRhZ1wiLFxyXG4gICAgICBpY29uOiBcInByaWNlLXRhZy1nbHlwaFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiZWRpdG9yOmluc2VydC13aWtpbGlua1wiLFxyXG4gICAgICBuYW1lOiBcIkFkZCBpbnRlcm5hbCBsaW5rXCIsXHJcbiAgICAgIGljb246IFwiYnJhY2tldC1nbHlwaFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiZWRpdG9yOnRvZ2dsZS1ib2xkXCIsXHJcbiAgICAgIG5hbWU6IFwiVG9nZ2xlIGJvbGRcIixcclxuICAgICAgaWNvbjogXCJib2xkLWdseXBoXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCJlZGl0b3I6dG9nZ2xlLWl0YWxpY3NcIixcclxuICAgICAgbmFtZTogXCJUb2dnbGUgaXRhbGljc1wiLFxyXG4gICAgICBpY29uOiBcIml0YWxpYy1nbHlwaFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiZWRpdG9yOnRvZ2dsZS1zdHJpa2V0aHJvdWdoXCIsXHJcbiAgICAgIG5hbWU6IFwiVG9nZ2xlIHN0cmlrZXRocm91Z2hcIixcclxuICAgICAgaWNvbjogXCJzdHJpa2V0aHJvdWdoLWdseXBoXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCJlZGl0b3I6dG9nZ2xlLWNvZGVcIixcclxuICAgICAgbmFtZTogXCJUb2dnbGUgY29kZVwiLFxyXG4gICAgICBpY29uOiBcImNvZGUtZ2x5cGhcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcImVkaXRvcjp0b2dnbGUtYmxvY2txdW90ZVwiLFxyXG4gICAgICBuYW1lOiBcIlRvZ2dsZSBibG9ja3F1b3RlXCIsXHJcbiAgICAgIGljb246IFwicXVvdGUtZ2x5cGhcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcImVkaXRvcjp0b2dnbGUtYnVsbGV0LWxpc3RcIixcclxuICAgICAgbmFtZTogXCJUb2dnbGUgYnVsbGV0XCIsXHJcbiAgICAgIGljb246IFwiYnVsbGV0LWxpc3QtZ2x5cGhcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcImVkaXRvcjp0b2dnbGUtY2hlY2tsaXN0LXN0YXR1c1wiLFxyXG4gICAgICBuYW1lOiBcIlRvZ2dsZSBjaGVja2xpc3Qgc3RhdHVzXCIsXHJcbiAgICAgIGljb246IFwiY2hlY2tib3gtZ2x5cGhcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcImVkaXRvcjp0b2dnbGUtY29tbWVudHNcIixcclxuICAgICAgbmFtZTogXCJUb2dnbGUgY29tbWVudFwiLFxyXG4gICAgICBpY29uOiBcInBlcmNlbnQtc2lnbi1nbHlwaFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiZWRpdG9yOnRvZ2dsZS1oaWdobGlnaHRcIixcclxuICAgICAgbmFtZTogXCJUb2dnbGUgaGlnaGxpZ2h0XCIsXHJcbiAgICAgIGljb246IFwiaGlnaGxpZ2h0LWdseXBoXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCJlZGl0b3I6dG9nZ2xlLW51bWJlcmVkLWxpc3RcIixcclxuICAgICAgbmFtZTogXCJUb2dnbGUgbnVtYmVyZWQgbGlzdFwiLFxyXG4gICAgICBpY29uOiBcIm51bWJlci1saXN0LWdseXBoXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIElTX01PUkVfQnV0dG9uOiBib29sZWFuO1xyXG4gIEVOX0JHX0Zvcm1hdF9CcnVzaDogYm9vbGVhbjtcclxuICBFTl9Gb250Q29sb3JfRm9ybWF0X0JydXNoOiBib29sZWFuO1xyXG4gIEVOX1RleHRfRm9ybWF0X0JydXNoOiBib29sZWFuO1xyXG4gIFRlbXBfTm90aWNlOiBOb3RpY2U7XHJcbiAgTGVhZl9XaWR0aDogbnVtYmVyO1xyXG5cclxuICBhc3luYyBvbmxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNNZW51VG9vbGJhciB2XCIgKyB0aGlzLm1hbmlmZXN0LnZlcnNpb24gKyBcIiBsb2FkZWRcIik7XHJcbiAgICByZXF1aXJlQXBpVmVyc2lvbihcIjAuMTUuMFwiKSA/IGFjdGl2ZURvY3VtZW50ID0gYWN0aXZlV2luZG93LmRvY3VtZW50IDogYWN0aXZlRG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xyXG4gICAgYWRkSWNvbnMoKTtcclxuICAgIC8vIGFkZFJlbWl4SWNvbnMoYXBwSWNvbnMpO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNvbW1hbmRzKCk7XHJcbiAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub25MYXlvdXRSZWFkeSgoKSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0dXBTdGF0dXNCYXIoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaW5pdF9ldnQoYWN0aXZlRG9jdW1lbnQpO1xyXG4gICAgaWYgKHJlcXVpcmVBcGlWZXJzaW9uKFwiMC4xNS4wXCIpKSB7XHJcbiAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbignd2luZG93LW9wZW4nLCAobGVhZikgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdF9ldnQobGVhZi5kb2MpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgY01lbnVUb29sYmFyU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xyXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuYXBwLndvcmtzcGFjZS5vbihcImFjdGl2ZS1sZWFmLWNoYW5nZVwiLCB0aGlzLmhhbmRsZWNNZW51VG9vbGJhcikpO1xyXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuYXBwLndvcmtzcGFjZS5vbihcImxheW91dC1jaGFuZ2VcIiwgdGhpcy5oYW5kbGVjTWVudVRvb2xiYXJfbGF5b3V0KSk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQodGhpcy5hcHAud29ya3NwYWNlLm9uKFwicmVzaXplXCIsIHRoaXMuaGFuZGxlY01lbnVUb29sYmFyX3Jlc2l6ZSkpO1xyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY01lbnVWaXNpYmlsaXR5ID09IHRydWUpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjTWVudVRvb2xiYXItTmV3Q29tbWFuZFwiKSk7XHJcbiAgICAgIH0sIDEwMClcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBpbml0X2V2dChjb250YWluZXI6IERvY3VtZW50KSB7XHJcblxyXG4gICAgdGhpcy5FTl9Gb250Q29sb3JfRm9ybWF0X0JydXNoID0gZmFsc2U7XHJcbiAgICB0aGlzLkVOX0JHX0Zvcm1hdF9CcnVzaCA9IGZhbHNlO1xyXG4gICAgdGhpcy5FTl9UZXh0X0Zvcm1hdF9CcnVzaCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yZWdpc3RlckRvbUV2ZW50KGNvbnRhaW5lciwgXCJtb3VzZXVwXCIsIGFzeW5jIChlOiB7IGJ1dHRvbjogYW55OyB9KSA9PiB7XHJcbiAgICAgIGlmIChlLmJ1dHRvbikge1xyXG4gICAgICAgIGlmICh0aGlzLkVOX0ZvbnRDb2xvcl9Gb3JtYXRfQnJ1c2ggfHwgdGhpcy5FTl9CR19Gb3JtYXRfQnJ1c2ggfHwgdGhpcy5FTl9UZXh0X0Zvcm1hdF9CcnVzaCkge1xyXG4gICAgICAgICAgcXVpdGVGb3JtYXRicnVzaGVzKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsZXQgdmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XHJcbiAgICAgIGlmICghdmlldykgeyByZXR1cm47IH07XHJcblxyXG4gICAgICAvL2xldCBjbUVkaXRvciA9IHZpZXcuc291cmNlTW9kZS5jbUVkaXRvcjtcclxuICAgICAgbGV0IGNtRWRpdG9yID0gdmlldy5lZGl0b3I7XHJcbiAgICAgIGlmIChjbUVkaXRvci5oYXNGb2N1cygpKSB7XHJcbiAgICAgICAgbGV0IGNNZW51VG9vbGJhck1vZGFsQmFyID0gaXNFeGlzdG9vbGJhcih0aGlzLmFwcCwgdGhpcy5zZXR0aW5ncylcclxuXHJcbiAgICAgICAgaWYgKGNtRWRpdG9yLmdldFNlbGVjdGlvbigpID09IG51bGwgfHwgY21FZGl0b3IuZ2V0U2VsZWN0aW9uKCkgPT0gXCJcIikge1xyXG4gICAgICAgICAgaWYgKGNNZW51VG9vbGJhck1vZGFsQmFyKVxyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBvc2l0aW9uU3R5bGUgPT0gXCJmb2xsb3dpbmdcIiA/IGNNZW51VG9vbGJhck1vZGFsQmFyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiIDogdHJ1ZTtcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuRU5fRm9udENvbG9yX0Zvcm1hdF9CcnVzaCwnRU5fRm9udENvbG9yX0Zvcm1hdF9CcnVzaCcpXHJcbiAgICAgICAgICBpZiAodGhpcy5FTl9Gb250Q29sb3JfRm9ybWF0X0JydXNoKSB7XHJcbiAgICAgICAgICAgIHNldEZvbnRjb2xvcih0aGlzLmFwcCwgdGhpcywgdGhpcy5zZXR0aW5ncy5jTWVudUZvbnRDb2xvcik7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuRU5fQkdfRm9ybWF0X0JydXNoKSB7XHJcbiAgICAgICAgICAgIHNldEJhY2tncm91bmRjb2xvcih0aGlzLmFwcCwgdGhpcywgdGhpcy5zZXR0aW5ncy5jTWVudUJhY2tncm91bmRDb2xvcik7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuRU5fVGV4dF9Gb3JtYXRfQnJ1c2gpIHtcclxuICAgICAgICAgICAgc2V0Rm9ybWF0ZXJhc2VyKHRoaXMuYXBwLCB0aGlzKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZXR0aW5ncy5wb3NpdGlvblN0eWxlID09IFwiZm9sbG93aW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckRvbUV2ZW50KGFjdGl2ZURvY3VtZW50LCBcImtleWRvd25cIiwgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIWUuc2hpZnRLZXkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjTWVudVRvb2xiYXJNb2RhbEJhcilcclxuICAgICAgICAgICAgICAgICAgY01lbnVUb29sYmFyTW9kYWxCYXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY3JlYXRlRm9sbG93aW5nYmFyKHRoaXMuYXBwLCB0aGlzLnNldHRpbmdzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0aGlzLkVOX0ZvbnRDb2xvcl9Gb3JtYXRfQnJ1c2ggfHwgdGhpcy5FTl9CR19Gb3JtYXRfQnJ1c2ggfHwgdGhpcy5FTl9UZXh0X0Zvcm1hdF9CcnVzaCkge1xyXG4gICAgICAgIHF1aXRlRm9ybWF0YnJ1c2hlcyh0aGlzKTtcclxuXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBnZW5lcmF0ZUNvbW1hbmRzKCkge1xyXG4gICAgLy9IaWRlLXNob3cgbWVudVxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6IFwiaGlkZS1zaG93LW1lbnVcIixcclxuICAgICAgbmFtZTogXCJIaWRlL3Nob3cgXCIsXHJcbiAgICAgIGljb246IFwiY01lbnVUb29sYmFyXCIsXHJcbiAgICAgIGNhbGxiYWNrOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jTWVudVZpc2liaWxpdHkgPSAhdGhpcy5zZXR0aW5ncy5jTWVudVZpc2liaWxpdHk7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jTWVudVZpc2liaWxpdHkgPT0gdHJ1ZVxyXG4gICAgICAgICAgPyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjTWVudVRvb2xiYXItTmV3Q29tbWFuZFwiKSk7XHJcbiAgICAgICAgICB9LCAxMDApXHJcbiAgICAgICAgICA6IHNldE1lbnVWaXNpYmlsaXR5KHRoaXMuc2V0dGluZ3MuY01lbnVWaXNpYmlsaXR5KTtcclxuICAgICAgICBzZWxmRGVzdHJ1Y3QoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICBpZDogJ2Zvcm1hdC1lcmFzZXInLFxyXG4gICAgICBuYW1lOiAnRm9ybWF0IEVyYXNlcicsXHJcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiBzZXRGb3JtYXRlcmFzZXIodGhpcy5hcHAsIHRoaXMpLFxyXG4gICAgICBpY29uOiBgPHN2ZyB3aWR0aD1cXFwiMThcXFwiIGhlaWdodD1cXFwiMThcXFwiIGZvY3VzYWJsZT1cXFwiZmFsc2VcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgIHZpZXdCb3g9XFxcIjAgMCAxMDI0IDEwMjRcXFwiPjxnIHRyYW5zZm9ybT1cXFwic2NhbGUoMSwgLTEpIHRyYW5zbGF0ZSgwLCAtODk2KSBzY2FsZSgwLjksIDAuOSkgXFxcIj48cGF0aCBjbGFzcz1cXFwicGF0aFxcXCIgZD1cXFwiTTg4OSA1MTIgbC0yMTEgMjExIHEtMjYgMjcgLTYxIDM2IHEtMzUgOSAtNzAgMCBxLTM1IC05IC02MSAtMzYgbC0zNTEgLTM1MCBxLTI2IC0yNyAtMzUuNSAtNjIgcS05LjUgLTM1IDAgLTcwIHE5LjUgLTM1IDM1LjUgLTYxIGwxNzAgLTE3MCBxMTIgLTEyIDI5IC0xMiBsMjE1IDAgcTE3IDAgMjkgMTIgbDMxMSAzMTAgcTI2IDI2IDM1LjUgNjEgcTkuNSAzNSAwIDcwIHEtOS41IDM1IC0zNS41IDYxIFpNODMxIDQ1MyBxMTUgLTE1IDE1LjUgLTM2LjUgcTAuNSAtMjEuNSAtMTQuNSAtMzcuNSBsLTMwMCAtMjk4IGwtMTgxIDAgbC0xNTggMTU4IHEtMTUgMTUgLTE1IDM3IHEwIDIyIDE1IDM4IGwzNTEgMzUxIHExNiAxNiAzOCAxNiBxMjIgMCAzNyAtMTYgbDIxMiAtMjEyIFpNNjg2IDIxNyBsLTU5IC01OSBsLTMxNyAzMTUgbDU4IDU5IGwzMTggLTMxNSBaTTg4MyA4MSBxMTggMCAzMC41IC0xMiBxMTIuNSAtMTIgMTIuNSAtMjkgcTAgLTE3IC0xMi41IC0yOSBxLTEyLjUgLTEyIC0yOS41IC0xMyBsLTQ1NiAwIHEtMTcgMCAtMjkuNSAxMiBxLTEyLjUgMTIgLTEyLjUgMjkgcTAgMTcgMTIgMjkgcTEyIDEyIDI5IDEzIGw0NTYgMCBaXFxcIj48L3BhdGg+PC9nPjwvc3ZnPmBcclxuXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiAnb2ZmLUZvcm1hdC1CcnVzaCcsXHJcbiAgICAgIG5hbWU6ICdPRkYgRm9ybWF0IEJydXNoJyxcclxuICAgICAgY2FsbGJhY2s6ICgpID0+IHF1aXRlRm9ybWF0YnJ1c2hlcyh0aGlzKSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6ICdjaGFuZ2UtZm9udC1jb2xvcicsXHJcbiAgICAgIG5hbWU6ICdDaGFuZ2UgZm9udCBjb2xvcltodG1sXScsXHJcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiBzZXRGb250Y29sb3IoYXBwLCB0aGlzLCB0aGlzLnNldHRpbmdzLmNNZW51Rm9udENvbG9yID8/IFwiIzJEQzI2QlwiKSxcclxuICAgICAgaWNvbjogYDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PGcgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjxwYXRoIGlkPVwiY2hhbmdlLWZvbnQtY29sb3ItaWNvblwiIGQ9XCJNMyAxOGgxOHYzSDN6XCIgc3R5bGU9XCJmaWxsOiMyREMyNkJcIj48L3BhdGg+PHBhdGggZD1cIk04LjcgMTZoLS44YS41LjUgMCAwMS0uNS0uNmwyLjctOWMuMS0uMy4zLS40LjUtLjRoMi44Yy4yIDAgLjQuMS41LjRsMi43IDlhLjUuNSAwIDAxLS41LjZoLS44YS41LjUgMCAwMS0uNC0uNGwtLjctMi4yYzAtLjMtLjMtLjQtLjUtLjRoLTMuNGMtLjIgMC0uNC4xLS41LjRsLS43IDIuMmMwIC4zLS4yLjQtLjQuNHptMi42LTcuNmwtLjYgMmEuNS41IDAgMDAuNS42aDEuNmEuNS41IDAgMDAuNS0uNmwtLjYtMmMwLS4zLS4zLS40LS41LS40aC0uNGMtLjIgMC0uNC4xLS41LjR6XCI+PC9wYXRoPjwvZz48L3N2Zz5gXHJcblxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICBpZDogJ2NoYW5nZS1iYWNrZ3JvdW5kLWNvbG9yJyxcclxuICAgICAgbmFtZTogJ0NoYW5nZSBCYWNrZ3JvdW5kY29sb3JbaHRtbF0nLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4gc2V0QmFja2dyb3VuZGNvbG9yKGFwcCwgdGhpcywgdGhpcy5zZXR0aW5ncy5jTWVudUJhY2tncm91bmRDb2xvciA/PyBcIiNGQTU0MUNcIiksXHJcbiAgICAgIGljb246IGA8c3ZnIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGcgICBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+PGcgID48ZyBmaWxsPVwiY3VycmVudENvbG9yXCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDExOS41MDIyOTUsIDEzNy44NzgzMzEpIHJvdGF0ZSgtMTM1LjAwMDAwMCkgdHJhbnNsYXRlKC0xMTkuNTAyMjk1LCAtMTM3Ljg3ODMzMSkgdHJhbnNsYXRlKDQ4LjAwMjI5NSwgMzEuNzU3NzMxKVwiID48cGF0aCBkPVwiTTEwMC45NDY5NDMsNjAuODA4NDY5OSBMNDMuNzQ2OTQyNyw2MC44MDg0Njk5IEMzNy4yODUyMTExLDYwLjgwODQ2OTkgMzIuMDQ2OTQyNyw2Ni4wNDY3MzgzIDMyLjA0Njk0MjcsNzIuNTA4NDY5OSBMMzIuMDQ2OTQyNywxMTguNzA4NDcgQzMyLjA0Njk0MjcsMTI1LjE3MDIwMSAzNy4yODUyMTExLDEzMC40MDg0NyA0My43NDY5NDI3LDEzMC40MDg0NyBMMTAwLjk0Njk0MywxMzAuNDA4NDcgQzEwNy40MDg2NzQsMTMwLjQwODQ3IDExMi42NDY5NDMsMTI1LjE3MDIwMSAxMTIuNjQ2OTQzLDExOC43MDg0NyBMMTEyLjY0Njk0Myw3Mi41MDg0Njk5IEMxMTIuNjQ2OTQzLDY2LjA0NjczODMgMTA3LjQwODY3NCw2MC44MDg0Njk5IDEwMC45NDY5NDMsNjAuODA4NDY5OSBaIE05My42NDYsNzkuODA4IEw5My42NDYsMTExLjQwOCBMNTEuMDQ2LDExMS40MDggTDUxLjA0Niw3OS44MDggTDkzLjY0Niw3OS44MDggWlwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj48L3BhdGg+PHBhdGggZD1cIk04Ny45MzY2NTIxLDE2LjkwOTE2IEw4Ny45MTk0OTY2LDY4LjIwMDAwMDEgQzg3LjkxODM1NDMsNjkuNDE0NzM4OSA4Ni45MzM0OTk4LDcwLjM5OTI2NCA4NS43MTg3NjA3LDcwLjQgTDU2Ljk0MjMwNzgsNzAuNCBDNTUuNzI3MjgxMyw3MC40IDU0Ljc0MjMwNzgsNjkuNDE1MDI2NCA1NC43NDIzMDc4LDY4LjIgTDU0Ljc0MjMwNzgsMzkuNDYyMTA1NyBDNTQuNzQyMzA3OCwzNy4yNTIzNTEzIDU1LjU3MzY2MzIsMzUuMTIzNDc0OCA1Ny4wNzExNzA2LDMzLjQ5ODUxNzYgTDc2LjQ4MzI5OTYsMTIuNDM0MjYxMyBDNzguOTUzNDk4Nyw5Ljc1MzgyODU3IDgzLjEyODkxMDgsOS41ODM0MDA1IDg1LjgwOTM0MzYsMTIuMDUzNTk5NiBDODcuMTY1ODQ3MywxMy4zMDM3MDkgODcuOTM3MjY5MSwxNS4wNjQ0NzE1IDg3LjkzNjY1MjEsMTYuOTA5MTYgWlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj48L3BhdGg+PHBhdGggZD1cIk0xMzEuMywxMTEuMjQxMTk5IEwxMS43LDExMS4yNDExOTkgQzUuMjM4MjY4NDMsMTExLjI0MTE5OSAwLDExNi40Nzk0NjcgMCwxMjIuOTQxMTk5IEwwLDIwMC41NDExOTkgQzAsMjA3LjAwMjkzMSA1LjIzODI2ODQzLDIxMi4yNDExOTkgMTEuNywyMTIuMjQxMTk5IEwxMzEuMywyMTIuMjQxMTk5IEMxMzcuNzYxNzMyLDIxMi4yNDExOTkgMTQzLDIwNy4wMDI5MzEgMTQzLDIwMC41NDExOTkgTDE0MywxMjIuOTQxMTk5IEMxNDMsMTE2LjQ3OTQ2NyAxMzcuNzYxNzMyLDExMS4yNDExOTkgMTMxLjMsMTExLjI0MTE5OSBaIE0xMjQsMTMwLjI0MSBMMTI0LDE5My4yNDEgTDE5LDE5My4yNDEgTDE5LDEzMC4yNDEgTDEyNCwxMzAuMjQxIFpcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCI+PC9wYXRoPjwvZz48L2c+PHBhdGggZD1cIk01MSwyMTggTDIwNSwyMTggQzIxMS4wNzUxMzIsMjE4IDIxNiwyMjIuOTI0ODY4IDIxNiwyMjkgQzIxNiwyMzUuMDc1MTMyIDIxMS4wNzUxMzIsMjQwIDIwNSwyNDAgTDUxLDI0MCBDNDQuOTI0ODY3OCwyNDAgNDAsMjM1LjA3NTEzMiA0MCwyMjkgQzQwLDIyMi45MjQ4NjggNDQuOTI0ODY3OCwyMTggNTEsMjE4IFpcIiBpZD1cImNoYW5nZS1iYWNrZ3JvdW5kLWNvbG9yLWljb25cIiBzdHlsZT1cImZpbGw6I0ZBNTQxQ1wiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPmBcclxuXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiAnaW5kZW50LWxpc3QnLFxyXG4gICAgICBuYW1lOiAnaW5kZW50IGxpc3QnLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUxlYWYgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSBhY3RpdmVMZWFmO1xyXG4gICAgICAgIGNvbnN0IGVkaXRvciA9IHZpZXcuZWRpdG9yO1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIHJldHVybiBlZGl0b3IuaW5kZW50TGlzdCgpO1xyXG4gICAgICB9LFxyXG4gICAgICBpY29uOiBcImluZGVudC1nbHlwaFwiXHJcblxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICBpZDogJ3VuZGVudC1saXN0JyxcclxuICAgICAgbmFtZTogJ3VuaW5kZW50LWxpc3QnLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUxlYWYgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSBhY3RpdmVMZWFmO1xyXG4gICAgICAgIGNvbnN0IGVkaXRvciA9IHZpZXcuZWRpdG9yO1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIHJldHVybiBlZGl0b3IudW5pbmRlbnRMaXN0KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGljb246IFwidW5pbmRlbnQtZ2x5cGhcIlxyXG5cclxuICAgIH0pO1xyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6ICdlZGl0b3ItdW5kbycsXHJcbiAgICAgIG5hbWU6ICd1bmRvIGVkaXRvcicsXHJcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlTGVhZiA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IGFjdGl2ZUxlYWY7XHJcbiAgICAgICAgY29uc3QgZWRpdG9yID0gdmlldy5lZGl0b3I7XHJcbiAgICAgICAgcmV0dXJuIGVkaXRvci51bmRvKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGljb246IFwidW5kby1nbHlwaFwiXHJcblxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICBpZDogJ2VkaXRvci1yZWRvJyxcclxuICAgICAgbmFtZTogJ3JlZG8gZWRpdG9yJyxcclxuICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICBjb25zdCBhY3RpdmVMZWFmID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcclxuICAgICAgICBjb25zdCB2aWV3ID0gYWN0aXZlTGVhZjtcclxuICAgICAgICBjb25zdCBlZGl0b3IgPSB2aWV3LmVkaXRvcjtcclxuICAgICAgICByZXR1cm4gZWRpdG9yLnJlZG8oKTtcclxuICAgICAgfSxcclxuICAgICAgaWNvbjogXCJyZWRvLWdseXBoXCJcclxuXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiBcImZ1bGxzY3JlZW4tZm9jdXNcIixcclxuICAgICAgbmFtZTogXCJGdWxsc2NyZWVuIGZvY3VzIG1vZGVcIixcclxuICAgICAgaG90a2V5czogW3sgbW9kaWZpZXJzOiBbXCJNb2RcIiwgXCJTaGlmdFwiXSwga2V5OiBcIkYxMVwiIH1dLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmdWxsc2NyZWVuTW9kZShhcHApXHJcbiAgICAgIH0sXHJcbiAgICAgIGljb246IFwiZnVsbHNjcmVlblwiXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiBcIndvcmtwbGFjZS1mdWxsc2NyZWVuLWZvY3VzXCIsXHJcbiAgICAgIG5hbWU6IFwid29ya3BsYWNlLUZ1bGxzY3JlZW4gXCIsXHJcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHdvcmtwbGFjZWZ1bGxzY3JlZW5Nb2RlKGFwcClcclxuICAgICAgfSxcclxuICAgICAgaG90a2V5czogW3sgbW9kaWZpZXJzOiBbJ01vZCddLCBrZXk6IFwiRjExXCIgfV0sXHJcbiAgICAgIGljb246IFwicmVtaXgtU3BsaXRDZWxsc0hvcml6b250YWxcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6ICdoZWFkZXIwLXRleHQnLFxyXG4gICAgICBuYW1lOiAnUmVtb3ZlIGhlYWRlciBsZXZlbCcsXHJcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiBzZXRIZWFkZXIoXCJcIiksXHJcbiAgICAgIGhvdGtleXM6IFt7IG1vZGlmaWVyczogW1wiTW9kXCJdLCBrZXk6IFwiYFwiIH1dLFxyXG4gICAgICBpY29uOiBcImhlYWRpbmctZ2x5cGhcIlxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICBpZDogJ2hlYWRlcjEtdGV4dCcsXHJcbiAgICAgIG5hbWU6ICdIZWFkZXIgMScsXHJcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiBzZXRIZWFkZXIoXCIjXCIpLFxyXG4gICAgICBpY29uOiBcImhlYWRlci0xXCJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6ICdoZWFkZXIyLXRleHQnLFxyXG4gICAgICBuYW1lOiAnSGVhZGVyIDInLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4gc2V0SGVhZGVyKFwiIyNcIiksXHJcbiAgICAgIGljb246IFwiaGVhZGVyLTJcIlxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICBpZDogJ2hlYWRlcjMtdGV4dCcsXHJcbiAgICAgIG5hbWU6ICdIZWFkZXIgMycsXHJcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiBzZXRIZWFkZXIoXCIjIyNcIiksXHJcbiAgICAgIGljb246IFwiaGVhZGVyLTNcIlxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICBpZDogJ2hlYWRlcjQtdGV4dCcsXHJcbiAgICAgIG5hbWU6ICdIZWFkZXIgNCcsXHJcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiBzZXRIZWFkZXIoXCIjIyMjXCIpLFxyXG4gICAgICBpY29uOiBcImhlYWRlci00XCJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6ICdoZWFkZXI1LXRleHQnLFxyXG4gICAgICBuYW1lOiAnSGVhZGVyIDUnLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4gc2V0SGVhZGVyKFwiIyMjIyNcIiksXHJcbiAgICAgIGljb246IFwiaGVhZGVyLTVcIlxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICBpZDogJ2hlYWRlcjYtdGV4dCcsXHJcbiAgICAgIG5hbWU6ICdIZWFkZXIgNicsXHJcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiBzZXRIZWFkZXIoXCIjIyMjIyNcIiksXHJcbiAgICAgIGljb246IFwiaGVhZGVyLTZcIlxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGFwcGx5Q29tbWFuZCA9IChjb21tYW5kOiBjb21tYW5kUGxvdCwgZWRpdG9yOiBFZGl0b3IpID0+IHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRUZXh0ID0gZWRpdG9yLmdldFNlbGVjdGlvbigpO1xyXG4gICAgICBjb25zdCBjdXJzZXJTdGFydCA9IGVkaXRvci5nZXRDdXJzb3IoXCJmcm9tXCIpO1xyXG4gICAgICBjb25zdCBjdXJzZXJFbmQgPSBlZGl0b3IuZ2V0Q3Vyc29yKFwidG9cIik7XHJcbiAgICAgIGxldCBwcmVmaXggPSBjb21tYW5kLnByZWZpeDtcclxuICAgICAgaWYgKGNvbW1hbmQuaXNsaW5laGVhZCAmJiBjdXJzZXJTdGFydC5jaCA+IDApIC8vIGN1cnNvciBwb3NpdGlvbiBpcyBub3QgbGluZSBoZWFkXHJcbiAgICAgICAgcHJlZml4ID0gJ1xcbicgKyBwcmVmaXhcclxuICAgICAgY29uc3Qgc3VmZml4ID0gY29tbWFuZC5zdWZmaXggfHwgcHJlZml4O1xyXG4gICAgICBjb25zdCBzZXRDdXJzb3IgPSAobW9kZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgZWRpdG9yLnNldEN1cnNvcihcclxuICAgICAgICAgIGN1cnNlclN0YXJ0LmxpbmUgKyBjb21tYW5kLmxpbmUgKiBtb2RlLFxyXG4gICAgICAgICAgY3Vyc2VyRW5kLmNoICsgY29tbWFuZC5jaGFyICogbW9kZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHByZVN0YXJ0ID0ge1xyXG4gICAgICAgIGxpbmU6IGN1cnNlclN0YXJ0LmxpbmUgLSBjb21tYW5kLmxpbmUsXHJcbiAgICAgICAgY2g6IGN1cnNlclN0YXJ0LmNoIC0gcHJlZml4Lmxlbmd0aCxcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcHJlID0gZWRpdG9yLmdldFJhbmdlKHByZVN0YXJ0LCBjdXJzZXJTdGFydCk7XHJcblxyXG4gICAgICBpZiAocHJlID09IHByZWZpeC50cmltU3RhcnQoKSkge1xyXG4gICAgICAgIGNvbnN0IHN1ZkVuZCA9IHtcclxuICAgICAgICAgIGxpbmU6IGN1cnNlclN0YXJ0LmxpbmUgKyBjb21tYW5kLmxpbmUsXHJcbiAgICAgICAgICBjaDogY3Vyc2VyRW5kLmNoICsgc3VmZml4Lmxlbmd0aCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHN1ZiA9IGVkaXRvci5nZXRSYW5nZShjdXJzZXJFbmQsIHN1ZkVuZCk7XHJcbiAgICAgICAgaWYgKHN1ZiA9PSBzdWZmaXgudHJpbUVuZCgpKSB7XHJcbiAgICAgICAgICBlZGl0b3IucmVwbGFjZVJhbmdlKHNlbGVjdGVkVGV4dCwgcHJlU3RhcnQsIHN1ZkVuZCk7IC8vIGNvZGVibG9jayBsZWF2ZSBibGFuayBsaW5lc1xyXG4gICAgICAgICAgcmV0dXJuIHNldEN1cnNvcigtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGAke3ByZWZpeH0ke3NlbGVjdGVkVGV4dH0ke3N1ZmZpeH1gKTtcclxuICAgICAgcmV0dXJuIHNldEN1cnNvcigxKTtcclxuICAgIH07XHJcblxyXG4gICAgdHlwZSBjb21tYW5kUGxvdCA9IHtcclxuICAgICAgY2hhcjogbnVtYmVyO1xyXG4gICAgICBsaW5lOiBudW1iZXI7XHJcbiAgICAgIHByZWZpeDogc3RyaW5nO1xyXG4gICAgICBzdWZmaXg6IHN0cmluZztcclxuICAgICAgaXNsaW5laGVhZDogYm9vbGVhbjtcclxuICAgIH07XHJcblxyXG4gICAgdHlwZSBjb21tYW5kc1Bsb3QgPSB7XHJcbiAgICAgIFtrZXk6IHN0cmluZ106IGNvbW1hbmRQbG90O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjb21tYW5kc01hcDogY29tbWFuZHNQbG90ID0ge1xyXG4gICAgICBocmxpbmU6IHtcclxuICAgICAgICBjaGFyOiA1LFxyXG4gICAgICAgIGxpbmU6IDEsXHJcbiAgICAgICAgcHJlZml4OiBcIlxcbi0tLVwiLFxyXG4gICAgICAgIHN1ZmZpeDogXCJcXG5cIixcclxuICAgICAgICBpc2xpbmVoZWFkOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGp1c3RpZnk6IHtcclxuICAgICAgICBjaGFyOiAxNyxcclxuICAgICAgICBsaW5lOiAwLFxyXG4gICAgICAgIHByZWZpeDogXCI8cCBhbGlnbj1cXFwianVzdGlmeVxcXCI+XCIsXHJcbiAgICAgICAgc3VmZml4OiBcIjwvcD5cIixcclxuICAgICAgICBpc2xpbmVoZWFkOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgbGVmdDoge1xyXG4gICAgICAgIGNoYXI6IDE3LFxyXG4gICAgICAgIGxpbmU6IDAsXHJcbiAgICAgICAgcHJlZml4OiBcIjxwIGFsaWduPVxcXCJsZWZ0XFxcIj5cIixcclxuICAgICAgICBzdWZmaXg6IFwiPC9wPlwiLFxyXG4gICAgICAgIGlzbGluZWhlYWQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICByaWdodDoge1xyXG4gICAgICAgIGNoYXI6IDE3LFxyXG4gICAgICAgIGxpbmU6IDAsXHJcbiAgICAgICAgcHJlZml4OiBcIjxwIGFsaWduPVxcXCJyaWdodFxcXCI+XCIsXHJcbiAgICAgICAgc3VmZml4OiBcIjwvcD5cIixcclxuICAgICAgICBpc2xpbmVoZWFkOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgY2VudGVyOiB7XHJcbiAgICAgICAgY2hhcjogOCxcclxuICAgICAgICBsaW5lOiAwLFxyXG4gICAgICAgIHByZWZpeDogXCI8Y2VudGVyPlwiLFxyXG4gICAgICAgIHN1ZmZpeDogXCI8L2NlbnRlcj5cIixcclxuICAgICAgICBpc2xpbmVoZWFkOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgdW5kZXJsaW5lOiB7XHJcbiAgICAgICAgY2hhcjogMyxcclxuICAgICAgICBsaW5lOiAwLFxyXG4gICAgICAgIHByZWZpeDogXCI8dT5cIixcclxuICAgICAgICBzdWZmaXg6IFwiPC91PlwiLFxyXG4gICAgICAgIGlzbGluZWhlYWQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICBzdXBlcnNjcmlwdDoge1xyXG4gICAgICAgIGNoYXI6IDUsXHJcbiAgICAgICAgbGluZTogMCxcclxuICAgICAgICBwcmVmaXg6IFwiPHN1cD5cIixcclxuICAgICAgICBzdWZmaXg6IFwiPC9zdXA+XCIsXHJcbiAgICAgICAgaXNsaW5laGVhZDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1YnNjcmlwdDoge1xyXG4gICAgICAgIGNoYXI6IDUsXHJcbiAgICAgICAgbGluZTogMCxcclxuICAgICAgICBwcmVmaXg6IFwiPHN1Yj5cIixcclxuICAgICAgICBzdWZmaXg6IFwiPC9zdWI+XCIsXHJcbiAgICAgICAgaXNsaW5laGVhZDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvZGVibG9jazoge1xyXG4gICAgICAgIGNoYXI6IDQsXHJcbiAgICAgICAgbGluZTogMCxcclxuICAgICAgICBwcmVmaXg6IFwiXFxuYGBgXFxuXCIsXHJcbiAgICAgICAgc3VmZml4OiBcIlxcbmBgYFxcblwiLFxyXG4gICAgICAgIGlzbGluZWhlYWQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICAgIC8vIEFkZCBuZXcgY29tbWFuZHNcclxuICAgIE9iamVjdC5rZXlzKGNvbW1hbmRzTWFwKS5mb3JFYWNoKCh0eXBlKSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgICAgaWQ6IGAke3R5cGV9YCxcclxuICAgICAgICBuYW1lOiBgVG9nZ2xlICR7dHlwZX1gLFxyXG4gICAgICAgIGljb246IGAke3R5cGV9LWdseXBoYCxcclxuICAgICAgICBjYWxsYmFjazogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYWN0aXZlTGVhZiA9XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XHJcbiAgICAgICAgICBpZiAoYWN0aXZlTGVhZikge1xyXG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gYWN0aXZlTGVhZjtcclxuICAgICAgICAgICAgY29uc3QgZWRpdG9yID0gdmlldy5lZGl0b3I7XHJcbiAgICAgICAgICAgIGFwcGx5Q29tbWFuZChjb21tYW5kc01hcFt0eXBlXSwgZWRpdG9yKTtcclxuICAgICAgICAgICAgYXdhaXQgd2FpdCgxMCk7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBhcHAuY29tbWFuZHMuZXhlY3V0ZUNvbW1hbmRCeUlkKFwiZWRpdG9yOmZvY3VzXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyBFbmhhbmNlIGVkaXRvciBjb21tYW5kc1xyXG4gICAgdGhpcy5tb2RDb21tYW5kcy5mb3JFYWNoKCh0eXBlKSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgICAgaWQ6IGAke3R5cGVbXCJpZFwiXX1gLFxyXG4gICAgICAgIG5hbWU6IGAke3R5cGVbXCJuYW1lXCJdfWAsXHJcbiAgICAgICAgaWNvbjogYCR7dHlwZVtcImljb25cIl19YCxcclxuICAgICAgICBjYWxsYmFjazogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYWN0aXZlTGVhZiA9XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XHJcbiAgICAgICAgICBjb25zdCB2aWV3ID0gYWN0aXZlTGVhZjtcclxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IHZpZXcuZWRpdG9yO1xyXG4gICAgICAgICAgZWRpdG9yLmdldEN1cnNvcihcImZyb21cIik7XHJcbiAgICAgICAgICBjb25zdCBjdXJzZXJFbmQgPSBlZGl0b3IuZ2V0Q3Vyc29yKFwidG9cIik7XHJcbiAgICAgICAgICBsZXQgY2hhcjtcclxuICAgICAgICAgIGAke3R5cGVbXCJpZFwiXX1gID09IFwiZWRpdG9yOmluc2VydC1lbWJlZFwiXHJcbiAgICAgICAgICAgID8gKGNoYXIgPSAzKVxyXG4gICAgICAgICAgICA6IGAke3R5cGVbXCJpZFwiXX1gID09IFwiZWRpdG9yOmluc2VydC1saW5rXCJcclxuICAgICAgICAgICAgICA/IChjaGFyID0gMSlcclxuICAgICAgICAgICAgICA6IGAke3R5cGVbXCJpZFwiXX1gID09IFwiZWRpdG9yOmluc2VydC10YWdcIlxyXG4gICAgICAgICAgICAgICAgPyAoY2hhciA9IDEpXHJcbiAgICAgICAgICAgICAgICA6IGAke3R5cGVbXCJpZFwiXX1gID09IFwiZWRpdG9yOmluc2VydC13aWtpbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgID8gKGNoYXIgPSAyKVxyXG4gICAgICAgICAgICAgICAgICA6IGAke3R5cGVbXCJpZFwiXX1gID09IFwiZWRpdG9yOnRvZ2dsZS1ib2xkXCJcclxuICAgICAgICAgICAgICAgICAgICA/IChjaGFyID0gMilcclxuICAgICAgICAgICAgICAgICAgICA6IGAke3R5cGVbXCJpZFwiXX1gID09IFwiZWRpdG9yOnRvZ2dsZS1pdGFsaWNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgID8gKGNoYXIgPSAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBgJHt0eXBlW1wiaWRcIl19YCA9PSBcImVkaXRvcjp0b2dnbGUtc3RyaWtldGhyb3VnaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKGNoYXIgPSAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGAke3R5cGVbXCJpZFwiXX1gID09IFwiZWRpdG9yOnRvZ2dsZS1jb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IChjaGFyID0gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGAke3R5cGVbXCJpZFwiXX1gID09IFwiZWRpdG9yOnRvZ2dsZS1ibG9ja3F1b3RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKGNoYXIgPSAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgJHt0eXBlW1wiaWRcIl19YCA9PSBcImVkaXRvcjp0b2dnbGUtYnVsbGV0LWxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChjaGFyID0gMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgJHt0eXBlW1wiaWRcIl19YCA9PSBcImVkaXRvcjp0b2dnbGUtY2hlY2tsaXN0LXN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoY2hhciA9IDQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgJHt0eXBlW1wiaWRcIl19YCA9PSBcImVkaXRvcjp0b2dnbGUtY29tbWVudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoY2hhciA9IDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGAke3R5cGVbXCJpZFwiXX1gID09IFwiZWRpdG9yOnRvZ2dsZS1oaWdobGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChjaGFyID0gMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgJHt0eXBlW1wiaWRcIl19YCA9PSBcImVkaXRvcjp0b2dnbGUtbnVtYmVyZWQtbGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoY2hhciA9IDMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY2hhciA9IDIpO1xyXG4gICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICBhcHAuY29tbWFuZHMuZXhlY3V0ZUNvbW1hbmRCeUlkKGAke3R5cGVbXCJpZFwiXX1gKTtcclxuICAgICAgICAgIGVkaXRvci5zZXRDdXJzb3IoY3Vyc2VyRW5kLmxpbmUsIGN1cnNlckVuZC5jaCArIGNoYXIpO1xyXG4gICAgICAgICAgYXdhaXQgd2FpdCgxMCk7XHJcbiAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgIGFwcC5jb21tYW5kcy5leGVjdXRlQ29tbWFuZEJ5SWQoXCJlZGl0b3I6Zm9jdXNcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldHVwU3RhdHVzQmFyKCkge1xyXG4gICAgYWRkSWNvbnMoKTtcclxuICAgIHRoaXMuc3RhdHVzQmFySWNvbiA9IHRoaXMuYWRkU3RhdHVzQmFySXRlbSgpO1xyXG4gICAgdGhpcy5zdGF0dXNCYXJJY29uLmFkZENsYXNzKFwiY01lbnVUb29sYmFyLXN0YXR1c2Jhci1idXR0b25cIik7XHJcbiAgICBzZXRJY29uKHRoaXMuc3RhdHVzQmFySWNvbiwgXCJjTWVudVRvb2xiYXJcIik7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlckRvbUV2ZW50KHRoaXMuc3RhdHVzQmFySWNvbiwgXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0YXR1c0JhclJlY3QgPVxyXG4gICAgICAgIHRoaXMuc3RhdHVzQmFySWNvbi5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBjb25zdCBzdGF0dXNCYXJJY29uUmVjdCA9IHRoaXMuc3RhdHVzQmFySWNvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgIGNvbnN0IG1lbnUgPSBuZXcgTWVudSgpLmFkZEl0ZW0oKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLnNldFRpdGxlKHQoXCJIaWRlICYgU2hvd1wiKSk7XHJcbiAgICAgICAgcmVxdWlyZUFwaVZlcnNpb24oXCIwLjE1LjBcIikgPyBpdGVtLnNldFNlY3Rpb24oXCJzZXR0aW5nc1wiKSA6IHRydWU7XHJcbiAgICAgICAgY29uc3QgaXRlbURvbSA9IChpdGVtIGFzIGFueSkuZG9tIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHRvZ2dsZUNvbXBvbmVudCA9IG5ldyBUb2dnbGVDb21wb25lbnQoaXRlbURvbSlcclxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnNldHRpbmdzLmNNZW51VmlzaWJpbGl0eSlcclxuICAgICAgICAgIC5zZXREaXNhYmxlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9nZ2xlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXR0aW5ncy5jTWVudVZpc2liaWxpdHkgPSAhdGhpcy5zZXR0aW5ncy5jTWVudVZpc2liaWxpdHk7XHJcbiAgICAgICAgICB0b2dnbGVDb21wb25lbnQuc2V0VmFsdWUodGhpcy5zZXR0aW5ncy5jTWVudVZpc2liaWxpdHkpO1xyXG4gICAgICAgICAgdGhpcy5zZXR0aW5ncy5jTWVudVZpc2liaWxpdHkgPT0gdHJ1ZVxyXG4gICAgICAgICAgICA/IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY01lbnVUb29sYmFyLU5ld0NvbW1hbmRcIikpO1xyXG4gICAgICAgICAgICB9LCAxMDApXHJcbiAgICAgICAgICAgIDogc2V0TWVudVZpc2liaWxpdHkodGhpcy5zZXR0aW5ncy5jTWVudVZpc2liaWxpdHkpO1xyXG4gICAgICAgICAgc2VsZkRlc3RydWN0KCk7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGl0ZW0ub25DbGljaygoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgIHRvZ2dsZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IG1lbnVEb20gPSAobWVudSBhcyBhbnkpLmRvbSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgbWVudURvbS5hZGRDbGFzcyhcImNNZW51VG9vbGJhci1zdGF0dXNiYXItbWVudVwiKTtcclxuXHJcblxyXG4gICAgICBtZW51LmFkZEl0ZW0oKGl0ZW0pID0+IHtcclxuXHJcbiAgICAgICAgaXRlbS5zZXRJY29uKFwiY01lbnVUb29sYmFyQWRkXCIpO1xyXG4gICAgICAgIHJlcXVpcmVBcGlWZXJzaW9uKFwiMC4xNS4wXCIpID8gaXRlbS5zZXRTZWN0aW9uKFwiQnV0dG9uQWRkXCIpIDogdHJ1ZTtcclxuICAgICAgICBpdGVtLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgbmV3IENvbW1hbmRQaWNrZXIodGhpcykub3BlbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgICBtZW51LmFkZEl0ZW0oKGl0ZW0pID0+IHtcclxuXHJcbiAgICAgICAgaXRlbS5zZXRJY29uKFwiY01lbnVUb29sYmFyUmVsb2FkXCIpO1xyXG4gICAgICAgIHJlcXVpcmVBcGlWZXJzaW9uKFwiMC4xNS4wXCIpID8gaXRlbS5zZXRTZWN0aW9uKFwiQnV0dG9uQWRkXCIpIDogdHJ1ZTtcclxuXHJcbiAgICAgICAgaXRlbS5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNNZW51VG9vbGJhci1OZXdDb21tYW5kXCIpKTtcclxuICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJWNjTWVudVRvb2xiYXIgcmVmcmVzaGVkYCwgXCJjb2xvcjogVmlvbGV0XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgICBtZW51LmFkZEl0ZW0oKGl0ZW0pID0+IHtcclxuXHJcbiAgICAgICAgaXRlbS5zZXRJY29uKFwic2xpZGVyc1wiKVxyXG4gICAgICAgIHJlcXVpcmVBcGlWZXJzaW9uKFwiMC4xNS4wXCIpID8gaXRlbS5zZXRTZWN0aW9uKFwiQnV0dG9uQWRkXCIpIDogdHJ1ZTtcclxuICAgICAgICBpdGVtLm9uQ2xpY2soKCkgPT4ge1xyXG5cclxuICAgICAgICAgIG5ldyBvcGVuU2xpZGVyKHRoaXMuYXBwLCB0aGlzKS5vcGVuKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICBtZW51LnNob3dBdFBvc2l0aW9uKHtcclxuICAgICAgICB4OiBzdGF0dXNCYXJJY29uUmVjdC5yaWdodCArIDUsXHJcbiAgICAgICAgeTogc3RhdHVzQmFyUmVjdC50b3AgLSA1LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb251bmxvYWQoKTogdm9pZCB7XHJcbiAgICBzZWxmRGVzdHJ1Y3QoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiY01lbnVUb29sYmFyIHVubG9hZGVkXCIpO1xyXG4gICAgdGhpcy5hcHAud29ya3NwYWNlLm9mZihcImFjdGl2ZS1sZWFmLWNoYW5nZVwiLCB0aGlzLmhhbmRsZWNNZW51VG9vbGJhcik7XHJcblxyXG4gICAgdGhpcy5hcHAud29ya3NwYWNlLm9mZihcImxheW91dC1jaGFuZ2VcIiwgdGhpcy5oYW5kbGVjTWVudVRvb2xiYXJfbGF5b3V0KTtcclxuICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vZmYoXCJyZXNpemVcIiwgdGhpcy5oYW5kbGVjTWVudVRvb2xiYXJfcmVzaXplKTtcclxuICB9XHJcblxyXG5cclxuICBoYW5kbGVjTWVudVRvb2xiYXIgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jTWVudVZpc2liaWxpdHkgPT0gdHJ1ZSkge1xyXG4gICAgICAvL2NvbnN0IHZpZXcgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShJdGVtVmlldyk7XHJcbiAgICAgIC8vY29uc29sZS5sb2codmlldz8uZ2V0Vmlld1R5cGUoKSApXHJcbiAgICAgIFxyXG4gICAgIGxldCB2aWV3ID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KVxyXG4gICAgICBsZXQgdG9vbGJhciA9IGlzRXhpc3Rvb2xiYXIodGhpcy5hcHAsIHRoaXMuc2V0dGluZ3MpXHJcbiAgICAgIGlmKHZpZXcpXHJcbiAgICAgIHtcclxuICAgICBcclxuICAgICAgaWYgKHRvb2xiYXIpIHtcclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5wb3NpdGlvblN0eWxlICE9IFwiZm9sbG93aW5nXCIpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRvb2xiYXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codG9vbGJhcixcInRvb2xiYXJfZXJyb3JcIik7XHJcbiAgICAgICAgICB9ICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgY01lbnVUb29sYmFyUG9wb3Zlcih0aGlzLmFwcCwgdGhpcylcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZWNNZW51VG9vbGJhcl9sYXlvdXQgPSAoKSA9PiB7XHJcbiAgICAvLyByZXF1aXJlQXBpVmVyc2lvbihcIjAuMTUuMFwiKSA/IGFjdGl2ZURvY3VtZW50ID0gYWN0aXZlV2luZG93LmRvY3VtZW50IDogYWN0aXZlRG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XHJcbiAgICAvL2NvbnN0IHZpZXcgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShJdGVtVmlldyk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHZpZXc/LmdldFZpZXdUeXBlKCksXCJoYW5kbGVjTWVudVRvb2xiYXJfbGF5b3V0XCIgKVxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY01lbnVWaXNpYmlsaXR5ID09IHRydWUpIHtcclxuICAgICAgbGV0IGNNZW51VG9vbGJhck1vZGFsQmFyID0gaXNFeGlzdG9vbGJhcih0aGlzLmFwcCwgdGhpcy5zZXR0aW5ncylcclxuICAgICAgbGV0IHZpZXcgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpXHJcbiAgICAgIGlmICgoZ2V0TW9kZXN0YXRlKGFwcCk9PT1mYWxzZSl8fCAoIXZpZXcpKSAvL25vIHNvdXJjZSBtb2RlXHJcbiAgICAgIHtcclxuICAgICAgICBpZiAoY01lbnVUb29sYmFyTW9kYWxCYXIpIHtcclxuICAgICAgICAgIGNNZW51VG9vbGJhck1vZGFsQmFyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgIGlmIChnZXRNb2Rlc3RhdGUoYXBwKT09PXRydWUpIHtcclxuICAgICAgICBpZiAoY01lbnVUb29sYmFyTW9kYWxCYXIpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnBvc2l0aW9uU3R5bGUgPT0gXCJmb2xsb3dpbmdcIilcclxuICAgICAgICAgICAgY01lbnVUb29sYmFyTW9kYWxCYXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjTWVudVRvb2xiYXJNb2RhbEJhci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCJcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY01lbnVUb29sYmFyUG9wb3Zlcih0aGlzLmFwcCwgdGhpcylcclxuICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICB9O1xyXG4gIGhhbmRsZWNNZW51VG9vbGJhcl9yZXNpemUgPSAoKSA9PiB7XHJcblxyXG4gICAgLy9yZXF1aXJlQXBpVmVyc2lvbihcIjAuMTUuMFwiKSA/IGFjdGl2ZURvY3VtZW50ID0gYWN0aXZlV2luZG93LmRvY3VtZW50IDogYWN0aXZlRG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jTWVudVZpc2liaWxpdHkgPT0gdHJ1ZSAmJiB0aGlzLnNldHRpbmdzLnBvc2l0aW9uU3R5bGUgPT0gXCJ0b3BcIikge1xyXG4gICAgICBpZiAoZ2V0TW9kZXN0YXRlKGFwcCkpIHtcclxuICAgICAgICBsZXQgdmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldylcclxuICAgICAgICBpZiAodmlldykge1xyXG4gICAgICAgICAgbGV0IGxlYWZ3aWR0aCA9IHZpZXcuY29udGFpbmVyRWw/LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiLm1hcmtkb3duLXNvdXJjZS12aWV3XCIpLm9mZnNldFdpZHRoID8/IDBcclxuICAgICAgICAgIGlmICh0aGlzLkxlYWZfV2lkdGggPT0gbGVhZndpZHRoKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICBpZiAobGVhZndpZHRoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLkxlYWZfV2lkdGggPSBsZWFmd2lkdGhcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuY01lbnVXaWR0aCAmJiBsZWFmd2lkdGgpIHtcclxuICAgICAgICAgICAgICBpZiAoKGxlYWZ3aWR0aCAtIHRoaXMuc2V0dGluZ3MuY01lbnVXaWR0aCkgPCA3OCAmJiAobGVhZndpZHRoID4gdGhpcy5zZXR0aW5ncy5jTWVudVdpZHRoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXNldFRvb2xiYXIoKSwgY01lbnVUb29sYmFyUG9wb3ZlcihhcHAsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgIHNldElTX01PUkVfQnV0dG9uKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5JU19NT1JFX0J1dHRvbiA9IHN0YXR1c1xyXG4gIH1cclxuICAgc2V0RU5fQkdfRm9ybWF0X0JydXNoKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5FTl9CR19Gb3JtYXRfQnJ1c2ggPSBzdGF0dXNcclxuICB9XHJcbiAgIHNldEVOX0ZvbnRDb2xvcl9Gb3JtYXRfQnJ1c2goc3RhdHVzOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLkVOX0ZvbnRDb2xvcl9Gb3JtYXRfQnJ1c2ggPSBzdGF0dXNcclxuICB9XHJcbiAgIHNldEVOX1RleHRfRm9ybWF0X0JydXNoKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5FTl9UZXh0X0Zvcm1hdF9CcnVzaCA9IHN0YXR1cztcclxuICB9XHJcbiAgIHNldFRlbXBfTm90aWNlKGNvbnRlbnQ6IE5vdGljZSk6IHZvaWQge1xyXG4gICAgdGhpcy5UZW1wX05vdGljZSA9IGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9TRVRUSU5HUywgYXdhaXQgdGhpcy5sb2FkRGF0YSgpKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcclxuICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInZhbHVlIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsImFwcGx5Iiwid2FpdCIsImRlbGF5Iiwic2V0VGltZW91dCIsIkdlbk5vbkR1cGxpY2F0ZUlEIiwicmFuZG9tTGVuZ3RoIiwiaWRTdHIiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyIiwiZmluZG1lbnVJRCIsInBsdWdpbiIsImNvbW1hbmQiLCJpc3N1YiIsImluZGV4IiwicmVzIiwic3ViaW5kZXgiLCJtZW51Y21kIiwic2V0dGluZ3MiLCJtZW51Q29tbWFuZHMiLCJmb3JFYWNoIiwiaXRlbSIsImlkeCIsIlN1Ym1lbnVDb21tYW5kcyIsImZpbmRJbmRleCIsInYiLCJpZCIsImFwcEljb25zIiwiYWN0aXZlRG9jdW1lbnQiLCJzZXRNZW51VmlzaWJpbGl0eSIsImNNZW51VmlzaWJpbGl0eSIsInJlcXVpcmVBcGlWZXJzaW9uIiwiYWN0aXZlV2luZG93IiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJjTWVudVRvb2xiYXJNb2RhbEJhciIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJ2aXNpYmlsaXR5Iiwic2V0Qm90dG9tVmFsdWUiLCJwb3NpdGlvblN0eWxlIiwic2V0QXR0cmlidXRlIiwib2Zmc2V0V2lkdGgiLCJjTWVudUJvdHRvbVZhbHVlIiwicmVwZWF0IiwiY01lbnVOdW1Sb3dzIiwiZW4iLCJNb3JlIiwiUmVmcmVzaCIsIkFkZCIsIkRlbGV0ZSIsImxvY2FsZSIsImFyIiwiY3MiLCJkYSIsImRlIiwiZXMiLCJmciIsImhpIiwiaXQiLCJqYSIsImtvIiwibmwiLCJubiIsInBsIiwicHQiLCJybyIsInJ1IiwidHIiLCJtb21lbnQiLCJ0Iiwic3RyIiwiQ2hvb3NlRnJvbUljb25MaXN0IiwiRnV6enlTdWdnZXN0TW9kYWwiLCJjb25zdHJ1Y3RvciIsInN1cGVyIiwiYXBwIiwidGhpcyIsInNldFBsYWNlaG9sZGVyIiwiY2FwaXRhbEpvaW4iLCJzdHJpbmciLCJzcGxpdCIsIm1hcCIsImljb24iLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsImpvaW4iLCJnZXRJdGVtcyIsImdldEl0ZW1UZXh0IiwicmVwbGFjZSIsInRyaW0iLCJyZW5kZXJTdWdnZXN0aW9uIiwiaWNvbkl0ZW0iLCJzcGFuIiwiY3JlYXRlU3BhbiIsImNscyIsImFwcGVuZENoaWxkIiwic2V0SWNvbiIsIm9uQ2hvb3NlSXRlbSIsIkN1c3RvbUljb24iLCJvcGVuIiwibWVudUlEIiwicHVzaCIsInNhdmVTZXR0aW5ncyIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiQ29tbWFuZFBpY2tlciIsImNvbW1hbmRzIiwibGlzdENvbW1hbmRzIiwiTm90aWNlIiwiTW9kYWwiLCJjb250YWluZXJFbCIsImFkZENsYXNzIiwib25PcGVuIiwiY29udGVudEVsIiwiY3JlYXRlRWwiLCJ0ZXh0IiwidGV4dENvbXBvbmVudCIsIlRleHRBcmVhQ29tcG9uZW50IiwiaW5wdXRFbCIsImNsYXNzTGlzdCIsImFkZCIsInNldFZhbHVlIiwiX2EiLCJvbkNoYW5nZSIsImRlYm91bmNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN1Ym1pdEVudGVyQ2FsbGJhY2siLCJvbkNsb3NlIiwiZW1wdHkiLCJDaGFuZ2VDbWRuYW1lIiwiVGV4dENvbXBvbmVudCIsIm9wZW5TbGlkZXIiLCJ0b3BlbSIsIlNsaWRlckNvbXBvbmVudCIsInNldExpbWl0cyIsInNldER5bmFtaWNUb29sdGlwIiwiQVBQRU5EX01FVEhPRFMiLCJBRVNUSEVUSUNfU1RZTEVTIiwiUE9TSVRJT05fU1RZTEVTIiwiREVGQVVMVF9TRVRUSU5HUyIsImFlc3RoZXRpY1N0eWxlIiwiYXBwZW5kTWV0aG9kIiwic2hvdWxkU2hvd01lbnVPblNlbGVjdCIsImNNZW51V2lkdGgiLCJjTWVudUZvbnRDb2xvciIsImNNZW51QmFja2dyb3VuZENvbG9yIiwiYXV0b2hpZGUiLCJjdXN0b21fYmcxIiwiY3VzdG9tX2JnMiIsImN1c3RvbV9iZzMiLCJjdXN0b21fYmc0IiwiY3VzdG9tX2JnNSIsImN1c3RvbV9mYzEiLCJjdXN0b21fZmMyIiwiY3VzdG9tX2ZjMyIsImN1c3RvbV9mYzQiLCJjdXN0b21fZmM1Iiwic2VsZkRlc3RydWN0Iiwicm9vdFNwbGl0cyIsIndvcmtzcGFjZSIsInJvb3RTcGxpdCIsImZsb2F0aW5nU3BsaXQiLCJjaGlsZHJlbiIsImNoaWxkIiwiV29ya3NwYWNlV2luZG93IiwiZ2V0Um9vdFNwbGl0cyIsImxlYWYiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY01lbnVUb29sYmFyUG9wb3ZlckJhciIsImVsZW1lbnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmUiLCJjbGVhclRvb2xiYXIiLCJpc0V4aXN0b29sYmFyIiwicG9zaXRpb24iLCJjb250YWluZXIiLCJhY3RpdmVMZWFmIiwidmlldyIsInF1ZXJ5U2VsZWN0b3IiLCJnZXROZXN0ZWRPYmplY3QiLCJuZXN0ZWRPYmoiLCJwYXRoQXJyIiwicmVkdWNlIiwib2JqIiwia2V5IiwidW5kZWZpbmVkIiwic2V0SGlsaXRlIiwia2V5cyIsImhvdyIsImZsYXQiLCJnZXRIb3RrZXkiLCJjbWRpZCIsImhpZ2hsaWdodCIsImFyciIsImZpbmRDb21tYW5kIiwiZGVma2V5cyIsImhvdGtleXMiLCJjayIsImhvdGtleU1hbmFnZXIiLCJjdXN0b21LZXlzIiwiZ2V0TW9kZXN0YXRlIiwiYWN0aXZlUGFuZSIsImdldEFjdGl2ZVZpZXdPZlR5cGUiLCJNYXJrZG93blZpZXciLCJjdXJyZW50bW9kZSIsImdldE1vZGUiLCJjaGVja0h0bWwiLCJodG1sU3RyIiwidGVzdCIsImNyZWF0ZVRhYmxlY2VsbCIsImVsIiwidGFiIiwicm93cyIsInJsZW4iLCJsZW5ndGgiLCJpIiwiY2VsbHMiLCJqIiwib25jbGljayIsImJhY2tjb2xvciIsImJhY2tncm91bmRDb2xvciIsInNldGNvbG9ySGV4Iiwic2V0Rm9udGNvbG9yIiwiZmlsbCIsInNldEJhY2tncm91bmRjb2xvciIsImNvbG9yIiwiZWRpdG9yIiwic2VsZWN0VGV4dCIsImdldFNlbGVjdGlvbiIsIl9odG1sMCIsIl9odG1sMSIsIl9odG1sMiIsInJlcGxhY2VTZWxlY3Rpb24iLCJleGVjIiwiZXhlY3V0ZUNvbW1hbmRCeUlkIiwidGhhdCIsImFDb2xvciIsInN0ckhleCIsImhleCIsIk51bWJlciIsImFOdW0iLCJudW1IZXgiLCJxdWl0ZUZvcm1hdGJydXNoZXMiLCJUZW1wX05vdGljZSIsImhpZGUiLCJzZXRFTl9CR19Gb3JtYXRfQnJ1c2giLCJzZXRFTl9Gb250Q29sb3JfRm9ybWF0X0JydXNoIiwic2V0RU5fVGV4dF9Gb3JtYXRfQnJ1c2giLCJzZXRIZWFkZXIiLCJfc3RyIiwibmV3c3RyIiwibGluZXRleHQiLCJnZXRMaW5lIiwiZ2V0Q3Vyc29yIiwibGluZSIsImxpbmVuZCIsInJlZ2V4IiwibWF0Y2hzdHIiLCJtYXRjaCIsImdldFJhbmdlIiwiY2giLCJzZXRMaW5lIiwic2V0Q3Vyc29yIiwic2V0Rm9ybWF0ZXJhc2VyIiwibm90aWNlRWwiLCJpbm5lclRleHQiLCJtZFRleHQiLCJjTWVudVRvb2xiYXJQb3BvdmVyIiwiZ2VuZXJhdGVNZW51IiwiYnRud2lkdGgiLCJjTWVudVRvb2xiYXIiLCJjbGFzc05hbWUiLCJQb3BvdmVyTWVudSIsImhlaWdodCIsInJlbW92ZUNsYXNzIiwibGVhZndpZHRoIiwiY3VycmVudGxlYWYiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJib2R5IiwiX2IiLCJ0aXAiLCJfYnRuIiwic2V0SVNfTU9SRV9CdXR0b24iLCJCdXR0b25Db21wb25lbnQiLCJzZXRDbGFzcyIsImJ1dHRvbkVsIiwiaW5uZXJIVE1MIiwic3VibWVudSIsInNlbGVjdG9yIiwiZGl2IiwiY3JlYXRlRGl2Iiwic3ViaXRlbSIsImhvdGtleSIsInN1Yl9idG4iLCJzZXRUb29sdGlwIiwib25DbGljayIsImJ1dHRvbjIiLCJzdWJtZW51MiIsImNvbG9ycGlja2VyIiwic2V0dGluZyIsIm9wZW5UYWJCeUlkIiwic2V0dGluZ0VJIiwiYWN0aXZlVGFiIiwiY2FsbCIsImJhY2tjb2xvcnBpY2tlciIsImJ1dHRvbiIsIk1vcmVjb250YWluZXIiLCJJU19NT1JFX0J1dHRvbiIsImNNb3JlTWVudSIsIm1vcmVidXR0b24iLCJjcmVhdGVNb3JlbWVudSIsImFicyIsIkl0ZW1WaWV3IiwiZ2V0Vmlld1R5cGUiLCJmb250Y29sb3IiLCJiZ2NvbG9yIiwiZm9udF9jb2xvdXJfZG9tIiwiYmFja2dyb3VuZF9jb2xvdXJfZG9tIiwic2V0c3ZnQ29sb3IiLCJjcmVhdGVNZW51Iiwib3duS2V5cyIsIm9iamVjdCIsImVudW1lcmFibGVPbmx5IiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJfb2JqZWN0U3ByZWFkMiIsInRhcmdldCIsImFyZ3VtZW50cyIsInNvdXJjZSIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJwcm90b3R5cGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9leHRlbmRzIiwiYXNzaWduIiwiaGFzT3duUHJvcGVydHkiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsInNvdXJjZUtleXMiLCJpbmRleE9mIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2VTeW1ib2xLZXlzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ1c2VyQWdlbnQiLCJwYXR0ZXJuIiwibmF2aWdhdG9yIiwiSUUxMU9yTGVzcyIsIkVkZ2UiLCJGaXJlRm94IiwiU2FmYXJpIiwiSU9TIiwiQ2hyb21lRm9yQW5kcm9pZCIsImNhcHR1cmVNb2RlIiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbiIsImV2ZW50IiwiZm4iLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWF0Y2hlcyIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwiXyIsImdldFBhcmVudE9ySG9zdCIsImhvc3QiLCJub2RlVHlwZSIsInBhcmVudE5vZGUiLCJjbG9zZXN0IiwiY3R4IiwiaW5jbHVkZUNUWCIsIl90aHJvdHRsZVRpbWVvdXQiLCJSX1NQQUNFIiwidG9nZ2xlQ2xhc3MiLCJzdGF0ZSIsImNzcyIsInByb3AiLCJ2YWwiLCJkZWZhdWx0VmlldyIsImdldENvbXB1dGVkU3R5bGUiLCJjdXJyZW50U3R5bGUiLCJtYXRyaXgiLCJzZWxmT25seSIsImFwcGxpZWRUcmFuc2Zvcm1zIiwidHJhbnNmb3JtIiwibWF0cml4Rm4iLCJET01NYXRyaXgiLCJXZWJLaXRDU1NNYXRyaXgiLCJDU1NNYXRyaXgiLCJNU0NTU01hdHJpeCIsImZpbmQiLCJ0YWdOYW1lIiwibGlzdCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibiIsImdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQiLCJzY3JvbGxpbmdFbGVtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0UmVjdCIsInJlbGF0aXZlVG9Db250YWluaW5nQmxvY2siLCJyZWxhdGl2ZVRvTm9uU3RhdGljUGFyZW50IiwidW5kb1NjYWxlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZWxSZWN0IiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0Iiwid2lkdGgiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJjb250YWluZXJSZWN0IiwicGFyc2VJbnQiLCJlbE1hdHJpeCIsInNjYWxlWCIsImEiLCJzY2FsZVkiLCJkIiwiaXNTY3JvbGxlZFBhc3QiLCJlbFNpZGUiLCJwYXJlbnRTaWRlIiwicGFyZW50IiwiZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQiLCJlbFNpZGVWYWwiLCJwYXJlbnRTaWRlVmFsIiwiZ2V0Q2hpbGQiLCJjaGlsZE51bSIsIm9wdGlvbnMiLCJpbmNsdWRlRHJhZ0VsIiwiY3VycmVudENoaWxkIiwiZGlzcGxheSIsIlNvcnRhYmxlIiwiZ2hvc3QiLCJkcmFnZ2VkIiwiZHJhZ2dhYmxlIiwibGFzdENoaWxkIiwibGFzdCIsImxhc3RFbGVtZW50Q2hpbGQiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibm9kZU5hbWUiLCJjbG9uZSIsImdldFJlbGF0aXZlU2Nyb2xsT2Zmc2V0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsIndpblNjcm9sbGVyIiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsImluY2x1ZGVTZWxmIiwiZWxlbSIsImdvdFNlbGYiLCJjbGllbnRXaWR0aCIsInNjcm9sbFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiZWxlbUNTUyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsImlzUmVjdEVxdWFsIiwicmVjdDEiLCJyZWN0MiIsInJvdW5kIiwidGhyb3R0bGUiLCJjYWxsYmFjayIsIm1zIiwiYXJncyIsIl90aGlzIiwic2Nyb2xsQnkiLCJ4IiwieSIsIlBvbHltZXIiLCIkIiwialF1ZXJ5IiwiWmVwdG8iLCJkb20iLCJjbG9uZU5vZGUiLCJleHBhbmRvIiwiZ2V0VGltZSIsIkFuaW1hdGlvblN0YXRlTWFuYWdlciIsImFuaW1hdGlvbkNhbGxiYWNrSWQiLCJhbmltYXRpb25TdGF0ZXMiLCJjYXB0dXJlQW5pbWF0aW9uU3RhdGUiLCJhbmltYXRpb24iLCJzbGljZSIsInJlY3QiLCJmcm9tUmVjdCIsInRoaXNBbmltYXRpb25EdXJhdGlvbiIsImNoaWxkTWF0cml4IiwiZiIsImFkZEFuaW1hdGlvblN0YXRlIiwicmVtb3ZlQW5pbWF0aW9uU3RhdGUiLCJzcGxpY2UiLCJpbmRleE9mT2JqZWN0IiwiYW5pbWF0ZUFsbCIsImNsZWFyVGltZW91dCIsImFuaW1hdGluZyIsImFuaW1hdGlvblRpbWUiLCJ0aW1lIiwidG9SZWN0IiwicHJldkZyb21SZWN0IiwicHJldlRvUmVjdCIsImFuaW1hdGluZ1JlY3QiLCJ0YXJnZXRNYXRyaXgiLCJzcXJ0IiwicG93IiwiY2FsY3VsYXRlUmVhbFRpbWUiLCJhbmltYXRlIiwibWF4IiwiYW5pbWF0aW9uUmVzZXRUaW1lciIsImN1cnJlbnRSZWN0IiwiZHVyYXRpb24iLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsImFuaW1hdGluZ1giLCJhbmltYXRpbmdZIiwiZm9yUmVwYWludER1bW15IiwicmVwYWludCIsImVhc2luZyIsImFuaW1hdGVkIiwicGx1Z2lucyIsImRlZmF1bHRzIiwiaW5pdGlhbGl6ZUJ5RGVmYXVsdCIsIlBsdWdpbk1hbmFnZXIiLCJtb3VudCIsIm9wdGlvbiIsInAiLCJwbHVnaW5OYW1lIiwiY29uY2F0IiwicGx1Z2luRXZlbnQiLCJldmVudE5hbWUiLCJzb3J0YWJsZSIsImV2dCIsImV2ZW50Q2FuY2VsZWQiLCJjYW5jZWwiLCJldmVudE5hbWVHbG9iYWwiLCJpbml0aWFsaXplUGx1Z2lucyIsImluaXRpYWxpemVkIiwibW9kaWZpZWQiLCJtb2RpZnlPcHRpb24iLCJnZXRFdmVudFByb3BlcnRpZXMiLCJldmVudFByb3BlcnRpZXMiLCJtb2RpZmllZFZhbHVlIiwib3B0aW9uTGlzdGVuZXJzIiwiX2V4Y2x1ZGVkIiwiX3JlZiIsIm9yaWdpbmFsRXZlbnQiLCJkYXRhIiwiYmluZCIsImRyYWdFbCIsInBhcmVudEVsIiwiZ2hvc3RFbCIsInJvb3RFbCIsIm5leHRFbCIsImxhc3REb3duRWwiLCJjbG9uZUVsIiwiY2xvbmVIaWRkZW4iLCJkcmFnU3RhcnRlZCIsIm1vdmVkIiwicHV0U29ydGFibGUiLCJhY3RpdmVTb3J0YWJsZSIsImFjdGl2ZSIsIm9sZEluZGV4Iiwib2xkRHJhZ2dhYmxlSW5kZXgiLCJuZXdJbmRleCIsIm5ld0RyYWdnYWJsZUluZGV4IiwiaGlkZUdob3N0Rm9yVGFyZ2V0IiwiX2hpZGVHaG9zdEZvclRhcmdldCIsInVuaGlkZUdob3N0Rm9yVGFyZ2V0IiwiX3VuaGlkZUdob3N0Rm9yVGFyZ2V0IiwiY2xvbmVOb3dIaWRkZW4iLCJjbG9uZU5vd1Nob3duIiwiZGlzcGF0Y2hTb3J0YWJsZUV2ZW50IiwiX2Rpc3BhdGNoRXZlbnQiLCJpbmZvIiwidGFyZ2V0RWwiLCJ0b0VsIiwiZnJvbUVsIiwiZXh0cmFFdmVudFByb3BlcnRpZXMiLCJvbk5hbWUiLCJjaGFyQXQiLCJDdXN0b21FdmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJ0byIsImZyb20iLCJwdWxsTW9kZSIsImxhc3RQdXRNb2RlIiwiYWxsRXZlbnRQcm9wZXJ0aWVzIiwiYWN0aXZlR3JvdXAiLCJ0YXBFdnQiLCJ0b3VjaEV2dCIsImxhc3REeCIsImxhc3REeSIsInRhcERpc3RhbmNlTGVmdCIsInRhcERpc3RhbmNlVG9wIiwibGFzdFRhcmdldCIsImxhc3REaXJlY3Rpb24iLCJ0YXJnZXRNb3ZlRGlzdGFuY2UiLCJnaG9zdFJlbGF0aXZlUGFyZW50IiwiYXdhaXRpbmdEcmFnU3RhcnRlZCIsImlnbm9yZU5leHRDbGljayIsInNvcnRhYmxlcyIsInBhc3RGaXJzdEludmVydFRocmVzaCIsImlzQ2lyY3Vtc3RhbnRpYWxJbnZlcnQiLCJnaG9zdFJlbGF0aXZlUGFyZW50SW5pdGlhbFNjcm9sbCIsIl9zaWxlbnQiLCJzYXZlZElucHV0Q2hlY2tlZCIsImRvY3VtZW50RXhpc3RzIiwiUG9zaXRpb25HaG9zdEFic29sdXRlbHkiLCJDU1NGbG9hdFByb3BlcnR5Iiwic3VwcG9ydERyYWdnYWJsZSIsImNyZWF0ZUVsZW1lbnQiLCJzdXBwb3J0Q3NzUG9pbnRlckV2ZW50cyIsImNzc1RleHQiLCJwb2ludGVyRXZlbnRzIiwiX2RldGVjdERpcmVjdGlvbiIsImVsQ1NTIiwiZWxXaWR0aCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiYm9yZGVyTGVmdFdpZHRoIiwiYm9yZGVyUmlnaHRXaWR0aCIsImNoaWxkMSIsImNoaWxkMiIsImZpcnN0Q2hpbGRDU1MiLCJzZWNvbmRDaGlsZENTUyIsImZpcnN0Q2hpbGRXaWR0aCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInNlY29uZENoaWxkV2lkdGgiLCJmbGV4RGlyZWN0aW9uIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsInRvdWNoaW5nU2lkZUNoaWxkMiIsImNsZWFyIiwiX3ByZXBhcmVHcm91cCIsInRvRm4iLCJwdWxsIiwic2FtZUdyb3VwIiwiZ3JvdXAiLCJvdGhlckdyb3VwIiwib3JpZ2luYWxHcm91cCIsImNoZWNrUHVsbCIsImNoZWNrUHV0IiwicHV0IiwicmV2ZXJ0Q2xvbmUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsIm5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50IiwidG91Y2hlcyIsIm5lYXJlc3QiLCJjbGllbnRYIiwiY2xpZW50WSIsInNvbWUiLCJ0aHJlc2hvbGQiLCJlbXB0eUluc2VydFRocmVzaG9sZCIsImluc2lkZUhvcml6b250YWxseSIsImluc2lkZVZlcnRpY2FsbHkiLCJyZXQiLCJfb25EcmFnT3ZlciIsIl9jaGVja091dHNpZGVUYXJnZXRFbCIsIl9pc091dHNpZGVUaGlzRWwiLCJzb3J0IiwiZGlzYWJsZWQiLCJzdG9yZSIsImhhbmRsZSIsInN3YXBUaHJlc2hvbGQiLCJpbnZlcnRTd2FwIiwiaW52ZXJ0ZWRTd2FwVGhyZXNob2xkIiwicmVtb3ZlQ2xvbmVPbkhpZGUiLCJkaXJlY3Rpb24iLCJnaG9zdENsYXNzIiwiY2hvc2VuQ2xhc3MiLCJkcmFnQ2xhc3MiLCJpZ25vcmUiLCJwcmV2ZW50T25GaWx0ZXIiLCJzZXREYXRhIiwiZGF0YVRyYW5zZmVyIiwidGV4dENvbnRlbnQiLCJkcm9wQnViYmxlIiwiZHJhZ292ZXJCdWJibGUiLCJkYXRhSWRBdHRyIiwiZGVsYXlPblRvdWNoT25seSIsInRvdWNoU3RhcnRUaHJlc2hvbGQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiZm9yY2VGYWxsYmFjayIsImZhbGxiYWNrQ2xhc3MiLCJmYWxsYmFja09uQm9keSIsImZhbGxiYWNrVG9sZXJhbmNlIiwiZmFsbGJhY2tPZmZzZXQiLCJzdXBwb3J0UG9pbnRlciIsIm5hdGl2ZURyYWdnYWJsZSIsIl9vblRhcFN0YXJ0IiwiZ2V0IiwiX29uTW92ZSIsImRyYWdSZWN0IiwidGFyZ2V0UmVjdCIsIndpbGxJbnNlcnRBZnRlciIsInJldFZhbCIsIm9uTW92ZUZuIiwib25Nb3ZlIiwiZHJhZ2dlZFJlY3QiLCJyZWxhdGVkIiwicmVsYXRlZFJlY3QiLCJfZGlzYWJsZURyYWdnYWJsZSIsIl91bnNpbGVudCIsIl9nZW5lcmF0ZUlkIiwic3JjIiwiaHJlZiIsInN1bSIsImNoYXJDb2RlQXQiLCJfbmV4dFRpY2siLCJfY2FuY2VsTmV4dFRpY2siLCJjb250YWlucyIsIl9nZXREaXJlY3Rpb24iLCJ0eXBlIiwidG91Y2giLCJwb2ludGVyVHlwZSIsIm9yaWdpbmFsVGFyZ2V0Iiwic2hhZG93Um9vdCIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJyb290IiwiaW5wdXRzIiwiY2hlY2tlZCIsIl9zYXZlSW5wdXRDaGVja2VkU3RhdGUiLCJpc0NvbnRlbnRFZGl0YWJsZSIsImNyaXRlcmlhIiwiX3ByZXBhcmVEcmFnU3RhcnQiLCJkcmFnU3RhcnRGbiIsIm93bmVyRG9jdW1lbnQiLCJuZXh0U2libGluZyIsIl9sYXN0WCIsIl9sYXN0WSIsIl9vbkRyb3AiLCJfZGlzYWJsZURlbGF5ZWREcmFnRXZlbnRzIiwiX3RyaWdnZXJEcmFnU3RhcnQiLCJfZGlzYWJsZURlbGF5ZWREcmFnIiwiX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlciIsIl9kcmFnU3RhcnRUaW1lciIsImZsb29yIiwiX29uVG91Y2hNb3ZlIiwiX29uRHJhZ1N0YXJ0Iiwic2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiZXJyIiwiX2RyYWdTdGFydGVkIiwiZmFsbGJhY2siLCJfYXBwZW5kR2hvc3QiLCJfbnVsbGluZyIsIl9lbXVsYXRlRHJhZ092ZXIiLCJlbGVtZW50RnJvbVBvaW50IiwiZ2hvc3RNYXRyaXgiLCJyZWxhdGl2ZVNjcm9sbE9mZnNldCIsImR4IiwiZHkiLCJiIiwiYyIsImNzc01hdHJpeCIsInJlbW92ZUF0dHJpYnV0ZSIsIl9oaWRlQ2xvbmUiLCJjbG9uZUlkIiwiaW5zZXJ0QmVmb3JlIiwiX2xvb3BJZCIsInNldEludGVydmFsIiwiZWZmZWN0QWxsb3dlZCIsIl9kcmFnU3RhcnRJZCIsInJldmVydCIsInZlcnRpY2FsIiwiaXNPd25lciIsImNhblNvcnQiLCJmcm9tU29ydGFibGUiLCJjb21wbGV0ZWRGaXJlZCIsImRyYWdPdmVyRXZlbnQiLCJfaWdub3JlV2hpbGVBbmltYXRpbmciLCJjb21wbGV0ZWQiLCJlbExhc3RDaGlsZCIsInNwYWNlciIsIl9naG9zdElzTGFzdCIsImNoYW5nZWQiLCJfZ2hvc3RJc0ZpcnN0IiwidGFyZ2V0QmVmb3JlRmlyc3RTd2FwIiwic2libGluZyIsImRpZmZlcmVudExldmVsIiwiZGlmZmVyZW50Um93Q29sIiwiZHJhZ0VsUzFPcHAiLCJkcmFnRWxTMk9wcCIsImRyYWdFbE9wcExlbmd0aCIsInRhcmdldFMxT3BwIiwidGFyZ2V0UzJPcHAiLCJ0YXJnZXRPcHBMZW5ndGgiLCJfZHJhZ0VsSW5Sb3dDb2x1bW4iLCJzaWRlMSIsInNjcm9sbGVkUGFzdFRvcCIsInNjcm9sbEJlZm9yZSIsImlzTGFzdFRhcmdldCIsIm1vdXNlT25BeGlzIiwidGFyZ2V0TGVuZ3RoIiwidGFyZ2V0UzEiLCJ0YXJnZXRTMiIsImludmVydCIsIl9nZXRJbnNlcnREaXJlY3Rpb24iLCJfZ2V0U3dhcERpcmVjdGlvbiIsImRyYWdJbmRleCIsIm5leHRFbGVtZW50U2libGluZyIsImFmdGVyIiwibW92ZVZlY3RvciIsImV4dHJhIiwiYXhpcyIsImluc2VydGlvbiIsIl9zaG93Q2xvbmUiLCJfb2ZmTW92ZUV2ZW50cyIsIl9vZmZVcEV2ZW50cyIsImNsZWFySW50ZXJ2YWwiLCJzYXZlIiwiaGFuZGxlRXZlbnQiLCJkcm9wRWZmZWN0IiwiX2dsb2JhbERyYWdPdmVyIiwidG9BcnJheSIsIm9yZGVyIiwiZ2V0QXR0cmlidXRlIiwidXNlQW5pbWF0aW9uIiwiaXRlbXMiLCJzZXQiLCJkZXN0cm95IiwiQXJyYXkiLCJ1dGlscyIsImlzIiwiZXh0ZW5kIiwiZHN0IiwibmV4dFRpY2siLCJjYW5jZWxOZXh0VGljayIsImRldGVjdERpcmVjdGlvbiIsIl9sZW4iLCJfa2V5IiwiY3JlYXRlIiwidmVyc2lvbiIsInNjcm9sbEVsIiwic2Nyb2xsUm9vdEVsIiwibGFzdEF1dG9TY3JvbGxYIiwibGFzdEF1dG9TY3JvbGxZIiwidG91Y2hFdnQkMSIsInBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsIiwiYXV0b1Njcm9sbHMiLCJzY3JvbGxpbmciLCJjbGVhckF1dG9TY3JvbGxzIiwiYXV0b1Njcm9sbCIsInBpZCIsImNsZWFyUG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwiLCJpc0ZhbGxiYWNrIiwic2Nyb2xsIiwic2Nyb2xsQ3VzdG9tRm4iLCJzZW5zIiwic2Nyb2xsU2Vuc2l0aXZpdHkiLCJzcGVlZCIsInNjcm9sbFNwZWVkIiwic2Nyb2xsVGhpc0luc3RhbmNlIiwic2Nyb2xsRm4iLCJsYXllcnNPdXQiLCJjdXJyZW50UGFyZW50IiwiY2FuU2Nyb2xsWCIsImNhblNjcm9sbFkiLCJzY3JvbGxQb3NYIiwic2Nyb2xsUG9zWSIsInZ4IiwidnkiLCJsYXllciIsInNjcm9sbE9mZnNldFkiLCJzY3JvbGxPZmZzZXRYIiwiYnViYmxlU2Nyb2xsIiwiZHJvcCIsInRvU29ydGFibGUiLCJjaGFuZ2VkVG91Y2hlcyIsIm9uU3BpbGwiLCJSZXZlcnQiLCJSZW1vdmUiLCJzdGFydEluZGV4IiwiZHJhZ1N0YXJ0IiwiX3JlZjIiLCJfcmVmMyIsIl9yZWY0IiwicGFyZW50U29ydGFibGUiLCJBdXRvU2Nyb2xsIiwiZm9yY2VBdXRvU2Nyb2xsRmFsbGJhY2siLCJfaGFuZGxlQXV0b1Njcm9sbCIsIl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwiLCJkcmFnT3ZlckNvbXBsZXRlZCIsImRyYWdPdmVyQnViYmxlIiwibnVsbGluZyIsIm9nRWxlbVNjcm9sbGVyIiwibmV3RWxlbSIsInNlbGYiLCJtb2R1bGUiLCJleHBvcnRzIiwibyIsInIiLCJ0b1N0cmluZ1RhZyIsImRlZmF1bHQiLCJMIiwiSFRNTENvbGxlY3Rpb24iLCJOb2RlTGlzdCIsImlzQXJyYXkiLCJzIiwiYWRqdXN0YWJsZUlucHV0TnVtYmVycyIsImNyZWF0ZUVsZW1lbnRGcm9tU3RyaW5nIiwiY3JlYXRlRnJvbVRlbXBsYXRlIiwiZXZlbnRQYXRoIiwibCIsInJlc29sdmVFbGVtZW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJwYXJlbnRFbGVtZW50IiwiRWxlbWVudCIsInNoaWZ0S2V5IiwiY3RybEtleSIsImRlbHRhWSIsInNlbGVjdGlvblN0YXJ0IiwiZm9jdXMiLCJzZXRTZWxlY3Rpb25SYW5nZSIsIm1pbiIsInUiLCJoIiwibSIsImciLCJpc05hTiIsInciLCJ0b0xvd2VyQ2FzZSIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJjbXlrIiwicmdiYSIsImhzbGEiLCJoc3ZhIiwiaGV4YSIsInZhbHVlcyIsIkEiLCJ0b0ZpeGVkIiwidG9IU1ZBIiwidG9IU0xBIiwidG9SR0JBIiwidG9DTVlLIiwidG9IRVhBIiwicGFkU3RhcnQiLCJDIiwibG9jayIsIm9uY2hhbmdlIiwib25zdG9wIiwiX2tleWJvYXJkIiwiYWN0aXZlRWxlbWVudCIsIndyYXBwZXIiLCJ1cGRhdGUiLCJjYWNoZSIsInN0YXJ0c1dpdGgiLCJfdGFwc3RhcnQiLCJfdGFwc3RvcCIsIl90YXBtb3ZlIiwib2Zmc2V0SGVpZ2h0IiwidHJpZ2dlciIsImsiLCJlbGVtZW50cyIsIlMiLCJ2YXJpYW50RmxpcE9yZGVyIiwic3RhcnQiLCJtaWRkbGUiLCJlbmQiLCJwb3NpdGlvbkZsaXBPcmRlciIsIm1hcmdpbiIsIk8iLCJ2cyIsInZtIiwidmUiLCJocyIsImhtIiwiaGUiLCJFIiwiaW5pdCIsInNob3ciLCJjaGFuZ2UiLCJjaGFuZ2VzdG9wIiwic3dhdGNoc2VsZWN0IiwiREVGQVVMVF9PUFRJT05TIiwic3dhdGNoZXMiLCJjb21wb25lbnRzIiwidGhlbWUiLCJzbGlkZXJzIiwibG9ja09wYWNpdHkiLCJwYWRkaW5nIiwiaW5jbHVkZXMiLCJpbnRlcmFjdGlvbiIsInByZXZpZXciLCJvcGFjaXR5IiwiaHVlIiwicGFsZXR0ZSIsIl9wcmVCdWlsZCIsIl9idWlsZENvbXBvbmVudHMiLCJfYmluZEV2ZW50cyIsIl9maW5hbEJ1aWxkIiwiYWRkU3dhdGNoIiwiX3Jvb3QiLCJfbmFub3BvcCIsIkhUTUxFbGVtZW50IiwicmVmZXJlbmNlIiwicG9wcGVyIiwiRXJyb3IiLCJfdCIsIl9zZXR1cEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0Q29sb3IiLCJfcmVQb3NpdGlvbmluZ1BpY2tlciIsImRlZmF1bHRSZXByZXNlbnRhdGlvbiIsIl9yZXByZXNlbnRhdGlvbiIsInNldENvbG9yUmVwcmVzZW50YXRpb24iLCJzaG93QWx3YXlzIiwiX2luaXRpYWxpemluZ0FjdGl2ZSIsIl9lbWl0IiwidXNlQXNCdXR0b24iLCJpbmxpbmUiLCJhcHBDbGFzcyIsImlucHV0IiwiaGlkZGVuIiwicmVwbGFjZUNoaWxkIiwiZGlzYWJsZSIsImNvbXBhcmlzb24iLCJ0cmFuc2l0aW9uIiwibGFzdENvbG9yIiwiX2NvbG9yIiwiX2xhc3RDb2xvciIsInBpY2tlciIsImN1cnJlbnRDb2xvciIsIl9yZWNhbGMiLCJfdXBkYXRlT3V0cHV0IiwiYmFja2dyb3VuZCIsInNldFByb3BlcnR5IiwiX3N3YXRjaENvbG9ycyIsInNsaWRlciIsInNlbGVjdGFibGUiLCJfY29tcG9uZW50cyIsIl9jbGVhckNvbG9yIiwic2V0SFNWQSIsImFwcGx5Q29sb3IiLCJjbG9zZVdpdGhLZXkiLCJpc09wZW4iLCJjb2RlIiwiYWRqdXN0YWJsZU51bWJlcnMiLCJnZXRDb2xvclJlcHJlc2VudGF0aW9uIiwidG9QcmVjaXNpb24iLCJhdXRvUmVwb3NpdGlvbiIsImNsb3NlT25TY3JvbGwiLCJfZXZlbnRCaW5kaW5ncyIsIm91dHB1dFByZWNpc2lvbiIsIl9wYXJzZUxvY2FsQ29sb3IiLCJpMThuIiwiSTE4Tl9ERUZBVUxUUyIsIl9ldmVudExpc3RlbmVyIiwicmVtb3ZlU3dhdGNoIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJkZXN0cm95QW5kUmVtb3ZlIiwiY2xpY2siLCJnZXRDb2xvciIsImdldFNlbGVjdGVkQ29sb3IiLCJnZXRSb290IiwiZW5hYmxlIiwiZ2V0UGlja3JTZXR0aW5ncyIsIm9wdHMiLCJpc1ZpZXciLCJkZWZhdWx0Q29sb3IiLCJvblBpY2tyQ2FuY2VsIiwiaW5zdGFuY2UiLCJnZXRDb21hbmRpbmRleCIsImNNZW51VG9vbGJhclNldHRpbmdUYWIiLCJQbHVnaW5TZXR0aW5nVGFiIiwiU2V0dGluZyIsInNldE5hbWUiLCJzZXREZXNjIiwiYWRkRHJvcGRvd24iLCJkcm9wZG93biIsIm1ldGhvZHMiLCJtZXRob2QiLCJhZGRPcHRpb25zIiwiYWVzdGhldGljcyIsImFlc3RoZXRpYyIsInBvc290aW9ucyIsInBvc290aW9uIiwiYWRkVG9nZ2xlIiwidG9nZ2xlIiwiYWRkU2xpZGVyIiwiYWRkQnV0dG9uIiwicmVsb2FkQnV0dG9uIiwicGlja3IiLCJQaWNrciIsImNvbnRyb2xFbCIsInNlbGVjdCIsImNNZW51VG9vbGJhckNvbW1hbmRzQ29udGFpbmVyIiwiZHJhZ2VsZSIsIm9uU29ydCIsImFycmF5UmVzdWx0IiwicmVtb3ZlZCIsIm9uU3RhcnQiLCJuZXdDb21tYW5kIiwic2V0dGluZ0VsIiwiYWRkaWNvbiIsImRlbGV0ZUJ1dHRvbiIsImNNZW51VG9vbGJhckNvbW1hbmRzQ29udGFpbmVyX3N1YiIsInN1YnJlc3VsdCIsImRhdGFzZXQiLCJfYyIsInN1YkNvbW1hbmQiLCJzdWJzZXR0aW5nIiwiY2hhbmdlbmFtZSIsIm5hbWVFbCIsImFkZHN1YkJ1dHRvbiIsImNEb25hdGlvbkRpdiIsImNyZWRpdCIsImRvbmF0ZVRleHQiLCJhcHBlbmRUZXh0IiwiY3JlYXRlRG9uYXRlQnV0dG9uIiwibGluayIsImljb25zIiwiY01lbnVUb29sYmFyU3ViIiwiY01lbnVUb29sYmFyQWRkIiwiY01lbnVUb29sYmFyRGVsZXRlIiwiY01lbnVUb29sYmFyUmVsb2FkIiwib2JzaWRpYW4iLCJhZGRJY29ucyIsImFkZEljb24iLCJ0b2dnbGVGdWxsIiwiaXNGdWxsIiwiZXhpdEZ1bGwiLCJiZUZ1bGwiLCJET0NfRUwiLCJoZWFkRWwiLCJzdHlsZUVsIiwiVFlQRV9SRVFVRVNUX0ZVTExfU0NSRUVOIiwiVFlQRV9FWElUX0ZVTExfU0NSRUVOIiwiVFlQRV9GVUxMX1NDUkVFTl9FTEVNRU5UIiwiZ2V0Q3VycmVudEVsZW1lbnQiLCJjTWVudVRvb2xiYXJQbHVnaW4iLCJQbHVnaW4iLCJtb2RDb21tYW5kcyIsImhhbmRsZWNNZW51VG9vbGJhciIsInRvb2xiYXIiLCJoYW5kbGVjTWVudVRvb2xiYXJfbGF5b3V0IiwiaGFuZGxlY01lbnVUb29sYmFyX3Jlc2l6ZSIsIkxlYWZfV2lkdGgiLCJyZXNldFRvb2xiYXIiLCJvbmxvYWQiLCJtYW5pZmVzdCIsImxvYWRTZXR0aW5ncyIsImdlbmVyYXRlQ29tbWFuZHMiLCJvbkxheW91dFJlYWR5Iiwic2V0dXBTdGF0dXNCYXIiLCJpbml0X2V2dCIsImRvYyIsImFkZFNldHRpbmdUYWIiLCJyZWdpc3RlckV2ZW50IiwiRU5fRm9udENvbG9yX0Zvcm1hdF9CcnVzaCIsIkVOX0JHX0Zvcm1hdF9CcnVzaCIsIkVOX1RleHRfRm9ybWF0X0JydXNoIiwicmVnaXN0ZXJEb21FdmVudCIsImNtRWRpdG9yIiwiaGFzRm9jdXMiLCJpc291cmNlIiwic29tZXRoaW5nU2VsZWN0ZWQiLCJjbWhlaWdodCIsInJsZWZ0d2lkdGgiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibGVmdHdpZHRoIiwiX2QiLCJiYXJ3aWR0aCIsImJhckhlaWdodCIsImJvZHl3aWR0aCIsImNvb3JkcyIsImN1cnNvckZyb20iLCJjdXJzb3JDb29yZHMiLCJjb29yZHNBdFBvcyIsIm9mZnNldCIsInBvc1RvT2Zmc2V0IiwiY20iLCJnZXRDb29yZHMiLCJjdXJzb3JfaGVhZCIsImN1cnNvcl9mcm9tIiwidG9wcHgiLCJsZWZ0cHgiLCJjcmVhdGVGb2xsb3dpbmdiYXIiLCJhZGRDb21tYW5kIiwiaW5kZW50TGlzdCIsInVuaW5kZW50TGlzdCIsInVuZG8iLCJyZWRvIiwibW9kaWZpZXJzIiwiZnVsbHNjcmVlbk11dGF0aW9uT2JzZXJ2ZXIiLCJtb2Ryb290IiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9uUmVjb3JkcyIsIm11dGF0aW9uUmVjb3JkIiwiYWRkZWROb2RlcyIsIm5vZGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsImZ1bGxzY3JlZW5Nb2RlIiwicmlnaHRsZWFmIiwibGVmdGxlYWYiLCJ3b3JrcGxhY2VmdWxsc2NyZWVuTW9kZSIsImNvbW1hbmRzTWFwIiwiaHJsaW5lIiwiY2hhciIsInByZWZpeCIsInN1ZmZpeCIsImlzbGluZWhlYWQiLCJqdXN0aWZ5IiwiY2VudGVyIiwidW5kZXJsaW5lIiwic3VwZXJzY3JpcHQiLCJzdWJzY3JpcHQiLCJjb2RlYmxvY2siLCJzZWxlY3RlZFRleHQiLCJjdXJzZXJTdGFydCIsImN1cnNlckVuZCIsIm1vZGUiLCJwcmVTdGFydCIsInRyaW1TdGFydCIsInN1ZkVuZCIsInRyaW1FbmQiLCJyZXBsYWNlUmFuZ2UiLCJhcHBseUNvbW1hbmQiLCJzdGF0dXNCYXJJY29uIiwiYWRkU3RhdHVzQmFySXRlbSIsInN0YXR1c0JhclJlY3QiLCJzdGF0dXNCYXJJY29uUmVjdCIsIm1lbnUiLCJNZW51IiwiYWRkSXRlbSIsInNldFRpdGxlIiwic2V0U2VjdGlvbiIsIml0ZW1Eb20iLCJ0b2dnbGVDb21wb25lbnQiLCJUb2dnbGVDb21wb25lbnQiLCJzZXREaXNhYmxlZCIsInNob3dBdFBvc2l0aW9uIiwib251bmxvYWQiLCJzdGF0dXMiLCJzZXRUZW1wX05vdGljZSIsImNvbnRlbnQiLCJsb2FkRGF0YSIsInNhdmVEYXRhIl0sIm1hcHBpbmdzIjoidUNBcUVPLFNBQVNBLEVBQVVDLEVBQVNDLEVBQVlDLEVBQUdDLEdBRTlDLE9BQU8sSUFBS0QsSUFBTUEsRUFBSUUsV0FBVSxTQUFVQyxFQUFTQyxHQUMvQyxTQUFTQyxFQUFVQyxHQUFTLElBQU1DLEVBQUtOLEVBQVVPLEtBQUtGLElBQVcsTUFBT0csR0FBS0wsRUFBT0ssR0FBTyxDQUMzRixTQUFTQyxFQUFTSixHQUFTLElBQU1DLEVBQUtOLEVBQWlCLE1BQUVLLElBQVcsTUFBT0csR0FBS0wsRUFBT0ssR0FBTyxDQUM5RixTQUFTRixFQUFLSSxHQUpsQixJQUFlTCxFQUlhSyxFQUFPQyxLQUFPVCxFQUFRUSxFQUFPTCxRQUoxQ0EsRUFJeURLLEVBQU9MLE1BSmhEQSxhQUFpQk4sRUFBSU0sRUFBUSxJQUFJTixHQUFFLFNBQVVHLEdBQVdBLEVBQVFHLEVBQU8sS0FJaEJPLEtBQUtSLEVBQVdLLEVBQVksQ0FDOUdILEdBQU1OLEVBQVlBLEVBQVVhLE1BQU1oQixFQUFTQyxHQUFjLEtBQUtTLE9BQ3RFLEdBQ0EsQ0M1RU0sU0FBZ0JPLEVBQUtDLDRDQUN6QixPQUFPLElBQUlkLFNBQVNDLEdBQVljLFdBQVdkLEVBQVNhLE9BQ3JELENBRUssU0FBVUUsRUFBa0JDLEdBQ2hDLElBQUlDLEVBQVFDLEtBQUtDLE1BQU1DLFNBQVMsSUFFaEMsT0FEQUgsR0FBU0ksS0FBS0MsU0FBU0YsU0FBUyxJQUFJRyxPQUFPLEVBQUdQLEdBQ3ZDQyxDQUNULFVBQ2dCTyxFQUFXQyxFQUErQ0MsRUFBdUJDLEdBQy9G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LFNBQ0EsU0FDQSxTQUNBLFFBQ0EsT0FDQSxPQUNBLGdCQUNBLGdCQUNBLFNBQ0EsY0FDQSxpQkFDQSxXQUNBLFdBQ0EsVUFDQSxXQUNBLFlBQ0EsU0FDQSxTQUNBLE9BQ0EsWUFDQSxNQUNBLFlBQ0EsUUFDQSxTQUNBLE9BQ0EsU0FDQSxnQkFDQSxVQUNBLE1BQ0EsV0FDQSxVQUNBLGVBQ0EsVUFDQSxRQUNBLGVBQ0EsZUFDQSxhQUNBLGVBQ0EsZUFDQSxhQUNBLG1CQUNBLGlCQUNBLFdBQ0EsZUFDQSxhQUNBLGFBQ0EsWUFDQSxhQUNBLFdBQ0EsWUFDQSxhQUNBLFlBQ0EsWUFDQSxhQUNBLGFBQ0EsYUFDQSxjQUNBLFlBQ0EsYUFDQSxXQUNBLGtCQUNBLGNBQ0EsWUFDQSxlQUNBLGFBQ0EsY0FDQSxpQkFDQSxjQUNBLFlBQ0EsZ0JBQ0EsWUFDQSxnQkFDQSxjQUNBLGlCQUNBLG1CQUNBLGVBQ0EsZ0JBQ0EsWUFDQSxjQUNBLFlBQ0EsVUFDQSxlQUNBLGFBQ0EsZ0JBQ0EsY0FDQSxlQUNBLFVBQ0EsU0FDQSxPQUNBLFFBQ0EsT0FDQSxTQUNBLGNBQ0EsV0FDQSxxQkFDQSxzQkFDQSxPQUNBLFFBQ0EsaUJBQ0EsYUFDQSxnQkFDQSxjQUNBLG9CQUNBLGtCQUNBLGtCQUNBLGdCQUNBLFdBQ0EsU0FDQSxRQUNBLGlCQUNBLGVBQ0EsZUFDQSxnQkFDQSxlQUNBLGFBQ0EsY0FDQSxjQUNBLGVBQ0EsZUFDQSxhQUNBLGNBQ0EsZUFDQSxjQUNBLGdCQUNBLGNBQ0Esa0JBQ0EsZ0JBQ0EsaUJBQ0EsY0FDQSxZQUNBLFdBQ0EsU0FDQSxVQUNBLGFBQ0EsVUFDQSxRQUNBLFNBQ0EsUUFDQSxPQUNBLGtCQUNBLFlBQ0EsVUFDQSxRQUNBLFFBQ0EsTUFDQSxRQUNBLE9BQ0Esa0JBQ0EsYUFDQSxhQUNBLGNBQ0EsV0FDQSxZQUNBLDBCQUNBLHlCQUNBLG1CQUNBLFNBQ0EsU0FDQSxjQUNBLFVBQ0EsVUFDQSxRQUNBLE9BQ0EsaUJBQ0EsUUFDQSxPQUNBLGtCQUNBLGdCQUNBLFNBQ0EsYUFDQSxPQUNBLGFBQ0EsV0FDQSxPQUNBLE9BQ0EsYUFDQSxjQUNBLGtCQUNBLFlBQ0EsY0FDQSxRQUNBLGNBQ0EsVUFDQSxjQUNBLFVBQ0EsT0FDQSxZQUNBLFlBQ0EsY0FDQSxZQUNBLGFBQ0EsUUFDQSxTQUNBLFFBQ0EsU0FDQSxlQUNBLFdBQ0EsT0FDQSxVQUNBLFlBQ0EsU0FDQSxlQUNBLFdBQ0EsTUFDQSxXQUNBLGVBQ0EsWUFDQSxhQUNBLGlCQUNBLGVBQ0EsT0FDQSxXQUNBLFlBQ0EsV0FDQSxTQUNBLGVBQ0EsUUFDQSxRQUNBLFNBQ0EsbUJBQ0EsY0FDQSxjQUNBLGtCQUNBLFNBQ0EsT0FDQSxVQUNBLFlBQ0EsZ0JBQ0EsWUFDQSxhQUNBLFlBQ0EsU0FDQSxPQUNBLFdBQ0EsY0FDQSxXQUNBLGFBQ0EsYUFDQSxlQUNBLFlBQ0EsYUFDQSxhQUNBLFNBQ0EsT0FDQSxXQUNBLFNBQ0EsZUFDQSxhQUNBLFNBQ0EsT0FDQSxTQUNBLFVBQ0EsVUFDQSxTQUNBLGFBQ0EsYUFDQSxZQUNBLFlBQ0EsZ0JBQ0EsY0FDQSxlQUNBLFNBQ0EsT0FDQSxRQUNBLGNBQ0EsVUFDQSxNQUNBLFVBQ0EsYUFDQSxXQUNBLFFBQ0EsZ0JBQ0EsWUFDQSxNQUNBLE9BQ0EsaUJBQ0EsaUJBQ0EsUUFDQSxVQUNBLE1BQ0EsYUFDQSxZQUNBLGFBQ0EsV0FDQSxlQUNBLGVBQ0EsUUFDQSxjQUNBLGtCQUNBLFVBQ0EsT0FDQSxrQkFDQSxnQkFDQSxnQkFDQSxXQUNBLGtCQUNBLHNCQUNBLGdCQUNBLFFBQ0EsVUFDQSxrQkFDQSxnQkFDQSxrQkFDQSxnQkFDQSxPQUNBLFVBQ0EsVUFDQSxVQUNBLFFBQ0Esa0JBQ0EsZUFDQSxpQkFDQSxhQUNBLFVBQ0EsWUFDQSxVQUNBLFNBQ0EsVUFDQSxZQUNBLGdCQUNBLGdCQUNBLGVBQ0EsZUFDQSxpQkFDQSxZQUNBLFVBQ0EsZUFDQSxlQUNBLGFBQ0EsVUFDQSxXQUNBLFlBQ0EsZUFDQSxlQUNBLGdCQUNBLFFBQ0EsV0FDQSxTQUNBLFVBQ0Esa0JBQ0EsYUFDQSxrQkFDQSxpQkFDQSxlQUNBLFlBQ0EsaUJBQ0EsUUFDQSxZQUNBLGFBQ0EsVUFDQSxNQUNBLFVBQ0EsUUFDQSxRQUNBLGNBQ0EsT0FDQSxXQUNBLGNBQ0EsY0FDQSxPQUNBLFNBQ0EsVUFDQSxVQUNBLGlCQUNBLFlBQ0EsUUFDQSxVQUNBLFNBQ0EsVUFDQSxRQUNBLGlCQUNBLFFBQ0EsVUFDQSxTQUNBLE9BQ0EsY0FDQSxhQUNBLFFBQ0EsV0FDQSxTQUNBLFlBQ0EsUUFDQSxTQUNBLFNBQ0EsZ0JBQ0EsWUFDQSxhQUNBLFlBQ0EsTUFDQSxRQUNBLGdCQUNBLE9BQ0EsV0FDQSxRQUNBLFVBQ0EsWUFDQSxZQUNBLE9BQ0EsV0FDQSxtQkFDQSxlQUNBLFNBQ0EsU0FDQSxPQUNBLHVCQUNBLHFCQUNBLGFBQ0EsZUFDQSxhQUNBLFNBQ0EsYUFDQSxXQUNBLFVBQ0EsUUFDQSxRQUNBLGVBQ0EsZUFDQSxlQUNBLGFBQ0EsU0FDQSxRQUNBLGVBQ0EsZ0JBQ0EsU0FDQSxTQUNBLFFBQ0EsVUFDQSxnQkFDQSxlQUNBLFVBQ0EsUUFDQSxjQUNBLGFBQ0EsZ0JBQ0EsY0FDQSxTQUNBLFFBQ0EsWUFDQSxlQUNBLFFBQ0EsUUFDQSxRQUNBLFFBQ0EscUJBQ0EsVUFDQSxzQkFDQSxhQUNBLGFBQ0EsUUFDQSxZQUNBLE9BQ0EsV0FDQSxZQUNBLFVBQ0EsU0FDQSxTQUNBLFlBQ0EsV0FDQSxPQUNBLGNBQ0EsVUFDQSxjQUNBLGNBQ0EscUJBQ0EsbUJBQ0EsZ0JBQ0EsWUFDQSxVQUNBLGFBQ0EsV0FDQSxXQUNBLE1BQ0EsVUFDQSxTQUNBLGNBQ0EsY0FDQSxnQkFDQSxRQUNBLFNBQ0EsVUFDQSxVQUNBLFFBQ0EsU0FDQSxNQUNBLE9BQ0EsU0FDQSxPQUNBLGtCQUNBLFdBQ0Esb0JBQ0EsY0FDQSx3QkFDQSxrQkFDQSxjQUNBLGNBQ0EsWUFDQSxTQUNBLFlBQ0EsY0FDQSxRQUNBLGNBQ0EsZUFDQSxVQUNBLFlBQ0EsUUFDQSxVQUNBLFFBQ0EsaUJBQ0EsWUFDQSxRQUNBLFNBQ0EsZ0JBQ0EsY0FDQSxXQUNBLFNBQ0EsUUFDQSxPQUNBLEtBQ0EsU0FDQSxVQUNBLE9BQ0EsV0FDQSxZQUNBLFNBQ0EsT0FDQSxXQUNBLFNBQ0EsU0FDQSxlQUNBLFNBQ0EsTUFDQSxhQUNBLFdBQ0EsYUFDQSxZQUNBLFNBQ0EsT0FDQSxRQUNBLG1CQUNBLFdBQ0EsZ0JBQ0EsV0FDQSxjQUNBLFVBQ0EsWUFDQSxRQUNBLE9BQ0EsWUFDQSxXQUNBLFdBQ0EsV0FDQSxTQUNBLFNBQ0EsU0FDQSxPQUNBLFFBQ0EsUUFDQSxTQUNBLFVBQ0EsV0FDQSxPQUNBLE9BQ0EsT0FDQSxZQUNBLFNBQ0EsV0FDQSxZQUNBLFdBQ0EsSUFDQSxVQUNBLFVBQ0EsTUFDQSxVQUNBLFdBQ0EsYUFDQSxRQUNBLFNBQ0EsaUJBQ0EsV0FDQSxTQUNBLFNBQ0EsYUFDQSxjQUNBLHdCQUNBLGNBQ0EsYUFDQSxhQUNBLFdBQ0EsT0FDQSxZQUNBLFNBQ0EsYUFDQSxlQUNBLGVBQ0EsYUFDQSxvQkFDQSxjQUNBLE9BQ0EsYUFDQSxZQUNBLFVBQ0EsdUJBQ0Esd0JBQ0EscUJBQ0EsdUJBQ0EsZ0JBQ0Esc0JBQ0EsTUFDQSxtQkFDQSxPQUNBLG1CQUNBLGlCQUNBLDBCQUNBLGVBQ0EsZ0JBQ0EscUJBQ0EsY0FDQSxRQUNBLFVBQ0EsUUFDQSxPQUNBLGVBQ0EsT0FDQSxhQUNBLFFBQ0EsT0FDQSxRQUNBLGFBQ0EsY0FDQSxjQUNBLHdCQUNBLFlBQ0Esb0JBQ0EsWUFDQSxTQUNBLGNBQ0EsVUFDQSxPQUNBLGtCQUNBLGFBQ0EsY0FDQSxTQUNBLGdCQUNBLGlCQUNBLGdCQUNBLGFBQ0EsWUFDQSxrQkFDQSxnQkFDQSxhQUNBLGVBQ0Esc0JBQ0Esa0JBQ0EsYUFDQSxjQUNBLGFBQ0Esb0JBQ0Esb0JBQ0EsaUJBQ0EsYUFDQSxhQUNBLG1CQUNBLHFCQUNBLHFCQUNBLHNCQUNBLHFCQUNBLGlCQUNBLHdCQUNBLDBCQUNBLGNBQ0EsMkJBQ0EsUUFDQSxtQkFDQSxvQkFDQSxlQUNBLGlCQUNBLGFBQ0Esa0JBQ0EsUUFDQSxjQUNBLGlCQUNBLGdCQUNBLGlCQUNBLHVCQUNBLHlCQUNBLG1CQUNBLGtCQUNBLGtCQUNBLGlCQUNBLGtCQUNBLGNBQ0EsaUJB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
