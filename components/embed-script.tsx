"use client";

import { useEffect } from "react";

export default function EmbedScript() {
    useEffect(() => {
        // Twitter
        if (!document.getElementById("twitter-wjs")) {
            const script = document.createElement("script");
            script.id = "twitter-wjs";
            script.src = "https://platform.twitter.com/widgets.js";
            script.async = true;
            document.body.appendChild(script);
        }

        // Instagram
        if (!document.getElementById("insta-embed")) {
            const script = document.createElement("script");
            script.id = "insta-embed";
            script.src = "https://www.instagram.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return null;
}
