import { DefaultButton as Style } from '../styles/style';

export const GlobalButton = ({ button }) => {
	//按钮样式 round:圆角 stiff:直角
	if (button) {
		switch (button) {
			case 'round':
				Style.round = '100px';
				break;
			case 'stiff':
				Style.round = '0px';
				break;
		}
	}
};
