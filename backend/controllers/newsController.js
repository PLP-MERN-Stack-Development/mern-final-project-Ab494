import axios from 'axios';

// Get women's empowerment news from NewsAPI
export const getNews = async (req, res) => {
  try {
    const apiKey = process.env.NEWS_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        success: false,
        message: 'News API key not configured'
      });
    }

    // Query for women's empowerment related news
    const query = 'women empowerment OR gender equality OR women rights OR female leadership';
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&language=en&pageSize=10&apiKey=${apiKey}`;

    const response = await axios.get(url, {
      timeout: 10000 // 10 second timeout
    });

    if (response.data.status !== 'ok') {
      return res.status(400).json({
        success: false,
        message: 'Failed to fetch news from NewsAPI'
      });
    }

    // Filter and format the articles
    const articles = response.data.articles.map(article => ({
      title: article.title,
      description: article.description,
      url: article.url,
      urlToImage: article.urlToImage,
      publishedAt: article.publishedAt,
      source: article.source.name,
      author: article.author
    }));

    res.status(200).json({
      success: true,
      articles: articles,
      totalResults: response.data.totalResults
    });

  } catch (error) {
    console.error('News API Error:', error.message);

    if (error.response) {
      // NewsAPI returned an error
      return res.status(error.response.status).json({
        success: false,
        message: error.response.data.message || 'News API error'
      });
    } else if (error.code === 'ECONNABORTED') {
      // Timeout
      return res.status(408).json({
        success: false,
        message: 'News API request timed out'
      });
    } else {
      // Other error
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch news'
      });
    }
  }
};