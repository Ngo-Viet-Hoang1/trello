import { mockData } from '~/apis/mock-data'

type ColumnType = (typeof mockData.board.columns)[number]

export type IColumn = ColumnType
