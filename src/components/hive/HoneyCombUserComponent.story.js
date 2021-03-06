import React from "react";
import { storiesOf } from "@storybook/react";
import HoneyCombUserComponent from "./HoneyCombUserComponent";

storiesOf("HoneyCombUserComponent", module).add("Happy Path", () =>
	<HoneyCombUserComponent
		user={{
			image:
				"https://news.nationalgeographic.com/content/dam/news/photos/000/755/75552.ngsversion.1422285553360.adapt.1900.1.jpg",
			display_name: "chuck",
			rank: "Egg"
		}}
	/>
);
