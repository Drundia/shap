/*
 * Copyright © 2017-2018, Andriy Svyetlichnyy. All rights reserved.
 */
;
const shap = {
	processTree(root) {
		"use strict";
		let namePrefixes = [];

		function processElement(e) {
			let isNP = false;
			let listR = [];
			let listA = [];
			e.classList.forEach(function(e) {
				let m1 = e.match(/\%/);
				let m2 = e.match(/\#(.*)/);
				if (m1 || m2) listR.push(e);
				if (m1) {
					listA.push(e = e.replace("%", namePrefixes[namePrefixes.length-1]));
					if (m2) m2 = e.match(/\#(.*)/);
				}
				if (m2) {
					listA.push(m2[1]);
					namePrefixes.push(m2[1]);
					isNP = true;
				}
			});
			listR.forEach(i => e.classList.remove(i));
			listA.forEach(i => e.classList.add(i));
			
			for (let i=0, l=e.children.length, c=e.children; i<l; i++) processElement(c[i]);
			
			if (isNP) namePrefixes.length--;
		}

		processElement(root);
	}
}