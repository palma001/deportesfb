export const blogConfig = [
  {
    addible: {
      propTag: 'blog_id',
      addible: true,
      component: {
        name: 'v-text-field',
        props: {
          label: 'Nombre'
        },
        directives: [
          {
            name: 'validate',
            value: {
              required: true
            }
          }
        ],
        class: {
          'purple-input': true
        }
      }
    },
    tabulated: {
      sortable: true,
      text: '#',
      value: 'blog_id'
    }
  },
  {
    addible: {
      propTag: 'title',
      addible: true,
      component: {
        name: 'v-text-field',
        props: {
          label: 'Salario'
        },
        directives: [
          {
            name: 'validate',
            value: {
              required: true
            }
          }
        ],
        class: {
          'purple-input': true
        }
      }
    },
    tabulated: {
      sortable: false,
      text: 'Titulo',
      value: 'title'
    }
  },
  {
    addible: {
      propTag: 'category_id',
      addible: true,
      component: {
        name: 'v-Autocomplete',
        props: {
          label: 'Pais',
          items: ['Venezuela', 'Colombia'],
          'return-object': true

        },
        directives: [
          {
            name: 'validate',
            value: {
              required: true
            }
          }
        ],
        class: {
          'purple-input': true
        }
      }
    },
    tabulated: {
      sortable: false,
      text: 'Categoria',
      value: 'category_id'
    }
  },
  {
    addible: {
      addible: true,
      propTag: 'description',
      component: {
        name: 'v-text-field',
        props: {
          label: 'Ciudad'
        },
        directives: [
          {
            name: 'validate',
            value: {
              required: true
            }
          }
        ],
        class: {
          'purple-input': true
        }
      }
    },
    tabulated: {
      sortable: false,
      text: 'Descripcion',
      value: 'description'
    }
  },
  {
    addible: {
      addible: true,
      propTag: 'image',
      component: {
        name: 'v-text-field',
        props: {
          label: 'Ciudad'
        },
        directives: [
          {
            name: 'validate',
            value: {
              required: true
            }
          }
        ],
        class: {
          'purple-input': true
        }
      }
    },
    tabulated: {
      sortable: false,
      text: 'image',
      value: 'image'
    }
  },
  {
    addible: {
      addible: true,
      propTag: 'created_at',
      component: {
        name: 'v-text-field',
        props: {
          label: 'Ciudad'
        },
        directives: [
          {
            name: 'validate',
            value: {
              required: true
            }
          }
        ],
        class: {
          'purple-input': true
        }
      }
    },
    tabulated: {
      sortable: false,
      text: 'Fecha de creación',
      value: 'created_at'
    }
  },
  {
    addible: {
      addible: true,
      propTag: 'updated_at',
      component: {
        name: 'v-text-field',
        props: {
          label: 'Ciudad'
        },
        directives: [
          {
            name: 'validate',
            value: {
              required: true
            }
          }
        ],
        class: {
          'purple-input': true
        }
      }
    },
    tabulated: {
      sortable: false,
      text: 'Fecha de modificación',
      value: 'updated_at'
    }
  }
]

export const buttonFormAdd = [
  {
    name: 'Cancelar',
    action: 'cancel',
    props: {
      color: 'error'
    }
  },
  {
    name: 'Limpiar',
    action: 'restore',
    props: {
      color: 'warning'
    },
    class: {
      'my-2': true
    }
  },
  {
    name: 'Agregar',
    action: 'add',
    props: {
      color: 'success'
    },
    class: {
      'my-2': true
    }
  }
]
