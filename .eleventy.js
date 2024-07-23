const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

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

    // features collection
    eleventyConfig.addCollection("featuresCollection", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/pages/features/*.md");
    });

    // documentation collection
    eleventyConfig.addCollection("documentationCollection", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/pages/documentation/*.md");
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
