import {iconFire, iconComment, iconHeart} from '../../assets/images';
import {boardTypes} from '../../assets/Strings';

import styles from '../../styles/components/main/PopularArticleList.module.css';

export default function PopularArticleList({data}) {
  return (
    <div className={styles.container}>
      <img className={styles.imgFire} src={iconFire} alt="" />
      <span className={styles.textTitle}>실시간 인기글</span>

      {data?.map((article, idx) => {
        return (
          <div key={idx} className={styles.containerArticle}>
            <span className={styles.textArticleType}>
              {boardTypes[article.article_type]}
            </span>
            <span className={styles.textArticleTitle}>
              {article.article_title}
            </span>
            <div className={styles.containerArticleInfo}>
              <img src={iconComment} alt="댓글 아이콘" />
              <span>{article.article_comment_count}</span>
              <img src={iconHeart} alt="좋아요 아이콘" />
              <span>{article.article_like_count}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
