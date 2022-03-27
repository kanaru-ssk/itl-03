// 検索

// css取得
import style from './SearchResults.module.scss';

// model取得
import { convertPlace } from 'model/PlaceModel';

// コンポーネント取得
import Place from 'components/molecules/Place';

type Props = {
	placeResults: google.maps.places.PlaceResult[];
};

const SearchResults = ({ placeResults }: Props) => {
	return (
		<ul className={style.container}>
			{placeResults.map((place, key) => {
				return (
					<li key={key} className={style.item}>
						<Place place={convertPlace(place)} />
					</li>
				);
			})}
		</ul>
	);
};

export default SearchResults;
