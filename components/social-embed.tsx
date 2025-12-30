"use client"

import { useEffect } from "react";

function XEmbed({ url }) {
    useEffect(() => {
        if (window.twttr?.widgets) {
            window.twttr.widgets.load();
        }
    }, []);

    return (

        <blockquote className="twitter-tweet">
            <a href={url}></a>
        </blockquote>
    );
}

function InstagramEmbed({ url }) {
    useEffect(() => {
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }
    }, []);

    return (
        <blockquote
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
        />
    );
}

export default function SocialEmbed({ url, type }) {

    if (type === "x") return <XEmbed url={url} />;
    if (type === "instagram") return <InstagramEmbed url={url} />;

    return (
        <a
            href={url}
            target="_blank"
            className="underline text-blue-500"
        >
            Open Link
        </a>
    );
}