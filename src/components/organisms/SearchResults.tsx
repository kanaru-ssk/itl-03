// 検索

// model取得
import { convertPlace } from 'model/PlaceModel';

// component取得
import Place from 'components/molecules/Place';

// css取得
import style from './SearchResults.module.scss';

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
