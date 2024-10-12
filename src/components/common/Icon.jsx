import { cloneElement } from 'react'

const Icon = ({ type, className, ...props }) =>
  cloneElement(icons[type], {
    ...props,
    className
  })

export default Icon

export const IconTypes = {
  logo: 'logo',
  logoText: 'logoText',
  eye: 'eye',
  delete: 'delete',
  votes: 'votes',
  folder: 'folder',
  attention: 'attention',
  statistics: 'statistics',
  settings: 'settings',
  off: 'off',
  menu: 'menu',
  plusCircle: 'plusCircle',
  file: 'file',
  search: 'search',
  chevronDown: 'chevronDown',
  filter: 'filter',
  edit: 'edit',
  arrows: 'arrows',
  squareIconUp: 'squareIconUp',
  squareIconDown: 'squareIconDown',
  circleCheck: 'circleCheck',
  refresh: 'refresh',
  plus: 'plus',
  camera: 'camera',
  chevronUp: 'chevronUp',
  heart: 'heart',
  heartRed: 'heartRed',
  attentionColor: 'attentionColor',
  loader: 'loader',
  eyeInvs: 'eyeInvs',
  cross: 'cross',
  loading: 'loading',
  calendar: 'calendar',
  downloadRound: 'downloadRound',
  download: 'download',
  stats: 'stats',
  attach: 'attach',
  arrowUp: 'arrowUp',
  arrowDown: 'arrowDown',
  ball: 'ball',
  tv: 'tv',
  videoCamera: 'videoCamera',
  layers: 'layers',
  bigPlus: 'bigPlus',
  newTab: 'newTab',
  plusV2: 'plusV2',
  user: 'user',
  image: 'image',
  briefcase: 'briefcase',
  lock: 'lock',
  at: 'at',
  globe: 'globe',
  columns: 'columns',
  label: 'label',
  arrowCircle: 'arrowCircle',
  warning: 'warning',
  add: 'add',
  accountCircle: 'accountCircle',
  trash: 'trash',
  lockClosed: 'lockClosed'
}

