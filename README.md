# Описание

GraphQL API с информацией о профиле


## Проверка:

перейти на [https://profile-cv-corw.onrender.com/graphql](https://profile-cv-corw.onrender.com/graphql)

выполнить запрос:  

```
query {
  profile {
    id
    name
    description
    linkedin
    skills {
      id
      name
    }
    experience {
      company
      position
      startDate
      endDate
      achievements
    }
    projects {
      id
      name
    }
  }
}
```
