import "./style_tag.css";

function Tag({ tags }) {
  return (
      <ul className="tag-container">
        {tags.map((tag) => (
          <li key={tag} className="tag-item">
            {tag}
          </li>
        ))}
      </ul>
  );
}

export default Tag;
