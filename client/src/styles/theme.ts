import { ThemeConfig } from 'antd/es/config-provider/context';
import variables from './variables.scss';
import { theme } from 'antd';

const { darkAlgorithm } = theme;
export const appTheme: ThemeConfig = {
	algorithm: darkAlgorithm,
	token: {
		colorPrimary: variables.primary,
		colorInfo: variables.primary,
		colorBgBase: variables.component,
		colorTextBase: variables.text,
		colorSuccess: variables.success,
		colorWarning: variables.warning,
		colorError: variables.error,
	},
};
