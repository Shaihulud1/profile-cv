# Описание

GraphQL API с информацией о профиле


## Использование

перейти на %url_name%/graphql

запустить 

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
      url
    }
  }
}
```