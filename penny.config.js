module.exports = {
  browsers: ['>1% in DE', 'last 5 years'],

  markdownItOptions: {
    html: true, // allow writing html (security is OK, because no user input)
    breaks: true, // line breaks = <br>
    typographer: true, // ?? good idea ??
  },

  markdownItPlugins: function(mdi) {
    return (
      mdi

        // STANDARDS
        .use(require('markdown-it-attrs'))
        .use(require('markdown-it-implicit-figures'), { figcaption: true })

        // CUSTOM
        .use(require('markdown-it-container'), 'spoiler', {
          validate: function(params) {
            return params.trim().match(/^spoiler\s+(.*)$/);
          },

          render: function(tokens, i) {
            const token = tokens[i];
            var m = token.info.trim().match(/^spoiler\s+(.*)$/);

            if (token.nesting === 1) {
              // opening tag
              return '<details><summary>' + mdi.utils.escapeHtml(m[1]) + '</summary>\n';
            } else {
              // closing tag
              return '</details>\n';
            }
          },
        })

        // CUSTOM
        .use(require('markdown-it-custom-block'), {
          example(arg) {
            return `<example-${arg}/>`;
          },
          video(url) {
            return `<video controls><source src="${url}" type="video/mp4"></video>`;
          },
        })

        // STANDARDS
        .use(require('markdown-it-footnote'))
        .use(require('markdown-it-deflist'))
        .use(require('markdown-it-emoji'))
        .use(require('markdown-it-mark'))
    );
  },
};
