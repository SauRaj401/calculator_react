import { Space, Typography } from "antd";

import { getStringColor } from "../../utils/color-util";

import "./LibraryTags.scss";

export const LibraryTagsContainer = (props) => {
  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Typography.Title level={4}>Libraries</Typography.Title>
      <div className="libraries-container">{props.children}</div>
    </Space>
  );
};

const Library = (props) => {
  const { title, url } = props;
  return (
    <div
      className="library"
      style={{ backgroundColor: `${getStringColor(title)}` }}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </div>
  );
};

const AceEditor = () => (
  <Library
    title="AceEditor"
    url="https://github.com/securingsincity/react-ace"
  />
);
const Antd = () => <Library title="Antd" url="https://ant.design" />;

const AutoSizer = () => (
  <Library
    title="AutoSizer"
    url="https://github.com/bvaughn/react-virtualized/blob/master/docs/AutoSizer.md/"
  />
);
const AxiosLib = () => (
  <Library title="Axios" url="https://axios-http.com/docs/intro" />
);
const CASLLib = () => (
  <Library title="CASL" url="https://casl.js.org/v6/en/package/casl-react" />
);
const ChromaLib = () => (
  <Library title="Chroma" url="https://gka.github.io/chroma.js/" />
);
const CodeMirror = () => (
  <Library title="CodeMirror" url="https://codemirror.net/" />
);
const Cytoscape = () => (
  <Library title="Cytoscape" url="https://js.cytoscape.org/" />
);
const DndLib = () => (
  <Library
    title="React Dnd"
    url="https://react-dnd.github.io/react-dnd/about"
  />
);
const EmotionLib = () => <Library title="Emotion" url="https://emotion.sh/" />;
const FakerLib = () => (
  <Library title="Faker" url="https://www.npmjs.com/package/faker" />
);
const FetchLib = () => (
  <Library
    title="Fetch"
    url="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
  />
);
const FlameGraph = () => (
  <Library
    title="FlameGraph"
    url="https://github.com/bvaughn/react-flame-graph"
  />
);
const FlexLayoutLib = () => (
  <Library title="Flex Layout" url="https://github.com/caplin/FlexLayout" />
);
const GoogleRecaptchaLib = () => (
  <Library
    title="Google Recaptcha"
    url="https://www.npmjs.com/package/react-google-recaptcha"
  />
);
const GraphQLRequest = () => (
  <Library
    title="GraphQL Request"
    url="https://www.npmjs.com/package/graphql-request"
  />
);
const HueSQLEditorLib = () => (
  <Library title="Hue Editor" url="https://gethue.com/" />
);
const Jotai = () => <Library title="Jotai" url="https://jotai.org/" />;
const JsonTree = () => (
  <Library
    title="JSON Tree"
    url="https://www.npmjs.com/package/react-json-tree"
  />
);
const JsonView = () => (
  <Library
    title="JSON View"
    url="https://www.npmjs.com/package/react-json-view"
  />
);
const LazyLogLib = () => (
  <Library
    title="LazyLog"
    url="https://mozilla-frontend-infra.github.io/react-lazylog/"
  />
);
const LineToLib = () => (
  <Library title="LineTo" url="https://www.npmjs.com/package/react-lineto" />
);
const MomentJSLib = () => (
  <Library title="Moment JS" url="https://momentjs.com/" />
);
const MSWLib = () => <Library title="MSW" url="https://mswjs.io/" />;
const ReactLib = () => <Library title="React" url="https://reactjs.org/" />;
const ReactNativeMD5Lib = () => (
  <Library
    title="React Native MD5"
    url="https://www.npmjs.com/package/react-native-md5"
  />
);
const ReactRouterLib = () => (
  <Library title="React Router" url="https://reactrouter.com/" />
);
const ReactSyntaxHighlighter = () => (
  <Library
    title="ReactSyntaxHighlighter"
    url="https://github.com/react-syntax-highlighter/react-syntax-highlighter"
  />
);
const ReactPlayer = () => (
  <Library
    title="React Player"
    url="https://www.npmjs.com/package/react-player"
  />
);
const ReactQuery = () => (
  <Library title="React Query" url="https://tanstack.com/query" />
);
const ReduxLib = () => (
  <Library title="Redux" url="https://redux-toolkit.js.org/" />
);
const ReduxPersistLib = () => (
  <Library
    title="Redux Persist"
    url="https://github.com/rt2zz/redux-persist/"
  />
);
const RechartsLib = () => (
  <Library title="Recharts" url="https://recharts.org/en-US/" />
);
const SassLib = () => <Library title="Sass" url="https://sass-lang.com/" />;
const Signal = () => (
  <Library title="Signal" url="https://preactjs.com/guide/v10/signals/" />
);
const SimpleCodeEditor = () => (
  <Library
    title="SimpleCodeEditor"
    url="http://satya164.xyz/react-simple-code-editor/"
  />
);
const TextAreaAutoComplete = () => (
  <Library
    title="TextAreaAutoComplete"
    url="https://www.npmjs.com/package/@webscopeio/react-textarea-autocomplete/"
  />
);
const ThundraTraceChart = () => (
  <Library
    title="ThundraTraceChart"
    url="https://github.com/thundra-io/thundra-trace-chart"
  />
);

const Zustand = () => (
  <Library title="Zustand" url="https://zustand-demo.pmnd.rs/" />
);

export const LibraryTags = {
  AceEditor,
  Antd,
  AutoSizer,
  AxiosLib,
  CASLLib,
  ChromaLib,
  CodeMirror,
  Cytoscape,
  DndLib,
  EmotionLib,
  FakerLib,
  FetchLib,
  FlameGraph,
  FlexLayoutLib,
  GoogleRecaptchaLib,
  GraphQLRequest,
  HueSQLEditorLib,
  Jotai,
  JsonTree,
  JsonView,
  LazyLogLib,
  LineToLib,
  MomentJSLib,
  MSWLib,
  ReactLib,
  ReactNativeMD5Lib,
  ReactSyntaxHighlighter,
  ReactRouterLib,
  ReactPlayer,
  ReactQuery,
  ReduxLib,
  ReduxPersistLib,
  RechartsLib,
  SassLib,
  Signal,
  SimpleCodeEditor,
  TextAreaAutoComplete,
  ThundraTraceChart,
  Zustand,
};