const icons = {
  [IconTypes.lockClosed]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect width='18' height='11' x='3' y='11' rx='2' ry='2' />
      <path d='M7 11V7a5 5 0 0 1 10 0v4' />
    </svg>
  ),
  [IconTypes.trash]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M3 6h18' />
      <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
      <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
      <line x1='10' x2='10' y1='11' y2='17' />
      <line x1='14' x2='14' y1='11' y2='17' />
    </svg>
  ),
  [IconTypes.accountCircle]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M18 20a6 6 0 0 0-12 0' />
      <circle cx='12' cy='10' r='4' />
      <circle cx='12' cy='12' r='10' />
    </svg>
  ),
  [IconTypes.add]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='12' cy='12' r='10' />
      <path d='M8 12h8' />
      <path d='M12 8v8' />
    </svg>
  ),
  [IconTypes.warning]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3' />
      <path d='M12 9v4' />
      <path d='M12 17h.01' />
    </svg>
  ),
  [IconTypes.refresh]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8' />
      <path d='M21 3v5h-5' />
      <path d='M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16' />
      <path d='M8 16H3v5' />
    </svg>
  ),
  [IconTypes.arrowCircle]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M22 12A10 10 0 1 1 12 2' />
      <path d='M22 2 12 12' />
      <path d='M16 2h6v6' />
    </svg>
  ),
  [IconTypes.label]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z' />
      <circle cx='7.5' cy='7.5' r='.5' fill='currentColor' />
    </svg>
  ),
  [IconTypes.columns]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect width='18' height='18' x='3' y='3' rx='2' />
      <path d='M9 3v18' />
      <path d='M15 3v18' />
    </svg>
  ),
  [IconTypes.globe]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='12' cy='12' r='10' />
      <path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' />
      <path d='M2 12h20' />
    </svg>
  ),
  [IconTypes.at]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='12' cy='12' r='4' />
      <path d='M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8' />
    </svg>
  ),
  [IconTypes.lock]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='12' cy='16' r='1' />
      <rect width='18' height='12' x='3' y='10' rx='2' />
      <path d='M7 10V7a5 5 0 0 1 9.33-2.5' />
    </svg>
  ),
  [IconTypes.briefcase]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' />
      <rect width='20' height='14' x='2' y='6' rx='2' />
    </svg>
  ),
  [IconTypes.image]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect width='18' height='18' x='3' y='3' rx='2' ry='2' />
      <circle cx='9' cy='9' r='2' />
      <path d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21' />
    </svg>
  ),
  [IconTypes.user]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='19.767'
      height='19.5'
      viewBox='0 0 19.767 19.5'
      stroke='currentColor'
      fill='none'
    >
      <path
        d='M17.982,18.725a7.5,7.5,0,0,0-11.964,0m11.963,0a9,9,0,1,0-11.963,0m11.963,0a9,9,0,0,1-11.963,0M15,9.75a3,3,0,1,1-3-3A3,3,0,0,1,15,9.75Z'
        transform='translate(-2.116 -2.25)'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1'
      />
    </svg>
  ),
  [IconTypes.plusV2]: (
    <svg
      stroke='currentColor'
      fill='currentColor'
      viewBox='0 0 1024 1024'
      version='1.1'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z'></path>
      <path d='M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z'></path>
    </svg>
  ),
  [IconTypes.newTab]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='12'
      height='12'
      viewBox='0 0 12 12'
    >
      <path
        d='M13.667,13.667H4.333V4.333H9V3H4.333A1.333,1.333,0,0,0,3,4.333v9.333A1.333,1.333,0,0,0,4.333,15h9.333A1.337,1.337,0,0,0,15,13.667V9H13.667ZM10.333,3V4.333h2.393L6.173,10.887l.94.94,6.553-6.553V7.667H15V3Z'
        transform='translate(-3 -3)'
      />
    </svg>
  ),
  [IconTypes.bigPlus]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 48 48'
    >
      <rect width='2' height='48' transform='translate(23)' fill='#ebeef1' />
      <rect
        width='2'
        height='48'
        transform='translate(48 23) rotate(90)'
        fill='#ebeef1'
      />
    </svg>
  ),
  [IconTypes.layers]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='currentColor'
    >
      <g transform='translate(-1.5 -1.5)'>
        <path d='M9.5,1.5a.5.5,0,0,1,.224.053l7.5,3.75a.5.5,0,0,1,0,.894l-7.5,3.75a.5.5,0,0,1-.447,0L1.776,6.2a.5.5,0,0,1,0-.894l7.5-3.75A.5.5,0,0,1,9.5,1.5Zm6.382,4.25L9.5,2.559,3.118,5.75,9.5,8.941Z' />
        <path
          d='M9.5,21.25a.5.5,0,0,1-.224-.053l-7.5-3.75a.5.5,0,0,1,.447-.894L9.5,20.191l7.276-3.638a.5.5,0,1,1,.447.894l-7.5,3.75A.5.5,0,0,1,9.5,21.25Z'
          transform='translate(0 -3.75)'
        />
        <path
          d='M9.5,16.25a.5.5,0,0,1-.224-.053l-7.5-3.75a.5.5,0,0,1,.447-.894L9.5,15.191l7.276-3.638a.5.5,0,1,1,.447.894l-7.5,3.75A.5.5,0,0,1,9.5,16.25Z'
          transform='translate(0 -2.5)'
        />
      </g>
    </svg>
  ),
  [IconTypes.videoCamera]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='17.9'
      height='11.525'
      viewBox='0 0 17.9 11.525'
      fill='currentColor'
    >
      <g transform='translate(-387.55 -99.55)'>
        <path
          d='M41.054,13.247v9.3l-5.5-2.964V16.21Zm-.9,7.792V14.753l-3.7,1.995v2.3Z'
          transform='translate(364.396 87.417)'
        />
        <path
          d='M11.979,21.075H2.417A1.869,1.869,0,0,1,.55,19.208V11.417A1.869,1.869,0,0,1,2.417,9.55h9.562a1.869,1.869,0,0,1,1.867,1.867v7.792A1.869,1.869,0,0,1,11.979,21.075ZM2.417,10.45a.968.968,0,0,0-.967.967v7.792a.968.968,0,0,0,.967.967h9.562a.968.968,0,0,0,.967-.967V11.417a.968.968,0,0,0-.967-.967Z'
          transform='translate(387 90)'
        />
      </g>
    </svg>
  ),
  [IconTypes.tv]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='17.41'
      height='17'
      viewBox='0 0 17.41 17'
      fill='currentColor'
    >
      <g transform='translate(-1.5 -2)'>
        <path
          d='M16.769,19.808H3.641A2.143,2.143,0,0,1,1.5,17.667V8.641A2.143,2.143,0,0,1,3.641,6.5H16.769A2.143,2.143,0,0,1,18.91,8.641v9.026A2.143,2.143,0,0,1,16.769,19.808ZM3.641,7.5A1.142,1.142,0,0,0,2.5,8.641v9.026a1.142,1.142,0,0,0,1.141,1.141H16.769a1.142,1.142,0,0,0,1.141-1.141V8.641A1.142,1.142,0,0,0,16.769,7.5Z'
          transform='translate(0 -0.808)'
        />
        <path
          d='M11.372,5.872a.5.5,0,0,1-.354-.146L8.146,2.854a.5.5,0,0,1,.707-.707l2.518,2.518L13.89,2.146a.5.5,0,0,1,.707.707L11.725,5.725A.5.5,0,0,1,11.372,5.872Z'
          transform='translate(-1.167)'
        />
      </g>
    </svg>
  ),
  [IconTypes.ball]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16.8'
      height='16.8'
      viewBox='0 0 16.8 16.8'
      fill='currentColor'
    >
      <g transform='translate(-454.6 -223.6)'>
        <path
          d='M8-.4A8.4,8.4,0,1,1-.4,8,8.41,8.41,0,0,1,8-.4Zm0,16A7.6,7.6,0,1,0,.4,8,7.609,7.609,0,0,0,8,15.6Z'
          transform='translate(455 224)'
        />
        <path
          d='M91.425,85.6a.4.4,0,0,1,.235.076l3.325,2.417a.4.4,0,0,1,.145.447l-1.267,3.917a.4.4,0,0,1-.381.277H89.367a.4.4,0,0,1-.381-.277L87.719,88.54a.4.4,0,0,1,.145-.447l3.325-2.417A.4.4,0,0,1,91.425,85.6Zm2.855,2.97-2.855-2.075L88.57,88.57l1.088,3.364h3.535Z'
          transform='translate(371.575 142.5)'
        />
        <path
          d='M0,2.233a.4.4,0,0,1-.4-.4V0A.4.4,0,0,1,0-.4.4.4,0,0,1,.4,0V1.833A.4.4,0,0,1,0,2.233Z'
          transform='translate(463 226.667)'
        />
        <path
          d='M95.917,41.117a.4.4,0,0,1-.235-.076l-2.917-2.117a.4.4,0,0,1,.47-.647l2.682,1.946L98.6,38.276a.4.4,0,1,1,.47.647L96.152,41.04A.4.4,0,0,1,95.917,41.117Z'
          transform='translate(367.083 185.95)'
        />
        <path
          d='M1.75.967a.4.4,0,0,1-.123-.02L-.123.381a.4.4,0,0,1-.257-.5.4.4,0,0,1,.5-.257l1.75.567A.4.4,0,0,1,1.75.967Z'
          transform='translate(457.925 230.35)'
        />
        <path
          d='M32.1,73.05a.4.4,0,0,1-.236-.723l2.682-1.954-1.019-3.149a.4.4,0,1,1,.761-.246L35.4,70.4a.4.4,0,0,1-.145.446l-2.917,2.125A.4.4,0,0,1,32.1,73.05Z'
          transform='translate(422.908 159.825)'
        />
        <path
          d='M0,1.883a.4.4,0,0,1-.234-.076.4.4,0,0,1-.089-.559L.751-.235A.4.4,0,0,1,1.31-.324.4.4,0,0,1,1.4.235L.324,1.718A.4.4,0,0,1,0,1.883Z'
          transform='translate(459.867 234.833)'
        />
        <path
          d='M51.825,183.625a.4.4,0,0,1-.38-.276L50.418,180.2H47.1a.4.4,0,1,1,0-.8h3.608a.4.4,0,0,1,.38.276l1.117,3.425a.4.4,0,0,1-.38.524Z'
          transform='translate(409.158 56.517)'
        />
        <path
          d='M1.075,1.883a.4.4,0,0,1-.324-.165L-.324.235A.4.4,0,0,1-.235-.324a.4.4,0,0,1,.559.089L1.4,1.249a.4.4,0,0,1-.324.635Z'
          transform='translate(465.058 234.833)'
        />
        <path
          d='M152.2,183.625a.4.4,0,0,1-.38-.524l1.117-3.425a.4.4,0,0,1,.38-.276h3.608a.4.4,0,0,1,0,.8h-3.318l-1.027,3.149A.4.4,0,0,1,152.2,183.625Z'
          transform='translate(312.817 56.517)'
        />
        <path
          d='M0,.967A.4.4,0,0,1-.381.69a.4.4,0,0,1,.257-.5l1.75-.567a.4.4,0,0,1,.5.257.4.4,0,0,1-.257.5L.123.947A.4.4,0,0,1,0,.967Z'
          transform='translate(466.325 230.35)'
        />
        <path
          d='M191.816,73.05a.4.4,0,0,1-.235-.077l-2.917-2.125a.4.4,0,0,1-.145-.446l1.108-3.425a.4.4,0,0,1,.761.246l-1.019,3.149,2.682,1.954a.4.4,0,0,1-.236.723Z'
          transform='translate(279.175 159.825)'
        />
      </g>
    </svg>
  ),
  [IconTypes.attach]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18.75'
      height='15'
      viewBox='0 0 18.75 15'
    >
      <path
        id='import'
        d='M15.511,19.25h1.406V17.141h2.109V15.734H16.917V13.625H15.511v2.109H13.4v1.406h2.109ZM5.456,23a1.332,1.332,0,0,1-.984-.434,1.362,1.362,0,0,1-.422-.973V9.406a1.362,1.362,0,0,1,.422-.973A1.332,1.332,0,0,1,5.456,8h6.562l1.406,1.406h7.969A1.488,1.488,0,0,1,22.8,10.813V21.594A1.488,1.488,0,0,1,21.394,23Zm0-13.594V21.594H21.394V10.813H12.839L11.433,9.406Zm0,0v0Z'
        transform='translate(-4.05 -8)'
        fill='#061822'
      />
    </svg>
  ),

  [IconTypes.download]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='100.089'
      viewBox='0 0 100 100.089'
    >
      <g
        id='_115-upload'
        data-name='115-upload'
        transform='translate(100 100.089) rotate(180)'
      >
        <path id='Path_462' data-name='Path 462' d='M0,0H100V7.143H0Z' />
        <path
          id='Path_463'
          data-name='Path 463'
          d='M28.564,13.672v64.9h7.143v-64.9L59.243,37.207l5.022-5.05L32.136,0,0,32.15,5.036,37.2Z'
          transform='translate(17.871 21.518)'
        />
      </g>
    </svg>
  ),
  [IconTypes.downloadRound]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='100'
      viewBox='0 0 100 100'
    >
      <path
        id='download'
        d='M95,60a5,5,0,0,0-5,5h0V85a5,5,0,0,1-5,5H15a5,5,0,0,1-5-5h0V65A5,5,0,1,0,0,65V85a15,15,0,0,0,15,15H85a15,15,0,0,0,15-15h0V65a5,5,0,0,0-5-5ZM46.45,68.55a5,5,0,0,0,1.667,1.05,4.713,4.713,0,0,0,3.8,0,5,5,0,0,0,1.667-1.05l20-20a5.02,5.02,0,0,0-7.1-7.1h0L55,52.95V5a5,5,0,0,0-10-.008V52.95L33.55,41.45a5.02,5.02,0,0,0-7.1,7.1h0Z'
      />
    </svg>
  ),
  [IconTypes.calendar]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='90.909'
      height='100'
      viewBox='0 0 90.909 100'
    >
      <g
        id='Group_2641'
        data-name='Group 2641'
        transform='translate(-36.741 -1.2)'
      >
        <path
          id='calendar'
          d='M82.2,83.018a4.545,4.545,0,1,0-4.545-4.545A4.544,4.544,0,0,0,82.2,83.018Zm22.727,0a4.545,4.545,0,1,0-4.545-4.545,4.544,4.544,0,0,0,4.545,4.545Zm0-18.182a4.545,4.545,0,1,0-4.545-4.545,4.544,4.544,0,0,0,4.545,4.545Zm-22.727,0a4.545,4.545,0,1,0-4.545-4.545A4.544,4.544,0,0,0,82.2,64.836Zm31.818-54.545h-4.545V5.745a4.545,4.545,0,0,0-9.091-.008v4.553H64.014V5.745a4.545,4.545,0,0,0-9.091,0h0v4.545H50.377A13.633,13.633,0,0,0,36.741,23.927h0V87.564A13.633,13.633,0,0,0,50.377,101.2h63.636A13.637,13.637,0,0,0,127.65,87.564h0V23.927a13.637,13.637,0,0,0-13.636-13.636Zm4.545,77.273a4.544,4.544,0,0,1-4.545,4.545H50.377a4.539,4.539,0,0,1-4.545-4.545h0V46.655h72.727Zm0-50H45.832V23.927a4.544,4.544,0,0,1,4.545-4.545h4.545v4.545a4.545,4.545,0,1,0,9.091,0V19.382h36.364v4.545a4.545,4.545,0,1,0,9.091.008V19.382h4.545a4.549,4.549,0,0,1,4.545,4.545h0ZM59.468,64.836a4.545,4.545,0,1,0-4.545-4.545,4.544,4.544,0,0,0,4.545,4.545Zm0,18.182a4.545,4.545,0,1,0-4.545-4.545,4.544,4.544,0,0,0,4.545,4.545Z'
          transform='translate(0 0)'
        />
      </g>
    </svg>
  ),
  [IconTypes.loading]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='52'
      height='20'
      viewBox='0 0 52 20'
    >
      <g id='loadin' transform='translate(0 -40)'>
        <circle
          id='Ellipse_1'
          data-name='Ellipse 1'
          cx='6'
          cy='6'
          r='6'
          transform='translate(0 44)'
          fill='#b2b2b2'
        >
          <animate
            attributeName='opacity'
            dur='1s'
            values='0.4;1;0.4'
            repeatCount='indefinite'
            begin='0.1'
          />
        </circle>
        <circle
          id='Ellipse_2'
          data-name='Ellipse 2'
          cx='6'
          cy='6'
          r='6'
          transform='translate(20 44)'
          fill='#b2b2b2'
        >
          <animate
            attributeName='opacity'
            dur='1s'
            values='0.4;1;0.4'
            repeatCount='indefinite'
            begin='0.2'
          />
        </circle>
        <circle
          id='Ellipse_3'
          data-name='Ellipse 3'
          cx='6'
          cy='6'
          r='6'
          transform='translate(40 44)'
          fill='#b2b2b2'
        >
          <animate
            attributeName='opacity'
            dur='1s'
            values='0.4;1;0.4'
            repeatCount='indefinite'
            begin='0.3'
          />
        </circle>
      </g>
    </svg>
  ),
  [IconTypes.cross]: (
    <svg
      version='1.1'
      id='Capa_1'
      x='0px'
      y='0px'
      viewBox='0 0 460.775 460.775'
    >
      <path
        fill='red'
        d='M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z'
      />
    </svg>
  ),
  [IconTypes.loader]: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='27 27 46 46'>
      <path
        d='M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50'
        fill='#000'
      >
        <animateTransform
          attributeName='transform'
          attributeType='XML'
          type='rotate'
          dur='1.2s'
          from='0 50 50'
          to='360 50 50'
          repeatCount='indefinite'
        />
      </path>
    </svg>
  ),
  [IconTypes.attentionColor]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='88.485'
      viewBox='0 0 100 88.485'
    >
      <path
        id='Subtraction_2'
        data-name='Subtraction 2'
        d='M92.308,88.485H7.692a7.7,7.7,0,0,1-6.66-11.551L43.34,3.84a7.7,7.7,0,0,1,13.321,0L98.968,76.934a7.7,7.7,0,0,1-6.66,11.551ZM50,66.364a4.81,4.81,0,1,0,4.811,4.81A4.816,4.816,0,0,0,50,66.364Zm0-34.517a2.784,2.784,0,0,0-2.78,2.78V53.863a2.78,2.78,0,0,0,5.561,0V34.627A2.784,2.784,0,0,0,50,31.847Z'
        fill='#ff7f00'
      />
    </svg>
  ),
  [IconTypes.heart]: (
    <svg width='100' height='100' viewBox='0 0 100 100'>
      <defs>
        <clipPath id='clip-SPRK_default_preset_name_custom_1'>
          <rect width='100' height='100' />
        </clipPath>
      </defs>
      <g
        id='SPRK_default_preset_name_custom_1'
        data-name='SPRK_default_preset_name_custom – 1'
        clipPath='url(#clip-SPRK_default_preset_name_custom_1)'
      >
        <path
          id='heart_1_'
          data-name='heart (1)'
          d='M92.855,154.116a24.322,24.322,0,0,0-1.2-7.98,15.579,15.579,0,0,0-3.068-5.5,14.735,14.735,0,0,0-4.547-3.32,20.144,20.144,0,0,0-5.245-1.729,31.918,31.918,0,0,0-5.469-.446,16.05,16.05,0,0,0-6.251,1.423,28.522,28.522,0,0,0-6.185,3.565q-2.819,2.149-4.827,4.018a43.186,43.186,0,0,0-3.348,3.432,3.659,3.659,0,0,1-5.469,0,43.2,43.2,0,0,0-3.348-3.432q-2.009-1.867-4.827-4.018a28.523,28.523,0,0,0-6.167-3.572,16.05,16.05,0,0,0-6.251-1.423,31.911,31.911,0,0,0-5.469.446,20.143,20.143,0,0,0-5.245,1.729,14.735,14.735,0,0,0-4.547,3.32,15.579,15.579,0,0,0-3.068,5.5,24.322,24.322,0,0,0-1.2,7.98q0,9.375,10.434,19.809l32.432,31.249,32.367-31.186Q92.855,163.489,92.855,154.116Zm7.142,0q0,12.331-12.779,25.11L52.446,212.7a3.5,3.5,0,0,1-4.9,0L12.727,179.1a18.392,18.392,0,0,1-1.535-1.451q-.978-1-3.1-3.654A49.382,49.382,0,0,1,4.3,168.552,33.793,33.793,0,0,1,1.317,161.8a24.443,24.443,0,0,1-1.311-7.7q0-12.275,7.086-19.2T26.666,128a22.24,22.24,0,0,1,7.058,1.2,28.566,28.566,0,0,1,6.7,3.236q3.1,2.037,5.329,3.822a51.426,51.426,0,0,1,4.242,3.794,51.435,51.435,0,0,1,4.242-3.794q2.233-1.785,5.329-3.822a28.567,28.567,0,0,1,6.7-3.236,22.239,22.239,0,0,1,7.056-1.2q12.5,0,19.585,6.92t7.088,19.2Z'
          transform='translate(0.003 -118.583)'
        />
      </g>
    </svg>
  ),
  [IconTypes.heartRed]: (
    <svg width='100' height='100' viewBox='0 0 100 100'>
      <defs>
        <clipPath id='clip-SPRK_default_preset_name_custom_1'>
          <rect width='100' height='100' />
        </clipPath>
      </defs>
      <g
        id='SPRK_default_preset_name_custom_1'
        data-name='SPRK_default_preset_name_custom – 1'
        clipPath='url(#clip-SPRK_default_preset_name_custom_1)'
      >
        <path
          fill='red'
          id='heart_1_'
          data-name='heart (1)'
          d='M92.855,154.116a24.322,24.322,0,0,0-1.2-7.98,15.579,15.579,0,0,0-3.068-5.5,14.735,14.735,0,0,0-4.547-3.32,20.144,20.144,0,0,0-5.245-1.729,31.918,31.918,0,0,0-5.469-.446,16.05,16.05,0,0,0-6.251,1.423,28.522,28.522,0,0,0-6.185,3.565q-2.819,2.149-4.827,4.018a43.186,43.186,0,0,0-3.348,3.432,3.659,3.659,0,0,1-5.469,0,43.2,43.2,0,0,0-3.348-3.432q-2.009-1.867-4.827-4.018a28.523,28.523,0,0,0-6.167-3.572,16.05,16.05,0,0,0-6.251-1.423,31.911,31.911,0,0,0-5.469.446,20.143,20.143,0,0,0-5.245,1.729,14.735,14.735,0,0,0-4.547,3.32,15.579,15.579,0,0,0-3.068,5.5,24.322,24.322,0,0,0-1.2,7.98q0,9.375,10.434,19.809l32.432,31.249,32.367-31.186Q92.855,163.489,92.855,154.116Zm7.142,0q0,12.331-12.779,25.11L52.446,212.7a3.5,3.5,0,0,1-4.9,0L12.727,179.1a18.392,18.392,0,0,1-1.535-1.451q-.978-1-3.1-3.654A49.382,49.382,0,0,1,4.3,168.552,33.793,33.793,0,0,1,1.317,161.8a24.443,24.443,0,0,1-1.311-7.7q0-12.275,7.086-19.2T26.666,128a22.24,22.24,0,0,1,7.058,1.2,28.566,28.566,0,0,1,6.7,3.236q3.1,2.037,5.329,3.822a51.426,51.426,0,0,1,4.242,3.794,51.435,51.435,0,0,1,4.242-3.794q2.233-1.785,5.329-3.822a28.567,28.567,0,0,1,6.7-3.236,22.239,22.239,0,0,1,7.056-1.2q12.5,0,19.585,6.92t7.088,19.2Z'
          transform='translate(0.003 -118.583)'
        />
      </g>
    </svg>
  ),
  [IconTypes.chevronUp]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='54.348'
      viewBox='0 0 100 54.348'
      fill='currentColor'
    >
      <g id='download-12' transform='translate(101 55.348) rotate(180)'>
        <path
          id='Expand_More'
          d='M91.395,55.556,50,96.409,8.615,55.551a5.092,5.092,0,0,0-7.139,0,4.946,4.946,0,0,0,0,7.049l44.957,44.378h0a5.086,5.086,0,0,0,7.134,0L98.524,62.6a4.952,4.952,0,0,0,0-7.054A5.089,5.089,0,0,0,91.395,55.556Z'
          transform='translate(1 -53.091)'
        />
      </g>
    </svg>
  ),
  [IconTypes.camera]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='73.171'
      viewBox='0 0 100 73.171'
    >
      <path
        id='Path_5516'
        data-name='Path 5516'
        d='M59,36.951A23.171,23.171,0,1,0,82.171,60.122,23.16,23.16,0,0,0,59,36.951Zm0,41.463A18.293,18.293,0,1,1,77.293,60.122,18.268,18.268,0,0,1,59,78.415ZM99.244,32.073,80.951,32.2l-7.683-11.22A2.546,2.546,0,0,0,71.317,20H46.683a2.546,2.546,0,0,0-1.951.976L37.049,32.2H18.756A9.681,9.681,0,0,0,9,41.829V83.415a9.785,9.785,0,0,0,9.756,9.756H99.244A9.785,9.785,0,0,0,109,83.415V40.732C109,35.366,104.61,32.073,99.244,32.073Zm4.878,51.341a4.892,4.892,0,0,1-4.878,4.878H18.756a4.892,4.892,0,0,1-4.878-4.878V41.829a4.789,4.789,0,0,1,4.878-4.756H38.268a2.546,2.546,0,0,0,1.951-.976L47.9,24.878H70.1L77.78,36.1a2.546,2.546,0,0,0,1.951.976l19.512-.122c2.683,0,4.878,1.1,4.878,3.78Z'
        transform='translate(-9 -20)'
        fill='#828b90'
      />
    </svg>
  ),
  [IconTypes.plus]: (
    <svg
      version='1.1'
      id='Layer_1'
      x='0px'
      y='0px'
      viewBox='0 0 512 512'
      fill='currentColor'
    >
      <polygon
        points='289.391,222.609 289.391,0 222.609,0 222.609,222.609 0,222.609 0,289.391 222.609,289.391 222.609,512 
     289.391,512 289.391,289.391 512,289.391 512,222.609'
      />
    </svg>
  ),
  [IconTypes.circleCheck]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='100'
      viewBox='0 0 100 100'
    >
      <g
        id='Group_2633'
        data-name='Group 2633'
        transform='translate(-1025 -385)'
      >
        <path
          id='Rectangle_2731'
          data-name='Rectangle 2731'
          d='M50,6.667A43.333,43.333,0,0,0,19.359,80.641,43.333,43.333,0,0,0,80.641,19.359,43.05,43.05,0,0,0,50,6.667M50,0A50,50,0,1,1,0,50,50,50,0,0,1,50,0Z'
          transform='translate(1025 385)'
          fill='#00a066'
        />
        <path
          id='_041-checked'
          data-name='041-checked'
          d='M15.755,111.461-.99,95.667,4.086,90.88l11.669,11.007L39.981,79.036l5.075,4.787Z'
          transform='translate(1052.967 338.775)'
          fill='#00a066'
        />
      </g>
    </svg>
  ),
  [IconTypes.squareIconDown]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='100'
      viewBox='0 0 100 100'
    >
      <g id='Group_2631' data-name='Group 2631' transform='translate(-359 54)'>
        <path
          id='Path_5653'
          data-name='Path 5653'
          d='M11.111,0H88.889A11.111,11.111,0,0,1,100,11.111V88.889A11.111,11.111,0,0,1,88.889,100H11.111A11.111,11.111,0,0,1,0,88.889V11.111A11.111,11.111,0,0,1,11.111,0Z'
          transform='translate(359 -54)'
          fill='#ffecec'
        />
        <path
          id='Path_5652'
          data-name='Path 5652'
          d='M34.725,17.082,17.781.138a.51.51,0,0,0-.706.008L.139,17.082a.489.489,0,0,0,0,.686L1.678,19.3A.392.392,0,0,0,2,19.44h0a.526.526,0,0,0,.383-.147L15.836,5.879V42.288a.51.51,0,0,0,.442.486H18.45A.552.552,0,0,0,19,42.24V5.743L32.514,19.318a.458.458,0,0,0,.65.006l1.544-1.544A.556.556,0,0,0,34.725,17.082Z'
          transform='translate(427.173 16.551) rotate(180)'
          fill='#fd4a4a'
        />
      </g>
    </svg>
  ),
  [IconTypes.squareIconUp]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='100'
      viewBox='0 0 100 100'
    >
      <g id='Group_2630' data-name='Group 2630' transform='translate(-318 54)'>
        <path
          id='Path_5654'
          data-name='Path 5654'
          d='M11.111,0H88.889A11.111,11.111,0,0,1,100,11.111V88.889A11.111,11.111,0,0,1,88.889,100H11.111A11.111,11.111,0,0,1,0,88.889V11.111A11.111,11.111,0,0,1,11.111,0Z'
          transform='translate(318 -54)'
          fill='#e5f5ef'
        />
        <path
          id='Path_5651'
          data-name='Path 5651'
          d='M36.317,18.576,19.373,1.632a.51.51,0,0,0-.706.008L1.731,18.576a.489.489,0,0,0,0,.686L3.27,20.8a.392.392,0,0,0,.325.136h0a.526.526,0,0,0,.383-.147L17.428,7.374V43.782a.51.51,0,0,0,.442.486h2.172a.552.552,0,0,0,.55-.533V7.238L34.106,20.813a.458.458,0,0,0,.65.006L36.3,19.274A.556.556,0,0,0,36.317,18.576Z'
          transform='translate(349.741 -27.717)'
          fill='#00a066'
        />
      </g>
    </svg>
  ),
  [IconTypes.arrows]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='90.148'
      viewBox='0 0 100 90.148'
    >
      <g
        id='Group_2625'
        data-name='Group 2625'
        transform='translate(-510 -195)'
      >
        <path
          id='arrow_7_'
          data-name='arrow (7)'
          d='M72.37,4.792l-5.419,5.419L79.759,23.265H6.607v7.882H79.759L66.951,44.2,72.37,49.62,95.03,27.206Z'
          transform='translate(505.207 290.03) rotate(-90)'
          fill='#828b90'
        />
        <path
          id='arrow_7_2'
          data-name='arrow (7)'
          d='M27.543,59.965,4.882,82.379l22.66,22.414,5.419-5.419L20.153,86.32H93.306V78.438H20.153L32.961,65.384Z'
          transform='translate(505.207 290.03) rotate(-90)'
          fill='#828b90'
        />
      </g>
    </svg>
  ),
  [IconTypes.edit]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='100'
      viewBox='0 0 100 100'
    >
      <path
        id='edit_2_'
        data-name='edit (2)'
        d='M97.333,6.62a16.6,16.6,0,0,1,0,23.479L36.017,91.416a20.753,20.753,0,0,1-9.641,5.459L7.357,101.63A4.151,4.151,0,0,1,2.324,96.6L7.078,77.578a20.753,20.753,0,0,1,5.459-9.641L73.854,6.62A16.6,16.6,0,0,1,97.333,6.62ZM67.984,24.229,18.407,73.807a12.452,12.452,0,0,0-3.275,5.785L12.055,91.9l12.307-3.077a12.452,12.452,0,0,0,5.785-3.275l49.575-49.58ZM79.724,12.49l-5.871,5.87L85.59,30.1l5.873-5.868a8.3,8.3,0,0,0-11.74-11.74Z'
        transform='translate(-2.196 -1.757)'
        fill='#212121'
      />
    </svg>
  ),
  [IconTypes.filter]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='93.327'
      viewBox='0 0 100 93.327'
    >
      <path
        id='filter'
        d='M4.333,18.664h.473a13.27,13.27,0,0,0,25.72,0h67.14a3.333,3.333,0,0,0,0-6.667H30.527a13.27,13.27,0,0,0-25.72,0H4.333a3.333,3.333,0,1,0,0,6.667Zm13.333-10A6.667,6.667,0,1,1,11,15.331a6.667,6.667,0,0,1,6.667-6.667Zm80,36.667h-.473a13.27,13.27,0,0,0-25.72,0H4.333a3.333,3.333,0,1,0,0,6.667h67.14a13.27,13.27,0,0,0,25.72,0h.473a3.333,3.333,0,0,0,0-6.667Zm-13.333,10A6.667,6.667,0,1,1,91,48.664,6.667,6.667,0,0,1,84.333,55.331ZM97.667,78.664H63.86a13.27,13.27,0,0,0-25.72,0H4.333a3.333,3.333,0,1,0,0,6.667H38.14a13.27,13.27,0,0,0,25.72,0H97.667a3.333,3.333,0,1,0,0-6.667ZM51,88.664A6.667,6.667,0,1,1,57.667,82,6.667,6.667,0,0,1,51,88.664Z'
        transform='translate(-1 -2.001)'
      />
    </svg>
  ),
  [IconTypes.chevronDown]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='54.348'
      viewBox='0 0 100 54.348'
    >
      <g id='download-12' transform='translate(-1 -1)'>
        <path
          id='Expand_More'
          d='M91.395,55.556,50,96.409,8.615,55.551a5.092,5.092,0,0,0-7.139,0,4.946,4.946,0,0,0,0,7.049l44.957,44.378h0a5.086,5.086,0,0,0,7.134,0L98.524,62.6a4.952,4.952,0,0,0,0-7.054A5.089,5.089,0,0,0,91.395,55.556Z'
          transform='translate(1 -53.091)'
          fill='#061822'
        />
      </g>
    </svg>
  ),
  [IconTypes.file]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='85.714'
      height='100'
      viewBox='0 0 85.714 100'
    >
      <path
        id='_774c9ed17364cda46c3e61957f073b88'
        data-name='774c9ed17364cda46c3e61957f073b88'
        d='M209.92,21.205a12.984,12.984,0,0,1,2.679,4.241,12.88,12.88,0,0,1,1.116,4.911V94.643A5.335,5.335,0,0,1,208.357,100h-75A5.335,5.335,0,0,1,128,94.643V5.357a5.166,5.166,0,0,1,1.563-3.795A5.166,5.166,0,0,1,133.357,0h50a12.882,12.882,0,0,1,4.911,1.116,12.988,12.988,0,0,1,4.241,2.679ZM185.143,7.589V28.571h20.982a6.094,6.094,0,0,0-1.227-2.288L187.431,8.817A6.094,6.094,0,0,0,185.143,7.589Zm21.429,85.268V35.714H183.357A5.335,5.335,0,0,1,178,30.357V7.143H135.143V92.857ZM149.429,44.643a1.719,1.719,0,0,1,1.786-1.786H190.5a1.719,1.719,0,0,1,1.786,1.786v3.571A1.719,1.719,0,0,1,190.5,50H151.214a1.719,1.719,0,0,1-1.786-1.786Zm41.071,12.5a1.719,1.719,0,0,1,1.786,1.786V62.5a1.719,1.719,0,0,1-1.786,1.786H151.214a1.719,1.719,0,0,1-1.786-1.786V58.929a1.719,1.719,0,0,1,1.786-1.786Zm0,14.286a1.719,1.719,0,0,1,1.786,1.786v3.571a1.719,1.719,0,0,1-1.786,1.786H151.214a1.719,1.719,0,0,1-1.786-1.786V73.214a1.719,1.719,0,0,1,1.786-1.786Z'
        transform='translate(-128)'
        fill='#00a066'
      />
    </svg>
  ),
  [IconTypes.plusCircle]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='100'
      viewBox='0 0 100 100'
    >
      <path
        id='Subtraction_1'
        data-name='Subtraction 1'
        d='M50,100A50,50,0,0,1,14.645,14.645,50,50,0,1,1,85.355,85.355,49.673,49.673,0,0,1,50,100ZM31.82,45.455a4.547,4.547,0,0,0,0,9.094H45.455V68.184a4.547,4.547,0,0,0,9.094,0V54.549H68.184a4.547,4.547,0,0,0,0-9.094H54.549V31.82a4.547,4.547,0,0,0-9.094,0V45.455Z'
        fill='#00a066'
      />
    </svg>
  ),
  [IconTypes.search]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.3-4.3' />
    </svg>
  ),
  [IconTypes.menu]: (
    <svg
      id='Group_1'
      data-name='Group 1'
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='100.002'
      viewBox='0 0 100 100.002'
    >
      <circle
        id='Ellipse_1'
        data-name='Ellipse 1'
        cx='11.765'
        cy='11.765'
        r='11.765'
        fill='#061822'
      />
      <circle
        id='Ellipse_2'
        data-name='Ellipse 2'
        cx='11.765'
        cy='11.765'
        r='11.765'
        transform='translate(0 38.236)'
        fill='#061822'
      />
      <circle
        id='Ellipse_3'
        data-name='Ellipse 3'
        cx='11.765'
        cy='11.765'
        r='11.765'
        transform='translate(0 76.472)'
        fill='#061822'
      />
      <circle
        id='Ellipse_4'
        data-name='Ellipse 4'
        cx='11.765'
        cy='11.765'
        r='11.765'
        transform='translate(38.235)'
        fill='#061822'
      />
      <circle
        id='Ellipse_9'
        data-name='Ellipse 9'
        cx='11.765'
        cy='11.765'
        r='11.765'
        transform='translate(76.47)'
        fill='#061822'
      />
      <circle
        id='Ellipse_5'
        data-name='Ellipse 5'
        cx='11.765'
        cy='11.765'
        r='11.765'
        transform='translate(38.235 38.236)'
        fill='#061822'
      />
      <circle
        id='Ellipse_8'
        data-name='Ellipse 8'
        cx='11.765'
        cy='11.765'
        r='11.765'
        transform='translate(76.47 38.236)'
        fill='#061822'
      />
      <circle
        id='Ellipse_6'
        data-name='Ellipse 6'
        cx='11.765'
        cy='11.765'
        r='11.765'
        transform='translate(38.235 76.472)'
        fill='#061822'
      />
      <circle
        id='Ellipse_7'
        data-name='Ellipse 7'
        cx='11.765'
        cy='11.765'
        r='11.765'
        transform='translate(76.47 76.472)'
        fill='#061822'
      />
    </svg>
  ),
  [IconTypes.statistics]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='100'
      viewBox='0 0 100 100'
    >
      <g id='chart' transform='translate(0.012 0.002)'>
        <g
          id='Line_550'
          data-name='Line 550'
          transform='translate(24.451 37.28)'
        >
          <path
            id='Path_5656'
            data-name='Path 5656'
            d='M7.76,45.171a4.538,4.538,0,0,1-4.537-4.536V9.465a4.537,4.537,0,1,1,9.075,0v31.17A4.533,4.533,0,0,1,7.76,45.171Z'
            transform='translate(-3.223 -4.921)'
          />
        </g>
        <g
          id='Line_551'
          data-name='Line 551'
          transform='translate(45.625 22.362)'
        >
          <path
            id='Path_5657'
            data-name='Path 5657'
            d='M10.56,58.12a4.538,4.538,0,0,1-4.537-4.536V7.495a4.537,4.537,0,1,1,9.075,0V53.584A4.533,4.533,0,0,1,10.56,58.12Z'
            transform='translate(-6.023 -2.951)'
          />
        </g>
        <g
          id='Line_552'
          data-name='Line 552'
          transform='translate(66.452 53.751)'
        >
          <path
            id='Path_5658'
            data-name='Path 5658'
            d='M13.314,30.875a4.538,4.538,0,0,1-4.537-4.536V11.64a4.537,4.537,0,1,1,9.075,0v14.7A4.538,4.538,0,0,1,13.314,30.875Z'
            transform='translate(-8.777 -7.096)'
          />
        </g>
        <g
          id='Path_5719'
          data-name='Path 5719'
          transform='translate(-0.012 -0.002)'
        >
          <path
            id='Path_5659'
            data-name='Path 5659'
            d='M27.823,99.992c-.734,0-1.528-.038-2.322-.106a27.911,27.911,0,0,1-25.41-30.2L.077,29.934a22.414,22.414,0,0,1-.068-2.969A27.945,27.945,0,0,1,28.9.014H71.164A26.967,26.967,0,0,1,74.476.1a27.9,27.9,0,0,1,25.4,30.2l.015,39.75a22.015,22.015,0,0,1,.076,3.029,27.752,27.752,0,0,1-8.886,19.432,27.2,27.2,0,0,1-20,7.452H28.731Q28.3,99.992,27.823,99.992Zm.189-90.906A18.823,18.823,0,0,0,9.137,29.541l.015,40.531A19.068,19.068,0,0,0,13.493,84.2a18.676,18.676,0,0,0,12.788,6.634,17.575,17.575,0,0,0,2.276.053h42.69a19.007,19.007,0,0,0,13.665-5.028A18.762,18.762,0,0,0,90.9,72.744a17.782,17.782,0,0,0-.061-2.295l-.015-40.531a19.058,19.058,0,0,0-4.341-14.131A18.706,18.706,0,0,0,73.7,9.154,15.207,15.207,0,0,0,71.428,9.1h-42.7C28.489,9.094,28.254,9.086,28.012,9.086Z'
            transform='translate(0.012 0.002)'
          />
        </g>
      </g>
    </svg>
  ),
  [IconTypes.arrowUp]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='12'
      height='12'
      viewBox='0 0 12 12'
    >
      <path
        d='M15.532,4.792l-.735.735L16.535,7.3H6.607v1.07h9.928L14.8,10.14l.735.736,3.075-3.042Z'
        transform='translate(-1.876 18.607) rotate(-90)'
        fill='#828b90'
      />
    </svg>
  ),
  [IconTypes.arrowDown]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='12'
      height='12'
      viewBox='0 0 12 12'
    >
      <path
        d='M3.075,0,0,3.042,3.075,6.084l.735-.735L2.072,3.577H12V2.507H2.072L3.811.735Z'
        transform='translate(2.958 12) rotate(-90)'
        fill='#828b90'
      />
    </svg>
  ),
  [IconTypes.stats]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
    >
      <path d='M3 3v16a2 2 0 0 0 2 2h16' />
      <path d='M18 17V9' />
      <path d='M13 17V5' />
      <path d='M8 17v-3' />
    </svg>
  ),
  [IconTypes.off]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='93'
      viewBox='0 0 100 93'
      fill='currentColor'
    >
      <path
        d='M2.624,46.215A3.124,3.124,0,0,1-.5,43.091V2.624a3.124,3.124,0,1,1,6.248,0V43.091a3.124,3.124,0,0,1-3.124,3.124Z'
        transform='translate(47.362 0.5)'
      />
      <path
        d='M89.491,146.11h0A49.981,49.981,0,0,1,62.227,54.238a3.124,3.124,0,1,1,3.408,5.237,43.733,43.733,0,1,0,47.71,0,3.124,3.124,0,0,1,3.408-5.237A49.981,49.981,0,0,1,89.491,146.11Z'
        transform='translate(-39.504 -53.732)'
      />
    </svg>
  ),
  [IconTypes.settings]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='99.98'
      viewBox='0 0 100 99.98'
      fill='currentColor'
    >
      <g transform='translate(-11.21 -11.215)'>
        <path
          d='M109.752,69.795a2.1,2.1,0,0,0,1.458-2V54.678a2.1,2.1,0,0,0-1.459-2L97.38,48.71a43.58,43.58,0,0,0-1.7-4.107L101.627,33a2.1,2.1,0,0,0-.383-2.442l-9.269-9.29a2.1,2.1,0,0,0-2.442-.388L77.93,26.8a34.675,34.675,0,0,0-4.158-1.736l-3.96-12.387a2.1,2.1,0,0,0-2-1.461H54.7a2.1,2.1,0,0,0-2,1.455l-4,12.381a34.956,34.956,0,0,0-4.16,1.722L33,20.841a2.106,2.106,0,0,0-2.45.386l-9.29,9.312a2.1,2.1,0,0,0-.384,2.438L26.756,44.5a33.914,33.914,0,0,0-1.711,4.156L12.709,52.636a2.1,2.1,0,0,0-1.457,2L11.21,67.746a2.1,2.1,0,0,0,1.452,2.005l12.386,4.023a42.425,42.425,0,0,0,1.719,4.107l-5.911,11.57a2.1,2.1,0,0,0,.383,2.438l9.247,9.29a2.09,2.09,0,0,0,2.442.39l11.6-5.9a36.864,36.864,0,0,0,4.107,1.72l4.023,12.36a2.1,2.1,0,0,0,2,1.451H67.767a2.1,2.1,0,0,0,2-1.451l4.027-12.368a41.445,41.445,0,0,0,4.095-1.691l11.582,5.907a2.108,2.108,0,0,0,2.44-.384l9.268-9.248a2.1,2.1,0,0,0,.389-2.438l-5.9-11.627a35.634,35.634,0,0,0,1.709-4.117ZM91.429,78.832l5.7,11.229L90.02,97.154l-11.167-5.7a2.087,2.087,0,0,0-1.92,0,36.78,36.78,0,0,1-5.473,2.266,2.1,2.1,0,0,0-1.34,1.346l-3.879,11.917H56.179L52.3,95.075a2.1,2.1,0,0,0-1.365-1.353,33.377,33.377,0,0,1-5.44-2.278,2.105,2.105,0,0,0-1.926-.008L32.385,97.13l-7.091-7.124,5.695-11.147a2.1,2.1,0,0,0,.008-1.9,38.746,38.746,0,0,1-2.3-5.507A2.105,2.105,0,0,0,27.349,70.1l-11.93-3.875L15.45,56.17l11.916-3.84a2.106,2.106,0,0,0,1.369-1.4A29.525,29.525,0,0,1,30.97,45.5a2.1,2.1,0,0,0,.017-1.944L25.314,32.427l7.127-7.145,11.141,5.731a2.117,2.117,0,0,0,1.985-.033A29.787,29.787,0,0,1,51.018,28.7a2.1,2.1,0,0,0,1.347-1.351l3.859-11.933H66.275l3.82,11.947a2.1,2.1,0,0,0,1.375,1.365,30.11,30.11,0,0,1,5.441,2.278,2.106,2.106,0,0,0,1.962.027L90.08,25.322l7.109,7.124L91.454,43.632a2.1,2.1,0,0,0,.008,1.931,39.136,39.136,0,0,1,2.29,5.5A2.1,2.1,0,0,0,95.1,52.392l11.907,3.82V66.262L95.078,70.1a2.1,2.1,0,0,0-1.357,1.355,31.056,31.056,0,0,1-2.262,5.416A2.1,2.1,0,0,0,91.429,78.832Z'
          transform='translate(0 0)'
        />
        <path
          d='M48.13,25.657A20.028,20.028,0,1,0,65.361,48.138,20.036,20.036,0,0,0,48.13,25.657ZM61.195,47.584A15.853,15.853,0,0,1,43.395,61.2a15.826,15.826,0,1,1,4.18-31.374A15.845,15.845,0,0,1,61.195,47.584Z'
          transform='translate(15.716 15.717)'
        />
      </g>
    </svg>
  ),
  [IconTypes.attention]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='88.977'
      viewBox='0 0 100 88.977'
      fill='currentColor'
    >
      <path
        d='M11.146,28.9a2.127,2.127,0,0,1-2.127-2.127V8.359a2.127,2.127,0,1,1,4.255,0V26.772A2.127,2.127,0,0,1,11.146,28.9Z'
        transform='translate(38.864 26.926)'
      />

      <path
        d='M90.515,88.974h-81A9.492,9.492,0,0,1,1.294,74.721L41.661,4.981a1.551,1.551,0,0,1,.117-.229,9.5,9.5,0,0,1,16.45,0l40.51,69.969a9.49,9.49,0,0,1-8.222,14.253ZM45.575,6.688a1.662,1.662,0,0,1-.1.191L4.975,76.848a5.236,5.236,0,0,0,4.542,7.866h81a5.245,5.245,0,0,0,4.542-7.866L54.542,6.885a5.238,5.238,0,0,0-8.967-.2Z'
        transform='translate(-0.019 0.003)'
      />
      <circle
        cx='4.606'
        cy='4.606'
        r='4.606'
        transform='translate(45.405 65.669)'
      />
    </svg>
  ),
  [IconTypes.folder]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
    >
      <path d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z' />
      <path d='M2 10h20' />
    </svg>
  ),

  [IconTypes.votes]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
    >
      <path d='m21 16-4 4-4-4' />
      <path d='M17 20V4' />
      <path d='m3 8 4-4 4 4' />
      <path d='M7 4v16' />
    </svg>
  ),
  [IconTypes.delete]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='87.261'
      height='100'
      viewBox='0 0 87.261 100'
      fill='currentCOlor'
    >
      <path
        d='M12.3,100.3H76a5.024,5.024,0,0,0,5.1-5.1V17.5h6.369V13.039H61.983V2.848A2.843,2.843,0,0,0,60.073.3H28.225a2.74,2.74,0,0,0-2.548,2.548V13.039H.2V17.5H7.569v77.07C7.569,99.156,9.754,100.3,12.3,100.3ZM30.773,4.759H58.162v8.28H30.773ZM11.665,18.771V17.5H77.27V95.2l-.637.637H44.149c-32.484,0-32.484,0-32.484-.637C11.665,95.2,11.665,95.2,11.665,18.771Z'
        transform='translate(-0.2 -0.3)'
      />
    </svg>
  ),
  [IconTypes.logoText]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='26'
      viewBox='0 0 100 26'
    >
      <path
        d='M116.483,159.371V133.4h9.479a9.922,9.922,0,0,1,8.22,3.656,14.363,14.363,0,0,1,3,9.385,14.086,14.086,0,0,1-3,9.312,10,10,0,0,1-8.22,3.618ZM118.15,135.1v22.58h7.812a8.558,8.558,0,0,0,7.038-3.13,12.573,12.573,0,0,0,2.517-8.1,12.8,12.8,0,0,0-2.517-8.18,8.48,8.48,0,0,0-7.036-3.166Z'
        transform='translate(-92.628 -133.386)'
      />
      <path
        d='M164.562,161.5v-4.11a8.338,8.338,0,0,1-7.331,4.11,8.6,8.6,0,0,1-6.331-2.591,8.737,8.737,0,0,1-2.593-6.444,8.853,8.853,0,0,1,8.924-9,8.263,8.263,0,0,1,7.331,4.074v-3.7h1.7V161.5Zm-2.185-3.7a6.929,6.929,0,0,0,2.185-5.146,7.142,7.142,0,0,0-2.148-5.369,7.068,7.068,0,0,0-5.184-2.11,6.984,6.984,0,0,0-5.147,2.11,7.513,7.513,0,0,0,.037,10.4,6.956,6.956,0,0,0,5.11,2.112,7.184,7.184,0,0,0,5.147-1.995Z'
        transform='translate(-99.625 -135.503)'
      />
      <path
        d='M185.466,142.107v1.547h-4.035v16.074h-1.667V143.654h-3.148v-1.547h3.148v-7.094h1.667v7.094Z'
        transform='translate(-105.867 -133.728)'
      />
      <path
        d='M207.36,161.5v-4.11a8.338,8.338,0,0,1-7.331,4.11,8.607,8.607,0,0,1-6.332-2.591,8.739,8.739,0,0,1-2.592-6.444,8.852,8.852,0,0,1,8.924-9,8.263,8.263,0,0,1,7.331,4.074v-3.7h1.7l.017,17.661Zm-2.185-3.7a6.929,6.929,0,0,0,2.185-5.146,7.144,7.144,0,0,0-2.148-5.369,7.068,7.068,0,0,0-5.184-2.11,6.983,6.983,0,0,0-5.147,2.11,7.513,7.513,0,0,0,.037,10.4,6.956,6.956,0,0,0,5.11,2.112,7.186,7.186,0,0,0,5.147-1.995Z'
        transform='translate(-109.077 -135.503)'
      />
      <path
        d='M102.907,143.9a9.615,9.615,0,0,0-7.059-2.932A9.494,9.494,0,0,0,88.79,143.9a9.615,9.615,0,0,0-2.932,7.058,9.491,9.491,0,0,0,2.932,7.058,9.96,9.96,0,0,0,13.576.5,1.428,1.428,0,0,0-1-2.431,1.458,1.458,0,0,0-.887.309,6.754,6.754,0,0,1-4.59,1.7,6.9,6.9,0,0,1-5.053-2.083,7.228,7.228,0,0,1-1.774-2.854c0-.039-.038-.115-.038-.154s-.039-.115-.039-.154a6.856,6.856,0,0,1-.115-3.317h0v-.077h0a7.177,7.177,0,0,1,12.072-3.587,7.032,7.032,0,0,1,1.967,3.626H93.5a1.427,1.427,0,1,0,0,2.855h10.993a1.449,1.449,0,0,0,1.427-1.427A9.979,9.979,0,0,0,102.907,143.9Z'
        transform='translate(-85.856 -134.947)'
        fill='#ff7f00'
      />
    </svg>
  ),
  [IconTypes.eyeInvs]: (
    <svg
      stroke='currentColor'
      fill='currentColor'
      viewBox='0 0 1024 1024'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z'></path>
      <path d='M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z'></path>
    </svg>
  ),
  [IconTypes.eye]: (
    <svg
      stroke='currentColor'
      fill='currentColor'
      viewBox='0 0 1024 1024'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z'></path>
    </svg>
  ),
  [IconTypes.logo]: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='100'
      viewBox='0 0 100 100'
    >
      <path
        d='M244.6,37.172A47.837,47.837,0,0,0,209.408,22.5c-13.846,0-25.577,4.826-35.192,14.672A48.208,48.208,0,0,0,159.6,72.5c0,13.9,4.808,25.676,14.615,35.328a49.525,49.525,0,0,0,67.692,2.51,7.143,7.143,0,0,0-5-12.162,7.242,7.242,0,0,0-4.423,1.544,33.6,33.6,0,0,1-22.885,8.494A34.339,34.339,0,0,1,184.408,97.79,36.211,36.211,0,0,1,175.561,83.5c0-.193-.192-.579-.192-.772s-.192-.579-.192-.772a34.427,34.427,0,0,1-.577-16.6h0v-.386h0a34.657,34.657,0,0,1,9.808-17.954,35.652,35.652,0,0,1,50.385,0A35.206,35.206,0,0,1,244.6,65.164H197.677a7.143,7.143,0,0,0,0,14.286h54.808a7.239,7.239,0,0,0,7.115-7.143A50.03,50.03,0,0,0,244.6,37.172Z'
        transform='translate(-159.6 -22.5)'
        fill='#ff7f00'
      />
    </svg>
  )
}
