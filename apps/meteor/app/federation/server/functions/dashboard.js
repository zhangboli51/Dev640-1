import { Meteor } from 'meteor/meteor';
import { FederationServers } from '@rocket.chat/models';

import { FederationRoomEvents, Users } from '../../../models/server';

export async function getStatistics() {
	const numberOfEvents = FederationRoomEvents.find().count();
	const numberOfFederatedUsers = Users.findRemote().count();
	const numberOfServers = await FederationServers.col.estimatedDocumentCount();

	return { numberOfEvents, numberOfFederatedUsers, numberOfServers };
}

export async function federationGetOverviewData() {
	if (!Meteor.userId()) {
		throw new Meteor.Error('not-authorized');
	}

	const { numberOfEvents, numberOfFederatedUsers, numberOfServers } = await getStatistics();

	return {
		data: [
			{
				title: 'Number_of_events',
				value: numberOfEvents,
			},
			{
				title: 'Number_of_federated_users',
				value: numberOfFederatedUsers,
			},
			{
				title: 'Number_of_federated_servers',
				value: numberOfServers,
			},
		],
	};
}

export async function federationGetServers() {
	if (!Meteor.userId()) {
		throw new Meteor.Error('not-authorized');
	}

	const servers = await FederationServers.find().toArray();

	return {
		data: servers,
	};
}
