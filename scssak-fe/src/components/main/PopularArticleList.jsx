import {useNavigate} from 'react-router-dom';

import {iconFire, iconComment, iconHeart} from '../../assets/images';
import {boardTypes} from '../../assets/Strings';

import styles from '../../styles/components/main/PopularArticleList.module.css';

export default function PopularArticleList({opened, data}) {
  // page 이동
  const navigate = useNavigate();

  // 게시글 상세로 이동
  const handleClickArticle = (article_id, e) => {
    e.preventDefault();
    navigate(`/board/${article_id}`);
  };

  return (
    <div className={styles.container}>
      <img className={styles.imgFire} src={iconFire} alt="" />
      <span className={opened ? styles.textTitleRed : styles.textTitleBlue}>
        {opened ? '실시간 전체 인기글' : '실시간 동기 인기글'}
      </span>

      {data?.map((article, idx) => {
        return (
          <div
            key={idx}
            className={styles.containerArticle}
            onClick={e => handleClickArticle(article.article_id, e)}>
            <div className={styles.containerArticleTitle}>
              <p className={styles.textArticleType}>
                {boardTypes[article.article_type]}
              </p>
              <p className={styles.textArticleTitle}>{article.article_title}</p>
            </div>
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
