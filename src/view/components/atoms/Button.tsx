// ボタン

type Props = {
	onClick: (event: any) => void;
	children: node;
};

const Button = ({ onClick, children }: Props) => {
	return <button>{children}</button>;
};

export default Button;
