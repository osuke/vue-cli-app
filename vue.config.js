
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = process.env.VUE_APP_TITLE ? process.env.VUE_APP_TITLE : ''
        return args
      })
      .plugin
  },
  devServer: {
    port: 8080,
    before: (app, server) => {
      const items = [
        {
          id: 30,
          title: "titletitletitletitle30",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 29,
          title: "titletitletitletitle29",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 28,
          title: "titletitletitletitl28",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 27,
          title: "titletitletitletitle27",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 26,
          title: "titletitletitletitle26",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 25,
          title: "titletitletitletitle25",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 24,
          title: "titletitletitletitle24",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 23,
          title: "titletitletitletitle23",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 22,
          title: "titletitletitletitle22",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 21,
          title: "titletitletitletitle21",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 20,
          title: "titletitletitletitle20",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 19,
          title: "titletitletitletitle19",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 18,
          title: "titletitletitletitle18",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 17,
          title: "titletitletitletitle17",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 16,
          title: "titletitletitletitle16",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 15,
          title: "titletitletitletitle15",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 14,
          title: "titletitletitletitle14",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 13,
          title: "titletitletitletitle13",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 12,
          title: "titletitletitletitle12",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 11,
          title: "titletitletitletitle11",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 10,
          title: "titletitletitletitle10",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 9,
          title: "titletitletitletitle09",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 8,
          title: "titletitletitletitle08",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 7,
          title: "titletitletitletitle07",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 6,
          title: "titletitletitletitle06",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 5,
          title: "titletitletitletitle05",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 4,
          title: "titletitletitletitle04",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 3,
          title: "titletitletitletitle03",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 2,
          title: "titletitletitletitle02",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        },
        {
          id: 1,
          title: "titletitletitletitle01",
          url: "http://hogehoge.com/hogehoge",
          description: "descriptiondescriptiondescriptiondescription",
          date: "2019-03-06",
          created_at: "2019-03-05T15:26:54.161Z",
          updated_at: "2019-03-05T15:26:54.161Z",
          name: "site_name"
        }
      ];

      // API response of article list
      app.get('/api/posts', (req, res) => {
        const perPage = 10;
        const offset = parseInt(req.query.offset);
        res.json({
          total: items.length,
          offset: offset,
          items: items.slice(offset, offset + perPage)
        });
      });

      // API response of article 
      app.get('/api/posts/:id', (req, res) => {
        let item;

        items.map(data => {
          if (data.id === parseInt(req.params.id)) {
            item = data;
          }
        });

        if (typeof item !== 'undefined') {
          res.json(item);
        } else {
          res.status(404).send();
        }
      });
    }
  },
}