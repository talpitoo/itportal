const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    // NOTE: base URL if hosting from a subfolder
    // eleventyConfig.addGlobalData("baseUrl", "/itportal/flex-it");
    // NOTE: base URL if hosting from the root folder
    eleventyConfig.addGlobalData("baseUrl", "");

    // Copy the `img` and `css` folders to the output
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/fonts");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("css");
    // eleventyConfig.addPassthroughCopy('src/fonts') // NOTE: not used at the moment
    eleventyConfig.addPassthroughCopy('src/site.webmanifest');
    eleventyConfig.addPassthroughCopy('src/browserconfig.xml');
    eleventyConfig.addPassthroughCopy('src/robots.txt');
    // TODO/DEBUG copy the .json files with dummy data
    eleventyConfig.addPassthroughCopy({ "src/_data/brokers": "data/brokers" });

    // Ignore main.js as it's handled by esbuild
    eleventyConfig.ignores.add("src/js/main.js");

    // features collection
    eleventyConfig.addCollection("featuresCollection", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/pages/features/*.md");
    });

    // documentation collection
    eleventyConfig.addCollection("documentationCollection", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/pages/documentation/*.md");
    });

    // security collection
    eleventyConfig.addCollection("securityCollection", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/pages/security/*.md");
    });

    // Nunjucks for templating
    return {
        dir: {
            input: "src",
            output: "_site"
        },
        templateFormats: ["html", "njk", "md"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
};
