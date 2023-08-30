import "reflect-metadata";

import { Container } from "inversify";

import {
  Client,
} from "../interfaces";

import {
  SignifyClient
} from "../entities";

import SERVICE_IDENTIFIER from "../constants/identifiers";
import TAG from "../constants/tags";

let container = new Container();

container.bind<Client>(SERVICE_IDENTIFIER.CLIENT).to(SignifyClient).whenTargetNamed(TAG.SINGLESIG);

export default container;
