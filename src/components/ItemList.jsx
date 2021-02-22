import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
// import { getTodos } from "../redux/selectors";
// import { VISIBILITY_FILTERS } from "../constants";
import { getItemsByVisibilityFilter } from "../redux/selectors";


const ItemList = ({ items }) => (
  <ul className="shopping-list">
    {items && items.length
      ? items.map((item, index) => {
          return <Item key={`item-${item.id}`} item={item} />;
        })
      : ""}
  </ul>
);

// const mapStateToProps = state => {
//   const { byIds, allIds } = state.todos || {};
//   const todos =
//     allIds && state.todos.allIds.length
//       ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
//       : null;
//   return { todos };
// };

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const items = getItemsByVisibilityFilter(state, visibilityFilter);
  return { items };
  //   const allTodos = getTodos(state);
  //   return {
  //     todos:
  //       visibilityFilter === VISIBILITY_FILTERS.ALL
  //         ? allTodos
  //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
  //           ? allTodos.filter(todo => todo.completed)
  //           : allTodos.filter(todo => !todo.completed)
  //   };
};
// export default TodoList;
export default connect(mapStateToProps)(ItemList);
