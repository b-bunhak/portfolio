// Think I should have just used a gif 😅

import React from 'react';

import { Box } from '@mui/material';

export default function CodingAnimation(props) {
	return (
		<Box
			component="svg"
			className="faux code"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="520"
			height="300"
			viewBox="0 0 520 300"
			{...props}
			sx={{
				'& .background': {
					fill: (theme) => theme.palette.background.default,
				},
				'& .lineClip': {
					transformOrigin: 'left',
					transformBox: 'fill-box',
				},

				// space here is important
				'& ': (theme) => {
					const darkMode = theme.palette.mode === 'dark';
					return {
						'.line-type-1': {
							stroke: darkMode ? '#d1d5da' : '#24292e',
						},
						'.line-type-2': {
							stroke: darkMode ? '#f97583' : '#d73a49',
						},
						'.line-type-3': {
							stroke: darkMode ? '#ffab70' : '#032f62',
						},
						'.line-type-4': {
							stroke: darkMode ? '#b392f0' : '#6f42c1',
						},
						'.line-type-5': {
							stroke: darkMode ? '#959da5' : '#6a737d',
						},
						'.line-type-6': {
							stroke: darkMode ? '#79b8ff' : '#005cc5',
						},
						'line-numbers': {
							stroke: darkMode ? '#959da5' : '#444d56',
						},
					};
				},
			}}
		>
			<defs>
				<clipPath id="lineClip1">
					<rect
						className="lineClip"
						x="25"
						y="47.5"
						width="135"
						height="6"
						transform="scale(0, 1)"
					>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 0"
							to="0 0"
							dur="0.5s"
							fill="freeze"
							begin="scrollAnimation.end"
							id="lineAnimationReset"
						/>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 1"
							to="1 1"
							dur="2s"
							fill="freeze"
							id="lineAnimation1"
							begin="0s;lineAnimationReset.end"
						/>
					</rect>
				</clipPath>
				<clipPath id="lineClip2">
					<rect
						className="lineClip"
						x="25"
						y="57.5"
						width="190"
						height="18"
						transform="scale(0, 1)"
					>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 1"
							to="1 1"
							dur="2s"
							fill="freeze"
							id="lineAnimation2"
							begin="lineAnimation1.end"
						/>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 0"
							to="0 0"
							dur="0.5s"
							fill="freeze"
							begin="scrollAnimation.end"
						/>
					</rect>
				</clipPath>
				<clipPath id="lineClip3">
					<rect
						className="lineClip"
						x="25"
						y="77.5"
						width="380"
						height="18"
						transform="scale(0, 1)"
					>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 1"
							to="1 1"
							dur="2s"
							fill="freeze"
							id="lineAnimation3"
							begin="lineAnimation2.end"
						/>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 0"
							to="0 0"
							dur="0.5s"
							fill="freeze"
							begin="scrollAnimation.end"
						/>
					</rect>
				</clipPath>
				<clipPath id="lineClip4">
					<rect
						className="lineClip"
						x="25"
						y="97.5"
						width="225"
						height="6"
						transform="scale(0, 1)"
					>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 1"
							to="1 1"
							dur="2s"
							fill="freeze"
							id="lineAnimation4"
							begin="lineAnimation3.end"
						/>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 0"
							to="0 0"
							dur="0.5s"
							fill="freeze"
							begin="scrollAnimation.end"
						/>
					</rect>
				</clipPath>
				<clipPath id="lineClip5">
					<rect
						className="lineClip"
						x="25"
						y="107.5"
						width="385"
						height="6"
						transform="scale(0, 1)"
					>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 1"
							to="1 1"
							dur="2s"
							fill="freeze"
							id="lineAnimation5"
							begin="lineAnimation4.end"
						/>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 0"
							to="0 0"
							dur="0.5s"
							fill="freeze"
							begin="scrollAnimation.end"
						/>
					</rect>
				</clipPath>
				<clipPath id="lineClip6">
					<rect
						className="lineClip"
						x="25"
						y="117.5"
						width="295"
						height="18"
						transform="scale(0, 1)"
					>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 1"
							to="1 1"
							dur="2s"
							fill="freeze"
							id="lineAnimation6"
							begin="lineAnimation5.end"
						/>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 0"
							to="0 0"
							dur="0.5s"
							fill="freeze"
							begin="scrollAnimation.end"
						/>
					</rect>
				</clipPath>
				<clipPath id="lineClip7">
					<rect
						className="lineClip"
						x="25"
						y="137.5"
						width="290"
						height="6"
						transform="scale(0, 1)"
					>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 1"
							to="1 1"
							dur="2s"
							fill="freeze"
							id="lineAnimation7"
							begin="lineAnimation6.end"
						/>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 0"
							to="0 0"
							dur="0.5s"
							fill="freeze"
							begin="scrollAnimation.end"
						/>
					</rect>
				</clipPath>
				<clipPath id="lineClip8">
					<rect
						className="lineClip"
						x="25"
						y="147.5"
						width="285"
						height="6"
						transform="scale(0, 1)"
					>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 1"
							to="1 1"
							dur="2s"
							fill="freeze"
							id="lineAnimation8"
							begin="lineAnimation7.end"
						/>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 0"
							to="0 0"
							dur="0.5s"
							fill="freeze"
							begin="scrollAnimation.end"
						/>
					</rect>
				</clipPath>
				<clipPath id="lineClip9">
					<rect
						className="lineClip"
						x="25"
						y="157.5"
						width="125"
						height="16"
						transform="scale(0, 1)"
					>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 1"
							to="1 1"
							dur="2s"
							fill="freeze"
							id="lineAnimation9"
							begin="lineAnimation8.end"
						/>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 0"
							to="0 0"
							dur="0.5s"
							fill="freeze"
							begin="scrollAnimation.end"
						/>
					</rect>
				</clipPath>
				<clipPath id="lineClip10">
					<rect
						className="lineClip"
						x="25"
						y="177.5"
						width="150"
						height="6"
						transform="scale(0, 1)"
					>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 1"
							to="1 1"
							dur="2s"
							fill="freeze"
							id="lineAnimation10"
							begin="lineAnimation9.end"
						/>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 0"
							to="0 0"
							dur="0.5s"
							fill="freeze"
							begin="scrollAnimation.end"
						/>
					</rect>
				</clipPath>
				<clipPath id="lineClip11">
					<rect
						className="lineClip"
						x="25"
						y="187.5"
						width="170"
						height="16"
						transform="scale(0, 1)"
					>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 1"
							to="1 1"
							dur="2s"
							fill="freeze"
							id="lineAnimation11"
							begin="lineAnimation10.end"
						/>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 0"
							to="0 0"
							dur="0.5s"
							fill="freeze"
							begin="scrollAnimation.end"
						/>
					</rect>
				</clipPath>
				<clipPath id="lineClip12">
					<rect
						className="lineClip"
						x="25"
						y="207.5"
						width="235"
						height="6"
						transform="scale(0, 1)"
					>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 1"
							to="1 1"
							dur="2s"
							fill="freeze"
							id="lineAnimation12"
							begin="lineAnimation11.end"
						/>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 0"
							to="0 0"
							dur="0.5s"
							fill="freeze"
							begin="scrollAnimation.end"
						/>
					</rect>
				</clipPath>
				<clipPath id="lineClip13">
					<rect
						className="lineClip"
						x="25"
						y="217.5"
						width="40"
						height="6"
						transform="scale(0, 1)"
					>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 1"
							to="1 1"
							dur="2s"
							fill="freeze"
							id="lineAnimation13"
							begin="lineAnimation12.end"
						/>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 0"
							to="0 0"
							dur="0.5s"
							fill="freeze"
							begin="scrollAnimation.end"
						/>
					</rect>
				</clipPath>
				<clipPath id="lineClip14">
					<rect
						className="lineClip"
						x="25"
						y="227.5"
						width="125"
						height="16"
						transform="scale(0, 1)"
					>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 1"
							to="1 1"
							dur="2s"
							fill="freeze"
							id="lineAnimation14"
							begin="lineAnimation13.end"
						/>
						<animateTransform
							attributeName="transform"
							type="scale"
							from="0 0"
							to="0 0"
							dur="0.5s"
							fill="freeze"
							begin="scrollAnimation.end"
						/>
					</rect>
				</clipPath>

				<g id="line1">
					<line
						className="line-type-1"
						x1="47.5"
						y1="50"
						x2="57.5"
						y2="50"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-2"
						x1="57.5"
						y1="50"
						x2="82.5"
						y2="50"
						stroke="#f97583"
					/>
					<line
						className="line-type-3"
						x1="92.5"
						y1="50"
						x2="212.5"
						y2="50"
						stroke="#ffab70"
					/>
				</g>
				<g id="line2">
					<line
						className="line-type-2"
						x1="47.5"
						y1="70"
						x2="102.5"
						y2="70"
						stroke="#f97583"
					/>
					<line
						className="line-type-4"
						x1="107.5"
						y1="70"
						x2="162.5"
						y2="70"
						stroke="#b392f0"
					/>
					<line
						className="line-type-1"
						x1="172.5"
						y1="70"
						x2="172.5"
						y2="70"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-4"
						x1="182.5"
						y1="70"
						x2="217.5"
						y2="70"
						stroke="#b392f0"
					/>
				</g>
				<g id="line3">
					<line
						className="line-type-5"
						x1="47.5"
						y1="90"
						x2="62.5"
						y2="90"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="67.5"
						y1="90"
						x2="87.5"
						y2="90"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="97.5"
						y1="90"
						x2="102.5"
						y2="90"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="112.5"
						y1="90"
						x2="137.5"
						y2="90"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="147.5"
						y1="90"
						x2="187.5"
						y2="90"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="202.5"
						y1="90"
						x2="222.5"
						y2="90"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="232.5"
						y1="90"
						x2="237.5"
						y2="90"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="247.5"
						y1="90"
						x2="262.5"
						y2="90"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="272.5"
						y1="90"
						x2="277.5"
						y2="90"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="287.5"
						y1="90"
						x2="302.5"
						y2="90"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="312.5"
						y1="90"
						x2="312.5"
						y2="90"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="322.5"
						y1="90"
						x2="362.5"
						y2="90"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="372.5"
						y1="90"
						x2="382.5"
						y2="90"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="392.5"
						y1="90"
						x2="407.5"
						y2="90"
						stroke="#959da5"
					/>
				</g>
				<g id="line4">
					<line
						className="line-type-1"
						x1="47.5"
						y1="100"
						x2="57.5"
						y2="100"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-1"
						x1="62.5"
						y1="100"
						x2="62.5"
						y2="100"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-6"
						x1="67.5"
						y1="100"
						x2="72.5"
						y2="100"
						stroke="#79b8ff"
					/>
					<line
						className="line-type-1"
						x1="77.5"
						y1="100"
						x2="77.5"
						y2="100"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-4"
						x1="87.5"
						y1="100"
						x2="197.5"
						y2="100"
						stroke="#b392f0"
					/>
					<line
						className="line-type-4"
						x1="202.5"
						y1="100"
						x2="202.5"
						y2="100"
						stroke="#b392f0"
					/>
					<line
						className="line-type-1"
						x1="212.5"
						y1="100"
						x2="212.5"
						y2="100"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-6"
						x1="217.5"
						y1="100"
						x2="222.5"
						y2="100"
						stroke="#79b8ff"
					/>
					<line
						className="line-type-1"
						x1="227.5"
						y1="100"
						x2="227.5"
						y2="100"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-1"
						x1="237.5"
						y1="100"
						x2="247.5"
						y2="100"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-1"
						x1="252.5"
						y1="100"
						x2="252.5"
						y2="100"
						stroke="#d1d5da"
					/>
				</g>
				<g id="line5">
					<line
						className="line-type-1"
						x1="47.5"
						y1="110"
						x2="57.5"
						y2="110"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-1"
						x1="62.5"
						y1="110"
						x2="62.5"
						y2="110"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-2"
						x1="67.5"
						y1="110"
						x2="82.5"
						y2="110"
						stroke="#f97583"
					/>
					<line x1="87.5" y1="110" x2="87.5" y2="110" stroke="#d1d5da" />
					<line
						className="line-type-4"
						x1="97.5"
						y1="110"
						x2="137.5"
						y2="110"
						stroke="#b392f0"
					/>
					<line
						className="line-type-4"
						x1="142.5"
						y1="110"
						x2="142.5"
						y2="110"
						stroke="#b392f0"
					/>
					<line
						className="line-type-1"
						x1="152.5"
						y1="110"
						x2="152.5"
						y2="110"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-6"
						x1="157.5"
						y1="110"
						x2="162.5"
						y2="110"
						stroke="#79b8ff"
					/>
					<line
						className="line-type-1"
						x1="167.5"
						y1="110"
						x2="167.5"
						y2="110"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-1"
						x1="177.5"
						y1="110"
						x2="197.5"
						y2="110"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-4"
						x1="212.5"
						y1="110"
						x2="292.5"
						y2="110"
						stroke="#b392f0"
					/>
					<line
						className="line-type-4"
						x1="297.5"
						y1="110"
						x2="297.5"
						y2="110"
						stroke="#b392f0"
					/>
					<line
						className="line-type-1"
						x1="307.5"
						y1="110"
						x2="307.5"
						y2="110"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-2"
						x1="312.5"
						y1="110"
						x2="317.5"
						y2="110"
						stroke="#f97583"
					/>
					<line
						className="line-type-1"
						x1="322.5"
						y1="110"
						x2="322.5"
						y2="110"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-6"
						x1="327.5"
						y1="110"
						x2="367.5"
						y2="110"
						stroke="#79b8ff"
					/>
					<line
						className="line-type-1"
						x1="372.5"
						y1="110"
						x2="377.5"
						y2="110"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-1"
						x1="387.5"
						y1="110"
						x2="397.5"
						y2="110"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-1"
						x1="402.5"
						y1="110"
						x2="402.5"
						y2="110"
						stroke="#d1d5da"
					/>
				</g>
				<g id="line6">
					<line
						className="line-type-5"
						x1="47.5"
						y1="130"
						x2="62.5"
						y2="130"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="67.5"
						y1="130"
						x2="77.5"
						y2="130"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="87.5"
						y1="130"
						x2="97.5"
						y2="130"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="107.5"
						y1="130"
						x2="122.5"
						y2="130"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="132.5"
						y1="130"
						x2="137.5"
						y2="130"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="147.5"
						y1="130"
						x2="162.5"
						y2="130"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="172.5"
						y1="130"
						x2="182.5"
						y2="130"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="192.5"
						y1="130"
						x2="212.5"
						y2="130"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="222.5"
						y1="130"
						x2="227.5"
						y2="130"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="237.5"
						y1="130"
						x2="262.5"
						y2="130"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="272.5"
						y1="130"
						x2="312.5"
						y2="130"
						stroke="#959da5"
					/>
				</g>
				<g id="line7">
					<line
						className="line-type-5"
						x1="47.5"
						y1="140"
						x2="62.5"
						y2="140"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="67.5"
						y1="140"
						x2="97.5"
						y2="140"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="107.5"
						y1="140"
						x2="117.5"
						y2="140"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="127.5"
						y1="140"
						x2="142.5"
						y2="140"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="152.5"
						y1="140"
						x2="162.5"
						y2="140"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="172.5"
						y1="140"
						x2="177.5"
						y2="140"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="187.5"
						y1="140"
						x2="197.5"
						y2="140"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="207.5"
						y1="140"
						x2="247.5"
						y2="140"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="257.5"
						y1="140"
						x2="307.5"
						y2="140"
						stroke="#959da5"
					/>
				</g>
				<g id="line8">
					<line
						className="line-type-1"
						x1="47.5"
						y1="150"
						x2="57.5"
						y2="150"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-1"
						x1="62.5"
						y1="150"
						x2="62.5"
						y2="150"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-6"
						x1="67.5"
						y1="150"
						x2="72.5"
						y2="150"
						stroke="#79b8ff"
					/>
					<line
						className="line-type-1"
						x1="77.5"
						y1="150"
						x2="77.5"
						y2="150"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-4"
						x1="87.5"
						y1="150"
						x2="202.5"
						y2="150"
						stroke="#b392f0"
					/>
					<line
						className="line-type-4"
						x1="207.5"
						y1="150"
						x2="207.5"
						y2="150"
						stroke="#b392f0"
					/>
					<line
						className="line-type-1"
						x1="217.5"
						y1="150"
						x2="217.5"
						y2="150"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-6"
						x1="222.5"
						y1="150"
						x2="262.5"
						y2="150"
						stroke="#79b8ff"
					/>
					<line
						className="line-type-1"
						x1="267.5"
						y1="150"
						x2="267.5"
						y2="150"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-1"
						x1="277.5"
						y1="150"
						x2="297.5"
						y2="150"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-1"
						x1="302.5"
						y1="150"
						x2="302.5"
						y2="150"
						stroke="#d1d5da"
					/>
				</g>
				<g id="line9">
					<line
						className="line-type-2"
						x1="47.5"
						y1="170"
						x2="72.5"
						y2="170"
						stroke="#f97583"
					/>
					<line
						className="line-type-5"
						x1="77.5"
						y1="170"
						x2="82.5"
						y2="170"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="92.5"
						y1="170"
						x2="142.5"
						y2="170"
						stroke="#959da5"
					/>
				</g>
				<g id="line10">
					<line
						className="line-type-1"
						x1="47.5"
						y1="180"
						x2="57.5"
						y2="180"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-2"
						x1="57.5"
						y1="180"
						x2="82.5"
						y2="180"
						stroke="#f97583"
					/>
					<line
						className="line-type-3"
						x1="92.5"
						y1="180"
						x2="167.5"
						y2="180"
						stroke="#ffab70"
					/>
				</g>
				<g id="line11">
					<line
						className="line-type-2"
						x1="47.5"
						y1="200"
						x2="102.5"
						y2="200"
						stroke="#f97583"
					/>
					<line
						className="line-type-4"
						x1="107.5"
						y1="200"
						x2="162.5"
						y2="200"
						stroke="#b392f0"
					/>
					<line
						className="line-type-1"
						x1="172.5"
						y1="200"
						x2="177.5"
						y2="200"
						stroke="#d1d5da"
					/>
					<line
						className="line-type-1"
						x1="187.5"
						y1="200"
						x2="187.5"
						y2="200"
						stroke="#d1d5da"
					/>
				</g>
				<g id="line12">
					<line
						className="line-type-6"
						x1="72.5"
						y1="210"
						x2="162.5"
						y2="210"
						stroke="#79b8ff"
					/>
					<line
						className="line-type-1"
						x1="172.5"
						y1="210"
						x2="252.5"
						y2="210"
						stroke="#d1d5da"
					/>
				</g>
				<g id="line13">
					<line
						className="line-type-1"
						x1="47.5"
						y1="220"
						x2="57.5"
						y2="220"
						stroke="#d1d5da"
					/>
				</g>
				<g id="line14">
					<line
						className="line-type-2"
						x1="47.5"
						y1="240"
						x2="72.5"
						y2="240"
						stroke="#f97583"
					/>
					<line
						className="line-type-5"
						x1="77.5"
						y1="240"
						x2="82.5"
						y2="240"
						stroke="#959da5"
					/>
					<line
						className="line-type-5"
						x1="92.5"
						y1="240"
						x2="142.5"
						y2="240"
						stroke="#959da5"
					/>
				</g>

				<line id="lineNumber1" x1="32.5" y1="50" x2="32.5" y2="50" />
				<line id="lineNumber2" x1="32.5" y1="60" x2="32.5" y2="60" />
				<line id="lineNumber3" x1="32.5" y1="70" x2="32.5" y2="70" />
				<line id="lineNumber4" x1="32.5" y1="80" x2="32.5" y2="80" />
				<line id="lineNumber5" x1="32.5" y1="90" x2="32.5" y2="90" />
				<line id="lineNumber6" x1="32.5" y1="100" x2="32.5" y2="100" />
				<line id="lineNumber7" x1="32.5" y1="110" x2="32.5" y2="110" />
				<line id="lineNumber8" x1="32.5" y1="120" x2="32.5" y2="120" />
				<line id="lineNumber9" x1="32.5" y1="130" x2="32.5" y2="130" />
				<line id="lineNumber10" x1="32.5" y1="140" x2="27.5" y2="140" />
				<line id="lineNumber11" x1="32.5" y1="150" x2="27.5" y2="150" />
				<line id="lineNumber12" x1="32.5" y1="160" x2="27.5" y2="160" />
				<line id="lineNumber13" x1="32.5" y1="170" x2="27.5" y2="170" />
				<line id="lineNumber14" x1="32.5" y1="180" x2="27.5" y2="180" />
				<line id="lineNumber15" x1="32.5" y1="190" x2="27.5" y2="190" />
				<line id="lineNumber16" x1="32.5" y1="200" x2="27.5" y2="200" />
				<line id="lineNumber17" x1="32.5" y1="210" x2="27.5" y2="210" />
				<line id="lineNumber18" x1="32.5" y1="220" x2="27.5" y2="220" />
				<line id="lineNumber19" x1="32.5" y1="230" x2="27.5" y2="230" />
				<line id="lineNumber20" x1="32.5" y1="240" x2="27.5" y2="240" />
				<line id="lineNumber21" x1="32.5" y1="250" x2="27.5" y2="250" />
			</defs>
			{/* <rect
				className="background"
				x="0"
				y="0"
				width="520"
				height="2140"
				//fill="#24292e"
			/> */}
			<g>
				<g className="code block" strokeLinecap="square" strokeWidth="5">
					<use clipPath="url(#lineClip1)" href="#line1" />
					<use clipPath="url(#lineClip2)" href="#line2" />
					<use clipPath="url(#lineClip3)" href="#line3" />
					<use clipPath="url(#lineClip4)" href="#line4" />
					<use clipPath="url(#lineClip5)" href="#line5" />
					<use clipPath="url(#lineClip6)" href="#line6" />
					<use clipPath="url(#lineClip7)" href="#line7" />
					<use clipPath="url(#lineClip8)" href="#line8" />
					<use clipPath="url(#lineClip9)" href="#line9" />
					<use clipPath="url(#lineClip10)" href="#line10" />
					<use clipPath="url(#lineClip11)" href="#line11" />
					<use clipPath="url(#lineClip12)" href="#line12" />
					<use clipPath="url(#lineClip13)" href="#line13" />
					<use clipPath="url(#lineClip14)" href="#line14" />
				</g>

				<g
					className="line-numbers"
					stroke="#959da5"
					strokeLinecap="square"
					strokeWidth="5"
				>
					<use clipPath="url(#lineClip1)" href="#lineNumber1" />
					<use clipPath="url(#lineClip2)" href="#lineNumber2" />
					<use clipPath="url(#lineClip2)" href="#lineNumber3" />
					<use clipPath="url(#lineClip3)" href="#lineNumber4" />
					<use clipPath="url(#lineClip3)" href="#lineNumber5" />
					<use clipPath="url(#lineClip4)" href="#lineNumber6" />
					<use clipPath="url(#lineClip5)" href="#lineNumber7" />
					<use clipPath="url(#lineClip6)" href="#lineNumber8" />
					<use clipPath="url(#lineClip6)" href="#lineNumber9" />
					<use clipPath="url(#lineClip7)" href="#lineNumber10" />
					<use clipPath="url(#lineClip8)" href="#lineNumber11" />
					<use clipPath="url(#lineClip9)" href="#lineNumber12" />
					<use clipPath="url(#lineClip9)" href="#lineNumber13" />
					<use clipPath="url(#lineClip10)" href="#lineNumber14" />
					<use clipPath="url(#lineClip11)" href="#lineNumber15" />
					<use clipPath="url(#lineClip11)" href="#lineNumber16" />
					<use clipPath="url(#lineClip12)" href="#lineNumber17" />
					<use clipPath="url(#lineClip13)" href="#lineNumber18" />
					<use clipPath="url(#lineClip14)" href="#lineNumber19" />
					<use clipPath="url(#lineClip14)" href="#lineNumber20" />
				</g>
				<animateTransform
					attributeName="transform"
					type="translate"
					from="0 0"
					to="0 -300"
					dur="4s"
					id="scrollAnimation"
					begin="lineAnimation14.end"
				/>
			</g>
		</Box>
	);
}
