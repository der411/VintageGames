import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Définition de la structure de navigation
export type RootStackParamList = {
  Home: undefined;
  GameDetail: { gameId: string };
};

// Types pour l'écran Home
export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export type HomeScreenProps = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

// Types pour l'écran GameDetail
export type GameDetailScreenRouteProp = RouteProp<RootStackParamList, 'GameDetail'>;
export type GameDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'GameDetail'>;

export type GameDetailScreenProps = {
  route: GameDetailScreenRouteProp;
  navigation: GameDetailScreenNavigationProp;
};

// Type générique pour la navigation
export type NavigationProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};