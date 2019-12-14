import { Container } from '../node_modules/inversify';
import { ILogger } from "./interfaces/interfaces";
import TYPES from "./types";
import { DependencyA, DependencyB } from './dependencies';
import { Logger } from './services/logger';

var DIContainer = new Container();
DIContainer.bind<DependencyA>(DependencyA).toSelf();
DIContainer.bind<DependencyB>(DependencyB).toSelf();
DIContainer.bind<ILogger>(TYPES.ILogger).to(Logger);

export default DIContainer;