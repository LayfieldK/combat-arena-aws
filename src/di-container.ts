import { Container } from '../node_modules/inversify';
import { ILogger } from "./interfaces/interfaces";
import TYPES from "./types";
import { DependencyA, DependencyB } from './dependencies';
import { Logger } from './services/logger';
import { Service } from './services/service';
import { Hello } from './Hello';

var DIContainer = new Container();
DIContainer.bind<DependencyA>(DependencyA).toSelf();
DIContainer.bind<DependencyB>(DependencyB).toSelf();
DIContainer.bind<ILogger>(TYPES.ILogger).to(Logger);
DIContainer.bind<Service>(Service).toSelf();
DIContainer.bind<Hello>(TYPES.Hello).to(Hello);

export default DIContainer;