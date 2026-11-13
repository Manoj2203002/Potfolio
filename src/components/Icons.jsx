import {
  SiDotnet, SiAngular, SiTypescript, SiJavascript, SiPython, SiFastapi,
  SiReactivex, SiMysql, SiPostgresql, SiOracle, SiAmazonwebservices, SiGit,
  SiPostman, SiJsonwebtokens, SiClaude, SiHtml5, SiCss3,
} from 'react-icons/si';
import { FaServer, FaCode, FaDatabase, FaCloud, FaRobot, FaLayerGroup } from 'react-icons/fa6';
import { TbBrandCSharp } from 'react-icons/tb';
import { DiMsqlServer } from 'react-icons/di';

export const techIcons = {
  dotnet: { Icon: SiDotnet, label: '.NET' },
  csharp: { Icon: TbBrandCSharp, label: 'C#' },
  angular: { Icon: SiAngular, label: 'Angular' },
  typescript: { Icon: SiTypescript, label: 'TypeScript' },
  javascript: { Icon: SiJavascript, label: 'JavaScript' },
  python: { Icon: SiPython, label: 'Python' },
  fastapi: { Icon: SiFastapi, label: 'FastAPI' },
  rxjs: { Icon: SiReactivex, label: 'RxJS' },
  sqlserver: { Icon: DiMsqlServer, label: 'SQL Server' },
  mysql: { Icon: SiMysql, label: 'MySQL' },
  postgresql: { Icon: SiPostgresql, label: 'PostgreSQL' },
  oracle: { Icon: SiOracle, label: 'Oracle' },
  aws: { Icon: SiAmazonwebservices, label: 'AWS' },
  git: { Icon: SiGit, label: 'Git' },
  postman: { Icon: SiPostman, label: 'Postman' },
  jwt: { Icon: SiJsonwebtokens, label: 'JWT' },
  claude: { Icon: SiClaude, label: 'Claude Code' },
  html: { Icon: SiHtml5, label: 'HTML5' },
  css: { Icon: SiCss3, label: 'CSS3' },
};

export const groupIcons = {
  server: FaServer,
  code: FaCode,
  database: FaDatabase,
  cloud: FaCloud,
  robot: FaRobot,
  layers: FaLayerGroup,
};
