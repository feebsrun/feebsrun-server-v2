import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { RunDto } from './dto/run.dto';
import { RunService } from './run.service';
import { Run } from './interfaces/run.interface';

@Controller('run')
export class RunController {
  constructor(private readonly runService: RunService) { }

  @Post()
  async create(@Body() runDto: RunDto): Promise<Run> {
    return this.runService.create(runDto);
  }

  @Get()
  async findAll(): Promise<Run[]> {
    return this.runService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<Run> {
    return this.runService.find(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() runDto: RunDto): Promise<Run> {
    return this.runService.update(id, runDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Run> {
    return this.runService.delete(id);
  }
}