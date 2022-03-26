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
				<InputRadio value="cafe" before={placeType} setValue={setPlaceType} />
			</li>
			<li>
				<InputRadio value="restaurant" before={placeType} setValue={setPlaceType} />
			</li>
			<li>
				<InputRadio value="bar" before={placeType} setValue={setPlaceType} />
			</li>
			<li>
				<InputRadio value="library" before={placeType} setValue={setPlaceType} />
			</li>
			<li>
				<InputRadio value="art_gallery" before={placeType} setValue={setPlaceType} />
			</li>
			<li>
				<InputRadio value="aquarium" before={placeType} setValue={setPlaceType} />
			</li>
			<li>
				<InputRadio value="park" before={placeType} setValue={setPlaceType} />
			</li>
			<li>
				<InputRadio value="movie_theater" before={placeType} setValue={setPlaceType} />
			</li>
			<li>
				<InputRadio value="lodging" before={placeType} setValue={setPlaceType} />
			</li>
		</ul>
	);
};

export default SearchInput;
