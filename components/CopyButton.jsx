"use client";

import React, { useState } from "react";

const CopyButton = ({ text }) => {
    const [copied, setCopied] = useState(false);

    async function copyToClipboard() {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            try {
                await navigator.clipboard.writeText(text);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
                return;
            } catch (err) {
                console.error("Clipboard API failed:", err);
            }
        }

        // Fallback for unsupported browsers (older mobile Safari, etc.)
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand("copy");
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
        } catch (err) {
            alert("Failed to copy. Please copy manually.");
        }
        document.body.removeChild(textArea);
    }

    return (
        <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 relative"
        >
            {copied ? "✅ Copied!" : "Copy"}
        </button>
    );
};

export default CopyButton;
