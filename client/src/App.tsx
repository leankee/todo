import { ConfigProvider } from 'antd';
import ru_RU from 'antd/lib/locale/ru_RU';
import 'antd/dist/reset.css';
import './styles/globals.scss';
import { Router } from './hoc/Router';

function App() {
	return (
		<ConfigProvider locale={ru_RU}>
			<Router/>
		</ConfigProvider>
	);
}

export default App;
