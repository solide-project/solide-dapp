## Motivation 

*Note: Flock is still in early development, and hence the chatbot may not be fully capable of providing a response. The best approach is to use it by passing a method implementation along with any relevant documentation on the method. Read more for further information.*

The motivation for developing a **Smart Contract Knowledge Chat GPT** stems from the growing significance of blockchain technology and the ever evolving smart contract implementations revolutionizing various industries. With the increasing adoption of blockchain-based solutions, there arises a pressing need for accessible and comprehensive resources to educate, guide, and assist users in understanding and leveraging smart contracts effectively. By integrating the capabilities of a conversational AI powered by Flock, we aims to open access to blockchain knowledge for developer exploring protocols and chains on Solide. Whether individuals are newcomers seeking to grasp the fundamentals of smart contracts or experienced professionals navigating complex contract structures, the Smart Contract Chatbot provides a user-friendly interface for learning, interacting and contributing with smart contracts and AI.

## What are you building

![Solide-Flock](/docs/flock/images/ui.png)
*Smart Contract Chatbot using AI for a smart contract build*

The basic concept behind what Solide is building is a place where users can access up-to-date and relevant knowledge about the smart contracts they are exploring. The model is a simple question and answer chatbot with a feature for users to contribute, which can enhance the Flock model and provide incentives for users.

- **Chatbot Deployment:** Solide has deployed a Flock open knowledge model, akin to a ChatGPT interface, to provide access to blockchain-related topics. This includes complementing the information with other official documentation and resources if available.
- **Data Contribution:** Given the abundance of smart contract protocols documentation and information related to Ethereum smart contracts on Solide, users can contribute to Flock's open knowledge model by providing open-source information.
- **Reward System:** Through data contribution, developers and users can receive rewards based on the relevance and quality of their contributions to the data.
    
![Solide-Flock](/docs/flock/images/sequence-diagram.png)

### Simple Text Asking Smart Contract Chatbot

Engaging with a smart contract chatbot is as straightforward as typing out a question or inquiry. Users can interact with the chatbot by posing queries related to the explored smart contract. Whether it's seeking clarification on the functionality of a particular smart contract, users can simply type out their questions in plain language. The chatbot is designed to interpret and respond to these inquiries in a clear and concise manner, providing users with the information they need to navigate the world of smart contracts effectively. 

![Solide-Flock](/docs/flock/images/response.png)
*Note: This screenshot was zoom out to show the entire prompt/response*

### Asking Smart Contract Chatbot via IDE

Users can conveniently interact with the Smart Contract Chatbot by highlighting relevant code or information directly within the smart contracts they are working on (using Solide IDE). This innovative feature streamlines the user experience, enabling developers to seamlessly utilize their existing workflow to engage with the chatbot. By highlighting over the code, the input will be set in the Smart Contract Chatbot, where the user can effortlessly access relevant information, receive assistance, or seek clarification on specific aspects of their contracts. This integration enhances the usability of the chatbot and facilitates smoother interactions, ultimately empowering users to leverage the extensive knowledge encapsulated within the Flock-powered chatbot more effectively.

![Solide-Flock](/docs/flock/images/highlight.png)
*Code Selection from IDE*

![Solide-Flock](/docs/flock/images/highlight-prompt.png)
*Prompt provided by the Code Selection from the above image*

![Solide-Flock](/docs/flock/images/highlight-response.png)
*Response from Flock model provided by the Code Selection*


### Contribution to Model

Upon receiving a response from the Smart Contract Chatbot, users have the opportunity to provide feedback directly to the Flock models. This contribution mechanism is facilitated through a simple thumbs-up icon, allowing users to indicate that the provided response was helpful and should be incorporated into the Flock model for future interactions. By actively participating in this feedback loop, users play a vital role in enhancing the knowledge base of the model, ultimately improving its accuracy and effectiveness over time. Users are required to connect their wallet in order to contribute to Flock and potentially receive rewards for their contributions.

*Future use case: In addition to user feedback, Solide can leverage its curated collection of smart contracts on Ethereum and other blockchain networks to further enrich the Flock models. Users can highlight relevant information from Solide's documentation and insights, providing valuable data to augment the model's understanding of smart contracts and blockchain concepts. This collaborative approach ensures that the knowledge base continues to evolve, but also expanding the collective understanding of blockchain technology within the community.*

![Solide-Flock](/docs/flock/images/contribute.png)
*Using AI Co Creation from Flock to provided valuable data for Flock Models Note: This requires a user to connect their wallet*

![Solide-Flock](/docs/flock/images/contribute-success.png)
*Successfully sending of prompts/response for Co Creation*

## How you built the Application

- Solide Smart Contract AI Knowledge Chatbot
	- Flock
	- Next

Ethereum Bot ID: cls4frht2000njy824nn3c7g5
Solidity GPT Bot ID: cltqjk12m001n35zqh6v2l4jg

## Value to Flock AI

The Solide Smart Contract Hub brings value to Flock as a knowledge marketplace. It will contain and continuously add information and documentation related to protocols and smart contracts within Ethereum-based chains. The integration of Flock AI into the Chatbot aims to provide immense value and benefits to users. The simplified UI, along with the integration of Flock models, ensures a seamless and intuitive user experience. Users can interact with the chatbot in a manner similar to conversing with available information.

Additionally, by leveraging Flock AI Co-Creation, Solide enables continuous learning and improvement. Collecting user feedback and incorporating it into the model allows Flock AI to iteratively enhance its understanding of smart contracts and blockchain topics over time. This iterative learning process ensures that the chatbot remains up-to-date with the latest developments in the field, providing users with reliable and relevant information. Solide can provide such data through curated open-source documentations and resources collected from protocols and chains, and providing reward system through users to give quality information.