import { ConfigProvider } from 'antd';
import ru_RU from 'antd/lib/locale/ru_RU';
import 'antd/dist/reset.css';
import './styles/globals.scss';
import { Router } from './hoc/Router';
import { appTheme } from './styles/theme';

function App() {
	return (
		<ConfigProvider theme={appTheme} locale={ru_RU}>
			<Router/>
		</ConfigProvider>
	);
}

export default App;
