import React from 'react'
import { Box } from '@mui/material'
import "../App.css";
import './Review.css';

export const Review = () => {
    return (
        <Box className="aboutsection" sx={{ margin: 10 }} id="about">
            <div className="header">
                <h1>Reviews</h1>
            </div>
            <div class="search-bar">
                <input type="text" placeholder="Search Book" />
            </div>
            <div class="book-cards">
                <div class="book-cell">
                    <div class="book-img">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg" alt="" class="book-photo"></img>
                    </div>
                    <div class="book-content">
                        <div class="book-title">BIG MAGIC</div>
                        <div class="book-author">by Elizabeth Gilbert</div>
                        <div class="book-rate">
                            <fieldset class="rating">
                                <input type="radio" id="star5" name="rating" value="5" />
                                <label class="empty" for="star5"></label>

                                <input type="radio" id="star4" name="rating" value="4" checked />
                                <label class="full" for="star4"></label>

                                <input type="radio" id="star3" name="rating" value="3" />
                                <label class="full" for="star3"></label>

                                <input type="radio" id="star2" name="rating" value="2" />
                                <label class="full" for="star2"></label>

                                <input type="radio" id="star1" name="rating" value="1" />
                                <label class="full" for="star1"></label>
                            </fieldset>
                            <span class="book-date">October 10, 2024</span>
                        </div>
                        <div class="blog-tags">
                            <ul>
                                <li>Anime</li>
                                <li>Romance</li>
                                <li>codepen</li>
                            </ul>
                        </div>
                        <div class="book-sum">Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years.</div>
                    </div>
                </div>

                <div class="book-cell">
                    <div class="book-img">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg" alt="" class="book-photo"></img>
                    </div>
                    <div class="book-content">
                        <div class="book-title">BIG MAGIC</div>
                        <div class="book-author">by Elizabeth Gilbert</div>
                        <div class="book-rate">
                            <fieldset class="rating">
                                <input type="radio" id="star5" name="rating" value="5" />
                                <label class="empty" for="star5"></label>

                                <input type="radio" id="star4" name="rating" value="4" checked />
                                <label class="full" for="star4"></label>

                                <input type="radio" id="star3" name="rating" value="3" />
                                <label class="full" for="star3"></label>

                                <input type="radio" id="star2" name="rating" value="2" />
                                <label class="full" for="star2"></label>

                                <input type="radio" id="star1" name="rating" value="1" />
                                <label class="full" for="star1"></label>
                            </fieldset>
                        </div>
                        <div class="book-sum">Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years.</div>
                    </div>
                </div>

                <div class="book-cell">
                    <div class="book-img">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg" alt="" class="book-photo"></img>
                    </div>
                    <div class="book-content">
                        <div class="book-title">BIG MAGIC</div>
                        <div class="book-author">by Elizabeth Gilbert</div>
                        <div class="book-rate">
                            <fieldset class="rating">
                                <input type="radio" id="star5" name="rating" value="5" />
                                <label class="empty" for="star5"></label>

                                <input type="radio" id="star4" name="rating" value="4" checked />
                                <label class="full" for="star4"></label>

                                <input type="radio" id="star3" name="rating" value="3" />
                                <label class="full" for="star3"></label>

                                <input type="radio" id="star2" name="rating" value="2" />
                                <label class="full" for="star2"></label>

                                <input type="radio" id="star1" name="rating" value="1" />
                                <label class="full" for="star1"></label>
                            </fieldset>
                        </div>
                        <div class="book-sum">Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years.</div>
                    </div>
                </div>
            </div>
        </Box >
    )
}
