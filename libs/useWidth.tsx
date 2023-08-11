"use client"

import { useState, useEffect } from "react";
function useWidth() {
	const [width, setWidth] = useState(0);
	function handleResize() {
		setWidth(window.innerWidth);
	}
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	});
	return width;
}

export default useWidth;
