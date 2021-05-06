import {CityHistory} from "../../entities/history"

export abstract class HistoryRepository{
    abstract getAll(): Promise<CityHistory[]>
}