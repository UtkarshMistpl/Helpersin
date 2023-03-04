import SearchBar from "./searchBar";
import { useEffect, useState } from "react";
import { filterData } from "../../utils/utils";
import { COLOR_WHITE } from "../../constant/constant";

const data = [
	"Paris",
	"London",
	"New York",
	"Tokyo",
	"Berlin",
	"Buenos Aires",
	"Cairo",
	"Canberra",
	"Rio de Janeiro",
	"Dublin",
];

export default function PlaceSearch(props) {
	const [searchQuery, setSearchQuery] = useState("");
	const dataFiltered = filterData(searchQuery, data);
	console.log("serach result", searchQuery);
	return (
		<div
			style={{
				display: "flex",
				alignSelf: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			{searchQuery ? (
				<div style={{ padding: 3 }}>
					{dataFiltered.map((d, key) => (
						<div
							key={key}
							className="text"
							style={{
								padding: 5,
								justifyContent: "normal",
								fontSize: 20,
								color: "black",
								margin: 1,
								width: "250px",
								BorderColor: "green",
								borderWidth: "10px",
								backgroundColor: COLOR_WHITE,
							}}
						>
							{d}
						</div>
					))}
				</div>
			) : null}
		</div>
	);
}
