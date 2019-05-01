const OBSWebSocket = require('obs-websocket-js')

function createObsThing(connectedObsWebSocket) {

    return {
        sceneState() {
            const data = await connectedObsWebSocket
                .send('sceneState')
            return data
            {
                data.scenes.map(({ name }) => ({name} ))
            }
        }
    }
}

describe('createObsThing', () => {
    test('sceneState', async () => {
        // const obs = new OBSWebSocket()
        // await obs.connect({
        //     address: 'localhost:4444',
        //     password: 'secret'
        // })
        const connectedOBSWebSocketMock = {
            send: commandName => {
                expect(commandName).toBe('sceneState')
                return {
                    'current-scene': 'sceneB',
                    'message-id': 2,
                    scenes:
                        [
                            { name: 'sceneA', sources: [ ]},
                            { name: 'sceneB', sources: [ ]}
                        ]
                }
            }
        }
        const thing = createObsThing(connectedOBSWebSocketMock)
        const sceneState = await thing.setSceneList()

        expect(sceneState[1].name).toBe('sceneB')
        expect(sceneState['message-id']).toBeUndefined()
        scenes
    })
})

// {
//     'current-scene': 'snormal',
//         'message-id': 2,
//             scenes:
//     [
//         { name: 'vscode', sources: [Object] },
//         { name: 'Screen', sources: [Object] },
//         { name: 'Scene 2', sources: [] },
//         { name: 'snormal', sources: [Object] }
//     ]
//     status: 'ok',
//         currentScene: 'snormal',
//             messageId: '2'
// }