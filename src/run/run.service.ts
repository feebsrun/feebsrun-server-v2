import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { RunDto } from './dto/run.dto';
import { Run } from './interfaces/run.interface';

@Injectable()
export class RunService {
  constructor(@Inject('RUN_MODEL') private readonly runModel: Model<Run>) {}

  async create(runDto: RunDto): Promise<Run> {
    const createdRun = new this.runModel(runDto);
    return await createdRun.save();
  }

  async findAll(): Promise<Run[]> {
    return await this.runModel.find().exec();
  }

  async find(id: string): Promise<Run> {
    return await this.runModel.findById(id).exec();
  }

  async update(id: string, runDto: RunDto): Promise<Run> {
    return await this.runModel.findByIdAndUpdate(id, runDto);
  }

  async delete(id: string): Promise<Run> {
    return await this.runModel.findByIdAndRemove(id);
  }
}