// place Type選択

// css取得
import style from './SearchInput.module.scss';
// コンポーネント取得
import InputRadio from 'components/atoms/InputRadio';

type Props = {
	placeType: placeType;
	setPlaceType: React.Dispatch<React.SetStateAction<placeType>>;
};

const SearchInput = ({ placeType, setPlaceType }: Props) => {
	return (
		<ul className={style.ul}>
			<li>
				<InputRadio label="カフェ" value="cafe" before={placeType} setValue={setPlaceType} />
			</li>
			<li>
				<InputRadio label="レストラン" value="restaurant" before={placeType} setValue={setPlaceType} />
			</li>
			<li>
				<InputRadio label="バー" value="bar" before={placeType} setValue={setPlaceType} />
			</li>
			<li>
				<InputRadio label="図書館" value="library" before={placeType} setValue={setPlaceType} />
			</li>
			<li>
				<InputRadio label="美術館" value="art_gallery" before={placeType} setValue={setPlaceType} />
			</li>
			<li>
				<InputRadio label="水族館" value="aquarium" before={placeType} setValue={setPlaceType} />
			</li>
			<li>
				<InputRadio label="公園" value="park" before={placeType} setValue={setPlaceType} />
			</li>
			<li>
				<InputRadio label="映画館" value="movie_theater" before={placeType} setValue={setPlaceType} />
			</li>
			<li>
				<InputRadio label="宿泊" value="lodging" before={placeType} setValue={setPlaceType} />
			</li>
		</ul>
	);
};

export default SearchInput;
