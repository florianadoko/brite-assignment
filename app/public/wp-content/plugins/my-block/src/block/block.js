import "./editor.scss";
import "./style.scss";

import React from "react";
import { SelectControl } from "@wordpress/components"; //Enables to switch the page through block settings in the editor.
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { useState, useEffect } from "@wordpress/element"; //useEffect listens to changes of the page state

const { __, _x } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { PlainText } = wp.blockEditor;

registerBlockType("cgb/block-my-block", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("CGB Block"), // Block title.
	icon: "smiley", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "common", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__("CGB Block"), __("CGB Example"), __("create-guten-block")],
	attributes: {
		label: {
			type: "string",
			default: "",
		},
		img: {
			type: "string",
			default: "",
		},
		url: {
			type: "string",
			default: "",
		},
		content: {
			type: "string",
			default: "",
		},
	},

	edit: ({ attributes, className }) => {
		let optionsLinks = [];

		cgbGlobal.pages.forEach((page) =>
			optionsLinks.push({
				value: page.ID,
				label: page.post_title,
				img: page.image,
				url: page.guid,
				content: page.post_content,
			})
		);

		const [page, setPage] = useState(optionsLinks[0]);
		const [pageId, setPageId] = useState(0);

		//listens to changes of the page state
		useEffect(() => {
			attributes.label = page.label;
			attributes.img = page.img;
			attributes.content = page.content;
			attributes.url = page.url;
		}, [page]);

		return (
			<div>
				<React.Fragment>
					<div className={className}>
						{/* nested-image-element */}
						<div class="overlay">
							<img src={page.img} />
						</div>
						<div className="card-box">
							{/* heading-element */}
							<h className="heading">{page.label}</h>
							<p className="content_intro">
								{page.content.replace(/<[^>]+>/g, "").substring(0, 188)}
							</p>
							<a href={page.url} target="_blank">
								Read more
								{/* nested-element */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									style={({ width: "22px" }, { height: "22px" })}
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</a>
						</div>
					</div>
				</React.Fragment>
				<div {...useBlockProps()}>
					<InspectorControls>
						<SelectControl
							label={_x("Choose page")}
							value={pageId}
							options={optionsLinks}
							onChange={(newPage) => {
								setPageId(newPage);
								setPage(optionsLinks.find((item) => item.value == newPage));
							}}
						/>
						<PlainText value={page.label} />
					</InspectorControls>
				</div>
			</div>
		);
	},

	save: ({ attributes }) => {
		return (
			<div>
				<div class="overlay">
					<img src={attributes.img} />
				</div>
				<div className="card-box">
					<h className="heading">{attributes.label}</h>
					<p className="content_intro">
						{attributes.content.replace(/<[^>]+>/g, "").substring(0, 200)}
					</p>
					<a href={attributes.url} target="_blank">
						Read more
						<svg
							xmlns="http://www.w3.org/2000/svg"
							style={({ width: "24px" }, { height: "24px" })}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</a>
				</div>
			</div>
		);
	},
});
